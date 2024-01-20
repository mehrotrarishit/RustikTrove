const modifiedProducts = [
  {
    "product_name": "OVERSIZE TRENCH COAT WITH POCKETS",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/2731/259/711/17/w/448/2731259711_1_1_1.jpg?ts=1692952040464",
    "price": "₹ 7,590.00",
    "details": "Collared trench coat made of a cotton blend. Featuring long flared sleeves. Front patch pockets. Back vent at the hem. Button-up front.",
    "id": "productw1"
  },
  {
    "product_name": "KNIT SWEATER WITH ZIP",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/5536/155/401/2/w/448/5536155401_1_1_1.jpg?ts=1693222806360",
    "price": "₹ 3,290.00",
    "details": "Sweater made of a viscose blend. Featuring a high neck with metal zip, long sleeves and matching ribbed trims.",
    "id": "productw2"
  },
  {
    "product_name": "ZW MARINE STRAIGHT FIT HIGH-WAIST POCKET JEANS",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/9632/250/407/2/w/448/9632250407_1_1_1.jpg?ts=1691403206118",
    "price": "₹ 3,290.00",
    "details": "Slim Fit - Relaxed Leg - High WaistZW ZARA WOMAN JEANSHigh-waist jeans with belt loops. Patch pockets on the front and back. Contrast visible topstitching detail. Seamless hems. Front zip fly and button fastening.View more",
    "id": "productw3"
  },
  {
    "product_name": "CROSSBODY BAG",
    "image_url": "https://static.zara.net/photos///2023/I/1/1/p/6006/210/800/2/w/448/6006210800_1_1_1.jpg?ts=1692877244799",
    "price": "₹ 2,890.00",
    "details": "Crossbody bag with adjustable strap. Lining. Zip closure.Height x Length x Width 17 x 30 x 11 cm. / 6.6 x 11.8 x 4.3″",
    "id": "productw4"
  },
  {
    "product_name": "ZW MARINE STRAIGHT-LEG HIGH-WAIST JEANS",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/8307/240/407/2/w/448/8307240407_1_1_1.jpg?ts=1692952113181",
    "price": "₹ 3,290.00",
    "details": "Slim Fit - Relaxed Leg - High WaistZW ZARA WOMAN JEANSHigh-waist jeans with back patch pockets. Seamless hems. Front zip fly and top button fastening.View more",
    "id": "productw5"
  },
  {
    "product_name": "STRIPED COTTON T-SHIRT",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/0264/479/104/2/w/448/0264479104_1_1_1.jpg?ts=1692961337737",
    "price": "₹ 1,990.00",
    "details": "LOOSE FIT - BOAT NECK - NORMAL LENGTH - LONG SLEEVEST-shirt made of a cotton blend. Boat neck and long sleeves.",
    "id": "productw6"
  },
  {
    "product_name": "CASHMERE KNIT SWEATER",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/6771/126/200/2/w/448/6771126200_1_1_1.jpg?ts=1692790315045",
    "price": "₹ 11,990.00",
    "details": "Sweater made of a cashmere and wool blend. Round neck and long sleeves. Matching ribbed trims.",
    "id": "productw7"
  },
  {
    "product_name": "WOOL BLEND BOXY-FIT KNIT SWEATER",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/3039/102/527/17/w/448/3039102527_1_1_1.jpg?ts=1692892870664",
    "price": "₹ 3,990.00",
    "details": "Knit sweater made of a wool blend. Round neck and long sleeves. Matching ribbed trims.",
    "id": "productw8"
  },
  {
    "product_name": "CROPPED KNIT SWEATER",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/5536/125/809/2/w/448/5536125809_1_1_1.jpg?ts=1693222633500",
    "price": "₹ 2,990.00",
    "details": "Cropped sweater with a round neck and long sleeves. Matching ribbed trims.",
    "id": "productw9"
  },
  {
    "product_name": "OPEN KNIT POLO SWEATER",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/6427/117/712/2/w/448/6427117712_1_1_1.jpg?ts=1692869351811",
    "price": "₹ 2,990.00",
    "details": "Polo sweater with a Johnny collar and long sleeves. Ribbed trims.",
    "id": "productw10"
  },
  {
    "product_name": "BASIC KNIT SWEATER",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/1509/115/108/17/w/448/1509115108_1_1_1.jpg?ts=1692352262228",
    "price": "₹ 990.00",
    "details": "Round neck sweater featuring long sleeves, side vents at the hem and ribbed trims.",
    "id": "productw11"
  },
  {
    "product_name": "WATER AND WIND PROTECTION RUBBERISED RAINCOAT",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/6318/023/712/17/w/448/6318023712_1_1_1.jpg?ts=1692286317660",
    "price": "₹ 5,990.00",
    "details": "Raincoat featuring a high collar with hood and drawstrings. Long sleeves with adjustable snap-button cuffs. Front flap pockets. Side vents at the hem. Zip-up front with hidden snap buttons.",
    "id": "productw12"
  },
  {
    "product_name": "BASIC STRIPED JACKET",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/0506/109/105/17/w/448/0506109105_1_1_1.jpg?ts=1690990295933",
    "price": "₹ 2,990.00",
    "details": "Round neck jacket featuring long sleeves with an opening on the cuffs. Front fastening with faux pearl buttons.",
    "id": "productw13"
  },
  {
    "product_name": "BELTED CHINO TROUSERS",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/8173/398/401/12/w/448/8173398401_1_1_1.jpg?ts=1692274754279",
    "price": "₹ 3,290.00",
    "details": "High-waist trousers with front darts. Front pockets and buttoned false welt pockets at the back. Front zip fly and button fastening. Embossed belt detail.",
    "id": "productw14"
  },
  {
    "product_name": "TOTE WITH INTERIOR BAG",
    "image_url": "https://static.zara.net/photos///2023/I/1/1/p/6040/210/709/2/w/448/6040210709_1_1_1.jpg?ts=1691591568333",
    "price": "₹ 3,290.00",
    "details": "Tote bag. Shoulder straps. Inner bag with gathered drawstring fastening.Height x Length x Width 22 x 36 x 14 cm. / 8.6 x 14.1 x 5.5″",
    "id": "productw15"
  },
  {
    "product_name": "BALLET FLATS WITH BUCKLES",
    "image_url": "https://static.zara.net/photos///2023/I/1/1/p/1502/210/800/2/w/448/1502210800_1_1_1.jpg?ts=1691591567982",
    "price": "₹ 2,890.00",
    "details": "Ballet flats. Buckled straps across the instep. Round toe.Sole height: 1 cm. / 0.3″AIRFIT®. Flexible technical latex foam insole, designed to offer greater comfort.View more",
    "id": "productw16"
  },
  {
    "product_name": "CARROT FIT TROUSERS WITH DARTS DETAIL",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/1478/060/800/2/w/448/1478060800_1_1_1.jpg?ts=1692791553719",
    "price": "₹ 4,990.00",
    "details": "Mid-waist trousers made of a viscose blend. Belt loops. Side pockets and rear welt pockets. Dart details on the front. Pleated hem with contrast button. Front zip fly and button fastening.",
    "id": "productw17"
  },
  {
    "product_name": "STRIPED OVERSIZE SHIRT",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/9479/267/096/2/w/448/9479267096_1_1_1.jpg?ts=1691509296694",
    "price": "₹ 3,290.00",
    "details": "Loose-fitting shirt featuring a Johnny collar and long sleeves with cuffs. Chest patch pocket. Pleated detail on the back. Button-up front.",
    "id": "productw18"
  },
  {
    "product_name": "100% WOOL KNIT CARDIGAN",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/2893/103/809/4/w/448/2893103809_1_1_1.jpg?ts=1692271042358",
    "price": "₹ 4,990.00",
    "details": "Cardigan made of 100% wool. Round neck and long sleeves. Button-up front. Ribbed trims.",
    "id": "productw19"
  },
  {
    "product_name": "100% WOOL KNIT SWEATER",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/2893/106/809/4/w/448/2893106809_1_1_1.jpg?ts=1692271338379",
    "price": "₹ 4,990.00",
    "details": "Sweater made of 100% wool. Featuring a round neckline, long sleeves and ribbed trims.",
    "id": "productw20"
  },
  {
    "product_name": "LEATHER BELT",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/6399/204/800/2/w/448/6399204800_1_1_1.jpg?ts=1691675320062",
    "price": "₹ 2,290.00",
    "details": "Leather belt. Fastening with metal buckle and belt loop.",
    "id": "productw21"
  },
  {
    "product_name": "BASIC KNIT SWEATER",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/8851/121/800/10/w/448/8851121800_1_1_1.jpg?ts=1692271054086",
    "price": "₹ 1,890.00",
    "details": "Round neck sweater with long sleeves and decorative gold buttons. Ribbed trims.",
    "id": "productw22"
  },
  {
    "product_name": "ZW STRAIGHT-LEG MID-RISE CROPPED JEANS",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/6840/262/427/12/w/448/6840262427_1_1_1.jpg?ts=1691748354505",
    "price": "₹ 3,290.00",
    "details": "Slim Fit - Straight Leg - Mid-riseZW ZARA WOMAN JEANSMid-rise faded jeans with belt loops. Five-pocket design. Front zip fly and metal top button fastening.View more",
    "id": "productw23"
  },
  {
    "product_name": "LINEN COAT WITH VENTS - LIMITED EDITION",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/7838/023/727/3/w/448/7838023727_1_1_1.jpg?ts=1689780439915",
    "price": "₹ 10,990.00",
    "details": "Long coat made of 100% linen. Lapel collar and long sleeves. Side in-seam pockets. Front vents at the hem. Front fastening with ties in the same fabric.",
    "id": "productw24"
  },
  {
    "product_name": "OPEN BACK HALTER WAISTCOAT",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/7926/446/800/3/w/448/7926446800_1_1_1.jpg?ts=1689780805789",
    "price": "₹ 3,290.00",
    "details": "Halter waistcoat featuring a V-neck and made of a wool blend. False welt pockets on the front. Open back and adjustable strap in the same fabric with buckle. Asymmetric hem. Button-up front.",
    "id": "productw25"
  },
  {
    "product_name": "LONG SATIN SKIRT - LIMITED EDITION",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/7825/827/800/3/w/448/7825827800_1_1_1.jpg?ts=1689782343849",
    "price": "₹ 8,590.00",
    "details": "High-waist long skirt made of 100% viscose fabric. Asymmetric hem with tail. Invisible side zip fastening.",
    "id": "productw26"
  },
  {
    "product_name": "FLAT LEATHER CAGE SANDALS",
    "image_url": "https://static.zara.net/photos///2023/I/1/1/p/1511/210/800/2/w/448/1511210800_1_1_1.jpg?ts=1689674130303",
    "price": "₹ 4,990.00",
    "details": "Flat leather cage sandals. Wide straps on the front. Buckled ankle strap fastening.Sole height: 2 cm. / 0.7″AIRFIT®. Flexible technical latex foam insole, designed to offer greater comfort.View more",
    "id": "productw27"
  },
  {
    "product_name": "MAXI BOMBER JACKET WITH POCKETS",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/3736/245/800/18/w/448/3736245800_1_1_1.jpg?ts=1691565073010",
    "price": "₹ 7,590.00",
    "details": "Cropped bomber jacket with a round neck and long sleeves. Front maxi patch pockets with flaps. Lining. Matching ribbed trims. Front snap-button fastening.",
    "id": "productw28"
  },
  {
    "product_name": "LINEN BLEND WAISTCOAT",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/7839/967/800/2/w/448/7839967800_1_1_1.jpg?ts=1689335053951",
    "price": "₹ 3,290.00",
    "details": "Waistcoat made of a linen blend fabric. V-neck. False welt pockets on the front. Matching lining. Button-up front.",
    "id": "productw29"
  },
  {
    "product_name": "COTTON BLEND OXFORD SHIRT",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/8372/046/046/19/w/448/8372046046_1_1_1.jpg?ts=1692689692579",
    "price": "₹ 2,590.00",
    "details": "Shirt made of a cotton blend. Johnny collar and long sleeves. Asymmetric hem. Button-up front.",
    "id": "productw30"
  },
  {
    "product_name": "FULL LENGTH FLARE TROUSERS",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/2753/245/401/2/w/448/2753245401_1_1_1.jpg?ts=1692352292803",
    "price": "₹ 3,290.00",
    "details": "High-waist trousers with front pockets and a back false welt pockets. Flared hems. Front zip fly, interior button and metal hook fastening.",
    "id": "productw31"
  },
  {
    "product_name": "FITTED BLAZER WITH SEAMS",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/2753/345/401/2/w/448/2753345401_1_1_1.jpg?ts=1692352292134",
    "price": "₹ 5,990.00",
    "details": "Blazer with a lapel collar and long sleeves with shoulder pads. Front flap pockets. Visible seam detail on the waist. Fastens at the front with buttons.",
    "id": "productw32"
  },
  {
    "product_name": "HIGH-WAIST TROUSERS",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/7102/562/804/18/w/448/7102562804_1_1_1.jpg?ts=1692689248482",
    "price": "₹ 2,590.00",
    "details": "High-waist trousers with seam detail on the front and back. Front welt pockets. Front zip fly, inside button and metal hook fastening.",
    "id": "productw33"
  },
  {
    "product_name": "SHORT DOUBLE-BREASTED TRENCH COAT",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/7999/818/401/2/w/448/7999818401_1_1_1.jpg?ts=1693305748529",
    "price": "₹ 5,990.00",
    "details": "Short trench coat featuring a lapel collar and long sleeves with buttons. Front welt pockets. Double-breasted button fastening on the front.",
    "id": "productw34"
  },
  {
    "product_name": "RIBBED TOP",
    "image_url": "https://static.zara.net/photos///2023/V/0/1/p/7901/470/687/2/w/448/7901470687_1_1_1.jpg?ts=1684917864624",
    "price": "₹ 890.00",
    "details": "Round neck T-shirt with short sleeves.",
    "id": "productw35"
  },
  {
    "product_name": "Z1975 STRAIGHT-FIT HIGH-WAIST FULL LENGTH JEANS",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/6147/177/407/2/w/448/6147177407_6_1_1.jpg?ts=1691592012421",
    "price": "₹ 3,290.00",
    "details": "High-waist jeans with five pockets. Faded effect. Straight and extra-long leg. Front zip fly and metallic button fastening.",
    "id": "productw36"
  },
  {
    "product_name": "LEATHER MULE LOAFERS WITH BUCKLE",
    "image_url": "https://static.zara.net/photos///2023/I/1/1/p/2517/110/105/2/w/448/2517110105_1_1_1.jpg?ts=1690189294500",
    "price": "₹ 4,990.00",
    "details": "Leather flat mule loafers. Metallic buckle detail on the front. Sole height: 1 cm. / 0.3″ AIRFIT®. Flexible technical latex foam insole, designed to offer greater comfort.View more",
    "id": "productw37"
  },
  {
    "product_name": "WATER-REPELLENT PUFFER GILET WITH WIND PROTECTION",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/3046/219/706/2/w/448/3046219706_6_1_1.jpg?ts=1692947385890",
    "price": "₹ 4,990.00",
    "details": "WATER-REPELLENT - WIND PROTECTION Long puffer gilet with a high neck and an adjustable drawstring hood. Front zip pockets. Metal zip front fastening.",
    "id": "productw38"
  },
  {
    "product_name": "BLOUSE WITH JABOT FRILLS AND PEARL BEAD BUTTONS",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/7969/230/250/2/w/448/7969230250_1_1_1.jpg?ts=1692889132974",
    "price": "₹ 2,990.00",
    "details": "Collared blouse featuring long sleeves with slit cuffs. Jabot frills on the front. Button-up front hidden by a button placket and pearl bead appliqués on the collar and cuffs.",
    "id": "productw39"
  },
  {
    "product_name": "SEMI-SHEER RHINESTONE SHIRT",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/7484/162/712/2/w/448/7484162712_1_1_1.jpg?ts=1692879489420",
    "price": "₹ 3,290.00",
    "details": "Semi-sheer collared shirt with long cuffed sleeves and front fastening with rhinestone buttons.",
    "id": "productw40"
  },
  {
    "product_name": "Z1975 FLARED HIGH-WAIST JEANS",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/5862/170/406/2/w/448/5862170406_1_1_1.jpg?ts=1692892310709",
    "price": "₹ 3,290.00",
    "details": "HIGH-RISE - FLAREFaded high-rise jeans with a five-pocket design. Flared hems. Front zip fly and metal top button fastening.",
    "id": "productw41"
  },
  {
    "product_name": "LEATHER COWBOY ANKLE BOOTS",
    "image_url": "https://static.zara.net/photos///2023/I/1/1/p/3122/210/800/22/w/448/3122210800_1_1_1.jpg?ts=1693212788058",
    "price": "₹ 8,990.00",
    "details": "Leather cowboy-style ankle boots. Block heel. Side pull tabs. Pointed toe. Heel height of 5 cm. / 1.9″",
    "id": "productw42"
  },
  {
    "product_name": "PLEATED HIGH-WAIST BERMUDA SHORTS",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/2753/235/800/2/w/448/2753235800_1_1_1.jpg?ts=1691758137997",
    "price": "₹ 2,590.00",
    "details": "High-waist Bermuda shorts with front darts. Front pockets and rear false flap pocket. Front zip fly, interior button and metal hook fastening.",
    "id": "productw43"
  },
  {
    "product_name": "STRAIGHT-LEG TROUSERS WITH TURN-UP HEMS",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/2753/435/800/2/w/448/2753435800_1_1_1.jpg?ts=1691758135751",
    "price": "₹ 3,290.00",
    "details": "High-waist trousers featuring front pockets and a rear false welt pockets. Straight-leg design and turn-up hems. Front zip fly, interior button and metal hook fastening.",
    "id": "productw44"
  },
  {
    "product_name": "TAILORED WAISTCOAT",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/2753/535/800/2/w/448/2753535800_1_1_1.jpg?ts=1691758137247",
    "price": "₹ 2,990.00",
    "details": "Sleeveless waistcoat with a V-neck. Front jetted pockets on the front. Button-up front.",
    "id": "productw45"
  },
  {
    "product_name": "STRAIGHT-LEG TROUSERS WITH TURN-UP HEMS",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/1478/331/401/2/w/448/1478331401_1_1_1.jpg?ts=1691758139505",
    "price": "₹ 3,290.00",
    "details": "High-waist trousers with front pockets and false welt pockets at the back. Straight-leg design and turn-up hems. Front zip fly, inside button and metal hook fastening.",
    "id": "productw46"
  },
  {
    "product_name": "LINEN BLEND CROPPED JACKET",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/7932/400/401/2/w/448/7932400401_1_1_1.jpg?ts=1687348745097",
    "price": "₹ 3,990.00",
    "details": "Jacket made of a linen blend fabric. Lapel collar and long sleeves. Front patch pockets. Button-up front.",
    "id": "productw47"
  },
  {
    "product_name": "BASIC HIGH NECK KNIT SWEATER",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/8851/123/800/22/w/448/8851123800_1_1_1.jpg?ts=1693219160353",
    "price": "₹ 1,890.00",
    "details": "Sweater featuring a high neck, long sleeves with decorative metal buttons and ribbed trims.",
    "id": "productw48"
  },
  {
    "product_name": "FITTED V-NECK MIDI DRESS",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/2712/466/527/2/w/448/2712466527_1_1_1.jpg?ts=1690532849660",
    "price": "₹ 2,590.00",
    "details": "V-neck midi dress with short sleeves. Back slit at the hem.",
    "id": "productw49"
  },
  {
    "product_name": "METAL NECKLACE",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/1856/224/808/2/w/448/1856224808_1_1_1.jpg?ts=1689929449635",
    "price": "₹ 990.00",
    "details": "Rigid metal necklace.",
    "id": "productw50"
  },
  {
    "product_name": "PACK OF HOOP EARRINGS",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/1856/255/303/17/w/448/1856255303_1_1_1.jpg?ts=1691582964428",
    "price": "₹ 990.00",
    "details": "- Metal earrings. Click fastening. - Metal earrings with rhinestone appliqué. Click fastening. - Metal earrings with rhinestone appliqué. Push-back fastening.",
    "id": "productw51"
  },
  {
    "product_name": "KNIT WRAP CARDIGAN",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/9874/101/505/17/w/448/9874101505_1_1_1.jpg?ts=1692799925987",
    "price": "₹ 3,290.00",
    "details": "Cardigan made of a wool blend. Featuring a V-neckline, long sleeves and wrap fastening at the front with ties in the same fabric.",
    "id": "productw52"
  },
  {
    "product_name": "TEXTURED MIDI DRESS WITH BELT",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/8351/224/800/2/w/448/8351224800_1_1_1.jpg?ts=1692792858610",
    "price": "₹ 4,990.00",
    "details": "Midi dress with lapel collar and V-neck. Long sleeves with cuffs. Patch pockets on chest. Combined belt with tortoiseshell effect buckle. Inner lining. Front button fastening.",
    "id": "productw53"
  },
  {
    "product_name": "TASSEL LOAFERS",
    "image_url": "https://static.zara.net/photos///2023/I/1/1/p/2507/110/107/2/w/448/2507110107_6_1_1.jpg?ts=1690196091314",
    "price": "₹ 2,890.00",
    "details": "Flat loafers with metallic buckle detail and tassels on the front.Sole height: 1 cm. / 0.3″AIRFIT®. Flexible technical latex foam insole, designed to offer greater comfort.View more",
    "id": "productw54"
  },
  {
    "product_name": "FLOWING SATIN SHIRT",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/2197/745/307/19/w/448/2197745307_1_1_1.jpg?ts=1692689718099",
    "price": "₹ 2,290.00",
    "details": "Shirt with a johnny collar, long sleeves and a button-up front.",
    "id": "productw55"
  },
  {
    "product_name": "STRAIGHT BLAZER",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/7102/334/251/2/w/448/7102334251_1_1_1.jpg?ts=1692352293309",
    "price": "₹ 5,990.00",
    "details": "Blazer with a lapel collar. Long sleeves with shoulder pads. Front pockets with flaps. Matching lining. Button-up front.",
    "id": "productw56"
  },
  {
    "product_name": "SATIN SHIRT",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/7868/226/800/20/w/448/7868226800_1_1_1.jpg?ts=1690548190890",
    "price": "₹ 1,990.00",
    "details": "Collared shirt with a V-neckline. Long cuffed sleeves. Front button fastening.",
    "id": "productw57"
  },
  {
    "product_name": "STRAIGHT FIT TROUSERS WITH BUTTONS",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/9929/220/803/2/w/448/9929220803_1_1_1.jpg?ts=1691593335651",
    "price": "₹ 3,290.00",
    "details": "High-waist trousers with an elastic waistband at the back. Front pockets with decorative golden buttons. False welt pockets at the back. Straight-leg design.",
    "id": "productw58"
  },
  {
    "product_name": "OXFORD SHIRT",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/8372/060/403/20/w/448/8372060403_1_1_1.jpg?ts=1692689707366",
    "price": "₹ 2,590.00",
    "details": "Shirt made of a cotton blend. Johnny collar and long sleeves. Button-up front.",
    "id": "productw59"
  },
  {
    "product_name": "FLOWING TRENCH COAT",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/8073/043/706/2/w/448/8073043706_1_1_1.jpg?ts=1690970189045",
    "price": "₹ 3,990.00",
    "details": "Collared trench coat with long sleeves. Front welt pockets. Back vent. Fastens at the front with buttons.",
    "id": "productw60"
  },
  {
    "product_name": "STRIPED KNIT SWEATER",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/3433/011/066/17/w/448/3433011066_1_1_1.jpg?ts=1692352267261",
    "price": "₹ 2,290.00",
    "details": "Round neck sweater with long sleeves.",
    "id": "productw61"
  },
  {
    "product_name": "PADDED JACKET WITH POCKETS",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/4088/242/800/2/w/448/4088242800_1_1_1.jpg?ts=1691658771413",
    "price": "₹ 7,590.00",
    "details": "Padded jacket with a high neck and long sleeves, Front patch pockets. Adjustable hem with matching drawstrings. Front zip fastening.",
    "id": "productw62"
  },
  {
    "product_name": "SUIT-EFFECT JUMPSUIT",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/8462/550/704/2/w/448/8462550704_1_1_1.jpg?ts=1692793176857",
    "price": "₹ 4,990.00",
    "details": "Jumpsuit with a straight neckline and thin straps. Side pockets and fake rear welt pockets. Front fastening with buttons and zip, inside button and metal hook.",
    "id": "productw63"
  },
  {
    "product_name": "KITTEN HEEL SLINGBACK SHOES WITH CHAIN",
    "image_url": "https://static.zara.net/photos///2023/I/1/1/p/2209/210/098/2/w/448/2209210098_1_1_1.jpg?ts=1690984397423",
    "price": "₹ 3,990.00",
    "details": "Kitten heel slingback shoes. Patent-finish. Chain detail on the front. Back strap with elastic piece.Heel height of 5 cm. / 1.9″ AIRFIT®. Flexible technical latex foam insole, designed to offer greater comfort.View more",
    "id": "productw64"
  },
  {
    "product_name": "DOUBLE-BREASTED OVERSIZED BLAZER",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/2753/332/803/2/w/448/2753332803_1_1_1.jpg?ts=1692203340480",
    "price": "₹ 4,590.00",
    "details": "Loose-fitting blazer featuring a lapel collar, long sleeves with pronounced shoulders, front flap pockets and front double-breasted button fastening.",
    "id": "productw65"
  },
  {
    "product_name": "STRAIGHT BLAZER",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/2753/635/800/4/w/448/2753635800_1_1_1.jpg?ts=1692201821710",
    "price": "₹ 5,990.00",
    "details": "Blazer featuring a lapel collar with long sleeves and padded shoulders. Front flap pockets. Single button fastening on the front.",
    "id": "productw66"
  },
  {
    "product_name": "LONG BOMBER JACKET",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/9929/228/711/2/w/448/9929228711_1_1_1.jpg?ts=1692352756695",
    "price": "₹ 5,590.00",
    "details": "Long bomber jacket with a lapel collar. Long sleeves with elasticated cuffs. Front welt pockets. Matching lining. Elasticated hem. Button-up front hidden by a placket.",
    "id": "productw67"
  },
  {
    "product_name": "REGULAR FIT STRIPED SHIRT",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/2298/163/064/2/w/448/2298163064_1_1_1.jpg?ts=1692792858343",
    "price": "₹ 2,990.00",
    "details": "Shirt featuring a Johnny collar and long cuffed sleeves with pleats. Slit hem on the sides. Button-up front.",
    "id": "productw68"
  },
  {
    "product_name": "POPLIN SHIRT",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/4387/036/250/13/w/448/4387036250_2_3_1.jpg?ts=1691489979923",
    "price": "₹ 2,290.00",
    "details": "Collared V-neck shirt with long sleeves and a button-up front.",
    "id": "productw69"
  },
  {
    "product_name": "TEXTURED DOUBLE-BREASTED BLAZER",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/2753/422/401/2/w/448/2753422401_1_1_1.jpg?ts=1692202713000",
    "price": "₹ 5,990.00",
    "details": "Fitted blazer featuring a lapel collar and long sleeves with shoulder pads. Featuring front welt pockets and double-breasted front button fastening.",
    "id": "productw70"
  },
  {
    "product_name": "RHINESTONE POPLIN SHIRT",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/8741/234/250/2/w/448/8741234250_1_1_1.jpg?ts=1693318193892",
    "price": "₹ 3,290.00",
    "details": "Shirt made of cotton. Lapel collar and long cuffed sleeves. Chest patch pocket. Rhinestone appliqués. Side slits at the hem. Button-up front hidden by a snap-button placket.",
    "id": "productw71"
  },
  {
    "product_name": "BLOUSE WITH FULL SLEEVES",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/9878/177/800/12/w/448/9878177800_1_1_1.jpg?ts=1690366870143",
    "price": "₹ 2,990.00",
    "details": "Blouse featuring a round neck with drawstring. V-neck and balloon long sleeves with elastic trim.This garment is not lined.",
    "id": "productw72"
  },
  {
    "product_name": "OVERSIZE QUILTED BOMBER JACKET",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/4770/456/670/2/w/448/4770456670_1_1_1.jpg?ts=1690532851594",
    "price": "₹ 3,290.00",
    "details": "Loose-fitting bomber jacket with a high neck and long sleeves with elastic cuffs. Front patch pockets. Elasticated hem. Front zip fastening hidden by a placket.",
    "id": "productw73"
  },
  {
    "product_name": "CONTRAST CHUNKY KNIT T-SHIRT",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/4770/452/250/2/w/448/4770452250_1_1_1.jpg?ts=1692196392954",
    "price": "₹ 1,990.00",
    "details": "ROUND NECK - NORMAL LENGTH - SHORT SLEEVEST-shirt with a round neck and short sleeves. Contrast fabric appliqué detail on the front.",
    "id": "productw74"
  },
  {
    "product_name": "POLYAMIDE TOP WITH WIDE STRAPS",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/3905/931/513/2/w/448/3905931513_1_1_1.jpg?ts=1686234585137",
    "price": "₹ 690.00",
    "details": "SLIM FIT - ROUND NECK - NORMAL LENGTH - SLEEVELESSFitted top made from a polyamide blend. Features wide straps and chest reinforcement.View more",
    "id": "productw75"
  },
  {
    "product_name": "POLYAMIDE TOP WITH THIN STRAPS",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/3905/832/800/16/w/448/3905832800_1_1_1.jpg?ts=1689698034884",
    "price": "₹ 490.00",
    "details": "SLIM FIT - ROUND NECK - NORMAL LENGTH - SLEEVELESSFitted top made of a polyamide blend. Featuring a round neck and straps.",
    "id": "productw76"
  },
  {
    "product_name": "BALLET FLATS WITH SQUARE TOE AND BUCKLE",
    "image_url": "https://static.zara.net/photos///2023/I/1/1/p/3507/210/808/2/w/448/3507210808_1_1_1.jpg?ts=1691580503552",
    "price": "₹ 3,990.00",
    "details": "Ballet flats. Strap detail with buckle. Square toe.Sole height: 1 cm. / 0.3″AIRFIT®. Flexible technical latex foam insole, designed to offer greater comfort.View more",
    "id": "productw77"
  },
  {
    "product_name": "BALLET FLATS WITH BOW AND SQUARE TOE",
    "image_url": "https://static.zara.net/photos///2023/S/1/1/p/3508/210/800/2/w/448/3508210800_1_1_1.jpg?ts=1691651563566",
    "price": "₹ 3,290.00",
    "details": "Ballet flats. Bow detail on the front. Square toe.Sole height: 1 cm. / 0.3″",
    "id": "productw78"
  },
  {
    "product_name": "WATER-REPELLENT TRENCH COAT",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/8073/222/704/2/w/448/8073222704_1_1_1.jpg?ts=1693305746623",
    "price": "₹ 5,990.00",
    "details": "Trench coat featuring a lapel collar and long sleeves with tabs. Front pockets. Belt in the same fabric with tie. Rear vent at the hem. Double-breasted button fastening on the front.",
    "id": "productw79"
  },
  {
    "product_name": "PAPERBAG TROUSERS WITH BELT",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/0779/158/800/2/w/448/0779158800_1_1_1.jpg?ts=1692270090725",
    "price": "₹ 3,990.00",
    "details": "High-waist trousers with front darts. Front pockets and side patch pockets with flaps. Adjustable hems with button fastening. Front zip fly, interior button and metal hook fastening. Belt with buckle and metal studs.",
    "id": "productw80"
  },
  {
    "product_name": "FLOWING FRAYED TRENCH COAT",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/7837/342/800/2/w/448/7837342800_1_1_1.jpg?ts=1689766697783",
    "price": "₹ 9,590.00",
    "details": "Flowing semi-sheer trench coat featuring a high round neck and long sleeves with flared trims. Tied belt. Front pockets. Asymmetric hem. Frayed trims in the same fabric. Double-breasted button fastening at the front.View more",
    "id": "productw81"
  },
  {
    "product_name": "RELAXED FIT LINEN BLAZER - LIMITED EDITION",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/4043/268/807/3/w/448/4043268807_1_1_1.jpg?ts=1689795718411",
    "price": "₹ 7,590.00",
    "details": "Relaxed fit blazer made of 100% linen. Lapel collar and long sleeves with a buttoned opening. Front patch pockets. Double-breasted front fastening with matching buttons.",
    "id": "productw82"
  },
  {
    "product_name": "LINEN SHIRT DRESS",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/4043/257/802/2/w/448/4043257802_1_1_1.jpg?ts=1689765042727",
    "price": "₹ 5,990.00",
    "details": "Sleeveless midi dress made of 100% linen. Johnny collar. Patch pockets with flaps on the chest. Frayed trims in the same fabric. Front fastening with matching buttons.",
    "id": "productw83"
  },
  {
    "product_name": "STRIPED POPLIN BLOUSE WITH VENTS",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/9479/281/044/2/w/448/9479281044_1_1_1.jpg?ts=1691154412915",
    "price": "₹ 3,290.00",
    "details": "Blouse made of a cotton blend fabric. V-neckline and long voluminous sleeves. Asymmetric hem with front vents. Button-up front.",
    "id": "productw84"
  },
  {
    "product_name": "HIGH-WAIST REGULAR TROUSERS",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/2216/118/712/17/w/448/2216118712_1_1_1.jpg?ts=1689675945857",
    "price": "₹ 2,990.00",
    "details": "Flowing high-waist trousers with a straight-leg design. Invisible side zip fastening.",
    "id": "productw85"
  },
  {
    "product_name": "SHAWL COLLAR BLAZER WITH BELT",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/2310/187/712/13/w/448/2310187712_1_1_1.jpg?ts=1689674805797",
    "price": "₹ 8,590.00",
    "details": "Shawl collar blazer with long sleeves. Featuring front pockets, welt chest pockets, a tie belt in the same fabric, lining and hidden button fastening at the front.",
    "id": "productw86"
  },
  {
    "product_name": "BELTED TUXEDO WAISTCOAT",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/7848/187/800/13/w/448/7848187800_1_1_1.jpg?ts=1690987261599",
    "price": "₹ 5,990.00",
    "details": "Sleeveless waistcoat with a shawl collar. Tied belt in matching fabric. Matching lining.",
    "id": "productw87"
  },
  {
    "product_name": "LONG FLOWING TROUSERS",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/2731/271/800/16/w/448/2731271800_1_1_1.jpg?ts=1690987261083",
    "price": "₹ 2,990.00",
    "details": "Loose-fitting high-waist trousers with a straight-leg design. Invisible side zip fastening.",
    "id": "productw88"
  },
  {
    "product_name": "SHAWL COLLAR WAISTCOAT",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/7760/816/508/2/w/448/7760816508_1_1_1.jpg?ts=1685693893964",
    "price": "₹ 5,990.00",
    "details": "Waistcoat made of a viscose blend. Shawl collar. Tied belt in the same fabric. Front false welt pockets. Matching lining. Buttoned front.",
    "id": "productw89"
  },
  {
    "product_name": "HIGH-WAIST WIDE-LEG TROUSERS",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/7595/816/508/2/w/448/7595816508_1_1_1.jpg?ts=1685693896396",
    "price": "₹ 4,990.00",
    "details": "High-waist trousers made of a viscose blend. Wide-leg design. Invisible zip fastening.",
    "id": "productw90"
  },
  {
    "product_name": "FITTED BUTTONED WAISTCOAT",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/2731/287/800/2/w/448/2731287800_1_1_1.jpg?ts=1691568560139",
    "price": "₹ 3,290.00",
    "details": "Fitted V-neck sleeveless waistcoat. Adjustable strap at the back with buttons. Asymmetric hem with an opening. Matching lining. Button-up front.",
    "id": "productw91"
  },
  {
    "product_name": "LAPELLESS SHORT BLAZER",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/8039/178/632/2/w/448/8039178632_1_1_1.jpg?ts=1691658206961",
    "price": "₹ 5,990.00",
    "details": "Lapelless short blazer featuring long sleeves with openings. Front welt pockets. Matching lining.",
    "id": "productw92"
  },
  {
    "product_name": "HIGH-WAISTED STRAIGHT CUT TROUSERS",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/7980/117/632/2/w/448/7980117632_1_1_1.jpg?ts=1691658205973",
    "price": "₹ 4,990.00",
    "details": "High-waist trousers with side pockets and rear welt pockets. Straight-leg design. Front zip fly, top button and metal hook fastening.",
    "id": "productw93"
  },
  {
    "product_name": "WIDE-LEG POPLIN TROUSERS",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/7563/242/401/2/w/448/7563242401_1_1_1.jpg?ts=1691152491316",
    "price": "₹ 3,290.00",
    "details": "Mid-rise trousers made of cotton with an elasticated waistband and adjustable drawstrings. Side in-seam pockets. Wide-leg design.",
    "id": "productw94"
  },
  {
    "product_name": "POPLIN WRAP SHIRT",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/9479/282/401/2/w/448/9479282401_1_1_1.jpg?ts=1691152491426",
    "price": "₹ 3,290.00",
    "details": "Collared shirt featuring long sleeves with cuffs. Crossover fabric detail on the front with a knot. Button-up front hidden by a placket.",
    "id": "productw95"
  },
  {
    "product_name": "DOUBLE-WAIST LINEN BLEND TROUSERS",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/7656/586/251/3/w/448/7656586251_1_1_1.jpg?ts=1688127028640",
    "price": "₹ 7,590.00",
    "details": "High-waist trousers made of a linen blend. Double waistband in matching fabric with belt loops. Front pockets and rear welt pockets. Straight leg. Front zip and button fastening.",
    "id": "productw96"
  },
  {
    "product_name": "MINI HOOP EARRINGS",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/1856/286/881/2/w/448/1856286881_1_1_1.jpg?ts=1691675320097",
    "price": "₹ 1,590.00",
    "details": "Small metal hoop earrings. Push-back closure.",
    "id": "productw97"
  },
  {
    "product_name": "LINEN-BLEND FLARED TROUSERS",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/7993/967/802/2/w/448/7993967802_1_1_1.jpg?ts=1689761568314",
    "price": "₹ 4,990.00",
    "details": "Mid-rise trousers made of a lyocell and linen blend. Belt loops. Front pockets. Front zip and button fastening.",
    "id": "productw98"
  },
  {
    "product_name": "LINEN BLEND OVERSIZE WAISTCOAT",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/7836/967/802/2/w/448/7836967802_1_1_1.jpg?ts=1689761503813",
    "price": "₹ 5,990.00",
    "details": "Sleeveless loose-fitting waistcoat made of a linen blend. Lapel collar. Flap pockets on the front and chest welt pockets. Matching lining. Back vent at the hem. Button-up front.",
    "id": "productw99"
  },
  {
    "product_name": "HIGH-WAIST CULOTTE TROUSERS",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/9929/329/800/2/w/448/9929329800_1_1_1.jpg?ts=1692876611654",
    "price": "₹ 3,290.00",
    "details": "High-waist trousers featuring front pockets and rear welt pockets. Short and wide leg design. Front zip fly, interior button and metal hook fastening.",
    "id": "productw101"
  },
  {
    "product_name": "CROSSOVER WAISTCOAT",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/8372/352/711/2/w/448/8372352711_1_1_1.jpg?ts=1690366719497",
    "price": "₹ 4,990.00",
    "details": "Waistcoat with a lapel collar and pronounced shoulders. Featuring false front welt pockets and double breasted button fastening on the front.",
    "id": "productw102"
  },
  {
    "product_name": "CARROT FIT TROUSERS",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/8372/252/711/2/w/448/8372252711_1_1_1.jpg?ts=1690366718687",
    "price": "₹ 3,290.00",
    "details": "High-waist trousers with front darts. Front pockets and a false welt pocket at the back. Hems with tabs and buttons. Front zip fly and button fastening.",
    "id": "productw103"
  },
  {
    "product_name": "OPEN BACK HALTER WAISTCOAT",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/8364/532/251/2/w/448/8364532251_1_1_1.jpg?ts=1691577077909",
    "price": "₹ 3,290.00",
    "details": "Halter V-neck waistcoat. Front flap details and an open back. Button-up front.",
    "id": "productw104"
  },
  {
    "product_name": "DARTED WIDE-LEG TROUSERS",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/8365/532/251/2/w/448/8365532251_1_1_1.jpg?ts=1691577077844",
    "price": "₹ 3,990.00",
    "details": "High-waist trousers with front darts. Front pockets and rear false welt pocket. Wide-leg design. Front zip fly, interior button and metal hook fastening.",
    "id": "productw105"
  },
  {
    "product_name": "BASIC KNIT TOP",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/8851/018/250/13/w/448/8851018250_1_1_1.jpg?ts=1689605595007",
    "price": "₹ 1,890.00",
    "details": "Sleeveless round neck top.",
    "id": "productw106"
  },
  {
    "product_name": "LEATHER HEELED SHOES WITH INSTEP STRAP",
    "image_url": "https://static.zara.net/photos///2023/I/1/1/p/2228/210/800/2/w/448/2228210800_1_1_1.jpg?ts=1691591567741",
    "price": "₹ 5,990.00",
    "details": "Leather heeled shoes. Buckle detail on the front and strap on the instep. Buckled ankle strap fastening.Heel height of 6 cm. / 2.3″ AIRFIT®. Flexible technical latex foam insole, designed to offer greater comfort.View more",
    "id": "productw107"
  },
  {
    "product_name": "FULL LENGTH TROUSERS",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/4661/513/800/2/w/448/4661513800_2_1_1.jpg?ts=1691075737418",
    "price": "₹ 3,290.00",
    "details": "High-waist trousers featuring side pockets and false rear welt pockets. Pleated details. Front zip fly, interior button and metal hook fastening.",
    "id": "productw108"
  },
  {
    "product_name": "BASIC BLAZER",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/2010/750/800/17/w/448/2010750800_1_1_1.jpg?ts=1692193680642",
    "price": "₹ 5,990.00",
    "details": "Blazer featuring a lapel collar and long sleeves with padded shoulders. Front flap pockets and a chest welt pocket. Back vent at the hem. Button-up front.",
    "id": "productw109"
  },
  {
    "product_name": "MIDI SKIRT WITH BELT",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/3067/504/800/2/w/448/3067504800_1_1_1.jpg?ts=1691075812348",
    "price": "₹ 3,290.00",
    "details": "High-waist skirt with belt loops. False belt with metal clip on the front. Invisible side zip fastening.",
    "id": "productw110"
  },
  {
    "product_name": "TRF OVERSIZE DENIM SHIRT",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/3607/272/407/3/w/448/3607272407_1_1_1.jpg?ts=1691743832836",
    "price": "₹ 3,290.00",
    "details": "Oversize collared shirt featuring drop-shoulder long sleeves with cuffs. Faded effect. Dart detail at the back. Button-up front.",
    "id": "productw111"
  },
  {
    "product_name": "SPLIT SUEDE CLOGS WITH BUCKLE",
    "image_url": "https://static.zara.net/photos///2023/I/1/1/p/3551/210/800/2/w/448/3551210800_1_1_1.jpg?ts=1691679675417",
    "price": "₹ 3,990.00",
    "details": "Flat split suede clogs. Buckle on the side. Round toe. Sole height: 2.5 cm. / 0.9″",
    "id": "productw112"
  },
  {
    "product_name": "KNIT MIDI SKIRT",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/9598/069/800/2/w/448/9598069800_1_1_1.jpg?ts=1690985893001",
    "price": "₹ 3,290.00",
    "details": "High-waist skirt featuring an elastic waistband and vent at the back of the hem.",
    "id": "productw113"
  },
  {
    "product_name": "FITTED KNIT CARDIGAN",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/9598/070/800/2/w/448/9598070800_1_1_1.jpg?ts=1691057207809",
    "price": "₹ 3,990.00",
    "details": "V-neck cardigan with long sleeves. Front metal hook fastening.",
    "id": "productw114"
  },
  {
    "product_name": "CROPPED PUFFER BOMBER JACKET",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/3046/227/800/2/w/448/3046227800_1_1_1.jpg?ts=1692270091236",
    "price": "₹ 3,290.00",
    "details": "Jacket featuring a round neck and long sleeves with cuffs. Jetted pockets on the front. Front snap-button fastenings.",
    "id": "productw115"
  },
  {
    "product_name": "KNIT VEST T-SHIRT",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/5644/456/250/2/w/448/5644456250_1_1_1.jpg?ts=1692196393561",
    "price": "₹ 2,590.00",
    "details": "LOOSE FIT - ROUND NECK - NORMAL LENGTH - SHORT SLEEVEST-shirt with a round neck and short sleeves. Contrast layered fabric vest detail.",
    "id": "productw116"
  },
  {
    "product_name": "FITTED DRESS WITH DRAPED SIDE",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/5039/632/800/2/w/448/5039632800_1_1_1.jpg?ts=1690191628012",
    "price": "₹ 2,590.00",
    "details": "Sleeveless dress with a round neckline. Draped detail on the side.",
    "id": "productw117"
  },
  {
    "product_name": "TEXTURED JACQUARD WAISTCOAT",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/5039/633/707/22/w/448/5039633707_1_1_1.jpg?ts=1691650583834",
    "price": "₹ 1,990.00",
    "details": "Waistcoat with a V-neckline. Featuring textured jacquard fabric, an asymmetric hem and button fastening at the front.",
    "id": "productw118"
  },
  {
    "product_name": "TEXTURED JACQUARD TROUSERS",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/5039/634/044/2/w/448/5039634044_1_1_1.jpg?ts=1692202685078",
    "price": "₹ 2,590.00",
    "details": "High-waist trousers with an adjustable waistband and matching drawstrings. Textured jacquard fabric detail. Wide-leg design.",
    "id": "productw119"
  },
  {
    "product_name": "PACK OF HOOP EARRINGS",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/1856/256/808/2/w/448/1856256808_1_1_1.jpg?ts=1690530689657",
    "price": "₹ 990.00",
    "details": "- Metal earrings. Push-back fastening. - Metal earrings. Push-back fastening.",
    "id": "productw121"
  },
  {
    "product_name": "OVERSIZE BLOUSE WITH GOLD-TONED BUTTONS",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/8090/920/250/2/w/448/8090920250_1_1_1.jpg?ts=1689939073171",
    "price": "₹ 3,290.00",
    "details": "Oversize blouse featuring a johnny collar and long sleeves. Front patch pocket. Hem with side vents. Front fastening with gold-toned buttons.",
    "id": "productw122"
  },
  {
    "product_name": "LINEN SHIRT WITH AN ASYMMETRIC HEM",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/4786/126/251/13/w/448/4786126251_1_1_1.jpg?ts=1691599681781",
    "price": "₹ 3,290.00",
    "details": "Shirt made of 100% linen. Johnny collar with sleeves falling below the elbow. Asymmetric hem with side vents. Button-up front.",
    "id": "productw123"
  },
  {
    "product_name": "TEXTURED DOUBLE-BREASTED BLAZER",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/7623/815/330/12/w/448/7623815330_1_1_1.jpg?ts=1692002574847",
    "price": "₹ 5,990.00",
    "details": "Blazer featuring a lapel collar, long sleeves and padded shoulders. Frayed trims. Double-breasted button fastening on the front.",
    "id": "productw124"
  },
  {
    "product_name": "TEXTURED BLAZER WITH PATCH POCKETS",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/8015/128/070/2/w/448/8015128070_1_1_1.jpg?ts=1691145777256",
    "price": "₹ 4,990.00",
    "details": "Blazer featuring a lapel collar and long sleeves with tabs and buttons on the shoulders. Front patch pockets with flaps. Button-up front.",
    "id": "productw125"
  },
  {
    "product_name": "STRAPPY KNIT TOP",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/3519/050/800/23/w/448/3519050800_1_1_1.jpg?ts=1691483624906",
    "price": "₹ 1,890.00",
    "details": "Round neck top with wide straps.",
    "id": "productw126"
  },
  {
    "product_name": "BLOCK-HEEL FABRIC SHOES",
    "image_url": "https://static.zara.net/photos///2022/I/1/1/p/2227/910/040/2/w/448/2227910040_1_1_1.jpg?ts=1660914216407",
    "price": "₹ 2,890.00",
    "details": "Fabric block-heel court shoes. Square vamp. Pointed toe.Heel height: 6.5 cm. / 2.5″",
    "id": "productw127"
  },
  {
    "product_name": "OVERSIZE KNIT T-SHIRT",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/3471/035/250/2/w/448/3471035250_1_1_1.jpg?ts=1689337793060",
    "price": "₹ 1,990.00",
    "details": "Shirt with a round neckline and short sleeves.",
    "id": "productw128"
  },
  {
    "product_name": "V-NECK CABLE-KNIT SWEATER",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/1509/111/401/2/w/448/1509111401_1_1_1.jpg?ts=1691580359390",
    "price": "₹ 2,990.00",
    "details": "Long sleeve V-neck sweater.",
    "id": "productw129"
  },
  {
    "product_name": "BLAZER WITH ROLLED-UP SLEEVES",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/2140/760/800/12/w/448/2140760800_1_1_1.jpg?ts=1689595278875",
    "price": "₹ 4,490.00",
    "details": "Open blazer with a lapel collar and padded shoulders. Turn-up sleeves falling below the elbow with sleeve tabs and a golden button. Front flap pockets.",
    "id": "productw131"
  },
  {
    "product_name": "CROPPED TAILORED WAISTCOAT",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/8002/850/814/2/w/448/8002850814_6_1_1.jpg?ts=1690371992298",
    "price": "₹ 2,990.00",
    "details": "V-neck waistcoat. Featuring false welt pockets and button fastening on the front.",
    "id": "productw132"
  },
  {
    "product_name": "STRAIGHT FIT TROUSERS",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/8003/850/814/2/w/448/8003850814_6_1_1.jpg?ts=1691659889962",
    "price": "₹ 3,290.00",
    "details": "High-waist trousers with front pockets and false rear pockets. Straight-leg design. Front zip fly, interior button and metal hook fastening.",
    "id": "productw133"
  },
  {
    "product_name": "HIGH-HEEL MULES",
    "image_url": "https://static.zara.net/photos///2023/I/1/1/p/3201/210/800/2/w/448/3201210800_1_1_1.jpg?ts=1691580503892",
    "price": "₹ 2,890.00",
    "details": "High-heel mules. Pointed toe.Heel height: 6 cm. / 2.3″AIRFIT®. Flexible technical latex foam insole, designed to offer greater comfort.View more",
    "id": "productw134"
  },
  {
    "product_name": "BOMBER JACKET WITH FLAPS",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/2565/929/800/2/w/448/2565929800_1_1_1.jpg?ts=1692002103769",
    "price": "₹ 7,590.00",
    "details": "Bomber jacket featuring a round neck and adjustable long sleeves with snap-buttons. Front buttoned flaps and welt pockets. Elastic hem. Hidden front zip fastening and metallic snap-button fastenings.",
    "id": "productw135"
  },
  {
    "product_name": "OVERSIZE FLOWING SHIRT",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/4387/238/250/2/w/448/4387238250_1_1_1.jpg?ts=1691758138213",
    "price": "₹ 2,290.00",
    "details": "Collared shirt with long sleeves. Front patch pockets. Asymmetric hem. Button-up front.",
    "id": "productw136"
  },
  {
    "product_name": "SHIRT BOMBER JACKET",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/7102/220/800/18/w/448/7102220800_1_1_1.jpg?ts=1692689746266",
    "price": "₹ 3,290.00",
    "details": "Collared bomber jacket featuring long sleeves. Front welt pockets. Elasticated hem. Front fastening with metal zip.",
    "id": "productw137"
  },
  {
    "product_name": "LEATHER COWBOY ANKLE BOOTS",
    "image_url": "https://static.zara.net/photos///2023/V/1/1/p/1114/110/032/2/w/448/1114110032_1_1_1.jpg?ts=1673269002498",
    "price": "₹ 5,990.00",
    "details": "Leather cowboy-style ankle boots. Geometric heel. Pointed toe. Zip fastening on the side.Heel height: 4.5 cm. / 1.7″AIRFIT®. Flexible technical latex foam insole, designed to offer greater comfort.View more",
    "id": "productw139"
  },
  {
    "product_name": "LONG LINEN BLEND COAT",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/8367/044/505/2/w/448/8367044505_1_1_1.jpg?ts=1690450436588",
    "price": "₹ 5,990.00",
    "details": "Long coat made of a lyocell and linen blend. Round neck with matching ribbed detail and long sleeves with metal zips. Front flap pockets. Adjustable waist with inner elastic drawstring and stopper. Back vent at the hem. Front zip and snap-button fastening.View more",
    "id": "productw140"
  },
  {
    "product_name": "LINEN PALAZZO TROUSERS",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/7740/102/526/2/w/448/7740102526_1_1_1.jpg?ts=1688124692393",
    "price": "₹ 5,990.00",
    "details": "High-waist trousers made of linen. Elasticated waist with adjustable drawstrings. Side pockets. Wide-leg design.",
    "id": "productw141"
  },
  {
    "product_name": "MINI CITY BAG",
    "image_url": "https://static.zara.net/photos///2023/I/1/1/p/6041/210/719/2/w/448/6041210719_1_1_1.jpg?ts=1691591567385",
    "price": "₹ 2,890.00",
    "details": "Mini city bag. Top handles and adjustable and crossbody shoulder strap. Zip closure. Inner pouch with gathered drawstring closure.Height x Length x Width 16 x 22 x 7,5 cm. / 6.2 x 8.6 x 2.9″View more",
    "id": "productw142"
  },
  {
    "product_name": "PACK OF RHINESTONE NECKLACES",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/1856/261/303/3/w/448/1856261303_1_1_1.jpg?ts=1690546400498",
    "price": "₹ 1,590.00",
    "details": "Two-pack of necklaces:- Metal necklace.- Metal necklace with rhinestone appliqués.",
    "id": "productw143"
  },
  {
    "product_name": "PACK OF BEAD AND RHINESTONE CHAINS",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/1856/263/303/17/w/448/1856263303_1_1_1.jpg?ts=1691583037173",
    "price": "₹ 1,590.00",
    "details": "Pack of two chains:- Thin metal bead chain. Lobster clasp fastening.- Thin metal chain with rhinestone appliqués. Lobster clasp fastening.View more",
    "id": "productw144"
  },
  {
    "product_name": "PACK OF FRESH WATER PEARL BEAD NECKLACES",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/1856/260/303/3/w/448/1856260303_1_1_1.jpg?ts=1690546400539",
    "price": "₹ 1,590.00",
    "details": "Two-pack of necklaces:- Metal necklace.- Metal necklace with faux pearl bead appliqués.",
    "id": "productw145"
  },
  {
    "product_name": "OVERSIZE STRIPED SHIRT",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/4387/239/061/2/w/448/4387239061_1_1_1.jpg?ts=1692201136012",
    "price": "₹ 2,590.00",
    "details": "Collared shirt with long sleeves. Side vents at the hem. Button-up front.",
    "id": "productw146"
  },
  {
    "product_name": "MIDI DRESS",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/1165/659/250/2/w/448/1165659250_1_1_1.jpg?ts=1689590266937",
    "price": "₹ 3,290.00",
    "details": "V-neck midi dress with thin straps. Layered contrast fabric detail with adjustable side ties.",
    "id": "productw147"
  },
  {
    "product_name": "FULL LENGTH COMBINED JUMPSUIT",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/1165/667/096/2/w/448/1165667096_1_1_1.jpg?ts=1689590268205",
    "price": "₹ 3,990.00",
    "details": "Round neck jumpsuit with adjustable thin straps. Elastic waistband. Side pockets. Contrast fabric detail. Elastic cuffed hems.",
    "id": "productw148"
  },
  {
    "product_name": "MATCHING POPLIN DRESS",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/1044/628/063/2/w/448/1044628063_1_1_1.jpg?ts=1689590268361",
    "price": "₹ 2,990.00",
    "details": "Midi dress with a round neckline and wide straps. Contrast poplin hem detail.",
    "id": "productw149"
  },
  {
    "product_name": "DRAPEY LONG RAINCOAT",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/8073/045/802/2/w/448/8073045802_1_1_1.jpg?ts=1692281895107",
    "price": "₹ 5,590.00",
    "details": "Trench coat with a lapel collar and turn-up long sleeves with buttoned tabs. Front flap pockets. Back vent at the hem. Fastens with a belt in matching fabric.",
    "id": "productw150"
  },
  {
    "product_name": "CUT-OUT WAISTCOAT JUMPSUIT",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/8333/880/712/2/w/448/8333880712_1_1_1.jpg?ts=1691593336695",
    "price": "₹ 5,590.00",
    "details": "Sleeveless V-neck jumpsuit. False front welt pockets. Cut-out detail at the waist. Darts and front pockets. Straight leg. Front zip, metal hook and button fastening.",
    "id": "productw151"
  },
  {
    "product_name": "STUDDED FLAT SLINGBACK SHOES",
    "image_url": "https://static.zara.net/photos///2023/I/1/1/p/3518/210/800/2/w/448/3518210800_1_1_1.jpg?ts=1691663457110",
    "price": "₹ 3,990.00",
    "details": "Flat slingback shoes with studs. Strap across the instep and buckled strap around the back. Sole height: 2 cm. / 0.7″ AIRFIT®. Flexible technical latex foam insole, designed to offer greater comfort.View more",
    "id": "productw152"
  },
  {
    "product_name": "CROPPED LINEN BLEND WAISTCOAT",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/3736/240/615/12/w/448/3736240615_1_1_1.jpg?ts=1689693563165",
    "price": "₹ 3,290.00",
    "details": "Short sleeveless waistcoat made of a linen blend fabric. V-neck. False welt pockets on the front. Matching lining. Button-up front.",
    "id": "productw153"
  },
  {
    "product_name": "LINEN BLEND WAISTCOAT",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/8072/967/515/2/w/448/8072967515_1_1_1.jpg?ts=1688124231813",
    "price": "₹ 3,290.00",
    "details": "Waistcoat made of a linen and lyocell blend. V-neckline and no sleeves. Lining. Button-up front.",
    "id": "productw154"
  },
  {
    "product_name": "LINEN BLEND MIDI SKIRT",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/8176/967/515/2/w/448/8176967515_1_1_1.jpg?ts=1688124232161",
    "price": "₹ 3,290.00",
    "details": "Mid-rise midi skirt made of a linen blend. Flared hem. Invisible zip fastening.",
    "id": "productw155"
  },
  {
    "product_name": "STRAIGHT BLAZER WITH POCKETS",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/7876/346/506/22/w/448/7876346506_1_1_1.jpg?ts=1691571724734",
    "price": "₹ 7,590.00",
    "details": "Straight blazer made of a cotton blend. Lapel collar and long sleeves. Front flap pockets. Back vent at the hem. Button-up front.",
    "id": "productw156"
  },
  {
    "product_name": "CASUAL STRAIGHT-LEG TROUSERS",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/7970/346/506/22/w/448/7970346506_1_1_1.jpg?ts=1691571759295",
    "price": "₹ 4,990.00",
    "details": "Mid-rise trousers made of a cotton blend. Belt loops. Front pockets and rear welt pockets with buttons. Straight-leg design. Front zip fly, button and metal hook fastening.",
    "id": "productw157"
  },
  {
    "product_name": "STRIPED SHIRT",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/9479/276/086/2/w/448/9479276086_1_1_1.jpg?ts=1691509297328",
    "price": "₹ 3,290.00",
    "details": "Johnny collar shirt made of a viscose blend. Cuffed sleeves falling below the elbow. Back pleat detail. Asymmetric hem with side vents. Button-up front.",
    "id": "productw158"
  },
  {
    "product_name": "METALLIC CROCHET BALLET FLATS",
    "image_url": "https://static.zara.net/photos///2023/I/1/1/p/1501/210/091/2/w/448/1501210091_1_1_1.jpg?ts=1690466482124",
    "price": "₹ 4,990.00",
    "details": "Metallic-effect crochet ballet flats. Chain ankle strap. Round toe. Sole height: 1 cm. / 0.3″",
    "id": "productw159"
  },
  {
    "product_name": "FLOWING CARGO TROUSERS",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/7827/342/800/3/w/448/7827342800_1_1_1.jpg?ts=1689782314809",
    "price": "₹ 4,990.00",
    "details": "Mid-rise flowing trousers featuring an adjustable elastic waistband with drawstrings. Patch pockets on the front and flap pockets on the back. Contrast visible topstitching details.",
    "id": "productw160"
  },
  {
    "product_name": "TOTE BAG WITH TOPSTITCHING",
    "image_url": "https://static.zara.net/photos///2023/I/1/1/p/6206/110/719/2/w/448/6206110719_1_1_1.jpg?ts=1691749861774",
    "price": "₹ 2,290.00",
    "details": "Tote bag with topstitching details. Shoulder straps. Magnetic clasp closure. Height x Length x Width 38 x 34 x 10 cm. / 14.9 x 13.3 x 3.9″",
    "id": "productw161"
  },
  {
    "product_name": "BASIC T-SHIRT",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/3253/328/675/2/w/448/3253328675_1_1_1.jpg?ts=1692889793794",
    "price": "₹ 690.00",
    "details": "T-shirt made of cotton with a round neck and short sleeves.",
    "id": "productw162"
  },
  {
    "product_name": "CULOTTES WITH TOPSTITCHING DETAIL",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/7563/250/704/2/w/448/7563250704_2_1_1.jpg?ts=1688553942985",
    "price": "₹ 3,290.00",
    "details": "High-waist trousers made of a cotton blend fabric. Belt loops. Matching visible topstitching detail. Wide-leg design. Front zip fly and button fastening.",
    "id": "productw163"
  },
  {
    "product_name": "BUCKLED DENIM CLOGS",
    "image_url": "https://static.zara.net/photos///2023/I/1/1/p/1513/210/800/2/w/448/1513210800_1_1_1.jpg?ts=1691073267861",
    "price": "₹ 3,990.00",
    "details": "Flat denim clogs with a metallic buckle on the side. Sole height: 2 cm. / 0.7″",
    "id": "productw164"
  },
  {
    "product_name": "LINEN WAISTCOAT WITH TOPSTITCHING",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/4043/272/802/3/w/448/4043272802_1_1_1.jpg?ts=1689782150340",
    "price": "₹ 3,990.00",
    "details": "Short collared waistcoat made of 100% linen. Patch pockets with buttoned flaps on the front. Contrast visible topstitching details. Button-up front.",
    "id": "productw165"
  },
  {
    "product_name": "LINEN WRAP SKIRT",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/4043/256/802/2/w/448/4043256802_6_1_1.jpg?ts=1689760473670",
    "price": "₹ 3,290.00",
    "details": "Mid-rise midi skirt made of 100% linen. Contrast pronounced topstitching detail. Frayed trims. Wrap-style fastening to one side with ties in the same fabric.",
    "id": "productw166"
  },
  {
    "product_name": "100% WOOL KNIT POLO SWEATER",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/9598/170/802/2/w/448/9598170802_1_1_1.jpg?ts=1692790313373",
    "price": "₹ 4,990.00",
    "details": "Fitted sweater made of 100% extra soft wool. Featuring a polo collar, long sleeves and front button fastening.",
    "id": "productw167"
  },
  {
    "product_name": "TWISTED EARRINGS",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/1856/342/303/2/w/448/1856342303_1_1_1.jpg?ts=1692193785852",
    "price": "₹ 1,590.00",
    "details": "Twisted dangle earrings. Push-back fastening.",
    "id": "productw168"
  },
  {
    "product_name": "MINIMALIST WIDE-LEG SATIN TROUSERS",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/8411/966/712/2/w/448/8411966712_1_1_1.jpg?ts=1692259577343",
    "price": "₹ 4,990.00",
    "details": "Mid-waist trousers made of 100% viscose. Elasticated waistband and adjustable drawstrings. Side pockets. Wide-leg design.",
    "id": "productw169"
  },
  {
    "product_name": "MINIMALIST SATIN CROSSOVER SHIRT",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/8366/966/712/2/w/448/8366966712_1_1_1.jpg?ts=1692259577200",
    "price": "₹ 4,990.00",
    "details": "Shirt made of 100% viscose. Featuring a lapel collar and long sleeves with cuffs. Asymmetric hem with side vents. Crossover button-up front.",
    "id": "productw170"
  },
  {
    "product_name": "ROLLED HOOP EARRINGS",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/1856/258/303/2/w/448/1856258303_1_1_1.jpg?ts=1691049410029",
    "price": "₹ 990.00",
    "details": "Twisted metal hoop earrings. Push-back closure.",
    "id": "productw171"
  },
  {
    "product_name": "BASIC CARDIGAN",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/8851/128/401/17/w/448/8851128401_1_1_1.jpg?ts=1692352625138",
    "price": "₹ 2,990.00",
    "details": "Cardigan with a V-neck and long sleeves. Metallic button-up front.",
    "id": "productw172"
  },
  {
    "product_name": "CASHMERE KNIT SWEATER",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/3644/104/807/18/w/448/3644104807_1_1_1.jpg?ts=1692201089694",
    "price": "₹ 10,990.00",
    "details": "Sweater made of a cashmere blend. Featuring a V-neck and long sleeves.",
    "id": "productw173"
  },
  {
    "product_name": "SATIN BALLET FLATS WITH BOW DETAIL",
    "image_url": "https://static.zara.net/photos///2023/I/1/1/p/2590/110/800/2/w/448/2590110800_1_1_1.jpg?ts=1691139836708",
    "price": "₹ 2,890.00",
    "details": "Satin ballet flats. Bow detail on the front. Round toe.Sole height: 1 cm. / 0.3″AIRFIT®. Flexible technical latex foam insole, designed to offer greater comfort.View more",
    "id": "productw174"
  },
  {
    "product_name": "OVERSIZED SHIRT",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/4432/013/250/17/w/448/4432013250_1_1_1.jpg?ts=1692193685526",
    "price": "₹ 2,590.00",
    "details": "Loose-fitting collared shirt featuring long sleeves with cuffs. Chest patch pocket. Pleated detail at the back. Button-up fastening on the front.",
    "id": "productw175"
  },
  {
    "product_name": "TRF MOM FIT HIGH-WAIST JEANS",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/8197/231/407/2/w/448/8197231407_1_1_1.jpg?ts=1691756600520",
    "price": "₹ 2,990.00",
    "details": "HIGH-WAIST - ANKLE LENGTHFaded high-waist jeans with a five-pocket design. Front zip fly and metal top button fastening.",
    "id": "productw176"
  },
  {
    "product_name": "OVERSIZE WATER-REPELLENT TRENCH COAT WITH BELT",
    "image_url": "https://static.zara.net/photos///2023/V/0/1/p/0518/043/401/2/w/448/0518043401_1_1_1.jpg?ts=1675435491972",
    "price": "₹ 8,590.00",
    "details": "Loose-fitting trench coat made of a cotton blend. Lapel collar and long sleeves with adjustable tabs. Front pockets. Adjustable belt in the same fabric with a buckle. Buttoned tabs on the shoulders. Double-breasted button fastening at the front.View more",
    "id": "productw177"
  },
  {
    "product_name": "PLUSH VEST",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/3253/815/505/2/w/448/3253815505_1_1_1.jpg?ts=1692865109517",
    "price": "₹ 1,890.00",
    "details": "Vest made of a cotton blend. V-neck and drop sleeves. Matching ribbed trims.",
    "id": "productw178"
  },
  {
    "product_name": "WATER-REPELLENT PUFFER GILET WITH WIND PROTECTION",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/3046/219/706/2/w/448/3046219706_6_1_1.jpg?ts=1692947385890",
    "price": "₹ 4,990.00",
    "details": "WATER-REPELLENT - WIND PROTECTION Long puffer gilet with a high neck and an adjustable drawstring hood. Front zip pockets. Metal zip front fastening.",
    "id": "productw179"
  },
  {
    "product_name": "WATER-REPELLENT PUFFER GILET WITH WIND PROTECTION",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/8073/211/084/2/w/448/8073211084_6_1_1.jpg?ts=1692947467421",
    "price": "₹ 3,290.00",
    "details": "WATER-REPELLENT - WIND PROTECTION Puffer gilet with a high neck and an adjustable hood with elastic drawstrings and stoppers. Pockets with fleece lining and in-seam zips. Contrast fabric on the sides. Thermo-sealed zip-up front.View more",
    "id": "productw180"
  },
  {
    "product_name": "SHORT TAILORED WAISTCOAT",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/9929/329/704/2/w/448/9929329704_1_1_1.jpg?ts=1693208680604",
    "price": "₹ 2,990.00",
    "details": "V-neck waistcoat. Featuring false welt pockets and button fastening on the front.",
    "id": "productw181"
  },
  {
    "product_name": "BELTED TUXEDO WAISTCOAT",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/7848/187/800/13/w/448/7848187800_1_1_1.jpg?ts=1690987261599",
    "price": "₹ 5,990.00",
    "details": "Sleeveless waistcoat with a shawl collar. Tied belt in matching fabric. Matching lining.",
    "id": "productw182"
  },
  {
    "product_name": "TAILORED WAISTCOAT",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/2753/535/800/2/w/448/2753535800_1_1_1.jpg?ts=1691758137247",
    "price": "₹ 2,990.00",
    "details": "Sleeveless waistcoat with a V-neck. Front jetted pockets on the front. Button-up front.",
    "id": "productw183"
  },
  {
    "product_name": "LINEN BLEND LONG WAISTCOAT",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/7942/939/052/2/w/448/7942939052_1_1_1.jpg?ts=1686153834906",
    "price": "₹ 5,590.00",
    "details": "Sleeveless waistcoat made of a linen blend. Lapel collar. Front patch pockets. Front button fastening and belt in the same fabric.",
    "id": "productw184"
  },
  {
    "product_name": "CONTRAST WAISTCOAT TOP",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/3666/163/800/2/w/448/3666163800_1_1_1.jpg?ts=1692360255901",
    "price": "₹ 2,590.00",
    "details": "Sleeveless V-neck top with satin lapels and metal button fastening at the front.",
    "id": "productw185"
  },
  {
    "product_name": "FITTED BUTTONED WAISTCOAT",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/2731/287/800/2/w/448/2731287800_1_1_1.jpg?ts=1691568560139",
    "price": "₹ 3,290.00",
    "details": "Fitted V-neck sleeveless waistcoat. Adjustable strap at the back with buttons. Asymmetric hem with an opening. Matching lining. Button-up front.",
    "id": "productw186"
  },
  {
    "product_name": "TAILORED LINEN BLEND WAISTCOAT",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/5427/731/251/12/w/448/5427731251_1_1_1.jpg?ts=1687354189882",
    "price": "₹ 2,990.00",
    "details": "Sleeveless waistcoat made of a linen blend with a lapel collar and V-neck. Tied hem in the same fabric.",
    "id": "productw187"
  },
  {
    "product_name": "LONG WAISTCOAT WITH BELT",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/8060/640/600/2/w/448/8060640600_1_1_1.jpg?ts=1689862657562",
    "price": "₹ 4,990.00",
    "details": "Waistcoat with lapel collar and front welt pockets. Front double-breasted fastening with buttons and a matching belt.",
    "id": "productw188"
  },
  {
    "product_name": "TEXTURED JACQUARD WAISTCOAT",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/5039/633/707/22/w/448/5039633707_1_1_1.jpg?ts=1691650583834",
    "price": "₹ 1,990.00",
    "details": "Waistcoat with a V-neckline. Featuring textured jacquard fabric, an asymmetric hem and button fastening at the front.",
    "id": "productw189"
  },
  {
    "product_name": "Z1975 DENIM CROPPED WAISTCOAT",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/6147/190/427/18/w/448/6147190427_1_1_1.jpg?ts=1691756947956",
    "price": "₹ 2,290.00",
    "details": "V-neck waistcoat with front metal button fastening.",
    "id": "productw190"
  },
  {
    "product_name": "TAILORED WAISTCOAT",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/2010/715/743/2/w/448/2010715743_1_1_1.jpg?ts=1692704247795",
    "price": "₹ 2,990.00",
    "details": "Fitted V-neck waistcoat with front button fastening.",
    "id": "productw191"
  },
  {
    "product_name": "TAILORED WAISTCOAT",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/8178/736/712/2/w/448/8178736712_1_1_1.jpg?ts=1690454102579",
    "price": "₹ 3,290.00",
    "details": "V-neck waistcoat. Featuring false jetted pockets and button fastening on the front.",
    "id": "productw192"
  },
  {
    "product_name": "PUFFER GILET",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/4088/241/802/2/w/448/4088241802_1_1_1.jpg?ts=1691658771405",
    "price": "₹ 5,990.00",
    "details": "Gilet with a high neck. Front patch pockets. Adjustable hem with drawstrings. Zip-up front hidden by a snap-button placket.",
    "id": "productw193"
  },
  {
    "product_name": "TAILORED LINEN BLEND WAISTCOAT",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/7747/939/052/3/w/448/7747939052_1_1_1.jpg?ts=1687434571721",
    "price": "₹ 2,990.00",
    "details": "V-neck waistcoat made of a linen blend. Featuring front welt pockets and front button fastening.",
    "id": "productw194"
  },
  {
    "product_name": "FITTED CROPPED WAISTCOAT",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/2010/724/800/2/w/448/2010724800_1_1_1.jpg?ts=1691075741622",
    "price": "₹ 2,990.00",
    "details": "Cropped fitted V-neck waistcoat with front button fastening.",
    "id": "productw195"
  },
  {
    "product_name": "TAILORED LINEN WAISTCOAT",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/7747/372/450/2/w/448/7747372450_1_1_1.jpg?ts=1692281895059",
    "price": "₹ 2,990.00",
    "details": "V-neck waistcoat made of 100% linen. Front welt pockets and front button fastening.",
    "id": "productw196"
  },
  {
    "product_name": "TAILORED LINEN BLEND WAISTCOAT",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/8384/377/172/2/w/448/8384377172_1_1_1.jpg?ts=1690965012916",
    "price": "₹ 2,990.00",
    "details": "V-neck waistcoat made of a linen blend. Featuring thin straps, front welt pockets and front button fastening.",
    "id": "productw197"
  },
  {
    "product_name": "OPEN BACK HALTER WAISTCOAT",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/8364/532/251/2/w/448/8364532251_1_1_1.jpg?ts=1691577077909",
    "price": "₹ 3,290.00",
    "details": "Halter V-neck waistcoat. Front flap details and an open back. Button-up front.",
    "id": "productw198"
  },
  {
    "product_name": "LONG FAUX SUEDE WAISTCOAT",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/4968/224/712/2/w/448/4968224712_1_1_1.jpg?ts=1692699026509",
    "price": "₹ 3,290.00",
    "details": "Long waistcoat with a Johnny collar. Front welt pockets. Tied belt in the same fabric. Double-breasted front with contrast buttons.",
    "id": "productw199"
  },
  {
    "product_name": "LINEN BLEND WAISTCOAT JUMPSUIT",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/8280/377/538/2/w/448/8280377538_1_1_1.jpg?ts=1690965015841",
    "price": "₹ 3,990.00",
    "details": "Playsuit made of a linen blend. Featuring a V-neck and front darts. Front pockets and false rear jetted pockets. Front cut-out detail on the waist. Metal hook, inside button and zip fastening on the front.",
    "id": "productw200"
  },
  {
    "product_name": "TAILORED LINEN BLEND WAISTCOAT",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/7747/352/800/20/w/448/7747352800_1_1_1.jpg?ts=1687511081332",
    "price": "₹ 2,990.00",
    "details": "V-neck waistcoat made of a linen blend. Featuring false front jetted pockets and front button fastening.",
    "id": "productw201"
  },
  {
    "product_name": "SLEEVELESS CROPPED WAISTCOAT",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/2712/761/800/2/w/448/2712761800_1_1_1.jpg?ts=1691401326185",
    "price": "₹ 2,590.00",
    "details": "Cropped waistcoat with a stand-up collar. Chest welt pocket. Matching lining. Front fastening with metal zip hidden by a placket.",
    "id": "productw202"
  },
  {
    "product_name": "CROSSOVER WAISTCOAT",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/8372/352/711/2/w/448/8372352711_1_1_1.jpg?ts=1690366719497",
    "price": "₹ 4,990.00",
    "details": "Waistcoat with a lapel collar and pronounced shoulders. Featuring false front welt pockets and double breasted button fastening on the front.",
    "id": "productw203"
  },
  {
    "product_name": "TEXTURED VEST WITH FRAYED TRIMS",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/7484/245/800/2/w/448/7484245800_1_1_1.jpg?ts=1692203338091",
    "price": "₹ 4,990.00",
    "details": "Sleeveless waistcoat with a lapel collar. Front patch pockets. Fringed trim details. Golden embossed button front fastening.",
    "id": "productw204"
  },
  {
    "product_name": "CROPPED LINEN BLEND WAISTCOAT",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/3736/240/615/12/w/448/3736240615_1_1_1.jpg?ts=1689693563165",
    "price": "₹ 3,290.00",
    "details": "Short sleeveless waistcoat made of a linen blend fabric. V-neck. False welt pockets on the front. Matching lining. Button-up front.",
    "id": "productw205"
  },
  {
    "product_name": "WAISTCOAT WITH VENT",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/7762/304/710/2/w/448/7762304710_1_1_1.jpg?ts=1685693896770",
    "price": "₹ 3,290.00",
    "details": "Waistcoat made of viscose. V-neck. Back vent at the hem. Lining. Button-up front.",
    "id": "productw206"
  },
  {
    "product_name": "LINEN BLEND WAISTCOAT",
    "image_url": "https://static.zara.net/photos///2023/V/0/1/p/2010/711/832/2/w/448/2010711832_1_1_1.jpg?ts=1684404030109",
    "price": "₹ 2,990.00",
    "details": "Sleeveless waistcoat made of a linen blend fabric. V-neck. False welt pockets on the front. Button-up front.",
    "id": "productw207"
  },
  {
    "product_name": "CROPPED WAISTCOAT",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/8372/451/505/2/w/448/8372451505_1_1_1.jpg?ts=1690199038656",
    "price": "₹ 3,990.00",
    "details": "Sleeveless collared gilet with shoulder pads. Front button fastening.",
    "id": "productw208"
  },
  {
    "product_name": "LINEN BLEND WAISTCOAT",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/8008/967/727/2/w/448/8008967727_1_1_1.jpg?ts=1688566404918",
    "price": "₹ 3,290.00",
    "details": "Waistcoat made of a linen blend. V-neckline and no sleeves. Matching lining. Button-up front.",
    "id": "productw209"
  },
  {
    "product_name": "METALLIC KNIT VEST",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/2893/115/808/2/w/448/2893115808_1_1_1.jpg?ts=1691141750674",
    "price": "₹ 3,290.00",
    "details": "Vest with a round neck and metallic thread detail.",
    "id": "productw210"
  },
  {
    "product_name": "KNIT WAISTCOAT WITH PATCH POCKETS",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/6771/106/712/2/w/448/6771106712_1_1_1.jpg?ts=1688996664953",
    "price": "₹ 2,990.00",
    "details": "Round neck waistcoat featuring front patch pockets and front button fastening.",
    "id": "productw211"
  },
  {
    "product_name": "LINEN BLEND OVERSIZE WAISTCOAT",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/7836/967/802/2/w/448/7836967802_1_1_1.jpg?ts=1689761503813",
    "price": "₹ 5,990.00",
    "details": "Sleeveless loose-fitting waistcoat made of a linen blend. Lapel collar. Flap pockets on the front and chest welt pockets. Matching lining. Back vent at the hem. Button-up front.",
    "id": "productw212"
  },
  {
    "product_name": "ASYMMETRIC DENIM WAISTCOAT",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/3183/206/400/2/w/448/3183206400_1_1_1.jpg?ts=1692350044208",
    "price": "₹ 2,590.00",
    "details": "Waistcoat made of denim. Featuring an asymmetric neckline, front patch pocket and belt with metal buckle fastening at the waist.",
    "id": "productw213"
  },
  {
    "product_name": "OPEN BACK WAISTCOAT",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/0085/836/800/3/w/448/0085836800_1_1_1.jpg?ts=1692797305755",
    "price": "₹ 2,590.00",
    "details": "Waistcoat in stretch fabric with a V-neckline. Open back with adjustable straps. Button-up front.",
    "id": "productw214"
  },
  {
    "product_name": "LINEN WAISTCOAT WITH TOPSTITCHING",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/4043/272/802/3/w/448/4043272802_1_1_1.jpg?ts=1689782150340",
    "price": "₹ 3,990.00",
    "details": "Short collared waistcoat made of 100% linen. Patch pockets with buttoned flaps on the front. Contrast visible topstitching details. Button-up front.",
    "id": "productw215"
  },
  {
    "product_name": "LINEN BLEND WAISTCOAT",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/8072/967/515/2/w/448/8072967515_1_1_1.jpg?ts=1688124231813",
    "price": "₹ 3,290.00",
    "details": "Waistcoat made of a linen and lyocell blend. V-neckline and no sleeves. Lining. Button-up front.",
    "id": "productw216"
  },
  {
    "product_name": "OPEN BACK HALTER WAISTCOAT",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/7926/446/800/3/w/448/7926446800_1_1_1.jpg?ts=1689780805789",
    "price": "₹ 3,290.00",
    "details": "Halter waistcoat featuring a V-neck and made of a wool blend. False welt pockets on the front. Open back and adjustable strap in the same fabric with buckle. Asymmetric hem. Button-up front.",
    "id": "productw217"
  },
  {
    "product_name": "BEADED LINEN WAISTCOAT",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/7901/322/450/2/w/448/7901322450_1_1_1.jpg?ts=1688655834834",
    "price": "₹ 3,290.00",
    "details": "Waistcoat made of 100% linen fabric. V-neckline. Ties at the front with bead appliqués.",
    "id": "productw218"
  },
  {
    "product_name": "LINEN BLEND WAISTCOAT",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/7839/967/800/2/w/448/7839967800_1_1_1.jpg?ts=1689335053951",
    "price": "₹ 3,290.00",
    "details": "Waistcoat made of a linen blend fabric. V-neck. False welt pockets on the front. Matching lining. Button-up front.",
    "id": "productw219"
  },
  {
    "product_name": "LINEN BLEND CROPPED WAISTCOAT",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/8182/715/711/2/w/448/8182715711_1_1_1.jpg?ts=1688568633195",
    "price": "₹ 2,990.00",
    "details": "Sleeveless waistcoat made of a linen and cotton blend fabric. V-neck. Button-up front.",
    "id": "productw220"
  },
  {
    "product_name": "SHORT KNIT WAISTCOAT",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/2142/161/515/2/w/448/2142161515_1_1_1.jpg?ts=1692787463348",
    "price": "₹ 2,590.00",
    "details": "Short vest made of a wool and alpaca blend. V-neck and sleeveless. Ribbed trims.",
    "id": "productw221"
  },
  {
    "product_name": "SHAWL COLLAR WAISTCOAT",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/7760/816/508/2/w/448/7760816508_1_1_1.jpg?ts=1685693893964",
    "price": "₹ 5,990.00",
    "details": "Waistcoat made of a viscose blend. Shawl collar. Tied belt in the same fabric. Front false welt pockets. Matching lining. Buttoned front.",
    "id": "productw222"
  },
  {
    "product_name": "LINEN WAISTCOAT WITH BELT",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/7768/023/526/2/w/448/7768023526_1_1_1.jpg?ts=1688124693532",
    "price": "₹ 7,590.00",
    "details": "Linen waistcoat. Lapel collar. Side pockets. Tied belt in the same fabric. Matching lining.",
    "id": "productw223"
  },
  {
    "product_name": "TAILORED LINEN BLEND WAISTCOAT TOP",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/8197/708/500/2/w/448/8197708500_1_1_1.jpg?ts=1689264051513",
    "price": "₹ 2,590.00",
    "details": "Waistcoat top made of a linen and cotton blend. V-neck and tied detail at the neck. Open back with gathered detail. Button-up front.",
    "id": "productw224"
  },
  {
    "product_name": "TEXTURED WAISTCOAT",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/7484/045/712/2/w/448/7484045712_1_1_1.jpg?ts=1686063610125",
    "price": "₹ 4,990.00",
    "details": "Sleeveless waistcoat with a lapel collar. Front patch pockets. Fringed trim details. Golden button-up front.",
    "id": "productw225"
  },
  {
    "product_name": "CONTRAST CHENILLE VEST",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/7901/869/064/2/w/448/7901869064_1_1_1.jpg?ts=1690536807843",
    "price": "₹ 2,590.00",
    "details": "Vest with a round neckline. Featuring cutwork fabric, contrasting thread and a scalloped hem.",
    "id": "productw226"
  },
  {
    "product_name": "COTTON GILET WITH GATHERED HEM",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/7864/386/707/2/w/448/7864386707_1_1_1.jpg?ts=1691154411333",
    "price": "₹ 5,990.00",
    "details": "100% cotton gilet. Round neck. Front flap pockets with snap buttons. Gathered hem. Lining. Front fastening with metal zip.",
    "id": "productw227"
  },
  {
    "product_name": "ASYMMETRIC DOUBLE-BREASTED WAISTCOAT - LIMITED EDITION",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/7655/728/802/2/w/448/7655728802_1_1_1.jpg?ts=1687172133965",
    "price": "₹ 5,990.00",
    "details": "Waistcoat made of linen blend. V-neckline. False welt pocket on the front. Tab detail in the same fabric at the back. Asymmetric hem. Double-breasted button-up front.",
    "id": "productw228"
  },
  {
    "product_name": "GILET WITH SHIRT COLLAR AND POCKETS",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/7996/187/800/2/w/448/7996187800_1_1_1.jpg?ts=1691154412596",
    "price": "₹ 7,590.00",
    "details": "Collared gilet with wide armholes. Front flap pockets with snap buttons. Elasticated hem. Lining. Front fastening with metal zip and snap buttons.",
    "id": "productw229"
  },
  {
    "product_name": "WOOL BLEND KNIT VEST WITH CUT OUT",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/3859/104/809/3/w/448/3859104809_1_1_1.jpg?ts=1692271046014",
    "price": "₹ 2,990.00",
    "details": "Knit vest made of a wool blend. Sleeveless with a round neck. Side vent with pleats. Ribbed trims.",
    "id": "productw230"
  },
  {
    "product_name": "FRAYED CROPPED TEXTURED WAISTCOAT",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/7484/246/400/2/w/448/7484246400_1_1_1.jpg?ts=1690471563048",
    "price": "₹ 3,290.00",
    "details": "Sleeveless collared waistcoat. Front patch pockets. Frayed trims. Button-up front.",
    "id": "productw231"
  },
  {
    "product_name": "OVERSIZE WAISTCOAT WITH POCKETS",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/1165/676/250/2/w/448/1165676250_1_1_1.jpg?ts=1689590268385",
    "price": "₹ 2,990.00",
    "details": "Loose-fitting waistcoat made of a viscose blend. Round neck in matching ribbed fabric with wide cap sleeves. Front patch pockets with flaps. Front fastening with metal snap-buttons.",
    "id": "productw232"
  },
  {
    "product_name": "OPENWORK VEST",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/1131/801/712/2/w/448/1131801712_1_1_1.jpg?ts=1689170510293",
    "price": "₹ 2,590.00",
    "details": "Sleeveless vest with a round neck. Open-knit fabric.",
    "id": "productw233"
  },
  {
    "product_name": "KNIT VEST WITH VISIBLE SEAMS",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/3920/001/712/17/w/448/3920001712_1_1_1.jpg?ts=1692352620762",
    "price": "₹ 2,590.00",
    "details": "High neck vest. Visible seam detail. Ribbed trims.",
    "id": "productw234"
  },
  {
    "product_name": "TAILORED LINEN BLEND WAISTCOAT",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/8214/376/712/2/w/448/8214376712_1_1_1.jpg?ts=1690199038329",
    "price": "₹ 2,990.00",
    "details": "V-neck waistcoat made of a linen blend. Featuring false front welt pockets, tab at the back and front button fastening.",
    "id": "productw235"
  },
  {
    "product_name": "PUFFER GILET",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/4770/457/712/2/w/448/4770457712_1_1_1.jpg?ts=1690812519098",
    "price": "₹ 2,990.00",
    "details": "V-neck padded waistcoat with front hidden button fastening.",
    "id": "productw236"
  },
  {
    "product_name": "Z1975 DENIM CROPPED WAISTCOAT",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/6164/203/802/2/w/448/6164203802_1_1_1.jpg?ts=1691403592632",
    "price": "₹ 2,590.00",
    "details": "Faded V-neck waistcoat. False welt pockets on the front. Front metal button fastening.",
    "id": "productw237"
  },
  {
    "product_name": "PINSTRIPE WAISTCOAT",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/2753/322/064/17/w/448/2753322064_1_1_1.jpg?ts=1686905550890",
    "price": "₹ 4,990.00",
    "details": "V-neck waistcoat made of a linen and cotton blend. Side vents. Button-up front.",
    "id": "productw238"
  },
  {
    "product_name": "WAISTCOAT WITH REAR TAB",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/8270/670/400/2/w/448/8270670400_1_1_1.jpg?ts=1691075843327",
    "price": "₹ 2,990.00",
    "details": "V-neck waistcoat. Tab at the back. Button-up front.",
    "id": "productw239"
  },
  {
    "product_name": "WAISTCOAT WITH CONTRAST EMBROIDERY",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/6895/257/712/2/w/448/6895257712_1_1_1.jpg?ts=1688125289439",
    "price": "₹ 4,990.00",
    "details": "Waistcoat made of 100% cotton. Round neck. Contrast embroidery detail. Matching lining.",
    "id": "productw240"
  },
  {
    "product_name": "WAISTCOAT WITH CONTRAST EMBROIDERY",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/6895/259/305/2/w/448/6895259305_1_1_1.jpg?ts=1688997270185",
    "price": "₹ 4,990.00",
    "details": "Open waistcoat with a round neck. Contrast embroidery and lining.",
    "id": "productw241"
  },
  {
    "product_name": "TIE-DYE PRINT VEST",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/8054/464/330/2/w/448/8054464330_1_1_1.jpg?ts=1689148276995",
    "price": "₹ 3,990.00",
    "details": "Cropped waistcoat featuring bead appliqués and front tie fastening.",
    "id": "productw242"
  },
  {
    "product_name": "CROPPED WAISTCOAT WITH EMBROIDERY",
    "image_url": "https://static.zara.net/photos///2023/V/0/1/p/6895/521/712/2/w/448/6895521712_1_1_1.jpg?ts=1681804416425",
    "price": "₹ 3,290.00",
    "details": "Open waistcoat with embroidered details.",
    "id": "productw243"
  },
  {
    "product_name": "KNIT SWEATER WITH ZIP",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/5536/155/401/2/w/448/5536155401_1_1_1.jpg?ts=1693222806360",
    "price": "₹ 3,290.00",
    "details": "Sweater made of a viscose blend. Featuring a high neck with metal zip, long sleeves and matching ribbed trims.",
    "id": "productw244"
  },
  {
    "product_name": "OPEN KNIT CAPE",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/2756/102/712/2/w/448/2756102712_1_1_1.jpg?ts=1693224111073",
    "price": "₹ 3,290.00",
    "details": "Cape in a textured open knit fabric with an asymmetric neck and sleeve.",
    "id": "productw245"
  },
  {
    "product_name": "CROPPED KNIT SWEATER",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/5536/125/809/2/w/448/5536125809_1_1_1.jpg?ts=1693222633500",
    "price": "₹ 2,990.00",
    "details": "Cropped sweater with a round neck and long sleeves. Matching ribbed trims.",
    "id": "productw246"
  },
  {
    "product_name": "RIPPED CROPPED KNIT SWEATER",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/6771/143/507/22/w/448/6771143507_1_1_1.jpg?ts=1693223097507",
    "price": "₹ 2,990.00",
    "details": "Cropped sweater with a round neck and long sleeves. Ripped details.",
    "id": "productw247"
  },
  {
    "product_name": "OPEN KNIT POLO SWEATER",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/6427/117/712/2/w/448/6427117712_1_1_1.jpg?ts=1692869351811",
    "price": "₹ 2,990.00",
    "details": "Polo sweater with a Johnny collar and long sleeves. Ribbed trims.",
    "id": "productw248"
  },
  {
    "product_name": "KNIT CROPPED CARDIGAN",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/5536/126/806/22/w/448/5536126806_1_1_1.jpg?ts=1693222714850",
    "price": "₹ 2,990.00",
    "details": "Cropped cardigan with a round neck, long sleeves, matching ribbed trims and a button-up front.",
    "id": "productw249"
  },
  {
    "product_name": "100% WOOL KNIT POLO SWEATER",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/9598/170/802/2/w/448/9598170802_1_1_1.jpg?ts=1692790313373",
    "price": "₹ 4,990.00",
    "details": "Fitted sweater made of 100% extra soft wool. Featuring a polo collar, long sleeves and front button fastening.",
    "id": "productw250"
  },
  {
    "product_name": "CASHMERE KNIT SWEATER",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/6771/126/200/2/w/448/6771126200_1_1_1.jpg?ts=1692790315045",
    "price": "₹ 11,990.00",
    "details": "Sweater made of a cashmere and wool blend. Round neck and long sleeves. Matching ribbed trims.",
    "id": "productw251"
  },
  {
    "product_name": "CROPPED KNIT SWEATER",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/3390/102/800/2/w/448/3390102800_1_1_1.jpg?ts=1692787462490",
    "price": "₹ 2,290.00",
    "details": "Short sweater with a round neckline and long sleeves.",
    "id": "productw252"
  },
  {
    "product_name": "BASIC HIGH NECK KNIT SWEATER",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/8851/123/800/22/w/448/8851123800_1_1_1.jpg?ts=1693219160353",
    "price": "₹ 1,890.00",
    "details": "Sweater featuring a high neck, long sleeves with decorative metal buttons and ribbed trims.",
    "id": "productw253"
  },
  {
    "product_name": "WOOL KNIT SWEATER",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/2893/111/704/22/w/448/2893111704_1_1_1.jpg?ts=1693224716998",
    "price": "₹ 4,990.00",
    "details": "Sweater made of 100% wool. Round neck and long sleeves. Matching ribbed trims.",
    "id": "productw254"
  },
  {
    "product_name": "OPEN-KNIT CARDIGAN",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/2142/135/712/22/w/448/2142135712_1_1_1.jpg?ts=1693224495822",
    "price": "₹ 5,990.00",
    "details": "Cardigan made of a spun wool and alpaca blend. Featuring a V-neckline and long sleeves.",
    "id": "productw255"
  },
  {
    "product_name": "OPEN KNIT SWEATER",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/2142/141/800/22/w/448/2142141800_1_1_1.jpg?ts=1693224540042",
    "price": "₹ 4,990.00",
    "details": "Sweater made of a spun wool and alpaca blend. Featuring a round neck and long sleeves.",
    "id": "productw256"
  },
  {
    "product_name": "METALLIC MESH KNIT TOP",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/8146/116/303/2/w/448/8146116303_1_1_1.jpg?ts=1693224881887",
    "price": "₹ 3,290.00",
    "details": "Top with a round neck and long sleeves. Matching ribbed trims.",
    "id": "productw257"
  },
  {
    "product_name": "WOOL BOMBER JACKET WITH ZIP",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/2893/108/704/2/w/448/2893108704_1_1_1.jpg?ts=1693224696563",
    "price": "₹ 7,590.00",
    "details": "Bomber jacket made of 100% wool. Featuring a V-neckline and long sleeves. Front pockets. Ribbed trims. Metal zip fastening at the front.",
    "id": "productw258"
  },
  {
    "product_name": "RIPPED OPEN-KNIT SWEATER",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/6771/140/507/2/w/448/6771140507_1_1_1.jpg?ts=1691666094979",
    "price": "₹ 2,990.00",
    "details": "Sweater with open knit detail and rips. Round neckline and long sleeves.",
    "id": "productw259"
  },
  {
    "product_name": "RIBBED KNIT TOP",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/3519/101/803/2/w/448/3519101803_1_1_1.jpg?ts=1693224761192",
    "price": "₹ 1,890.00",
    "details": "Sleeveless top made of a cotton blend. Featuring a round neckline.",
    "id": "productw260"
  },
  {
    "product_name": "CABLE-KNIT SWEATER WITH VENTS",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/4331/130/800/22/w/448/4331130800_1_1_1.jpg?ts=1693224812690",
    "price": "₹ 3,290.00",
    "details": "Round neck sweater with sleeves falling below the elbow. Featuring turn-up trims and side vents at the hem.",
    "id": "productw261"
  },
  {
    "product_name": "KNIT CARDIGAN WITH GOLDEN BUTTONS",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/3991/118/712/22/w/448/3991118712_1_1_1.jpg?ts=1693224774279",
    "price": "₹ 3,290.00",
    "details": "Knit cardigan made of a spun wool blend. Round neck and long sleeves. Front patch pockets. Front fastening with gold-toned buttons.",
    "id": "productw262"
  },
  {
    "product_name": "OPEN CABLE-KNIT DRESS",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/0021/103/705/12/w/448/0021103705_1_1_1.jpg?ts=1693237097875",
    "price": "₹ 3,990.00",
    "details": "Long felt texture dress. Round neck and long sleeves. Perforated fabric detail. A-line hem with side slit. This garment is not lined.",
    "id": "productw263"
  },
  {
    "product_name": "BUTTONED KNIT CARDIGAN",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/2756/103/712/2/w/448/2756103712_1_1_1.jpg?ts=1693224684330",
    "price": "₹ 3,290.00",
    "details": "Long sleeve cardigan with a round neckline. Featuring ribbed trims and covered button fastening at the front.",
    "id": "productw264"
  },
  {
    "product_name": "METALLIC KNIT TOP",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/9325/102/808/17/w/448/9325102808_1_1_1.jpg?ts=1690990296250",
    "price": "₹ 2,990.00",
    "details": "Round neck top with short sleeves.",
    "id": "productw265"
  },
  {
    "product_name": "WOOL BLEND BOXY-FIT KNIT SWEATER",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/3039/102/527/17/w/448/3039102527_1_1_1.jpg?ts=1692892870664",
    "price": "₹ 3,990.00",
    "details": "Knit sweater made of a wool blend. Round neck and long sleeves. Matching ribbed trims.",
    "id": "productw266"
  },
  {
    "product_name": "POINTELLE KNIT SWEATER",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/3646/102/250/2/w/448/3646102250_1_1_1.jpg?ts=1691141749967",
    "price": "₹ 2,290.00",
    "details": "V-neck sweater with buttons and long sleeves.",
    "id": "productw267"
  },
  {
    "product_name": "STRIPED KNIT SWEATER",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/3433/011/066/17/w/448/3433011066_1_1_1.jpg?ts=1692352267261",
    "price": "₹ 2,290.00",
    "details": "Round neck sweater with long sleeves.",
    "id": "productw268"
  },
  {
    "product_name": "STRIPED KNIT SWEATER",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/5536/108/093/12/w/448/5536108093_1_1_1.jpg?ts=1692885583027",
    "price": "₹ 3,290.00",
    "details": "Round neck sweater with long sleeves, ribbed trims and side vents at the hem.",
    "id": "productw269"
  },
  {
    "product_name": "KNIT WRAP CARDIGAN",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/9874/101/505/17/w/448/9874101505_1_1_1.jpg?ts=1692799925987",
    "price": "₹ 3,290.00",
    "details": "Cardigan made of a wool blend. Featuring a V-neckline, long sleeves and wrap fastening at the front with ties in the same fabric.",
    "id": "productw270"
  },
  {
    "product_name": "KNIT MIDI SKIRT",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/2142/163/528/2/w/448/2142163528_1_1_1.jpg?ts=1692787462870",
    "price": "₹ 3,290.00",
    "details": "Midi skirt made of a wool and alpaca blend. Featuring an elastic high-waist waistband and side slit at the hem.",
    "id": "productw271"
  },
  {
    "product_name": "SHORT KNIT WAISTCOAT",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/2142/161/515/2/w/448/2142161515_1_1_1.jpg?ts=1692787463348",
    "price": "₹ 2,590.00",
    "details": "Short vest made of a wool and alpaca blend. V-neck and sleeveless. Ribbed trims.",
    "id": "productw272"
  },
  {
    "product_name": "FITTED KNIT TOP",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/2142/162/505/2/w/448/2142162505_1_1_1.jpg?ts=1692787461483",
    "price": "₹ 2,990.00",
    "details": "Fitted top made of a wool and alpaca blend. Round neck and long sleeves. Matching ribbed trims.",
    "id": "productw273"
  },
  {
    "product_name": "FITTED KNIT TOP",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/3646/104/712/2/w/448/3646104712_1_1_1.jpg?ts=1692787460559",
    "price": "₹ 1,990.00",
    "details": "Sleeveless round neck top with a V-neckline and metal hook fastening at the front.",
    "id": "productw274"
  },
  {
    "product_name": "ASYMMETRIC OPEN CABLE-KNIT SWEATER",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/0021/101/250/2/w/448/0021101250_1_1_1.jpg?ts=1692787461477",
    "price": "₹ 3,290.00",
    "details": "Long sleeve sweater with a wide round neckline. Featuring cutwork fabric, an asymmetric hem and ribbed trims.",
    "id": "productw275"
  },
  {
    "product_name": "STRIPED OPEN KNIT SWEATER",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/2142/167/330/2/w/448/2142167330_1_1_1.jpg?ts=1692787462345",
    "price": "₹ 3,290.00",
    "details": "Sweater with a round neck and long sleeves. Metallic thread appliqué detail. Ribbed trims.",
    "id": "productw276"
  },
  {
    "product_name": "PRINTED KNIT DRESS",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/6427/122/050/2/w/448/6427122050_1_1_1.jpg?ts=1692790314025",
    "price": "₹ 2,990.00",
    "details": "Fitted midi dress with a straight-cut neckline and thin straps.",
    "id": "productw277"
  },
  {
    "product_name": "PATCHWORK KNIT CARDIGAN",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/9874/104/330/2/w/448/9874104330_1_1_1.jpg?ts=1692790317907",
    "price": "₹ 3,990.00",
    "details": "Cardigan with a V-neck and long sleeves. Cable-knit textured fabric. Button-up front.",
    "id": "productw278"
  },
  {
    "product_name": "KNIT DRESS WITH RHINESTONE STRAPS",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/3920/133/800/2/w/448/3920133800_1_1_1.jpg?ts=1692790315283",
    "price": "₹ 4,990.00",
    "details": "Knit midi dress with a V-neckline. Thin straps that cross at the back in a metal chain with rhinestone appliqués. A-line hem.",
    "id": "productw279"
  },
  {
    "product_name": "KNIT BODYSUIT WITH RHINESTONE CHAIN",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/3920/132/800/2/w/448/3920132800_1_1_1.jpg?ts=1692790315283",
    "price": "₹ 3,290.00",
    "details": "Long sleeve bodysuit with a round neck. Open back detail featuring a metal chain with rhinestone appliqués. Snap-button fastening at the bottom",
    "id": "productw280"
  },
  {
    "product_name": "STRIPED KNIT CARDIGAN",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/3991/124/105/2/w/448/3991124105_1_1_1.jpg?ts=1692790315221",
    "price": "₹ 3,290.00",
    "details": "Long sleeve cardigan with a round neckline. Featuring front patch pockets with buttons, ribbed trims and textured metal button fastening at the front.",
    "id": "productw281"
  },
  {
    "product_name": "FITTED KNIT TOP",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/3646/103/800/2/w/448/3646103800_1_1_1.jpg?ts=1692787462725",
    "price": "₹ 2,590.00",
    "details": "Long sleeve V-neck fitted top with metal hook fastening at the front.",
    "id": "productw282"
  },
  {
    "product_name": "KNIT SWEATER WITH TOPSTITCHING",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/6771/128/401/2/w/448/6771128401_1_1_1.jpg?ts=1692351491895",
    "price": "₹ 3,290.00",
    "details": "Not Found",
    "id": "productw283"
  },
  {
    "product_name": "KNIT VEST WITH VISIBLE SEAMS",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/3920/001/712/17/w/448/3920001712_1_1_1.jpg?ts=1692352620762",
    "price": "₹ 2,590.00",
    "details": "High neck vest. Visible seam detail. Ribbed trims.",
    "id": "productw284"
  },
  {
    "product_name": "KNIT SWEATER WITH VISIBLE SEAMS",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/3920/006/712/17/w/448/3920006712_1_1_1.jpg?ts=1692352625229",
    "price": "₹ 3,290.00",
    "details": "Sweater with a high neck and long sleeves. Visible seam detail. Ribbed trims.",
    "id": "productw285"
  },
  {
    "product_name": "CROPPED OPEN KNIT SWEATER",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/6427/114/800/2/w/448/6427114800_1_1_1.jpg?ts=1692178854520",
    "price": "₹ 2,590.00",
    "details": "Loose-fitting sweater with a round neckline and long sleeves.",
    "id": "productw286"
  },
  {
    "product_name": "POINTELLE KNIT SWEATER",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/5755/117/711/18/w/448/5755117711_1_1_1.jpg?ts=1692352720846",
    "price": "₹ 2,990.00",
    "details": "Open knit sweater with a round neck and long sleeves.",
    "id": "productw287"
  },
  {
    "product_name": "KNIT SWEATER WITH ASYMMETRIC HEM",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/2488/103/711/17/w/448/2488103711_1_1_1.jpg?ts=1692352714232",
    "price": "₹ 2,990.00",
    "details": "Round neck sweater with long sleeves. Visible seam details. Asymmetric frayed hem.",
    "id": "productw288"
  },
  {
    "product_name": "BASIC CARDIGAN",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/8851/128/401/17/w/448/8851128401_1_1_1.jpg?ts=1692352625138",
    "price": "₹ 2,990.00",
    "details": "Cardigan with a V-neck and long sleeves. Metallic button-up front.",
    "id": "productw289"
  },
  {
    "product_name": "OPEN KNIT SWEATER",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/0014/103/804/17/w/448/0014103804_1_1_1.jpg?ts=1692352259969",
    "price": "₹ 2,290.00",
    "details": "Knit sweater made of open textured fabric. Mock turtleneck and long sleeves. Scalloped trims.",
    "id": "productw290"
  },
  {
    "product_name": "KNIT LINEN BLEND CARDIGAN",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/2142/181/800/2/w/448/2142181800_1_1_1.jpg?ts=1692346994531",
    "price": "₹ 3,290.00",
    "details": "Coatigan made of a linen blend. V-neckline and long sleeves. Buttoned front.",
    "id": "productw291"
  },
  {
    "product_name": "SEMI-SHEER KNIT SWEATER",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/2142/128/800/17/w/448/2142128800_1_1_1.jpg?ts=1692352281042",
    "price": "₹ 2,990.00",
    "details": "Slot collar sweater with long sleeves with elasticated trims.This garment is not lined.",
    "id": "productw292"
  },
  {
    "product_name": "KNIT BUSTIER TOP",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/2142/074/800/17/w/448/2142074800_1_1_1.jpg?ts=1692352262032",
    "price": "₹ 2,290.00",
    "details": "Crop top with a sweetheart neckline. Side zip-up fastening.",
    "id": "productw293"
  },
  {
    "product_name": "RIBBED KNIT CROP TOP",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/3519/037/800/17/w/448/3519037800_1_1_1.jpg?ts=1692352264577",
    "price": "₹ 1,590.00",
    "details": "Round neck top with wide straps.",
    "id": "productw294"
  },
  {
    "product_name": "LONG KNIT DRESS",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/5536/130/600/2/w/448/5536130600_1_1_1.jpg?ts=1692346995332",
    "price": "₹ 3,290.00",
    "details": "Long dress with a round neckline and long sleeves. Matching ribbed trims.",
    "id": "productw295"
  },
  {
    "product_name": "LONG KNIT DRESS",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/5536/135/070/2/w/448/5536135070_1_1_1.jpg?ts=1692346994896",
    "price": "₹ 3,290.00",
    "details": "Long dress with a round neck and long sleeves.",
    "id": "productw296"
  },
  {
    "product_name": "METALLIC THREAD KNIT TOP",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/3471/023/620/17/w/448/3471023620_1_1_1.jpg?ts=1692352265578",
    "price": "₹ 1,890.00",
    "details": "Sleeveless top with a round neckline and metallic thread detail.",
    "id": "productw297"
  },
  {
    "product_name": "KNIT TOP WITH OPEN BACK",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/4331/138/808/17/w/448/4331138808_1_1_1.jpg?ts=1692352272239",
    "price": "₹ 1,890.00",
    "details": "Halterneck crop top with thin tied straps at the back.",
    "id": "productw298"
  },
  {
    "product_name": "LINEN BLEND KNIT SWEATER",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/5802/104/711/22/w/448/5802104711_1_1_1.jpg?ts=1691155614865",
    "price": "₹ 3,290.00",
    "details": "Cropped sweater made of a linen blend. Round neck and long sleeves.",
    "id": "productw299"
  },
  {
    "product_name": "SEQUINNED KNIT TOP",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/0014/100/712/17/w/448/0014100712_1_1_1.jpg?ts=1690990295600",
    "price": "₹ 2,990.00",
    "details": "Sleeveless top with a round neck. Matching sequin details.",
    "id": "productw300"
  },
  {
    "product_name": "CROPPED KNIT SWEATER",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/9598/108/200/2/w/448/9598108200_1_1_1.jpg?ts=1688996666535",
    "price": "₹ 2,990.00",
    "details": "Cropped sweater with a round neck and long sleeves.",
    "id": "productw301"
  },
  {
    "product_name": "CONTRAST KNIT TOP WITH RUFFLED SLEEVES",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/7200/100/712/2/w/448/7200100712_1_1_1.jpg?ts=1689600438518",
    "price": "₹ 3,290.00",
    "details": "Round neck top with long ruffled sleeves and contrast poplin fabric. Buttoned opening at the back.",
    "id": "productw302"
  },
  {
    "product_name": "RIPPED KNIT SWEATER",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/3920/101/712/23/w/448/3920101712_1_1_1.jpg?ts=1691155530873",
    "price": "₹ 3,290.00",
    "details": "Round neck sweater with long sleeves. Ripped trims.",
    "id": "productw303"
  },
  {
    "product_name": "KNIT TOP WITH CAPE SLEEVES",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/6771/109/200/17/w/448/6771109200_1_1_1.jpg?ts=1691753306861",
    "price": "₹ 2,590.00",
    "details": "Round neck open knit top with long cape-style sleeves with slits.",
    "id": "productw304"
  },
  {
    "product_name": "POINTELLE RUFFLED KNIT TOP",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/4331/117/712/2/w/448/4331117712_1_1_1.jpg?ts=1690983359063",
    "price": "₹ 3,290.00",
    "details": "Top with a round neck and long sleeves. Ruffle trims.",
    "id": "productw305"
  },
  {
    "product_name": "KNIT HOODIE",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/4331/102/660/2/w/448/4331102660_1_1_1.jpg?ts=1690383907771",
    "price": "₹ 3,290.00",
    "details": "Open-knit hoodie with drawstring. V-neck and long sleeves.This garment is not lined.",
    "id": "productw306"
  },
  {
    "product_name": "OPEN-KNIT SWEATER",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/6771/107/800/2/w/448/6771107800_1_1_1.jpg?ts=1688568109842",
    "price": "₹ 2,990.00",
    "details": "Round neck sweater with long sleeves.This garment is not lined.",
    "id": "productw307"
  },
  {
    "product_name": "OPEN-KNIT SWEATER",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/3991/105/800/17/w/448/3991105800_1_1_1.jpg?ts=1690990297959",
    "price": "₹ 2,990.00",
    "details": "Long sleeve sweater with a round neckline. This garment is not lined.",
    "id": "productw308"
  },
  {
    "product_name": "WOOL BLEND KNIT CARDIGAN WITH CUT OUT",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/3859/103/809/3/w/448/3859103809_1_1_1.jpg?ts=1692271050499",
    "price": "₹ 5,590.00",
    "details": "Cardigan made of a wool blend. V-neck and long sleeves with cuffs. Vent details. Single-button fastening at the front.",
    "id": "productw309"
  },
  {
    "product_name": "KNIT CARDIGAN WITH VISIBLE SEAMS",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/4331/127/832/3/w/448/4331127832_1_1_1.jpg?ts=1692271051701",
    "price": "₹ 3,290.00",
    "details": "V-neck cardigan with long cuffed sleeves. Decorative finishes with visible seams. Side vents at the hem. Button-up front. Ribbed trims.",
    "id": "productw310"
  },
  {
    "product_name": "100% WOOL KNIT CARDIGAN",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/2893/103/809/4/w/448/2893103809_1_1_1.jpg?ts=1692271042358",
    "price": "₹ 4,990.00",
    "details": "Cardigan made of 100% wool. Round neck and long sleeves. Button-up front. Ribbed trims.",
    "id": "productw311"
  },
  {
    "product_name": "WOOL BLEND KNIT VEST WITH CUT OUT",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/3859/104/809/3/w/448/3859104809_1_1_1.jpg?ts=1692271046014",
    "price": "₹ 2,990.00",
    "details": "Knit vest made of a wool blend. Sleeveless with a round neck. Side vent with pleats. Ribbed trims.",
    "id": "productw312"
  },
  {
    "product_name": "100% WOOL KNIT SWEATER",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/2893/106/809/4/w/448/2893106809_1_1_1.jpg?ts=1692271338379",
    "price": "₹ 4,990.00",
    "details": "Sweater made of 100% wool. Featuring a round neckline, long sleeves and ribbed trims.",
    "id": "productw313"
  },
  {
    "product_name": "METALLIC THREAD KNIT TOP WITH FRINGING",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/3859/107/800/3/w/448/3859107800_1_1_1.jpg?ts=1692271043921",
    "price": "₹ 1,990.00",
    "details": "Sleeveless top with a round neck. Metallic thread detail. Fringing at the hem.",
    "id": "productw314"
  },
  {
    "product_name": "BASIC KNIT SWEATER",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/8851/121/800/10/w/448/8851121800_1_1_1.jpg?ts=1692271054086",
    "price": "₹ 1,890.00",
    "details": "Round neck sweater with long sleeves and decorative gold buttons. Ribbed trims.",
    "id": "productw315"
  },
  {
    "product_name": "CASHMERE KNIT SWEATER",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/3644/104/807/18/w/448/3644104807_1_1_1.jpg?ts=1692201089694",
    "price": "₹ 10,990.00",
    "details": "Sweater made of a cashmere blend. Featuring a V-neck and long sleeves.",
    "id": "productw316"
  },
  {
    "product_name": "KNIT BOMBER JACKET WITH DRAWSTRING",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/2142/125/704/19/w/448/2142125704_1_1_1.jpg?ts=1692201223170",
    "price": "₹ 3,290.00",
    "details": "V-neck jacket with long cuffed sleeves. Zip-up front. Adjustable drawstring hem.",
    "id": "productw317"
  },
  {
    "product_name": "CABLE-KNIT CARDIGAN",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/1509/112/712/12/w/448/1509112712_1_1_1.jpg?ts=1692200416349",
    "price": "₹ 2,990.00",
    "details": "V-neck cardigan with long sleeves and a button-down front.",
    "id": "productw318"
  },
  {
    "product_name": "KNIT CROSSOVER HALTER TOP",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/9598/068/800/12/w/448/9598068800_1_1_1.jpg?ts=1691483974623",
    "price": "₹ 1,990.00",
    "details": "Crossover halterneck top with wide straps.",
    "id": "productw319"
  },
  {
    "product_name": "COLOUR BLOCK OPEN KNIT SWEATER",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/2142/157/022/2/w/448/2142157022_1_1_1.jpg?ts=1692188119571",
    "price": "₹ 3,290.00",
    "details": "Sweater made of an alpaca and wool blend. Round neck and long sleeves.",
    "id": "productw320"
  },
  {
    "product_name": "METALLIC THREAD KNIT SWEATER",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/1509/010/303/17/w/448/1509010303_1_1_1.jpg?ts=1691143856864",
    "price": "₹ 2,290.00",
    "details": "Round neck sweater with long sleeves and metallic thread detail.",
    "id": "productw321"
  },
  {
    "product_name": "BASIC KNIT SWEATER",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/1509/115/108/17/w/448/1509115108_1_1_1.jpg?ts=1692352262228",
    "price": "₹ 990.00",
    "details": "Round neck sweater featuring long sleeves, side vents at the hem and ribbed trims.",
    "id": "productw322"
  },
  {
    "product_name": "COLOUR BLOCK OPEN KNIT SWEATER",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/2142/158/021/2/w/448/2142158021_1_1_1.jpg?ts=1692188119565",
    "price": "₹ 2,990.00",
    "details": "Cropped sweater made of a wool and alpaca blend. Round neck and long sleeves.",
    "id": "productw323"
  },
  {
    "product_name": "RUFFLED KNIT TOP",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/4331/029/800/2/w/448/4331029800_1_1_1.jpg?ts=1692178856643",
    "price": "₹ 2,590.00",
    "details": "Sleeveless top with a V-neck and ruffles.",
    "id": "productw324"
  },
  {
    "product_name": "METALLIC MESH KNIT TOP",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/8146/100/818/2/w/448/8146100818_1_1_1.jpg?ts=1692178854723",
    "price": "₹ 2,290.00",
    "details": "Sleeveless round neck top.",
    "id": "productw325"
  },
  {
    "product_name": "SOFT-TOUCH KNIT SWEATER",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/9598/272/250/3/w/448/9598272250_1_1_1.jpg?ts=1691753029922",
    "price": "₹ 2,590.00",
    "details": "Round neck sweater with short sleeves. Soft touch detail. Ribbed trims.",
    "id": "productw326"
  },
  {
    "product_name": "CABLE-KNIT SWEATER",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/4331/123/712/2/w/448/4331123712_1_1_1.jpg?ts=1691751734524",
    "price": "₹ 3,290.00",
    "details": "V-neck sweater with long turn-up sleeve detail.",
    "id": "productw327"
  },
  {
    "product_name": "FINE KNIT CAPE TOP",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/4369/001/712/2/w/448/4369001712_1_1_1.jpg?ts=1689332905779",
    "price": "₹ 2,990.00",
    "details": "Fine knit cape top with an asymmetric neckline and sleeve.",
    "id": "productw328"
  },
  {
    "product_name": "FADED-EFFECT KNIT SWEATER",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/3653/100/405/17/w/448/3653100405_1_1_1.jpg?ts=1691753517615",
    "price": "₹ 3,290.00",
    "details": "Long sleeve sweater with a round neck. Faded-effect fabric.",
    "id": "productw329"
  },
  {
    "product_name": "KNIT SWEATER WITH SEAMLESS TRIMS",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/5536/104/055/2/w/448/5536104055_1_1_1.jpg?ts=1691580360961",
    "price": "₹ 2,990.00",
    "details": "Round neck sweater with long sleeves. Seamless trims.",
    "id": "productw330"
  },
  {
    "product_name": "KNIT BOMBER CARDIGAN WITH METALLIC THREAD",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/8146/014/303/2/w/448/8146014303_1_1_1.jpg?ts=1691580360759",
    "price": "₹ 3,990.00",
    "details": "Long sleeve V-neck bomber cardigan. Front metal zip fastening.",
    "id": "productw331"
  },
  {
    "product_name": "V-NECK CABLE-KNIT SWEATER",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/1509/111/401/2/w/448/1509111401_1_1_1.jpg?ts=1691580359390",
    "price": "₹ 2,990.00",
    "details": "Long sleeve V-neck sweater.",
    "id": "productw332"
  },
  {
    "product_name": "METALLIC THREAD KNIT CROP TOP",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/3519/048/303/17/w/448/3519048303_1_1_1.jpg?ts=1691587365604",
    "price": "₹ 1,890.00",
    "details": "Sleeveless top with a round neck and metallic thread detail.",
    "id": "productw333"
  },
  {
    "product_name": "KNIT MIDI SKIRT WITH METALLIC THREAD",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/3519/049/303/17/w/448/3519049303_1_1_1.jpg?ts=1691590451828",
    "price": "₹ 2,290.00",
    "details": "High-waist skirt with an elastic waistband. Front slit at the hem. Metallic thread detail.",
    "id": "productw334"
  },
  {
    "product_name": "RUFFLED KNIT CARDIGAN",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/4331/126/800/2/w/448/4331126800_1_1_1.jpg?ts=1691580359631",
    "price": "₹ 2,990.00",
    "details": "V-neck cardigan with long sleeves and cut-out shoulders. Ruffle trims in contrast fabric. Front tie fastening.",
    "id": "productw335"
  },
  {
    "product_name": "METALLIC THREAD KNIT TOP",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/8146/011/808/22/w/448/8146011808_1_1_1.jpg?ts=1691402905508",
    "price": "₹ 1,890.00",
    "details": "Sleeveless round neck top.This garment is not lined.",
    "id": "productw336"
  },
  {
    "product_name": "KNIT SWEATER WITH CONTRAST LACE TRIM",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/6427/110/712/2/w/448/6427110712_1_1_1.jpg?ts=1688382221827",
    "price": "₹ 2,990.00",
    "details": "Round neck sweater with long sleeves. Lace trim details.",
    "id": "productw337"
  },
  {
    "product_name": "CROPPED KNIT TOP WITH OPEN BACK",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/3859/105/712/17/w/448/3859105712_1_1_1.jpg?ts=1690213092191",
    "price": "₹ 2,990.00",
    "details": "Long sleeve round neck top featuring an open back with a tie.",
    "id": "productw338"
  },
  {
    "product_name": "OPEN-KNIT SWEATER",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/6771/113/505/23/w/448/6771113505_1_1_1.jpg?ts=1691155562893",
    "price": "₹ 2,990.00",
    "details": "Sweater with a wide round neck and long sleeves. Open-knit detail.",
    "id": "productw339"
  },
  {
    "product_name": "JACQUARD KNIT TOP",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/3991/116/070/2/w/448/3991116070_1_1_1.jpg?ts=1690371173456",
    "price": "₹ 2,290.00",
    "details": "Top featuring a slot collar with a drawstring and short sleeves.",
    "id": "productw340"
  },
  {
    "product_name": "CONTRAST KNIT CARDIGAN",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/4331/115/712/22/w/448/4331115712_1_1_1.jpg?ts=1691401208983",
    "price": "₹ 3,290.00",
    "details": "Round neck cardigan with ruffled sleeves falling below the elbow. Front fastening with matching covered buttons.",
    "id": "productw341"
  },
  {
    "product_name": "KNIT SWEATER WITH CONTRAST SLEEVES",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/6427/109/712/2/w/448/6427109712_6_1_1.jpg?ts=1690196472834",
    "price": "₹ 2,990.00",
    "details": "Open knit sweater with a round neckline. Short contrast sleeves with poplin fabric and a rhinestone button.",
    "id": "productw342"
  },
  {
    "product_name": "METALLIC MESH KNIT TOP",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/8146/015/800/2/w/448/8146015800_1_1_1.jpg?ts=1691141749427",
    "price": "₹ 2,590.00",
    "details": "Long sleeve top with a round neckline. This garment is not lined.",
    "id": "productw343"
  },
  {
    "product_name": "KNIT METALLIC THREAD SLIP DRESS",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/3653/106/808/2/w/448/3653106808_1_1_1.jpg?ts=1691057206637",
    "price": "₹ 4,990.00",
    "details": "Open knit dress with a round neck and thin straps. Lining. Metallic thread detail.",
    "id": "productw344"
  },
  {
    "product_name": "KNIT MIDI SKIRT",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/9598/069/800/2/w/448/9598069800_1_1_1.jpg?ts=1690985893001",
    "price": "₹ 3,290.00",
    "details": "High-waist skirt featuring an elastic waistband and vent at the back of the hem.",
    "id": "productw345"
  },
  {
    "product_name": "METALLIC MESH KNIT CAPE",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/8146/112/303/3/w/448/8146112303_1_1_1.jpg?ts=1690985147925",
    "price": "₹ 3,290.00",
    "details": "Cape with a round neck and wide sleeves.This garment is not lined.",
    "id": "productw346"
  },
  {
    "product_name": "DRAPED FINE KNIT TOP",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/3471/038/800/2/w/448/3471038800_1_1_1.jpg?ts=1691057205729",
    "price": "₹ 2,590.00",
    "details": "Top with a wide round neck and short sleeves. Side gathered detail.",
    "id": "productw347"
  },
  {
    "product_name": "KNIT BOMBER CARDIGAN WITH METALLIC THREAD",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/2142/121/808/17/w/448/2142121808_1_1_1.jpg?ts=1691048722055",
    "price": "₹ 4,990.00",
    "details": "Round neck bomber cardigan with long cuffed sleeves. Front welt pockets and zip fastening at the front.",
    "id": "productw348"
  },
  {
    "product_name": "DRAPED FINE KNIT TOP",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/3471/037/806/2/w/448/3471037806_1_1_1.jpg?ts=1691057207704",
    "price": "₹ 2,990.00",
    "details": "Top featuring a wide round neckline, long sleeves with openings and side gathered detail.",
    "id": "productw349"
  },
  {
    "product_name": "FITTED KNIT CARDIGAN",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/9598/070/800/2/w/448/9598070800_1_1_1.jpg?ts=1691057207809",
    "price": "₹ 3,990.00",
    "details": "V-neck cardigan with long sleeves. Front metal hook fastening.",
    "id": "productw350"
  },
  {
    "product_name": "KNIT BOMBER CARDIGAN WITH METALLIC THREAD",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/3653/107/808/17/w/448/3653107808_1_1_1.jpg?ts=1691048297681",
    "price": "₹ 5,990.00",
    "details": "Bomber jacket featuring a round neck and long sleeves with cuffs. Front metal zip fastening.",
    "id": "productw351"
  },
  {
    "product_name": "KNIT CARDIGAN WITH METALLIC THREAD DETAIL",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/3991/100/303/17/w/448/3991100303_1_1_1.jpg?ts=1690213127440",
    "price": "₹ 3,290.00",
    "details": "Cardigan with a round neck and long sleeves. Metallic thread detail. Button-up front.",
    "id": "productw352"
  },
  {
    "product_name": "KNIT BOMBER JACKET WITH EMBROIDERED SLEEVES",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/2488/102/712/17/w/448/2488102712_1_1_1.jpg?ts=1690212903542",
    "price": "₹ 5,990.00",
    "details": "Long sleeve bomber jacket with a V-neckline. Openwork detail and embroidery on the sleeves. Front patch pockets with flaps. Zip-up front.",
    "id": "productw353"
  },
  {
    "product_name": "BEADED KNIT TOP",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/9598/114/942/17/w/448/9598114942_1_1_1.jpg?ts=1690213231529",
    "price": "₹ 3,290.00",
    "details": "Open knit top with a wide round neckline, long sleeves and bead appliqués.",
    "id": "productw354"
  },
  {
    "product_name": "KNIT TOP WITH ASYMMETRIC HEM",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/4331/121/800/17/w/448/4331121800_1_1_1.jpg?ts=1691143597867",
    "price": "₹ 2,590.00",
    "details": "Open knit top with a round neck and long sleeves. Asymmetric hem.",
    "id": "productw355"
  },
  {
    "product_name": "KNIT STRIPED CULOTTES",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/5802/081/105/2/w/448/5802081105_1_1_1.jpg?ts=1691141749664",
    "price": "₹ 3,290.00",
    "details": "High-waist trousers with an elastic waistband and wide-leg design.",
    "id": "productw356"
  },
  {
    "product_name": "SHORT STRIPED KNIT TUNIC",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/5802/080/105/2/w/448/5802080105_1_1_1.jpg?ts=1691141749755",
    "price": "₹ 2,990.00",
    "details": "Tunic with a V-neckline and long sleeves. Front patch pockets. Side vents at the hem.",
    "id": "productw357"
  },
  {
    "product_name": "METALLIC KNIT VEST",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/2893/115/808/2/w/448/2893115808_1_1_1.jpg?ts=1691141750674",
    "price": "₹ 3,290.00",
    "details": "Vest with a round neck and metallic thread detail.",
    "id": "productw358"
  },
  {
    "product_name": "STRIPED KNIT SWEATER",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/5536/058/080/2/w/448/5536058080_1_1_1.jpg?ts=1691141750159",
    "price": "₹ 3,290.00",
    "details": "Polo collar sweater with long sleeves and ribbed trims.",
    "id": "productw359"
  },
  {
    "product_name": "KNIT TOP WITH OPEN BACK",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/1750/004/800/17/w/448/1750004800_1_1_1.jpg?ts=1690990296210",
    "price": "₹ 1,890.00",
    "details": "Sleeveless round neck top with an open back.",
    "id": "productw360"
  },
  {
    "product_name": "POINTELLE RUFFLED KNIT TOP",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/4331/084/712/17/w/448/4331084712_1_1_1.jpg?ts=1690990297629",
    "price": "₹ 2,990.00",
    "details": "Round neck top with short sleeves. Ruffled trims.",
    "id": "productw361"
  },
  {
    "product_name": "POINTELLE KNIT CAPE-EFFECT SWEATER",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/2893/102/800/17/w/448/2893102800_1_1_1.jpg?ts=1690990296965",
    "price": "₹ 4,990.00",
    "details": "Loose-fitting sweater with a V-neck and long sleeves. Side vents at the hem.",
    "id": "productw362"
  },
  {
    "product_name": "CONTRAST KNIT TOP WITH RUFFLED SLEEVES",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/7200/014/800/17/w/448/7200014800_1_1_1.jpg?ts=1690990298162",
    "price": "₹ 3,290.00",
    "details": "Sleeveless top with a round neck, ruffle trim, contrast poplin fabric and a buttoned opening at the back.",
    "id": "productw363"
  },
  {
    "product_name": "RIBBED KNIT WAISTCOAT",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/3859/102/712/17/w/448/3859102712_1_1_1.jpg?ts=1690990297099",
    "price": "₹ 2,290.00",
    "details": "V-neck vest.",
    "id": "productw364"
  },
  {
    "product_name": "KNIT TOP WITH CONTRAST SLEEVES",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/3991/103/712/2/w/448/3991103712_1_1_1.jpg?ts=1690983359071",
    "price": "₹ 2,590.00",
    "details": "Top featuring a round neck and short sleeves in contrast fabric.",
    "id": "productw365"
  },
  {
    "product_name": "CROPPED RIPPED KNIT CARDIGAN",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/4331/103/800/2/w/448/4331103800_1_1_1.jpg?ts=1690539218031",
    "price": "₹ 2,590.00",
    "details": "Long sleeve cardigan with a round neckline. Featuring ripped details, button fastening at the front and a front vent at the hem.",
    "id": "productw366"
  },
  {
    "product_name": "BASIC STRIPED JACKET",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/0506/109/105/17/w/448/0506109105_1_1_1.jpg?ts=1690990295933",
    "price": "₹ 2,990.00",
    "details": "Round neck jacket featuring long sleeves with an opening on the cuffs. Front fastening with faux pearl buttons.",
    "id": "productw367"
  },
  {
    "product_name": "CONTRAST KNIT DRESS WITH RUFFLES",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/3920/100/800/17/w/448/3920100800_1_1_1.jpg?ts=1690541780265",
    "price": "₹ 3,990.00",
    "details": "Dress with a V-neckline with ties and thin straps. Contrast fabric detail and ruffles.",
    "id": "productw368"
  },
  {
    "product_name": "KNIT HOODED CROP TOP",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/4331/108/200/22/w/448/4331108200_1_1_1.jpg?ts=1690542735388",
    "price": "₹ 2,590.00",
    "details": "Sleeveless top with a hood. Textured fabric in the shape of pompoms.",
    "id": "productw369"
  },
  {
    "product_name": "CROPPED CARDIGAN",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/5802/135/800/17/w/448/5802135800_1_1_1.jpg?ts=1690542089786",
    "price": "₹ 2,990.00",
    "details": "Textured V-neck jacket with long sleeves. Tied fastening at the front.",
    "id": "productw370"
  },
  {
    "product_name": "CABLE-KNIT SHIRT",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/6427/111/644/3/w/448/6427111644_1_1_1.jpg?ts=1690378252620",
    "price": "₹ 2,990.00",
    "details": "Collared shirt with long sleeves and a button-up front.",
    "id": "productw371"
  },
  {
    "product_name": "KNIT SEMI-SHEER STRAIGHT SKIRT",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/2142/149/804/3/w/448/2142149804_1_1_1.jpg?ts=1690378667935",
    "price": "₹ 2,990.00",
    "details": "High-waist skirt with an elastic waistband.This garment is not lined.",
    "id": "productw372"
  },
  {
    "product_name": "SEMI-SHEER KNIT TROUSERS",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/2142/129/800/2/w/448/2142129800_1_1_1.jpg?ts=1690371173209",
    "price": "₹ 2,990.00",
    "details": "High-waist trousers featuring an elastic waistband with adjustable drawstring. Elasticated cuffed hems.This garment is not lined.",
    "id": "productw373"
  },
  {
    "product_name": "KNIT SEMI-SHEER BOMBER JACKET",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/2142/147/804/2/w/448/2142147804_1_1_1.jpg?ts=1690371174330",
    "price": "₹ 5,990.00",
    "details": "V-neck long sleeve bomber jacket. Patch pockets with flaps on the front. Metal zip fastening at the front.This garment is not lined.",
    "id": "productw374"
  },
  {
    "product_name": "KNIT SEMI-SHEER STRAIGHT TOP",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/2142/148/804/2/w/448/2142148804_1_1_1.jpg?ts=1690371173869",
    "price": "₹ 2,990.00",
    "details": "Long sleeve top with a round neckline.This garment is not lined.",
    "id": "productw375"
  },
  {
    "product_name": "KNIT SWEATER WITH CONTRAST SLEEVES",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/5802/111/712/2/w/448/5802111712_1_1_1.jpg?ts=1690186602389",
    "price": "₹ 3,290.00",
    "details": "Open knit sweater with a round neckline and long contrast sleeves with lace fabric.This garment is not lined.",
    "id": "productw376"
  },
  {
    "product_name": "FRINGED KNIT TOP",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/3991/114/800/3/w/448/3991114800_1_1_1.jpg?ts=1690187821042",
    "price": "₹ 2,290.00",
    "details": "V-neck open-knit top with wide straps. Fringed hem.",
    "id": "productw377"
  },
  {
    "product_name": "KNIT MINI DRESS",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/3433/106/800/3/w/448/3433106800_1_1_1.jpg?ts=1690190628388",
    "price": "₹ 2,990.00",
    "details": "Dress with a wide round neckline and long flared sleeves.",
    "id": "productw378"
  },
  {
    "product_name": "POINTELLE KNIT MINI SKIRT",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/4331/079/800/2/w/448/4331079800_1_1_1.jpg?ts=1689936173253",
    "price": "₹ 2,590.00",
    "details": "High-waist skirt featuring an adjustable elasticated waistband with drawstrings. Ruffled hem.",
    "id": "productw379"
  },
  {
    "product_name": "STRIPED KNIT DRESS",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/3969/100/067/2/w/448/3969100067_1_1_1.jpg?ts=1689931443611",
    "price": "₹ 4,990.00",
    "details": "Dress with a square-cut neckline, wide long sleeves and contrast trims.",
    "id": "productw380"
  },
  {
    "product_name": "TEXTURED KNIT TOP WITH BEADS",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/3859/051/712/2/w/448/3859051712_1_1_1.jpg?ts=1689931448349",
    "price": "₹ 2,990.00",
    "details": "Round neck top with short sleeves. Turn-up trims and cutwork fabric with beads.",
    "id": "productw381"
  },
  {
    "product_name": "MATCHING KNIT TOP WITH TIES",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/4331/070/712/2/w/448/4331070712_1_1_1.jpg?ts=1689931447060",
    "price": "₹ 2,990.00",
    "details": "Top featuring a round neck and short sleeves with elastic trims. Ruffles and lace trim details. Tied fastening at the front.",
    "id": "productw382"
  },
  {
    "product_name": "MESH KNIT BOMBER JACKET",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/2308/010/800/2/w/448/2308010800_1_1_1.jpg?ts=1689931447825",
    "price": "₹ 3,290.00",
    "details": "Bomber jacket with a round neck and long sleeves with cuffs. Front zip fastening.",
    "id": "productw383"
  },
  {
    "product_name": "STRIPED KNIT SWEATER WITH HOOD",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/3390/101/105/2/w/448/3390101105_1_1_1.jpg?ts=1689931445086",
    "price": "₹ 2,290.00",
    "details": "Cropped V-neck sweater with a hood, drawstrings and long sleeves.",
    "id": "productw384"
  },
  {
    "product_name": "CONTRAST STRIPED KNIT DRESS",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/2142/117/704/2/w/448/2142117704_1_1_1.jpg?ts=1689931444718",
    "price": "₹ 4,990.00",
    "details": "Round neck dress with long sleeves. Contrast fabric detail on the skirt.",
    "id": "productw385"
  },
  {
    "product_name": "KNIT EMBROIDERED DRESS WITH BEADING",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/7521/008/303/2/w/448/7521008303_1_1_1.jpg?ts=1689602252281",
    "price": "₹ 17,990.00",
    "details": "Sleeveless round neck dress. Open back. Embroidered and beaded appliqués. Lining.",
    "id": "productw386"
  },
  {
    "product_name": "KNIT TUNIC WITH FRINGING",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/0195/101/807/2/w/448/0195101807_1_1_1.jpg?ts=1689595744976",
    "price": "₹ 4,990.00",
    "details": "Sleeveless midi tunic with a V-neck. Fringed hem.",
    "id": "productw387"
  },
  {
    "product_name": "CROPPED KNIT BOMBER JACKET",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/4938/101/712/2/w/448/4938101712_1_1_1.jpg?ts=1689854553240",
    "price": "₹ 4,990.00",
    "details": "Bomber jacket with a round neck and long sleeves. Patch pocket with flap and buckle on the sleeve. Zip-up front.",
    "id": "productw388"
  },
  {
    "product_name": "OVERSIZE KNIT T-SHIRT",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/3471/036/717/22/w/448/3471036717_1_1_1.jpg?ts=1691402855407",
    "price": "₹ 1,990.00",
    "details": "V-neck shirt with short sleeves.",
    "id": "productw389"
  },
  {
    "product_name": "WRAP KNIT CARDIGAN WITH METALLIC THREAD",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/2142/113/808/12/w/448/2142113808_1_1_1.jpg?ts=1690192914712",
    "price": "₹ 3,290.00",
    "details": "Long sleeve V-neck cardigan. Wrap fastening with tie.",
    "id": "productw390"
  },
  {
    "product_name": "OPEN KNIT SHORTS",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/6771/125/200/23/w/448/6771125200_1_1_1.jpg?ts=1691402781313",
    "price": "₹ 1,890.00",
    "details": "High-waist shorts with an elastic waistband.",
    "id": "productw391"
  },
  {
    "product_name": "KNIT SKIRT WITH BUCKLES",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/4938/103/712/2/w/448/4938103712_1_1_1.jpg?ts=1689854372480",
    "price": "₹ 3,290.00",
    "details": "High-waist skirt with buckles. Crossover front and patch pocket with flap and buckle. Flared hem.",
    "id": "productw392"
  },
  {
    "product_name": "METALLIC THREAD KNIT DRESS",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/2142/118/835/3/w/448/2142118835_1_1_1.jpg?ts=1689788860613",
    "price": "₹ 3,990.00",
    "details": "Dress with a V-neck and short sleeves. Thin strap at the neck.",
    "id": "productw393"
  },
  {
    "product_name": "METALLIC THREAD KNIT DRESS",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/3991/111/303/2/w/448/3991111303_1_1_1.jpg?ts=1689584768398",
    "price": "₹ 3,290.00",
    "details": "Short dress with a round neck and long sleeves. Metallic thread detail. Lining.",
    "id": "productw394"
  },
  {
    "product_name": "BASIC KNIT SWEATER",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/8851/017/105/12/w/448/8851017105_1_1_1.jpg?ts=1689698306769",
    "price": "₹ 1,990.00",
    "details": "Short sleeve sweater with a round neckline.",
    "id": "productw395"
  },
  {
    "product_name": "HIGH NECK KNIT SWEATER",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/8851/124/800/15/w/448/8851124800_1_1_1.jpg?ts=1689698376054",
    "price": "₹ 1,890.00",
    "details": "Knit sweater with a round neckline and sleeves falling below the elbow.",
    "id": "productw396"
  },
  {
    "product_name": "FRAYED KNIT BRALETTE",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/6771/094/200/17/w/448/6771094200_1_1_1.jpg?ts=1690213197276",
    "price": "₹ 1,590.00",
    "details": "Bralette with a straight neckline, thin straps and ripped details.",
    "id": "productw397"
  },
  {
    "product_name": "RIPPED KNIT ARM WARMERS",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/6771/093/200/17/w/448/6771093200_1_1_1.jpg?ts=1690213179147",
    "price": "₹ 1,990.00",
    "details": "Long sleeve arm warmers with a round neck. Ripped details.",
    "id": "productw398"
  },
  {
    "product_name": "STRAIGHT FIT KNIT TROUSERS",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/3471/041/717/2/w/448/3471041717_1_1_1.jpg?ts=1689337793349",
    "price": "₹ 2,590.00",
    "details": "High-waist trousers with an elastic waistband and straight-leg design.",
    "id": "productw399"
  },
  {
    "product_name": "OVERSIZE KNIT T-SHIRT",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/3471/035/250/2/w/448/3471035250_1_1_1.jpg?ts=1689337793060",
    "price": "₹ 1,990.00",
    "details": "Shirt with a round neckline and short sleeves.",
    "id": "productw400"
  },
  {
    "product_name": "OPEN KNIT TOP",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/3991/112/505/2/w/448/3991112505_1_1_1.jpg?ts=1689332905500",
    "price": "₹ 1,890.00",
    "details": "Sleeveless crop top with a round neckline.This garment is not lined.",
    "id": "productw401"
  },
  {
    "product_name": "KNIT DRESS WITH GOLD BUTTONS",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/3859/055/250/2/w/448/3859055250_1_1_1.jpg?ts=1688716765538",
    "price": "₹ 3,290.00",
    "details": "Short sleeveless dress with a round neckline, false golden buttons and a pleated hem.",
    "id": "productw402"
  },
  {
    "product_name": "KNIT BRALETTE WITH THIN STRAPS",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/9598/100/250/12/w/448/9598100250_1_1_1.jpg?ts=1690370088642",
    "price": "₹ 1,590.00",
    "details": "V-neck bralette with thin straps.",
    "id": "productw403"
  },
  {
    "product_name": "OPEN-KNIT MIDI DRESS",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/3991/107/712/2/w/448/3991107712_1_1_1.jpg?ts=1688716766700",
    "price": "₹ 3,290.00",
    "details": "Sleeveless dress with a round neck.",
    "id": "productw404"
  },
  {
    "product_name": "POINTELLE KNIT DRESS",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/5802/088/713/2/w/448/5802088713_1_1_1.jpg?ts=1688716766629",
    "price": "₹ 2,990.00",
    "details": "Short sleeveless dress with a round neckline.",
    "id": "productw405"
  },
  {
    "product_name": "POINTELLE KNIT TUNIC",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/6427/012/712/2/w/448/6427012712_1_1_1.jpg?ts=1689249151285",
    "price": "₹ 4,990.00",
    "details": "Tunic featuring a slot collar with drawstring. Long sleeves. Split hem.",
    "id": "productw406"
  },
  {
    "product_name": "KNIT CROP TOP WITH FRINGING",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/7901/100/712/2/w/448/7901100712_1_1_1.jpg?ts=1689249164099",
    "price": "₹ 3,990.00",
    "details": "Crop top with a round neck and long sleeves. Fringing at the hem. Buttoned opening at the back.",
    "id": "productw407"
  },
  {
    "product_name": "LONG KNIT SKIRT WITH FRINGING",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/7901/101/712/2/w/448/7901101712_1_1_1.jpg?ts=1689249172162",
    "price": "₹ 4,990.00",
    "details": "High-waist skirt. Fringing at the hem.",
    "id": "productw408"
  },
  {
    "product_name": "POINTELLE KNIT TOP WITH DRAWSTRING",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/9598/105/250/2/w/448/9598105250_1_1_1.jpg?ts=1689248909241",
    "price": "₹ 1,990.00",
    "details": "Top with a round neck and short sleeves. Drawstring detail at waist. Button-up front.",
    "id": "productw409"
  },
  {
    "product_name": "KNIT MIDI DRESS WITH GATHERING",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/2142/302/711/2/w/448/2142302711_1_1_1.jpg?ts=1689177072456",
    "price": "₹ 4,990.00",
    "details": "Sleeveless dress with a surplice neckline. Side gathering detail.",
    "id": "productw410"
  },
  {
    "product_name": "KNIT BOMBER JACKET WITH MATCHING CROCHET SLEEVES",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/3859/100/712/2/w/448/3859100712_1_1_1.jpg?ts=1689248907901",
    "price": "₹ 3,290.00",
    "details": "Round neck bomber jacket with long sleeves in matching crochet fabric. Zip-up front.",
    "id": "productw411"
  },
  {
    "product_name": "RIBBED KNIT BANDEAU TOP",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/4938/100/250/12/w/448/4938100250_1_1_1.jpg?ts=1689180013779",
    "price": "₹ 1,990.00",
    "details": "Top featuring a turn-down straight neckline.",
    "id": "productw412"
  },
  {
    "product_name": "KNIT TOP WITH OPEN BACK",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/5802/118/400/12/w/448/5802118400_1_1_1.jpg?ts=1689180013672",
    "price": "₹ 2,590.00",
    "details": "Top featuring a round neck and long sleeves with cuffs. Open back with tie detail.",
    "id": "productw413"
  },
  {
    "product_name": "CONTRAST CROCHET KNIT DRESS",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/7200/003/330/2/w/448/7200003330_1_1_1.jpg?ts=1689175062482",
    "price": "₹ 4,990.00",
    "details": "Midi dress featuring a straight neckline with a drawstring and thin straps. Ruffled hem.",
    "id": "productw414"
  },
  {
    "product_name": "KNIT WAISTCOAT WITH PATCH POCKETS",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/6771/106/712/2/w/448/6771106712_1_1_1.jpg?ts=1688996664953",
    "price": "₹ 2,990.00",
    "details": "Round neck waistcoat featuring front patch pockets and front button fastening.",
    "id": "productw415"
  },
  {
    "product_name": "CONTRAST CROCHET KNIT DRESS",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/4331/113/800/17/w/448/4331113800_1_1_1.jpg?ts=1688999503474",
    "price": "₹ 3,990.00",
    "details": "Dress with straight neckline and thin straps. Matching crochet fabric detail and tonal embroidery.",
    "id": "productw416"
  },
  {
    "product_name": "KNIT TOP WITH SIDE KNOTS",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/0234/103/800/17/w/448/0234103800_1_1_1.jpg?ts=1688999366558",
    "price": "₹ 1,890.00",
    "details": "Sleeveless round neck top. Openings on the sides with ties.",
    "id": "productw417"
  },
  {
    "product_name": "CROPPED KNIT HOODIE",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/6771/108/800/2/w/448/6771108800_1_1_1.jpg?ts=1688996665197",
    "price": "₹ 2,990.00",
    "details": "Open-knit sweater with ripped details, a hood and long sleeves.",
    "id": "productw418"
  },
  {
    "product_name": "KNIT SKIRT WITH BUTTONS",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/9598/109/200/2/w/448/9598109200_1_1_1.jpg?ts=1688996666630",
    "price": "₹ 2,590.00",
    "details": "High-waist skirt with an elasticated waistband. Flap details and false front buttons.",
    "id": "productw419"
  },
  {
    "product_name": "STRIPED KNIT VEST",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/6771/102/104/12/w/448/6771102104_1_1_1.jpg?ts=1688980089081",
    "price": "₹ 2,590.00",
    "details": "Sleeveless V-neck vest. Split hem.",
    "id": "productw420"
  },
  {
    "product_name": "STRAPPY KNIT DRESS WITH KNOTS",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/6771/111/800/12/w/448/6771111800_1_1_1.jpg?ts=1688980089370",
    "price": "₹ 3,290.00",
    "details": "Open-knit midi dress with lining. Round neckline and thin tied straps.",
    "id": "productw421"
  },
  {
    "product_name": "CROPPED KNIT CUTWORK BOMBER JACKET",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/6216/100/800/12/w/448/6216100800_1_1_1.jpg?ts=1688980090156",
    "price": "₹ 2,990.00",
    "details": "Bomber jacket with cutwork fabric, a round neckline and long sleeves. Zip-up front.This garment is not lined.",
    "id": "productw422"
  },
  {
    "product_name": "CUT-OUT KNIT TOP",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/3920/037/250/12/w/448/3920037250_1_1_1.jpg?ts=1688980090451",
    "price": "₹ 2,290.00",
    "details": "Sleeveless round neck crop top with cut-out detail on the sides and rhinestone appliqué.",
    "id": "productw423"
  },
  {
    "product_name": "INTERWOVEN KNIT VEST",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/5755/103/832/12/w/448/5755103832_1_1_1.jpg?ts=1688980089910",
    "price": "₹ 2,590.00",
    "details": "Round neck vest.",
    "id": "productw424"
  },
  {
    "product_name": "CONTRAST CROCHET KNIT DRESS",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/3653/104/400/12/w/448/3653104400_1_1_1.jpg?ts=1688980092475",
    "price": "₹ 5,990.00",
    "details": "Sleeveless midi dress with a round neck and contrast crochet fabric detail.",
    "id": "productw425"
  },
  {
    "product_name": "KNIT DRESS WITH COMBINED EMBROIDERY",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/5802/102/050/12/w/448/5802102050_1_1_1.jpg?ts=1688980091874",
    "price": "₹ 3,290.00",
    "details": "Halterneck dress with an open back. Contrast fabric detail with cutwork embroidery.",
    "id": "productw426"
  },
  {
    "product_name": "STRAPPY KNIT DRESS",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/3500/002/330/2/w/448/3500002330_1_1_1.jpg?ts=1688568110888",
    "price": "₹ 3,290.00",
    "details": "V-neck dress with thin straps.",
    "id": "productw427"
  },
  {
    "product_name": "CONTRAST STRIPED KNIT DRESS",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/2142/110/080/12/w/448/2142110080_1_1_1.jpg?ts=1688980089412",
    "price": "₹ 3,990.00",
    "details": "Sleeveless dress with a round neckline and contrast fabric detail.",
    "id": "productw428"
  },
  {
    "product_name": "JACQUARD KNIT TUNIC DRESS",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/3859/053/500/12/w/448/3859053500_1_1_1.jpg?ts=1688980090901",
    "price": "₹ 4,990.00",
    "details": "Tunic dress with a slot collar and long wide sleeves.",
    "id": "productw429"
  },
  {
    "product_name": "KNIT TOP WITH SIDE CUT-OUT DETAIL",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/6771/086/712/2/w/448/6771086712_1_1_1.jpg?ts=1688568108616",
    "price": "₹ 2,590.00",
    "details": "Sleeveless perforated knit sweater with a round neck. Side cut-out detail. Asymmetric hem.",
    "id": "productw430"
  },
  {
    "product_name": "OPEN-KNIT TUNIC WITH FRINGING",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/2308/011/712/2/w/448/2308011712_1_1_1.jpg?ts=1688568107076",
    "price": "₹ 2,990.00",
    "details": "Tunic with a round neck and short sleeves. Fringing on the hem.",
    "id": "productw431"
  },
  {
    "product_name": "CROPPED RIPPED KNIT CARDIGAN",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/6771/105/712/12/w/448/6771105712_1_1_1.jpg?ts=1688980090382",
    "price": "₹ 2,590.00",
    "details": "V-neck cardigan with long sleeves, ripped details and button fastening at the front.",
    "id": "productw432"
  },
  {
    "product_name": "KNIT CROP TOP WITH BUTTONS",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/6771/120/746/2/w/448/6771120746_1_1_1.jpg?ts=1688568108438",
    "price": "₹ 1,890.00",
    "details": "Sleeveless round neck top. Button-up front.",
    "id": "productw433"
  },
  {
    "product_name": "CROP TOP WITH OPEN BACK",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/4331/122/712/2/w/448/4331122712_1_1_1.jpg?ts=1688568107354",
    "price": "₹ 1,890.00",
    "details": "Halterneck top with thin straps. Open back detail. Tied fastening at the back.",
    "id": "productw434"
  },
  {
    "product_name": "KNIT LINEN BLEND DRESS",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/2142/103/807/2/w/448/2142103807_1_1_1.jpg?ts=1688568108115",
    "price": "₹ 4,990.00",
    "details": "Dress made of a linen blend. Featuring a round neckline, thin straps and long sleeves with exposed shoulders.",
    "id": "productw435"
  },
  {
    "product_name": "OPEN-BACK KNIT DRESS",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/1509/102/703/2/w/448/1509102703_1_1_1.jpg?ts=1688568106568",
    "price": "₹ 3,290.00",
    "details": "Round neck dress with thin straps that cross at the back.",
    "id": "productw436"
  },
  {
    "product_name": "KNIT DRESS WITH CONTRAST DETAIL",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/0234/101/798/2/w/448/0234101798_1_1_1.jpg?ts=1688568106032",
    "price": "₹ 3,990.00",
    "details": "Midi dress featuring a V-neck with thin straps and bead appliqués. Contrast fabric detail.",
    "id": "productw437"
  },
  {
    "product_name": "OPEN-KNIT SWEATER",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/6771/110/800/12/w/448/6771110800_1_1_1.jpg?ts=1688571634935",
    "price": "₹ 2,990.00",
    "details": "Cropped round neck sweater with long sleeves.This garment is not lined.",
    "id": "productw438"
  },
  {
    "product_name": "KNIT BANDEAU TOP",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/4331/081/712/2/w/448/4331081712_1_1_1.jpg?ts=1687942738605",
    "price": "₹ 1,890.00",
    "details": "Crop top with a straight neckline with a front slit.",
    "id": "productw439"
  },
  {
    "product_name": "SHORT JACQUARD KNIT TUNIC DRESS",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/9598/110/330/2/w/448/9598110330_1_1_1.jpg?ts=1687958602278",
    "price": "₹ 4,990.00",
    "details": "Short tunic dress with a V-neckline and wide sleeves falling below the elbow.",
    "id": "productw440"
  },
  {
    "product_name": "CONTRAST KNIT TOP WITH BOW",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/3991/056/746/12/w/448/3991056746_1_1_1.jpg?ts=1687958520760",
    "price": "₹ 2,590.00",
    "details": "Top with a straight-cut neckline and wide straps. Contrast fabric detail with embroidery and bow on the front.",
    "id": "productw441"
  },
  {
    "product_name": "KNIT DRESS WITH COMBINED EMBROIDERY",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/4331/114/712/2/w/448/4331114712_1_1_1.jpg?ts=1687942738995",
    "price": "₹ 3,290.00",
    "details": "Dress with a straight neckline with front slit. Contrast fabric detail with cutwork embroidery.",
    "id": "productw442"
  },
  {
    "product_name": "METALLIC MESH KNIT CAPE",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/2142/102/808/2/w/448/2142102808_1_1_1.jpg?ts=1687509412876",
    "price": "₹ 3,290.00",
    "details": "Oversize round neck cape with long sleeves.",
    "id": "productw443"
  },
  {
    "product_name": "LONG METALLIC MESH KNIT DRESS",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/3653/103/808/2/w/448/3653103808_1_1_1.jpg?ts=1687509417027",
    "price": "₹ 5,990.00",
    "details": "Dress with a round neck and long sleeves.This garment is not lined.",
    "id": "productw444"
  },
  {
    "product_name": "METALLIC THREAD KNIT DRESS",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/0014/101/808/2/w/448/0014101808_1_1_1.jpg?ts=1687509416671",
    "price": "₹ 4,990.00",
    "details": "Dress with a crossed halter neckline. Metallic thread detail.",
    "id": "productw445"
  },
  {
    "product_name": "METALLIC THREAD KNIT SWEATER",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/1509/107/808/2/w/448/1509107808_1_1_1.jpg?ts=1686756721771",
    "price": "₹ 2,990.00",
    "details": "Semi-sheer sweater with a wide round neckline and long sleeves.This garment is not lined.",
    "id": "productw446"
  },
  {
    "product_name": "METALLIC THREAD KNIT STRAIGHT LEG TROUSERS",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/1509/108/808/12/w/448/1509108808_1_1_1.jpg?ts=1687514415195",
    "price": "₹ 2,990.00",
    "details": "Semi-sheer high-waist trousers with an elasticated waistband. Straight-leg design.This garment is not lined.",
    "id": "productw447"
  },
  {
    "product_name": "KNIT CROP TOP WITH METALLIC THREAD",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/4331/110/330/2/w/448/4331110330_1_1_1.jpg?ts=1687521609268",
    "price": "₹ 2,990.00",
    "details": "Crop top with a round neckline and long sleeves.",
    "id": "productw448"
  },
  {
    "product_name": "POINTELLE KNIT TROUSERS",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/5802/077/712/17/w/448/5802077712_1_1_1.jpg?ts=1687346089733",
    "price": "₹ 3,290.00",
    "details": "High-waist trousers with an elastic waistband and a straight-leg design.",
    "id": "productw449"
  },
  {
    "product_name": "POINTELLE KNIT TUNIC",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/5802/076/712/12/w/448/5802076712_1_1_1.jpg?ts=1687346084802",
    "price": "₹ 3,290.00",
    "details": "Sleeveless tunic with a V-neck and drawstring.",
    "id": "productw450"
  },
  {
    "product_name": "PRINTED DENIM KNIT DRESS",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/6427/108/400/22/w/448/6427108400_1_1_1.jpg?ts=1686837848676",
    "price": "₹ 2,990.00",
    "details": "Midi dress with a straight-cut neckline and thin straps.",
    "id": "productw451"
  },
  {
    "product_name": "TEXTURED KNIT DRESS",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/5802/090/800/2/w/448/5802090800_1_1_1.jpg?ts=1686754714347",
    "price": "₹ 3,290.00",
    "details": "Short dress with a tied V-neckline and long sleeves.",
    "id": "productw452"
  },
  {
    "product_name": "KNOTTED KNIT SKIRT WITH METALLIC THREAD",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/6427/024/303/17/w/448/6427024303_1_1_1.jpg?ts=1686756584151",
    "price": "₹ 2,990.00",
    "details": "Midi skirt with a front knot. Front slit at the hem. Metallic thread detail.",
    "id": "productw453"
  },
  {
    "product_name": "KNIT CUT-OUT SKIRT",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/3920/038/250/18/w/448/3920038250_1_1_1.jpg?ts=1686913502381",
    "price": "₹ 2,890.00",
    "details": "High-waist midi skirt featuring an elasticated waistband with side cut-out detail, rhinestone appliqué and a side slit at the hem.",
    "id": "productw454"
  },
  {
    "product_name": "POINTELLE KNIT TOP",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/4331/059/712/17/w/448/4331059712_1_1_1.jpg?ts=1686830773603",
    "price": "₹ 2,990.00",
    "details": "V-neck top with short ruffled sleeves and front button-up fastening.",
    "id": "productw455"
  },
  {
    "product_name": "KNIT CROCHET MINI SKIRT",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/6771/096/800/18/w/448/6771096800_1_1_1.jpg?ts=1686830787243",
    "price": "₹ 2,290.00",
    "details": "High-waist short skirt.",
    "id": "productw456"
  },
  {
    "product_name": "OVERSIZE KNIT VEST",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/6771/090/052/2/w/448/6771090052_1_1_1.jpg?ts=1686752995747",
    "price": "₹ 2,990.00",
    "details": "Round neck vest. Side vents at the hem.",
    "id": "productw457"
  },
  {
    "product_name": "KNIT CROP TOP",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/5802/100/401/2/w/448/5802100401_1_1_1.jpg?ts=1686752995796",
    "price": "₹ 2,290.00",
    "details": "Sleeveless top with a round neckline. An open back with crossed ties and contrast trims.",
    "id": "productw458"
  },
  {
    "product_name": "KNIT DRESS WITH CONTRAST DETAIL",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/3991/034/712/12/w/448/3991034712_1_1_1.jpg?ts=1686223421553",
    "price": "₹ 4,990.00",
    "details": "V-neck dress with thin straps and a contrast fabric detail.",
    "id": "productw459"
  },
  {
    "product_name": "KNIT HOODED TOP WITH METALLIC THREAD",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/8146/113/303/2/w/448/8146113303_6_1_1.jpg?ts=1686148947941",
    "price": "₹ 2,990.00",
    "details": "Sleeveless top with a hood. Metallic thread detail.",
    "id": "productw460"
  },
  {
    "product_name": "METALLIC THREAD KNIT SHORTS",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/8146/114/303/2/w/448/8146114303_1_1_1.jpg?ts=1685617116281",
    "price": "₹ 2,290.00",
    "details": "High-waist shorts featuring adjustable elastic waistband with drawstring. Lining.",
    "id": "productw461"
  },
  {
    "product_name": "TIE-DYE KNIT MIDI SKIRT",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/6427/022/050/2/w/448/6427022050_1_1_1.jpg?ts=1686296885641",
    "price": "₹ 2,290.00",
    "details": "High-waist pencil skirt with an elastic waistband.",
    "id": "productw462"
  },
  {
    "product_name": "ASYMMETRIC TIE-DYE KNIT TOP",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/6427/021/050/2/w/448/6427021050_1_1_1.jpg?ts=1686302927910",
    "price": "₹ 1,890.00",
    "details": "Crop top with an asymmetric neckline and a long sleeve.",
    "id": "productw463"
  },
  {
    "product_name": "COMBINED KNITTED TOP",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/3859/049/251/2/w/448/3859049251_1_1_1.jpg?ts=1686296884695",
    "price": "₹ 3,290.00",
    "details": "Long sleeve top with a square-cut neckline. Contrast fabric with cutwork embroidery. Adjustable drawstring waistband.",
    "id": "productw464"
  },
  {
    "product_name": "POINTELLE KNIT MINI DRESS",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/9598/113/800/2/w/448/9598113800_1_1_1.jpg?ts=1686153250724",
    "price": "₹ 3,290.00",
    "details": "Sleeveless dress with a round neck and contrast cutwork fabric detail.",
    "id": "productw465"
  },
  {
    "product_name": "METALLIC THREAD KNIT CROP TOP",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/9598/104/303/2/w/448/9598104303_1_1_1.jpg?ts=1685609894053",
    "price": "₹ 2,590.00",
    "details": "Top with a round neck and long sleeves. Cutwork and metallic thread detail.",
    "id": "productw466"
  },
  {
    "product_name": "METALLIC THREAD KNIT TOP",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/4331/101/800/17/w/448/4331101800_1_1_1.jpg?ts=1686913513796",
    "price": "₹ 3,290.00",
    "details": "Top with a round neck and sleeves falling below the elbow. Metallic thread detail and open back. Tied fastening at the back.",
    "id": "productw467"
  },
  {
    "product_name": "LONG KNIT DRESS",
    "image_url": "https://static.zara.net/photos///2023/V/0/1/p/3991/025/712/2/w/448/3991025712_1_1_1.jpg?ts=1680010217969",
    "price": "₹ 3,290.00",
    "details": "V-neck dress with thin straps. Contrast topstitching details.",
    "id": "productw468"
  },
  {
    "product_name": "CONTRAST TOP",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/3991/101/712/12/w/448/3991101712_1_1_1.jpg?ts=1687514416105",
    "price": "₹ 2,590.00",
    "details": "Crop top with a straight neckline with a drawstring. Short sleeves and wide straps with exposed shoulders. Ruffled trims and matching embroidery.",
    "id": "productw469"
  },
  {
    "product_name": "CONTRAST LACE KNIT TOP",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/3991/104/050/2/w/448/3991104050_1_1_1.jpg?ts=1689249127532",
    "price": "₹ 2,590.00",
    "details": "V-neck top with thin straps.",
    "id": "productw470"
  },
  {
    "product_name": "METALLIC MESH KNIT TOP",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/3327/005/808/2/w/448/3327005808_1_1_1.jpg?ts=1687521610280",
    "price": "₹ 2,990.00",
    "details": "Top with a round neckline and long ample sleeves. This garment is not lined.",
    "id": "productw471"
  },
  {
    "product_name": "TAILORED DOUBLE-BREASTED BLAZER",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/7608/548/800/21/w/448/7608548800_2_1_1.jpg?ts=1691149647678",
    "price": "₹ 5,590.00",
    "details": "Blazer featuring a lapel collar with long sleeves and padded shoulders. Front flap pockets. Double-breasted button fastening on the front.",
    "id": "productw472"
  },
  {
    "product_name": "STRIPE TEXTURED BLAZER",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/8341/112/070/2/w/448/8341112070_1_1_1.jpg?ts=1691577078132",
    "price": "₹ 5,990.00",
    "details": "Lapelless blazer with long sleeves and shoulder pads. Front patch pockets. Metal hook fastening at the front.",
    "id": "productw473"
  },
  {
    "product_name": "TAILORED WAISTCOAT",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/2753/535/800/2/w/448/2753535800_1_1_1.jpg?ts=1691758137247",
    "price": "₹ 2,990.00",
    "details": "Sleeveless waistcoat with a V-neck. Front jetted pockets on the front. Button-up front.",
    "id": "productw474"
  },
  {
    "product_name": "STRAIGHT BLAZER",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/9929/327/526/2/w/448/9929327526_1_1_1.jpg?ts=1691758471978",
    "price": "₹ 4,990.00",
    "details": "Blazer featuring a lapel collar with long sleeves and padded shoulders. Front flap pockets. Single button fastening on the front.",
    "id": "productw475"
  },
  {
    "product_name": "BLAZER WITH ROLLED-UP SLEEVES",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/2140/760/800/12/w/448/2140760800_1_1_1.jpg?ts=1689595278875",
    "price": "₹ 4,490.00",
    "details": "Open blazer with a lapel collar and padded shoulders. Turn-up sleeves falling below the elbow with sleeve tabs and a golden button. Front flap pockets.",
    "id": "productw476"
  },
  {
    "product_name": "HIGH NECK TEXTURED BLAZER",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/8001/513/251/2/w/448/8001513251_6_1_1.jpg?ts=1690529214282",
    "price": "₹ 5,990.00",
    "details": "Blazer featuring a high neck and long sleeves with padded shoulders. False flap pockets and front patch pockets. Front hook fastening.",
    "id": "productw477"
  },
  {
    "product_name": "SHORT TAILORED WAISTCOAT",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/9929/329/704/2/w/448/9929329704_1_1_1.jpg?ts=1693208680604",
    "price": "₹ 2,990.00",
    "details": "V-neck waistcoat. Featuring false welt pockets and button fastening on the front.",
    "id": "productw478"
  },
  {
    "product_name": "FITTED BLAZER WITH SEAMS",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/2753/345/401/2/w/448/2753345401_1_1_1.jpg?ts=1692352292134",
    "price": "₹ 5,990.00",
    "details": "Blazer with a lapel collar and long sleeves with shoulder pads. Front flap pockets. Visible seam detail on the waist. Fastens at the front with buttons.",
    "id": "productw479"
  },
  {
    "product_name": "LONG BLAZER WITH BELT",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/8165/642/420/2/w/448/8165642420_1_1_1.jpg?ts=1692362193581",
    "price": "₹ 7,590.00",
    "details": "Blazer with a lapel collar, long sleeves and shoulder pads. Front flap pockets. Belt with buckle lined in matching fabric. Contrast lining. Double-breasted fastening with covered buttons.",
    "id": "productw480"
  },
  {
    "product_name": "CROPPED BLAZER WITH FEATHERS",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/7602/484/631/2/w/448/7602484631_1_1_1.jpg?ts=1689579070170",
    "price": "₹ 11,990.00",
    "details": "Cropped blazer featuring a lapel collar and long sleeves with matching detachable feathers. False welt pockets on the front. Matching lining. Front button fastening.",
    "id": "productw481"
  },
  {
    "product_name": "CAPE BLAZER",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/2876/187/712/22/w/448/2876187712_1_1_1.jpg?ts=1687531940333",
    "price": "₹ 5,990.00",
    "details": "Open blazer with no lapels, long cape-style sleeves and matching lining.",
    "id": "productw482"
  },
  {
    "product_name": "TAILORED WAISTCOAT",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/2010/715/743/2/w/448/2010715743_1_1_1.jpg?ts=1692704247795",
    "price": "₹ 2,990.00",
    "details": "Fitted V-neck waistcoat with front button fastening.",
    "id": "productw483"
  },
  {
    "product_name": "TAILORED WAISTCOAT",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/8178/736/712/2/w/448/8178736712_1_1_1.jpg?ts=1690454102579",
    "price": "₹ 3,290.00",
    "details": "V-neck waistcoat. Featuring false jetted pockets and button fastening on the front.",
    "id": "productw484"
  },
  {
    "product_name": "CROPPED BLAZER WITH POCKET",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/2010/832/800/3/w/448/2010832800_1_1_1.jpg?ts=1692193508630",
    "price": "₹ 4,990.00",
    "details": "Cropped blazer with a lapel collar and long sleeves with vents and buttons. Buttoned welt pocket on the chest. Matching lining.",
    "id": "productw485"
  },
  {
    "product_name": "SATIN LAPEL COLLAR BLAZER",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/4387/343/800/17/w/448/4387343800_1_1_1.jpg?ts=1692365587587",
    "price": "₹ 4,990.00",
    "details": "Satin blazer with a lapel collar and long sleeves with padded shoulders. Button fastening on the front.",
    "id": "productw486"
  },
  {
    "product_name": "DOUBLE-BREASTED OVERSIZED BLAZER",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/2753/332/803/2/w/448/2753332803_1_1_1.jpg?ts=1692203340480",
    "price": "₹ 4,590.00",
    "details": "Loose-fitting blazer featuring a lapel collar, long sleeves with pronounced shoulders, front flap pockets and front double-breasted button fastening.",
    "id": "productw487"
  },
  {
    "product_name": "LINEN BLEND ROLL-UP SLEEVE OPEN BLAZER",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/8185/778/710/2/w/448/8185778710_1_1_1.jpg?ts=1689258559264",
    "price": "₹ 4,990.00",
    "details": "Blazer made of a linen blend fabric. Lapel collar and roll-up sleeves with buttoned tabs. Padded shoulders. Front flap pockets.",
    "id": "productw488"
  },
  {
    "product_name": "TEXTURED DOUBLE-BREASTED BLAZER",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/2753/422/401/2/w/448/2753422401_1_1_1.jpg?ts=1692202713000",
    "price": "₹ 5,990.00",
    "details": "Fitted blazer featuring a lapel collar and long sleeves with shoulder pads. Featuring front welt pockets and double-breasted front button fastening.",
    "id": "productw489"
  },
  {
    "product_name": "LAPELLESS SHORT BLAZER",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/8039/178/632/2/w/448/8039178632_1_1_1.jpg?ts=1691658206961",
    "price": "₹ 5,990.00",
    "details": "Lapelless short blazer featuring long sleeves with openings. Front welt pockets. Matching lining.",
    "id": "productw490"
  },
  {
    "product_name": "TAILORED LINEN BLEND WAISTCOAT",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/7747/939/052/3/w/448/7747939052_1_1_1.jpg?ts=1687434571721",
    "price": "₹ 2,990.00",
    "details": "V-neck waistcoat made of a linen blend. Featuring front welt pockets and front button fastening.",
    "id": "productw491"
  },
  {
    "product_name": "TAILORED LINEN WAISTCOAT",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/7747/372/450/2/w/448/7747372450_1_1_1.jpg?ts=1692281895059",
    "price": "₹ 2,990.00",
    "details": "V-neck waistcoat made of 100% linen. Front welt pockets and front button fastening.",
    "id": "productw492"
  },
  {
    "product_name": "TEXTURED VEST WITH FRAYED TRIMS",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/7484/245/800/2/w/448/7484245800_1_1_1.jpg?ts=1692203338091",
    "price": "₹ 4,990.00",
    "details": "Sleeveless waistcoat with a lapel collar. Front patch pockets. Fringed trim details. Golden embossed button front fastening.",
    "id": "productw493"
  },
  {
    "product_name": "WAISTCOAT WITH VENT",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/7762/304/710/2/w/448/7762304710_1_1_1.jpg?ts=1685693896770",
    "price": "₹ 3,290.00",
    "details": "Waistcoat made of viscose. V-neck. Back vent at the hem. Lining. Button-up front.",
    "id": "productw494"
  },
  {
    "product_name": "DOUBLE-BREASTED BLAZER WITH LAPEL COLLAR",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/8375/701/712/2/w/448/8375701712_1_1_1.jpg?ts=1692792857703",
    "price": "₹ 5,990.00",
    "details": "Blazer with a lapel collar, long sleeves and padded shoulders. Front flap pockets and a welt chest pocket. Matching lining. Covered buttons on this front.",
    "id": "productw495"
  },
  {
    "product_name": "BASIC BLAZER",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/2010/750/800/17/w/448/2010750800_1_1_1.jpg?ts=1692193680642",
    "price": "₹ 5,990.00",
    "details": "Blazer featuring a lapel collar and long sleeves with padded shoulders. Front flap pockets and a chest welt pocket. Back vent at the hem. Button-up front.",
    "id": "productw496"
  },
  {
    "product_name": "CROSSOVER WAISTCOAT",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/8372/352/711/2/w/448/8372352711_1_1_1.jpg?ts=1690366719497",
    "price": "₹ 4,990.00",
    "details": "Waistcoat with a lapel collar and pronounced shoulders. Featuring false front welt pockets and double breasted button fastening on the front.",
    "id": "productw497"
  },
  {
    "product_name": "CROPPED LINEN BLEND WAISTCOAT",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/3736/240/615/12/w/448/3736240615_1_1_1.jpg?ts=1689693563165",
    "price": "₹ 3,290.00",
    "details": "Short sleeveless waistcoat made of a linen blend fabric. V-neck. False welt pockets on the front. Matching lining. Button-up front.",
    "id": "productw498"
  },
  {
    "product_name": "LINEN BLEND WAISTCOAT",
    "image_url": "https://static.zara.net/photos///2023/V/0/1/p/2010/711/832/2/w/448/2010711832_1_1_1.jpg?ts=1684404030109",
    "price": "₹ 2,990.00",
    "details": "Sleeveless waistcoat made of a linen blend fabric. V-neck. False welt pockets on the front. Button-up front.",
    "id": "productw499"
  },
  {
    "product_name": "WRINKLED-EFFECT DOUBLE-BREASTED BLAZER",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/1165/320/712/2/w/448/1165320712_1_1_1.jpg?ts=1690454101590",
    "price": "₹ 3,990.00",
    "details": "Blazer featuring a lapel collar and turn-up long sleeves. Double-breasted fastening on the front with buttons.",
    "id": "productw500"
  },
  {
    "product_name": "DOUBLE-BREASTED LINEN BLEND BLAZER",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/8194/394/711/2/w/448/8194394711_1_1_1.jpg?ts=1690965015194",
    "price": "₹ 6,990.00",
    "details": "Blazer made of linen blend fabric. Lapel collar, long sleeves and padded shoulders. Front flap pockets. Double-breasted front button fastening.",
    "id": "productw501"
  },
  {
    "product_name": "TEXTURED DOUBLE-BREASTED BLAZER",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/7609/904/251/12/w/448/7609904251_1_1_1.jpg?ts=1685978500481",
    "price": "₹ 6,990.00",
    "details": "Blazer featuring a lapel collar and long sleeves with shoulder pads. Featuring front pockets with flaps and double-breasted front fastening with textured gold buttons.",
    "id": "productw502"
  },
  {
    "product_name": "LINEN BLEND WAISTCOAT",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/8008/967/727/2/w/448/8008967727_1_1_1.jpg?ts=1688566404918",
    "price": "₹ 3,290.00",
    "details": "Waistcoat made of a linen blend. V-neckline and no sleeves. Matching lining. Button-up front.",
    "id": "productw503"
  },
  {
    "product_name": "LINEN BLEND OVERSIZE WAISTCOAT",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/7836/967/802/2/w/448/7836967802_1_1_1.jpg?ts=1689761503813",
    "price": "₹ 5,990.00",
    "details": "Sleeveless loose-fitting waistcoat made of a linen blend. Lapel collar. Flap pockets on the front and chest welt pockets. Matching lining. Back vent at the hem. Button-up front.",
    "id": "productw504"
  },
  {
    "product_name": "TEXTURED DOUBLE-BREASTED BLAZER",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/7623/815/330/12/w/448/7623815330_1_1_1.jpg?ts=1692002574847",
    "price": "₹ 5,990.00",
    "details": "Blazer featuring a lapel collar, long sleeves and padded shoulders. Frayed trims. Double-breasted button fastening on the front.",
    "id": "productw505"
  },
  {
    "product_name": "LINEN BLAZER WITH PRINTED CUFFS",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/7726/392/401/2/w/448/7726392401_1_1_1.jpg?ts=1687440647303",
    "price": "₹ 4,990.00",
    "details": "Open blazer featuring a lapel collar, turn-up long sleeves and padded shoulders. Front flap pockets.",
    "id": "productw506"
  },
  {
    "product_name": "CROPPED DOUBLE-BREASTED BLAZER",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/7102/332/251/2/w/448/7102332251_1_1_1.jpg?ts=1691511618785",
    "price": "₹ 4,990.00",
    "details": "Blazer featuring a lapel collar and long sleeves with shoulder pads. Double-breasted front with buttons.",
    "id": "productw507"
  },
  {
    "product_name": "LINEN WAISTCOAT WITH TOPSTITCHING",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/4043/272/802/3/w/448/4043272802_1_1_1.jpg?ts=1689782150340",
    "price": "₹ 3,990.00",
    "details": "Short collared waistcoat made of 100% linen. Patch pockets with buttoned flaps on the front. Contrast visible topstitching details. Button-up front.",
    "id": "productw508"
  },
  {
    "product_name": "LINEN BLEND WAISTCOAT",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/8072/967/515/2/w/448/8072967515_1_1_1.jpg?ts=1688124231813",
    "price": "₹ 3,290.00",
    "details": "Waistcoat made of a linen and lyocell blend. V-neckline and no sleeves. Lining. Button-up front.",
    "id": "productw509"
  },
  {
    "product_name": "OPEN BACK HALTER WAISTCOAT",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/7926/446/800/3/w/448/7926446800_1_1_1.jpg?ts=1689780805789",
    "price": "₹ 3,290.00",
    "details": "Halter waistcoat featuring a V-neck and made of a wool blend. False welt pockets on the front. Open back and adjustable strap in the same fabric with buckle. Asymmetric hem. Button-up front.",
    "id": "productw510"
  },
  {
    "product_name": "TAILORED DOUBLE-BREASTED BLAZER",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/7608/548/800/21/w/448/7608548800_2_1_1.jpg?ts=1691149647678",
    "price": "₹ 5,590.00",
    "details": "Blazer featuring a lapel collar with long sleeves and padded shoulders. Front flap pockets. Double-breasted button fastening on the front.",
    "id": "productw539"
  },
  {
    "product_name": "STRIPE TEXTURED BLAZER",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/8341/112/070/2/w/448/8341112070_1_1_1.jpg?ts=1691577078132",
    "price": "₹ 5,990.00",
    "details": "Lapelless blazer with long sleeves and shoulder pads. Front patch pockets. Metal hook fastening at the front.",
    "id": "productw540"
  },
  {
    "product_name": "TAILORED WAISTCOAT",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/2753/535/800/2/w/448/2753535800_1_1_1.jpg?ts=1691758137247",
    "price": "₹ 2,990.00",
    "details": "Sleeveless waistcoat with a V-neck. Front jetted pockets on the front. Button-up front.",
    "id": "productw541"
  },
  {
    "product_name": "STRAIGHT BLAZER",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/9929/327/526/2/w/448/9929327526_1_1_1.jpg?ts=1691758471978",
    "price": "₹ 4,990.00",
    "details": "Blazer featuring a lapel collar with long sleeves and padded shoulders. Front flap pockets. Single button fastening on the front.",
    "id": "productw542"
  },
  {
    "product_name": "BLAZER WITH ROLLED-UP SLEEVES",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/2140/760/800/12/w/448/2140760800_1_1_1.jpg?ts=1689595278875",
    "price": "₹ 4,490.00",
    "details": "Open blazer with a lapel collar and padded shoulders. Turn-up sleeves falling below the elbow with sleeve tabs and a golden button. Front flap pockets.",
    "id": "productw543"
  },
  {
    "product_name": "HIGH NECK TEXTURED BLAZER",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/8001/513/251/2/w/448/8001513251_6_1_1.jpg?ts=1690529214282",
    "price": "₹ 5,990.00",
    "details": "Blazer featuring a high neck and long sleeves with padded shoulders. False flap pockets and front patch pockets. Front hook fastening.",
    "id": "productw544"
  },
  {
    "product_name": "SHORT TAILORED WAISTCOAT",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/9929/329/704/2/w/448/9929329704_1_1_1.jpg?ts=1693208680604",
    "price": "₹ 2,990.00",
    "details": "V-neck waistcoat. Featuring false welt pockets and button fastening on the front.",
    "id": "productw545"
  },
  {
    "product_name": "FITTED BLAZER WITH SEAMS",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/2753/345/401/2/w/448/2753345401_1_1_1.jpg?ts=1692352292134",
    "price": "₹ 5,990.00",
    "details": "Blazer with a lapel collar and long sleeves with shoulder pads. Front flap pockets. Visible seam detail on the waist. Fastens at the front with buttons.",
    "id": "productw546"
  },
  {
    "product_name": "LONG BLAZER WITH BELT",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/8165/642/420/2/w/448/8165642420_1_1_1.jpg?ts=1692362193581",
    "price": "₹ 7,590.00",
    "details": "Blazer with a lapel collar, long sleeves and shoulder pads. Front flap pockets. Belt with buckle lined in matching fabric. Contrast lining. Double-breasted fastening with covered buttons.",
    "id": "productw547"
  },
  {
    "product_name": "CROPPED BLAZER WITH FEATHERS",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/7602/484/631/2/w/448/7602484631_1_1_1.jpg?ts=1689579070170",
    "price": "₹ 11,990.00",
    "details": "Cropped blazer featuring a lapel collar and long sleeves with matching detachable feathers. False welt pockets on the front. Matching lining. Front button fastening.",
    "id": "productw548"
  },
  {
    "product_name": "CAPE BLAZER",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/2876/187/712/22/w/448/2876187712_1_1_1.jpg?ts=1687531940333",
    "price": "₹ 5,990.00",
    "details": "Open blazer with no lapels, long cape-style sleeves and matching lining.",
    "id": "productw549"
  },
  {
    "product_name": "TAILORED WAISTCOAT",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/2010/715/743/2/w/448/2010715743_1_1_1.jpg?ts=1692704247795",
    "price": "₹ 2,990.00",
    "details": "Fitted V-neck waistcoat with front button fastening.",
    "id": "productw550"
  },
  {
    "product_name": "TAILORED WAISTCOAT",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/8178/736/712/2/w/448/8178736712_1_1_1.jpg?ts=1690454102579",
    "price": "₹ 3,290.00",
    "details": "V-neck waistcoat. Featuring false jetted pockets and button fastening on the front.",
    "id": "productw551"
  },
  {
    "product_name": "CROPPED BLAZER WITH POCKET",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/2010/832/800/3/w/448/2010832800_1_1_1.jpg?ts=1692193508630",
    "price": "₹ 4,990.00",
    "details": "Cropped blazer with a lapel collar and long sleeves with vents and buttons. Buttoned welt pocket on the chest. Matching lining.",
    "id": "productw552"
  },
  {
    "product_name": "SATIN LAPEL COLLAR BLAZER",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/4387/343/800/17/w/448/4387343800_1_1_1.jpg?ts=1692365587587",
    "price": "₹ 4,990.00",
    "details": "Satin blazer with a lapel collar and long sleeves with padded shoulders. Button fastening on the front.",
    "id": "productw553"
  },
  {
    "product_name": "DOUBLE-BREASTED OVERSIZED BLAZER",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/2753/332/803/2/w/448/2753332803_1_1_1.jpg?ts=1692203340480",
    "price": "₹ 4,590.00",
    "details": "Loose-fitting blazer featuring a lapel collar, long sleeves with pronounced shoulders, front flap pockets and front double-breasted button fastening.",
    "id": "productw554"
  },
  {
    "product_name": "LINEN BLEND ROLL-UP SLEEVE OPEN BLAZER",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/8185/778/710/2/w/448/8185778710_1_1_1.jpg?ts=1689258559264",
    "price": "₹ 4,990.00",
    "details": "Blazer made of a linen blend fabric. Lapel collar and roll-up sleeves with buttoned tabs. Padded shoulders. Front flap pockets.",
    "id": "productw555"
  },
  {
    "product_name": "TEXTURED DOUBLE-BREASTED BLAZER",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/2753/422/401/2/w/448/2753422401_1_1_1.jpg?ts=1692202713000",
    "price": "₹ 5,990.00",
    "details": "Fitted blazer featuring a lapel collar and long sleeves with shoulder pads. Featuring front welt pockets and double-breasted front button fastening.",
    "id": "productw556"
  },
  {
    "product_name": "LAPELLESS SHORT BLAZER",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/8039/178/632/2/w/448/8039178632_1_1_1.jpg?ts=1691658206961",
    "price": "₹ 5,990.00",
    "details": "Lapelless short blazer featuring long sleeves with openings. Front welt pockets. Matching lining.",
    "id": "productw557"
  },
  {
    "product_name": "TAILORED LINEN BLEND WAISTCOAT",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/7747/939/052/3/w/448/7747939052_1_1_1.jpg?ts=1687434571721",
    "price": "₹ 2,990.00",
    "details": "V-neck waistcoat made of a linen blend. Featuring front welt pockets and front button fastening.",
    "id": "productw558"
  },
  {
    "product_name": "TAILORED LINEN WAISTCOAT",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/7747/372/450/2/w/448/7747372450_1_1_1.jpg?ts=1692281895059",
    "price": "₹ 2,990.00",
    "details": "V-neck waistcoat made of 100% linen. Front welt pockets and front button fastening.",
    "id": "productw559"
  },
  {
    "product_name": "TEXTURED VEST WITH FRAYED TRIMS",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/7484/245/800/2/w/448/7484245800_1_1_1.jpg?ts=1692203338091",
    "price": "₹ 4,990.00",
    "details": "Sleeveless waistcoat with a lapel collar. Front patch pockets. Fringed trim details. Golden embossed button front fastening.",
    "id": "productw560"
  },
  {
    "product_name": "WAISTCOAT WITH VENT",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/7762/304/710/2/w/448/7762304710_1_1_1.jpg?ts=1685693896770",
    "price": "₹ 3,290.00",
    "details": "Waistcoat made of viscose. V-neck. Back vent at the hem. Lining. Button-up front.",
    "id": "productw561"
  },
  {
    "product_name": "DOUBLE-BREASTED BLAZER WITH LAPEL COLLAR",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/8375/701/712/2/w/448/8375701712_1_1_1.jpg?ts=1692792857703",
    "price": "₹ 5,990.00",
    "details": "Blazer with a lapel collar, long sleeves and padded shoulders. Front flap pockets and a welt chest pocket. Matching lining. Covered buttons on this front.",
    "id": "productw562"
  },
  {
    "product_name": "BASIC BLAZER",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/2010/750/800/17/w/448/2010750800_1_1_1.jpg?ts=1692193680642",
    "price": "₹ 5,990.00",
    "details": "Blazer featuring a lapel collar and long sleeves with padded shoulders. Front flap pockets and a chest welt pocket. Back vent at the hem. Button-up front.",
    "id": "productw563"
  },
  {
    "product_name": "CROSSOVER WAISTCOAT",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/8372/352/711/2/w/448/8372352711_1_1_1.jpg?ts=1690366719497",
    "price": "₹ 4,990.00",
    "details": "Waistcoat with a lapel collar and pronounced shoulders. Featuring false front welt pockets and double breasted button fastening on the front.",
    "id": "productw564"
  },
  {
    "product_name": "CROPPED LINEN BLEND WAISTCOAT",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/3736/240/615/12/w/448/3736240615_1_1_1.jpg?ts=1689693563165",
    "price": "₹ 3,290.00",
    "details": "Short sleeveless waistcoat made of a linen blend fabric. V-neck. False welt pockets on the front. Matching lining. Button-up front.",
    "id": "productw565"
  },
  {
    "product_name": "LINEN BLEND WAISTCOAT",
    "image_url": "https://static.zara.net/photos///2023/V/0/1/p/2010/711/832/2/w/448/2010711832_1_1_1.jpg?ts=1684404030109",
    "price": "₹ 2,990.00",
    "details": "Sleeveless waistcoat made of a linen blend fabric. V-neck. False welt pockets on the front. Button-up front.",
    "id": "productw566"
  },
  {
    "product_name": "WRINKLED-EFFECT DOUBLE-BREASTED BLAZER",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/1165/320/712/2/w/448/1165320712_1_1_1.jpg?ts=1690454101590",
    "price": "₹ 3,990.00",
    "details": "Blazer featuring a lapel collar and turn-up long sleeves. Double-breasted fastening on the front with buttons.",
    "id": "productw567"
  },
  {
    "product_name": "DOUBLE-BREASTED LINEN BLEND BLAZER",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/8194/394/711/2/w/448/8194394711_1_1_1.jpg?ts=1690965015194",
    "price": "₹ 6,990.00",
    "details": "Blazer made of linen blend fabric. Lapel collar, long sleeves and padded shoulders. Front flap pockets. Double-breasted front button fastening.",
    "id": "productw568"
  },
  {
    "product_name": "TEXTURED DOUBLE-BREASTED BLAZER",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/7609/904/251/12/w/448/7609904251_1_1_1.jpg?ts=1685978500481",
    "price": "₹ 6,990.00",
    "details": "Blazer featuring a lapel collar and long sleeves with shoulder pads. Featuring front pockets with flaps and double-breasted front fastening with textured gold buttons.",
    "id": "productw569"
  },
  {
    "product_name": "LINEN BLEND WAISTCOAT",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/8008/967/727/2/w/448/8008967727_1_1_1.jpg?ts=1688566404918",
    "price": "₹ 3,290.00",
    "details": "Waistcoat made of a linen blend. V-neckline and no sleeves. Matching lining. Button-up front.",
    "id": "productw570"
  },
  {
    "product_name": "LINEN BLEND OVERSIZE WAISTCOAT",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/7836/967/802/2/w/448/7836967802_1_1_1.jpg?ts=1689761503813",
    "price": "₹ 5,990.00",
    "details": "Sleeveless loose-fitting waistcoat made of a linen blend. Lapel collar. Flap pockets on the front and chest welt pockets. Matching lining. Back vent at the hem. Button-up front.",
    "id": "productw571"
  },
  {
    "product_name": "TEXTURED DOUBLE-BREASTED BLAZER",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/7623/815/330/12/w/448/7623815330_1_1_1.jpg?ts=1692002574847",
    "price": "₹ 5,990.00",
    "details": "Blazer featuring a lapel collar, long sleeves and padded shoulders. Frayed trims. Double-breasted button fastening on the front.",
    "id": "productw572"
  },
  {
    "product_name": "LINEN BLAZER WITH PRINTED CUFFS",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/7726/392/401/2/w/448/7726392401_1_1_1.jpg?ts=1687440647303",
    "price": "₹ 4,990.00",
    "details": "Open blazer featuring a lapel collar, turn-up long sleeves and padded shoulders. Front flap pockets.",
    "id": "productw573"
  },
  {
    "product_name": "CROPPED DOUBLE-BREASTED BLAZER",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/7102/332/251/2/w/448/7102332251_1_1_1.jpg?ts=1691511618785",
    "price": "₹ 4,990.00",
    "details": "Blazer featuring a lapel collar and long sleeves with shoulder pads. Double-breasted front with buttons.",
    "id": "productw574"
  },
  {
    "product_name": "LINEN WAISTCOAT WITH TOPSTITCHING",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/4043/272/802/3/w/448/4043272802_1_1_1.jpg?ts=1689782150340",
    "price": "₹ 3,990.00",
    "details": "Short collared waistcoat made of 100% linen. Patch pockets with buttoned flaps on the front. Contrast visible topstitching details. Button-up front.",
    "id": "productw575"
  },
  {
    "product_name": "LINEN BLEND WAISTCOAT",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/8072/967/515/2/w/448/8072967515_1_1_1.jpg?ts=1688124231813",
    "price": "₹ 3,290.00",
    "details": "Waistcoat made of a linen and lyocell blend. V-neckline and no sleeves. Lining. Button-up front.",
    "id": "productw576"
  },
  {
    "product_name": "OPEN BACK HALTER WAISTCOAT",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/7926/446/800/3/w/448/7926446800_1_1_1.jpg?ts=1689780805789",
    "price": "₹ 3,290.00",
    "details": "Halter waistcoat featuring a V-neck and made of a wool blend. False welt pockets on the front. Open back and adjustable strap in the same fabric with buckle. Asymmetric hem. Button-up front.",
    "id": "productw577"
  },
  {
    "product_name": "Z1975 STRAIGHT-FIT HIGH-WAIST LONG LENGTH JEANS",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/0108/222/407/2/w/448/0108222407_1_1_1.jpg?ts=1689762518756",
    "price": "₹ 3,290.00",
    "details": "HIGH-WAIST - REGULAR REG - LONG LENGTH - RIGID High-waist jeans with five pockets. Faded effect. Straight-leg and long-leg design. Front zip fly and button fastening.View more",
    "id": "productw606"
  },
  {
    "product_name": "FLOWING SATIN SHIRT",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/2197/745/307/19/w/448/2197745307_1_1_1.jpg?ts=1692689718099",
    "price": "₹ 2,290.00",
    "details": "Shirt with a johnny collar, long sleeves and a button-up front.",
    "id": "productw607"
  },
  {
    "product_name": "SATIN SHIRT",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/7868/226/800/20/w/448/7868226800_1_1_1.jpg?ts=1690548190890",
    "price": "₹ 1,990.00",
    "details": "Collared shirt with a V-neckline. Long cuffed sleeves. Front button fastening.",
    "id": "productw608"
  },
  {
    "product_name": "Z1975 HIGH-WAIST BAGGY PAPERBAG JEANS",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/5862/165/407/2/w/448/5862165407_1_1_1.jpg?ts=1688573296923",
    "price": "₹ 3,290.00",
    "details": "HIGH-RISE - BAGGY PAPERBAG - CARROT LEG - ANKLE - RIGIDHigh-waist jeans with an elasticated waistband and gathered details. Featuring front pockets, rear patch pockets, turn-up hems and a zip and button fastening at the front.View more",
    "id": "productw609"
  },
  {
    "product_name": "PRINTED MINI DRESS",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/9878/235/031/2/w/448/9878235031_1_1_1.jpg?ts=1690974865321",
    "price": "₹ 3,290.00",
    "details": "Slot collar dress with long sleeves with elasticated trims. Front pintuck detail. Ruffled hem. Fastens at the front with buttons.",
    "id": "productw610"
  },
  {
    "product_name": "SATIN CROPPED BOMBER JACKET",
    "image_url": "https://static.zara.net/photos///2023/V/0/1/p/4661/770/800/18/w/448/4661770800_1_1_1.jpg?ts=1685628850347",
    "price": "₹ 4,990.00",
    "details": "Bomber jacket with a round neckline and long sleeves with shoulder pads. Featuring matching ribbed trims, side pockets and snap-button fastening at the front.",
    "id": "productw611"
  },
  {
    "product_name": "METALLIC KNIT TOP",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/9325/102/808/17/w/448/9325102808_1_1_1.jpg?ts=1690990296250",
    "price": "₹ 2,990.00",
    "details": "Round neck top with short sleeves.",
    "id": "productw612"
  },
  {
    "product_name": "FABRIC HIGH-HEEL SANDALS",
    "image_url": "https://static.zara.net/photos///2023/I/1/1/p/3326/110/604/2/w/448/3326110604_1_1_1.jpg?ts=1689179487367",
    "price": "₹ 3,290.00",
    "details": "Fabric high-heel sandals. Wide strap on the front and thin strap on the instep. Square toe. Heel height: 9.5 cm. / 3.7″ AIRFIT®. Flexible technical latex foam insole, designed to offer greater comfort.View more",
    "id": "productw613"
  },
  {
    "product_name": "PRINTED SHIRT WITH POCKET",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/2183/250/400/2/w/448/2183250400_1_1_1.jpg?ts=1691652251111",
    "price": "₹ 3,290.00",
    "details": "Shirt made of 100% cotton. Johnny collar and sleeves that fall below the elbow. Chest patch pocket. Asymmetric hem. Button-up front.",
    "id": "productw614"
  },
  {
    "product_name": "SHORT PRINTED DRESS",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/9878/227/070/17/w/448/9878227070_1_1_1.jpg?ts=1690983018753",
    "price": "₹ 3,290.00",
    "details": "Short dress with a slot collar and long sleeves. Ruffled hem. Front button fastening.",
    "id": "productw615"
  },
  {
    "product_name": "SHORT PRINTED DRESS",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/9878/231/916/17/w/448/9878231916_1_1_1.jpg?ts=1690983019106",
    "price": "₹ 3,290.00",
    "details": "Short dress with a slot collar and long sleeves with elasticated trims. Front lace trim. Ruffled hem.",
    "id": "productw616"
  },
  {
    "product_name": "PLUMETIS SHIRT WITH RUFFLES",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/8088/825/712/2/w/448/8088825712_1_1_1.jpg?ts=1689328169911",
    "price": "₹ 2,990.00",
    "details": "Shirt featuring a slot collar and long sleeves with elasticated trims. Lace trim and ruffle details. Button-up front.This garment is not lined.",
    "id": "productw617"
  },
  {
    "product_name": "RAMIE SHIRT WITH KNOT DETAIL",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/2731/275/251/2/w/448/2731275251_1_1_1.jpg?ts=1689665199599",
    "price": "₹ 3,290.00",
    "details": "Shirt made of 100% ramie. Johnny collar with long sleeves, elasticated cuffs and ruffle trims. Hem with a knot in the same fabric. Button-up front.",
    "id": "productw618"
  },
  {
    "product_name": "HIGH-HEEL CAGE SANDALS",
    "image_url": "https://static.zara.net/photos///2023/I/1/1/p/1382/210/808/2/w/448/1382210808_1_1_1.jpg?ts=1690189294573",
    "price": "₹ 3,990.00",
    "details": "Mid-heel cage sandals with thin straps. Buckled ankle strap fastening. Pointed toe. Heel height of 6.2 cm. / 2.4″ AIRFIT®. Flexible technical latex foam insole, designed to offer greater comfort.View more",
    "id": "productw619"
  },
  {
    "product_name": "SATIN PLAYSUIT",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/9878/233/420/2/w/448/9878233420_1_1_1.jpg?ts=1690386809715",
    "price": "₹ 3,290.00",
    "details": "V-neck playsuit with wide sleeves falling below the elbow. Elasticated waist. Lining. Fastening with buttoned opening at the back.",
    "id": "productw620"
  },
  {
    "product_name": "POINTELLE RUFFLED KNIT TOP",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/4331/117/712/2/w/448/4331117712_1_1_1.jpg?ts=1690983359063",
    "price": "₹ 3,290.00",
    "details": "Top with a round neck and long sleeves. Ruffle trims.",
    "id": "productw621"
  },
  {
    "product_name": "PRINTED MIDI DRESS",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/5107/246/330/2/w/448/5107246330_1_1_1.jpg?ts=1688125288863",
    "price": "₹ 5,590.00",
    "details": "Midi dress made of cotton. Featuring a straight neckline, puff sleeves falling below the elbow and smocking.",
    "id": "productw622"
  },
  {
    "product_name": "STRAPLESS PRINTED DRESS",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/2731/251/330/2/w/448/2731251330_1_1_1.jpg?ts=1688125288757",
    "price": "₹ 3,990.00",
    "details": "Long strapless dress made of cotton. Elastic smocked fabric.",
    "id": "productw623"
  },
  {
    "product_name": "LINEN MIDI SKIRT",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/2731/270/681/22/w/448/2731270681_1_1_1.jpg?ts=1690543501585",
    "price": "₹ 3,290.00",
    "details": "High-waist midi skirt made of linen. Flared hem. Invisible side zip fastening.",
    "id": "productw624"
  },
  {
    "product_name": "TRF LOOSE-FIT MID-RISE JEANS",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/9213/230/400/2/w/448/9213230400_1_1_1.jpg?ts=1689240019724",
    "price": "₹ 3,290.00",
    "details": "LOOSE-FIT - MID-RISE - FULL LENGTHMid-rise jeans with a five-pocket design. Long straight leg and front zip fly and metal top button fastening.",
    "id": "productw625"
  },
  {
    "product_name": "SATEEN TOP",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/3158/331/800/19/w/448/3158331800_1_1_1.jpg?ts=1689349492555",
    "price": "₹ 2,290.00",
    "details": "Short sleeve top with a round neckline. Featuring a buttoned opening at the back.",
    "id": "productw626"
  },
  {
    "product_name": "PRINTED MIDI SKIRT",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/6895/075/400/2/w/448/6895075400_1_1_1.jpg?ts=1688726747764",
    "price": "₹ 5,990.00",
    "details": "High-waist midi skirt featuring an adjustable elastic waistband with drawstrings. Beading appliqué detail.",
    "id": "productw627"
  },
  {
    "product_name": "PRINTED CROP TOP",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/6895/067/400/2/w/448/6895067400_1_1_1.jpg?ts=1688726748469",
    "price": "₹ 3,290.00",
    "details": "Crop top with a straight neckline and thin straps that cross at the back. Elastic smocked detailing and bead appliqués.",
    "id": "productw628"
  },
  {
    "product_name": "KNIT HOODIE",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/4331/102/660/2/w/448/4331102660_1_1_1.jpg?ts=1690383907771",
    "price": "₹ 3,290.00",
    "details": "Open-knit hoodie with drawstring. V-neck and long sleeves.This garment is not lined.",
    "id": "productw629"
  },
  {
    "product_name": "SHORT PRINTED DRESS",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/4786/249/330/2/w/448/4786249330_1_1_1.jpg?ts=1684234003612",
    "price": "₹ 3,290.00",
    "details": "Short cotton dress. Halter neck and exposed shoulders. Elasticated detail at the waist. Fastens at the back with ties in the same fabric.",
    "id": "productw630"
  },
  {
    "product_name": "OPEN-KNIT SWEATER",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/6771/107/800/2/w/448/6771107800_1_1_1.jpg?ts=1688568109842",
    "price": "₹ 2,990.00",
    "details": "Round neck sweater with long sleeves.This garment is not lined.",
    "id": "productw631"
  },
  {
    "product_name": "OPEN-KNIT SWEATER",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/3991/105/800/17/w/448/3991105800_1_1_1.jpg?ts=1690990297959",
    "price": "₹ 2,990.00",
    "details": "Long sleeve sweater with a round neckline. This garment is not lined.",
    "id": "productw632"
  },
  {
    "product_name": "MIDI DRESS WITH BELT",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/4786/299/305/2/w/448/4786299305_1_1_1.jpg?ts=1688126788652",
    "price": "₹ 5,990.00",
    "details": "Sleeveless midi dress made of a linen and lyocell blend. Lapel collar. Tied belt in the same fabric. Front pockets. Concealed button fastening at the front.",
    "id": "productw633"
  },
  {
    "product_name": "RIPPED PLUSH BOMBER JACKET",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/2715/001/710/2/w/448/2715001710_1_1_1.jpg?ts=1689692177672",
    "price": "₹ 4,990.00",
    "details": "Bomber jacket made of plush fabric. Round neck and long sleeves. Front flap pockets. Front fastening with metal zip.",
    "id": "productw634"
  },
  {
    "product_name": "SHORT PRINTED DRESS",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/4786/269/330/2/w/448/4786269330_1_1_1.jpg?ts=1688124232407",
    "price": "₹ 3,290.00",
    "details": "Short dress made of cotton. Halter neck and V-neck. Floral print detail.",
    "id": "productw635"
  },
  {
    "product_name": "STRIPED SHIRT WITH KNOT DETAIL",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/7735/459/043/2/w/448/7735459043_1_1_1.jpg?ts=1689328170803",
    "price": "₹ 2,990.00",
    "details": "Collared shirt with long sleeves, front patch pockets with flaps and front button and knot fastening.",
    "id": "productw636"
  },
  {
    "product_name": "SHINY PRINTED BLOUSE",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/7906/032/330/2/w/448/7906032330_1_1_1.jpg?ts=1686558255338",
    "price": "₹ 3,290.00",
    "details": "Johnny collar blouse with short sleeves. Metallic thread detail. Knotted hem with ties and pleats.",
    "id": "productw637"
  },
  {
    "product_name": "SHINY PYJAMA-STYLE TROUSERS",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/7868/032/330/2/w/448/7868032330_2_1_1.jpg?ts=1686558254350",
    "price": "₹ 3,290.00",
    "details": "Mid-rise trousers with an elasticated waistband. Side pockets. Metallic thread appliqué.",
    "id": "productw638"
  },
  {
    "product_name": "PRINTED TOP WITH KNOT",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/4786/266/330/2/w/448/4786266330_1_1_1.jpg?ts=1688124694125",
    "price": "₹ 2,990.00",
    "details": "Crop top made of cotton. V-neck and puff short sleeves. Front knot with pleats. Invisible side zip fastening.",
    "id": "productw639"
  },
  {
    "product_name": "PRINTED RAMIE TOP",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/2731/273/330/2/w/448/2731273330_1_1_1.jpg?ts=1688378988338",
    "price": "₹ 3,290.00",
    "details": "Round neck halter top. Featuring front pleats, an asymmetric hem and a tied opening at the back.",
    "id": "productw640"
  },
  {
    "product_name": "KNIT TOP WITH CAPE SLEEVES",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/6771/109/200/17/w/448/6771109200_1_1_1.jpg?ts=1691753306861",
    "price": "₹ 2,590.00",
    "details": "Round neck open knit top with long cape-style sleeves with slits.",
    "id": "productw641"
  },
  {
    "product_name": "RAMIE TUNIC WITH PASSEMENTERIE",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/2731/311/807/2/w/448/2731311807_1_1_1.jpg?ts=1688124232195",
    "price": "₹ 4,990.00",
    "details": "Long tunic made of ramie. Lapel collar and long cuffed sleeves. Matching passementerie detail and wrinkled fabric. Asymmetric hem with side vents. Button-up front.",
    "id": "productw642"
  },
  {
    "product_name": "TIE-DYE PRINT VEST",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/8054/464/330/2/w/448/8054464330_1_1_1.jpg?ts=1689148276995",
    "price": "₹ 3,990.00",
    "details": "Cropped waistcoat featuring bead appliqués and front tie fastening.",
    "id": "productw643"
  },
  {
    "product_name": "SEQUINNED KNIT TOP",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/0014/100/712/17/w/448/0014100712_1_1_1.jpg?ts=1690990295600",
    "price": "₹ 2,990.00",
    "details": "Sleeveless top with a round neck. Matching sequin details.",
    "id": "productw644"
  },
  {
    "product_name": "FRAYED LINEN BLOUSE",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/4043/259/802/2/w/448/4043259802_1_1_1.jpg?ts=1689335050560",
    "price": "₹ 3,290.00",
    "details": "Sleeveless blouse made of 100% linen. Featuring a V-neckline, a knotted hem with pleats and frayed trims.",
    "id": "productw645"
  },
  {
    "product_name": "CONTRAST LACE KNIT TOP",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/3991/104/050/2/w/448/3991104050_1_1_1.jpg?ts=1689249127532",
    "price": "₹ 2,590.00",
    "details": "V-neck top with thin straps.",
    "id": "productw646"
  },
  {
    "product_name": "TRF MID-RISE CARGO TROUSERS",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/5520/260/802/2/w/448/5520260802_1_1_1.jpg?ts=1688484476517",
    "price": "₹ 3,290.00",
    "details": "Mid-rise trousers made of a linen blend. Front pockets, side patch pockets, leg pockets and false flap pockets at the back. Front zip fly and metal top button fastening.",
    "id": "productw647"
  },
  {
    "product_name": "CRISS-CROSS BUCKLED SLIDER SANDALS",
    "image_url": "https://static.zara.net/photos///2023/I/1/1/p/1643/210/808/2/w/448/1643210808_1_1_1.jpg?ts=1685015304019",
    "price": "₹ 3,990.00",
    "details": "Leather flat slider sandals. Criss-cross straps on the front with buckle detail. Round toe. Sole height: 1 cm. / 0.3″AIRFIT®. Flexible technical latex foam insole, designed to offer greater comfort.View more",
    "id": "productw648"
  },
  {
    "product_name": "METALLIC MESH KNIT TOP",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/3327/004/808/2/w/448/3327004808_1_1_1.jpg?ts=1687522859058",
    "price": "₹ 1,890.00",
    "details": "Round neck top with thin straps.This garment is not lined.",
    "id": "productw649"
  },
  {
    "product_name": "PRINTED MIDI SKIRT",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/4786/265/330/2/w/448/4786265330_1_1_1.jpg?ts=1688124692738",
    "price": "₹ 4,990.00",
    "details": "High-waist midi skirt made of cotton. Adjustable elasticated waistband with drawstrings.",
    "id": "productw650"
  },
  {
    "product_name": "METALLIC MESH KNIT TOP",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/3327/005/808/2/w/448/3327005808_1_1_1.jpg?ts=1687521610280",
    "price": "₹ 2,990.00",
    "details": "Top with a round neckline and long ample sleeves. This garment is not lined.",
    "id": "productw651"
  },
  {
    "product_name": "EMBROIDERED CULOTTES",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/2731/256/401/2/w/448/2731256401_2_1_1.jpg?ts=1685966554731",
    "price": "₹ 4,990.00",
    "details": "High-waist trousers made of a linen and viscose blend. Rear patch pockets. Contrast embroidery. Front zip fly and top button fastening.",
    "id": "productw652"
  },
  {
    "product_name": "EMBROIDERED LINEN BLEND TROUSERS",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/2731/257/500/12/w/448/2731257500_2_1_1.jpg?ts=1686749145946",
    "price": "₹ 4,990.00",
    "details": "High-waist trousers made of a linen blend. Belt loops, contrast embroidery and front zip fly and top button fastening.",
    "id": "productw653"
  },
  {
    "product_name": "BLOUSE WITH RUFFLES",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/9878/156/250/12/w/448/9878156250_1_1_1.jpg?ts=1689680124942",
    "price": "₹ 2,990.00",
    "details": "Blouse featuring a Peter Pan collar and long sleeves. Ruffle trims on the front. Button-up front.",
    "id": "productw654"
  },
  {
    "product_name": "LONG LINEN BLEND SKIRT",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/4786/290/615/12/w/448/4786290615_1_1_1.jpg?ts=1689693562626",
    "price": "₹ 4,990.00",
    "details": "High-waist long skirt made of a linen blend fabric. Side pockets. Flared hem. Front zip and button fastening.",
    "id": "productw655"
  },
  {
    "product_name": "Z1975 MID-RISE SKINNY JEANS",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/0108/221/405/2/w/448/0108221405_1_1_1.jpg?ts=1692201135641",
    "price": "₹ 2,990.00",
    "details": "MID-RISE - SKINNY LEG - ANKLE - STRETCHMid-rise jeans with five pockets. Faded effect. Front zip fly and metal button fastening.View more",
    "id": "productw656"
  },
  {
    "product_name": "CONTRAST TOP",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/3991/101/712/12/w/448/3991101712_1_1_1.jpg?ts=1687514416105",
    "price": "₹ 2,590.00",
    "details": "Crop top with a straight neckline with a drawstring. Short sleeves and wide straps with exposed shoulders. Ruffled trims and matching embroidery.",
    "id": "productw657"
  },
  {
    "product_name": "RIPPED KNIT SWEATER",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/3920/101/712/23/w/448/3920101712_1_1_1.jpg?ts=1691155530873",
    "price": "₹ 3,290.00",
    "details": "Round neck sweater with long sleeves. Ripped trims.",
    "id": "productw658"
  },
  {
    "product_name": "LINEN BLEND KNIT SWEATER",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/5802/104/711/22/w/448/5802104711_1_1_1.jpg?ts=1691155614865",
    "price": "₹ 3,290.00",
    "details": "Cropped sweater made of a linen blend. Round neck and long sleeves.",
    "id": "productw659"
  },
  {
    "product_name": "SHORT TEXTURED WEAVE BLAZER",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/7995/137/330/2/w/448/7995137330_1_1_1.jpg?ts=1691593336389",
    "price": "₹ 5,990.00",
    "details": "Blazer with a high neck and long sleeves. Front flap pockets. Contrast trim details. Golden button fastenings on the front.",
    "id": "productw660"
  },
  {
    "product_name": "MIDI DRESS",
    "image_url": "https://static.zara.net/photos///2023/V/0/1/p/2698/707/800/3/w/448/2698707800_1_1_1.jpg?ts=1681829091017",
    "price": "₹ 3,990.00",
    "details": "Off-the-shoulder midi dress with a straight-cut neckline. Gathered detail. Back slit at the hem. Matching interior lining. Invisible side zip fastening.",
    "id": "productw661"
  },
  {
    "product_name": "PRINTED LONGLINE BLOUSE",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/6895/248/500/2/w/448/6895248500_1_1_1.jpg?ts=1688997269436",
    "price": "₹ 4,990.00",
    "details": "Long blouse made of viscose. Slot collar and long sleeves with cuffs. Asymmetric hem with side vents. Button-up front.",
    "id": "productw662"
  },
  {
    "product_name": "SHIRT WITH CUTWORK EMBROIDERY",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/4786/316/942/2/w/448/4786316942_1_1_1.jpg?ts=1687513222670",
    "price": "₹ 2,990.00",
    "details": "Cotton shirt with a Johnny collar. Sleeves falling below the elbow. Cutwork embroidery detail. Asymmetric hem with side vents. Button-up front.",
    "id": "productw663"
  },
  {
    "product_name": "HIGH NECK TEXTURED BLAZER",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/8001/513/251/2/w/448/8001513251_6_1_1.jpg?ts=1690529214282",
    "price": "₹ 5,990.00",
    "details": "Blazer featuring a high neck and long sleeves with padded shoulders. False flap pockets and front patch pockets. Front hook fastening.",
    "id": "productw664"
  },
  {
    "product_name": "WAISTCOAT WITH CONTRAST EMBROIDERY",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/6895/257/712/2/w/448/6895257712_1_1_1.jpg?ts=1688125289439",
    "price": "₹ 4,990.00",
    "details": "Waistcoat made of 100% cotton. Round neck. Contrast embroidery detail. Matching lining.",
    "id": "productw665"
  },
  {
    "product_name": "PRINT SHIRT DRESS",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/7652/002/330/2/w/448/7652002330_1_1_1.jpg?ts=1683724982079",
    "price": "₹ 5,990.00",
    "details": "Collared midi shirt dress made of cotton. Sleeves falling below the elbow with cuffs. Tied belt in the same fabric. Button-up front.",
    "id": "productw666"
  },
  {
    "product_name": "STRAIGHT BLAZER",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/8073/327/645/2/w/448/8073327645_1_1_1.jpg?ts=1689929364465",
    "price": "₹ 4,990.00",
    "details": "Blazer featuring a lapel collar and long sleeves with padded shoulders. Front flap pockets. Single button fastening at the front.",
    "id": "productw667"
  },
  {
    "product_name": "FLARED FULL LENGTH TROUSERS",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/8073/227/645/2/w/448/8073227645_1_1_1.jpg?ts=1689862657984",
    "price": "₹ 2,990.00",
    "details": "High-waist trousers featuring false welt pockets at the back. Flared hems. Front zip fly, interior button and metal hook fastening.",
    "id": "productw668"
  },
  {
    "product_name": "CONTRAST KNIT TOP WITH RUFFLED SLEEVES",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/7200/100/712/2/w/448/7200100712_1_1_1.jpg?ts=1689600438518",
    "price": "₹ 3,290.00",
    "details": "Round neck top with long ruffled sleeves and contrast poplin fabric. Buttoned opening at the back.",
    "id": "productw669"
  },
  {
    "product_name": "TUXEDO COLLAR BLAZER WITH BELT",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/2225/483/631/2/w/448/2225483631_1_1_1.jpg?ts=1687522079060",
    "price": "₹ 8,590.00",
    "details": "Blazer with a tuxedo collar and long sleeves with slits at the cuffs. Front welt pockets, a tie belt in the same fabric, matching lining and hidden button fastening at the front.",
    "id": "productw670"
  },
  {
    "product_name": "CARGO JUMPSUIT",
    "image_url": "https://static.zara.net/photos///2023/V/0/1/p/2560/210/800/17/w/448/2560210800_1_1_1.jpg?ts=1681829374837",
    "price": "₹ 3,990.00",
    "details": "Jumpsuit with a straight neckline and exposed shoulders. Side pockets and patch pockets on the legs. Invisible side zip fastening.",
    "id": "productw671"
  },
  {
    "product_name": "LINEN BLEND JUMPSUIT WITH BELT",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/7745/715/052/2/w/448/7745715052_1_1_1.jpg?ts=1688568633234",
    "price": "₹ 4,990.00",
    "details": "Jumpsuit made of a linen and cotton blend. V-neck and short sleeves with elastic trims. Darts on the front. Elasticated waistband at the back with a matching fabric belt. Front pockets. Turn-up hems. Button-up front.",
    "id": "productw672"
  },
  {
    "product_name": "DENIM HIGH-HEEL SANDALS WITH RHINESTONES",
    "image_url": "https://static.zara.net/photos///2023/I/1/1/p/2348/210/400/2/w/448/2348210400_6_1_1.jpg?ts=1685434252328",
    "price": "₹ 3,290.00",
    "details": "Denim high-heel sandals. Thin straps on the front with rhinestone details. Square toe. Heel height of 9 cm. / 3.5″",
    "id": "productw673"
  },
  {
    "product_name": "CARROT FIT POPLIN TROUSERS",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/8372/270/506/2/w/448/8372270506_1_1_1.jpg?ts=1688568630827",
    "price": "₹ 2,590.00",
    "details": "High-waist cropped trousers featuring an elastic waistband with drawstring. Front pockets and rear patch pocket.",
    "id": "productw674"
  },
  {
    "product_name": "PRINTED SHIRT",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/2492/151/070/2/w/448/2492151070_1_1_1.jpg?ts=1688568630021",
    "price": "₹ 2,990.00",
    "details": "Round neck shirt featuring a V-neckline and long sleeves with elastic cuffs. Button-up front.",
    "id": "productw675"
  },
  {
    "product_name": "PRINTED RAMIE TROUSERS",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/2731/274/330/2/w/448/2731274330_2_1_1.jpg?ts=1688378987907",
    "price": "₹ 4,990.00",
    "details": "High-waist trousers made of ramie with a wide-leg design. Invisible side zip fastening.",
    "id": "productw676"
  },
  {
    "product_name": "SATIN SANDALS WITH CRISS-CROSS STRAPS",
    "image_url": "https://static.zara.net/photos///2023/I/1/1/p/2304/210/078/2/w/448/2304210078_1_1_1.jpg?ts=1689686540481",
    "price": "₹ 3,290.00",
    "details": "Heeled sandals with a satin effect. Criss-cross straps on the front. Square toe.Heel height: 9 cm. / 3.5″AIRFIT®. Flexible technical latex foam insole, designed to offer greater comfort.View more",
    "id": "productw677"
  },
  {
    "product_name": "SHORT PRINTED DRESS",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/9878/210/080/17/w/448/9878210080_1_1_1.jpg?ts=1687447062323",
    "price": "₹ 3,290.00",
    "details": "Slot collar dress with long sleeves with elasticated trim. Front pintuck detail. Button-up front.",
    "id": "productw678"
  },
  {
    "product_name": "CROPPED LINEN SHIRT",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/4786/335/806/2/w/448/4786335806_1_1_1.jpg?ts=1688126789297",
    "price": "₹ 3,290.00",
    "details": "Collared shirt made of linen. Long sleeves with pleated cuffs. Visible topstitching detail. Button-up front.",
    "id": "productw679"
  },
  {
    "product_name": "WAISTCOAT WITH CONTRAST EMBROIDERY",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/6895/259/305/2/w/448/6895259305_1_1_1.jpg?ts=1688997270185",
    "price": "₹ 4,990.00",
    "details": "Open waistcoat with a round neck. Contrast embroidery and lining.",
    "id": "productw680"
  },
  {
    "product_name": "PRINTED STRAIGHT-CUT TROUSERS",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/2183/249/400/2/w/448/2183249400_1_1_1.jpg?ts=1691652250973",
    "price": "₹ 3,290.00",
    "details": "Mid-rise trousers made of cotton. Belt loops and front patch pockets. Straight-leg design. Front zip fly and top button fastening.",
    "id": "productw681"
  },
  {
    "product_name": "STRAPLESS TOP",
    "image_url": "https://static.zara.net/photos///2023/V/0/1/p/3067/089/800/17/w/448/3067089800_1_1_1.jpg?ts=1684767640673",
    "price": "₹ 2,590.00",
    "details": "Exposed shoulder top with a straight-cut neckline. Draped fabric. Invisible back zip fastening.",
    "id": "productw682"
  },
  {
    "product_name": "MIDI SHIRT DRESS",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/7761/017/330/2/w/448/7761017330_1_1_1.jpg?ts=1686558255580",
    "price": "₹ 5,990.00",
    "details": "Midi dress made of cotton. Lapel collar and short sleeves with shoulder tabs. Tied belt in the same fabric. Button-up front.",
    "id": "productw683"
  },
  {
    "product_name": "SATEEN TOP",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/3067/036/250/20/w/448/3067036250_1_1_1.jpg?ts=1689349313851",
    "price": "₹ 2,290.00",
    "details": "Top with a matching ribbed neckline and short sleeves.",
    "id": "productw684"
  },
  {
    "product_name": "METALLIC THREAD KNIT TOP",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/4331/101/800/17/w/448/4331101800_1_1_1.jpg?ts=1686913513796",
    "price": "₹ 3,290.00",
    "details": "Top with a round neck and sleeves falling below the elbow. Metallic thread detail and open back. Tied fastening at the back.",
    "id": "productw685"
  },
  {
    "product_name": "LINEN BLEND MIDI SKIRT",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/7828/967/800/2/w/448/7828967800_1_1_1.jpg?ts=1689335053342",
    "price": "₹ 4,990.00",
    "details": "High-waist midi skirt made of a linen blend. Front false welt pockets. Slit at the hem. Invisible zip fastening.",
    "id": "productw686"
  },
  {
    "product_name": "COTTON BLEND PYJAMA-STYLE TROUSERS",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/4877/080/712/2/w/448/4877080712_1_1_1.jpg?ts=1688980756542",
    "price": "₹ 3,290.00",
    "details": "Mid-rise trousers made of a lyocell and cotton blend with an elasticated waistband. Side pockets and welt pockets at the rear. Straight-leg design.",
    "id": "productw687"
  },
  {
    "product_name": "FULL LENGTH LINEN BLEND TROUSERS",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/7385/422/711/18/w/448/7385422711_1_1_1.jpg?ts=1686757989707",
    "price": "₹ 2,990.00",
    "details": "High-waist trousers made of a linen blend. Side pockets and back patch pockets. Front zip fly, inside button and metal hook fastening.",
    "id": "productw688"
  },
  {
    "product_name": "HEELED LEATHER SANDALS",
    "image_url": "https://static.zara.net/photos///2023/I/1/1/p/1307/210/050/2/w/448/1307210050_15_1_1.jpg?ts=1689157675442",
    "price": "₹ 4,990.00",
    "details": "Leather sandals with a block heel. Buckled ankle strap fastening. Square toe. Heel height: 8.5 cm. / 3.3″ AIRFIT®. Flexible technical latex foam insole, designed to offer greater comfort.View more",
    "id": "productw689"
  },
  {
    "product_name": "LAMINATED HEELED SANDALS",
    "image_url": "https://static.zara.net/photos///2023/I/1/1/p/2309/110/800/2/w/448/2309110800_1_1_1.jpg?ts=1684230564812",
    "price": "₹ 3,290.00",
    "details": "Heeled sandals. Thin strap on the front. Square toe. Buckled ankle strap fastening.Heel height: 5 cm. / 1.9″",
    "id": "productw690"
  },
  {
    "product_name": "CROPPED KNIT SWEATER",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/9598/108/200/2/w/448/9598108200_1_1_1.jpg?ts=1688996666535",
    "price": "₹ 2,990.00",
    "details": "Cropped sweater with a round neck and long sleeves.",
    "id": "productw691"
  },
  {
    "product_name": "CROPPED WAISTCOAT WITH EMBROIDERY",
    "image_url": "https://static.zara.net/photos///2023/V/0/1/p/6895/521/712/2/w/448/6895521712_1_1_1.jpg?ts=1681804416425",
    "price": "₹ 3,290.00",
    "details": "Open waistcoat with embroidered details.",
    "id": "productw692"
  },
  {
    "product_name": "ASYMMETRIC CUT-OUT BODYSUIT",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/3641/812/800/3/w/448/3641812800_1_1_1.jpg?ts=1692192951458",
    "price": "₹ 1,890.00",
    "details": "Sleeveless bodysuit with an asymmetric neckline. Cut-out side detail and draped fabric detail. Snap-button fastening at the bottom.",
    "id": "productw693"
  },
  {
    "product_name": "LINEN BLAZER WITH PRINTED CUFFS",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/2753/330/807/12/w/448/2753330807_1_1_1.jpg?ts=1688676949642",
    "price": "₹ 4,990.00",
    "details": "Open blazer featuring a lapel collar, turn-up long sleeves and padded shoulders. Front flap pockets.",
    "id": "productw694"
  },
  {
    "product_name": "POPLIN CARGO JUMPSUIT",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/7670/333/800/17/w/448/7670333800_1_1_1.jpg?ts=1689694522489",
    "price": "₹ 4,990.00",
    "details": "Jumpsuit featuring a Johnny collar and turn-up short sleeves. Front pockets and side patch pockets with flaps. Adjustable hems with tab and golden double buckle. Belt detail in the same fabric. Invisible front zip fastening.View more",
    "id": "productw695"
  },
  {
    "product_name": "POINTELLE KNIT SWEATER",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/3646/102/250/2/w/448/3646102250_1_1_1.jpg?ts=1691141749967",
    "price": "₹ 2,290.00",
    "details": "V-neck sweater with buttons and long sleeves.",
    "id": "productw696"
  },
  {
    "product_name": "STRIPED KNIT SWEATER",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/3433/011/066/17/w/448/3433011066_1_1_1.jpg?ts=1692352267261",
    "price": "₹ 2,290.00",
    "details": "Round neck sweater with long sleeves.",
    "id": "productw697"
  },
  {
    "product_name": "LOOSE-FITTING BLAZER",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/8111/559/505/2/w/448/8111559505_1_1_1.jpg?ts=1690447252621",
    "price": "₹ 5,990.00",
    "details": "Blazer with a lapel collar, long sleeves and shoulder pads. Front flap pockets. Front button-up fastening.",
    "id": "productw698"
  },
  {
    "product_name": "FRAYED LINEN TROUSERS",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/4043/280/802/2/w/448/4043280802_1_1_1.jpg?ts=1689335051230",
    "price": "₹ 4,990.00",
    "details": "Mid-rise trousers made of 100% linen. Belt loops. Front pockets and false welt pockets on the back. Frayed hem. Front zip fly and button fastening.",
    "id": "productw699"
  },
  {
    "product_name": "KNOTTED SHIRT",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/7735/518/406/17/w/448/7735518406_1_1_1.jpg?ts=1686901772415",
    "price": "₹ 2,990.00",
    "details": "Collared shirt made of a linen blend fabric. Long sleeves. Front patch pockets with flaps. Button-up front and knot at the hem.",
    "id": "productw700"
  },
  {
    "product_name": "LINEN BLEND SHORT DRESS",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/2990/325/250/12/w/448/2990325250_1_1_1.jpg?ts=1687345999790",
    "price": "₹ 2,990.00",
    "details": "Dress made of a linen blend. Square neckline and short puff sleeves. Open back with adjustable crossover ties. Matching lining. Invisible back zip fastening.",
    "id": "productw701"
  },
  {
    "product_name": "PLEATED TOP",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/4661/009/800/12/w/448/4661009800_1_1_1.jpg?ts=1687346000428",
    "price": "₹ 2,590.00",
    "details": "Off-the-shoulder top with a straight-cut neckline. Draped fabric. Metal zip fastening at the back.",
    "id": "productw702"
  },
  {
    "product_name": "FULL LENGTH LINEN BLEND TROUSERS",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/4661/502/800/12/w/448/4661502800_2_1_1.jpg?ts=1687345993925",
    "price": "₹ 3,290.00",
    "details": "High-waist trousers in a linen blend. Side pockets and rear false welt pockets. Dart details on the front. Front zip fly, inside button and metal hook fastening.",
    "id": "productw703"
  },
  {
    "product_name": "LONG FLOWING TROUSERS",
    "image_url": "https://static.zara.net/photos///2023/V/0/1/p/2216/483/631/2/w/448/2216483631_1_1_1.jpg?ts=1676370881753",
    "price": "₹ 2,990.00",
    "details": "Loose-fitting high-waist trousers with a straight-leg design. Invisible side zip fastening.",
    "id": "productw704"
  },
  {
    "product_name": "POINTELLE KNIT SWEATER",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/3991/110/450/12/w/448/3991110450_1_1_1.jpg?ts=1688980090176",
    "price": "₹ 2,990.00",
    "details": "Long sleeve V-neck sweater.",
    "id": "productw705"
  },
  {
    "product_name": "BLOUSE WITH JABOT FRILLS AND PEARL BEAD BUTTONS",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/7969/230/250/2/w/448/7969230250_1_1_1.jpg?ts=1692889132974",
    "price": "₹ 2,990.00",
    "details": "Collared blouse featuring long sleeves with slit cuffs. Jabot frills on the front. Button-up front hidden by a button placket and pearl bead appliqués on the collar and cuffs.",
    "id": "productw706"
  },
  {
    "product_name": "OXFORD SHIRT",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/8372/290/043/2/w/448/8372290043_1_1_1.jpg?ts=1691149126067",
    "price": "₹ 2,590.00",
    "details": "Shirt with a johnny collar, long sleeves and a button-up front.",
    "id": "productw707"
  },
  {
    "product_name": "SEMI-SHEER RHINESTONE SHIRT",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/7484/162/712/2/w/448/7484162712_1_1_1.jpg?ts=1692879489420",
    "price": "₹ 3,290.00",
    "details": "Semi-sheer collared shirt with long cuffed sleeves and front fastening with rhinestone buttons.",
    "id": "productw708"
  },
  {
    "product_name": "PRINTED TOP WITH GATHERED DETAIL",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/8562/716/018/2/w/448/8562716018_1_1_1.jpg?ts=1692779345552",
    "price": "₹ 2,990.00",
    "details": "Top with a surplice neck featuring long sleeves with cuffs and an elasticated hem.",
    "id": "productw709"
  },
  {
    "product_name": "CONTRAST SHIRT",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/3564/191/712/2/w/448/3564191712_6_1_1.jpg?ts=1692950069091",
    "price": "₹ 2,990.00",
    "details": "Collared shirt with long cuffed sleeves. Contrast fabric detail on the collar and cuffs. Front fastening with metal buttons.",
    "id": "productw710"
  },
  {
    "product_name": "ASYMMETRIC TUNIC BLOUSE",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/9479/277/737/2/w/448/9479277737_1_1_1.jpg?ts=1688980756229",
    "price": "₹ 4,990.00",
    "details": "Blouse made of a viscose blend. Featuring a V-neckline, short sleeves and an adjustable drawstring waist in the same fabric.",
    "id": "productw711"
  },
  {
    "product_name": "CROPPED LINEN BLEND SHIRT",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/2280/716/250/18/w/448/2280716250_1_1_1.jpg?ts=1686905393458",
    "price": "₹ 2,290.00",
    "details": "Shirt made of a linen blend fabric. Johnny collar and turn-up short sleeves. Front patch pockets. Button-up front.",
    "id": "productw712"
  },
  {
    "product_name": "POPLIN SHIRT WITH LACE TRIMS",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/7200/232/712/17/w/448/7200232712_1_1_1.jpg?ts=1692286392819",
    "price": "₹ 3,290.00",
    "details": "Shirt with a high neck and long sleeves. Matching lace trim details. Button-up front.",
    "id": "productw713"
  },
  {
    "product_name": "Z1975 DENIM OVERSHIRT WITH PATCH POCKETS",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/6147/165/406/2/w/448/6147165406_1_1_1.jpg?ts=1685105199661",
    "price": "₹ 4,990.00",
    "details": "Collared overshirt with long sleeves. Front patch pockets. Side vents at the hem. Front metal button fastening.",
    "id": "productw714"
  },
  {
    "product_name": "LINEN BLOUSE",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/7624/118/802/2/w/448/7624118802_1_1_1.jpg?ts=1685374126964",
    "price": "₹ 4,990.00",
    "details": "Linen blouse with a V-neckline, long sleeves and an asymmetric hem.",
    "id": "productw715"
  },
  {
    "product_name": "POPLIN SHIRT",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/4387/036/250/13/w/448/4387036250_2_3_1.jpg?ts=1691489979923",
    "price": "₹ 2,290.00",
    "details": "Collared V-neck shirt with long sleeves and a button-up front.",
    "id": "productw716"
  },
  {
    "product_name": "RHINESTONE POPLIN SHIRT",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/8741/233/406/2/w/448/8741233406_1_1_1.jpg?ts=1693318192123",
    "price": "₹ 3,990.00",
    "details": "Collared shirt made of cotton. Featuring long sleeves with cuffs, rhinestone appliqués and a button-up front.",
    "id": "productw717"
  },
  {
    "product_name": "ASYMMETRIC LINEN SHIRT",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/4786/118/832/14/w/448/4786118832_1_1_1.jpg?ts=1691599681734",
    "price": "₹ 3,290.00",
    "details": "Shirt made of linen. Featuring a slot collar, long cuffed sleeves and an asymmetric hem with side vents.",
    "id": "productw718"
  },
  {
    "product_name": "PLEATED OPEN-BACK TOP",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/7969/232/427/2/w/448/7969232427_1_1_1.jpg?ts=1691417177377",
    "price": "₹ 2,990.00",
    "details": "High neck top with long sleeves. Open back detail. Invisible side zip fastening and buttons.",
    "id": "productw719"
  },
  {
    "product_name": "REGULAR FIT STRIPED SHIRT",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/2298/163/064/2/w/448/2298163064_1_1_1.jpg?ts=1692792858343",
    "price": "₹ 2,990.00",
    "details": "Shirt featuring a Johnny collar and long cuffed sleeves with pleats. Slit hem on the sides. Button-up front.",
    "id": "productw720"
  },
  {
    "product_name": "FITTED SHIRT",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/8372/282/620/17/w/448/8372282620_1_1_1.jpg?ts=1691577997138",
    "price": "₹ 2,990.00",
    "details": "Collared shirt with long sleeves. Fitted waist. Button-up front.",
    "id": "productw721"
  },
  {
    "product_name": "SEMI-SHEER BLOUSE WITH PLEATED RUFFLE TRIMS",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/1971/160/800/2/w/448/1971160800_1_1_1.jpg?ts=1691758139597",
    "price": "₹ 3,990.00",
    "details": "V-neck blouse with long sleeves. Pleated ruffles. Button-up front.This garment is not lined.",
    "id": "productw722"
  },
  {
    "product_name": "CONTRAST TEXTURED SHIRT",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/3564/189/800/2/w/448/3564189800_1_1_1.jpg?ts=1692203337333",
    "price": "₹ 2,990.00",
    "details": "Semi-sheer collared shirt with long sleeves. Front patch pockets. Textured trims. Button-up front hidden by a placket.This garment is not lined.",
    "id": "productw723"
  },
  {
    "product_name": "CROPPED STRIPED SHIRT",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/2712/028/017/12/w/448/2712028017_2_5_1.jpg?ts=1691152875695",
    "price": "₹ 2,590.00",
    "details": "Cropped collared shirt featuring long sleeves with buttons hidden by a placket. Front patch pocket. Front button-up fastening hidden by a placket.",
    "id": "productw724"
  },
  {
    "product_name": "PRINTED SATIN SHIRT",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/8445/153/330/2/w/448/8445153330_1_1_1.jpg?ts=1692603424436",
    "price": "₹ 3,290.00",
    "details": "High neck shirt with tie detail. Long cuffed sleeves. Button-up front.",
    "id": "productw725"
  },
  {
    "product_name": "POPLIN SHIRT WITH FEATHER APPLIQUÉS",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/2165/003/250/2/w/448/2165003250_1_1_1.jpg?ts=1692259215650",
    "price": "₹ 8,590.00",
    "details": "Collared shirt made of cotton. Long sleeves with contrast removable feathers. Asymmetric hem. Button-up front.",
    "id": "productw726"
  },
  {
    "product_name": "PRINTED KIMONO SHIRT",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/8450/154/330/2/w/448/8450154330_1_1_1.jpg?ts=1692603423770",
    "price": "₹ 3,290.00",
    "details": "V-neck kimono shirt with full sleeves falling below the elbow. Front fastening with covered buttons in matching fabric.",
    "id": "productw727"
  },
  {
    "product_name": "CONTRAST TEXTURED SHIRT",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/3564/190/251/2/w/448/3564190251_1_1_1.jpg?ts=1692203339828",
    "price": "₹ 2,990.00",
    "details": "Collared shirt with long sleeves. Textured trims. Button-up front hidden by a placket.",
    "id": "productw728"
  },
  {
    "product_name": "Z1975 DENIM SHIRT",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/1879/224/427/19/w/448/1879224427_1_1_1.jpg?ts=1692777366969",
    "price": "₹ 2,590.00",
    "details": "Collared shirt with long sleeves. Front patch pockets with flaps. Front fastening with metal buttons.",
    "id": "productw729"
  },
  {
    "product_name": "SEQUINNED SATIN SHIRT",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/2731/242/560/2/w/448/2731242560_1_1_1.jpg?ts=1686137340963",
    "price": "₹ 5,990.00",
    "details": "Collared shirt made of viscose. Featuring long cuffed sleeves, embroidered sequin appliqués, side vents at the hem and front button fastening.",
    "id": "productw730"
  },
  {
    "product_name": "RHINESTONE POPLIN SHIRT",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/4786/270/250/17/w/448/4786270250_1_1_1.jpg?ts=1690966827336",
    "price": "₹ 5,990.00",
    "details": "Cotton shirt with a Johnny collar and sleeves falling below the elbow. Rhinestone appliqués and pleat at the back. Asymmetric hem with side vents. Button-up front.",
    "id": "productw731"
  },
  {
    "product_name": "POPLIN WRAP SHIRT",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/9479/282/401/2/w/448/9479282401_1_1_1.jpg?ts=1691152491426",
    "price": "₹ 3,290.00",
    "details": "Collared shirt featuring long sleeves with cuffs. Crossover fabric detail on the front with a knot. Button-up front hidden by a placket.",
    "id": "productw732"
  },
  {
    "product_name": "OVERSIZED FLORAL PRINT SHIRT",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/8494/120/330/2/w/448/8494120330_1_1_1.jpg?ts=1691577425004",
    "price": "₹ 3,290.00",
    "details": "Satin collared shirt with long sleeves. Side vents at the hem. Button-up front.",
    "id": "productw733"
  },
  {
    "product_name": "CROPPED SHIRT WITH RAISED FLOWER",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/8351/227/800/2/w/448/8351227800_1_1_1.jpg?ts=1692699026701",
    "price": "₹ 3,290.00",
    "details": "Cropped collared shirt featuring long cuffed sleeves, contrast fabric with raised flowers and a button-up front with covered buttons.",
    "id": "productw734"
  },
  {
    "product_name": "SHIRT WITH CUTWORK EMBROIDERY",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/4786/316/942/2/w/448/4786316942_1_1_1.jpg?ts=1687513222670",
    "price": "₹ 2,990.00",
    "details": "Cotton shirt with a Johnny collar. Sleeves falling below the elbow. Cutwork embroidery detail. Asymmetric hem with side vents. Button-up front.",
    "id": "productw735"
  },
  {
    "product_name": "LINEN BLEND SHIRT WITH PATCH POCKETS",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/8318/377/172/2/w/448/8318377172_1_1_1.jpg?ts=1690965013706",
    "price": "₹ 3,290.00",
    "details": "Shirt made of a linen blend fabric. Johnny collar and long sleeves. Front patch pockets. Button-up front.",
    "id": "productw736"
  },
  {
    "product_name": "SATIN SHIRT",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/9929/235/529/2/w/448/9929235529_1_1_1.jpg?ts=1691758355172",
    "price": "₹ 2,990.00",
    "details": "Collared shirt with long sleeves. Button fastening at the front hidden by a placket.",
    "id": "productw737"
  },
  {
    "product_name": "TRF ASYMMETRIC DENIM TOP",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/4365/274/050/3/w/448/4365274050_1_1_1.jpg?ts=1691743833163",
    "price": "₹ 2,590.00",
    "details": "Halter top with a V-neckline. Featuring flap detail on the chest, an asymmetric hem and metal zip fastening on the side.",
    "id": "productw738"
  },
  {
    "product_name": "PRINTED RUFFLED SHIRT",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/7701/752/620/2/w/448/7701752620_1_1_1.jpg?ts=1689696939161",
    "price": "₹ 2,990.00",
    "details": "Slot collar shirt with long ruffled sleeves. Button fastening at the front.",
    "id": "productw739"
  },
  {
    "product_name": "SATIN SHIRT",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/7868/226/800/20/w/448/7868226800_1_1_1.jpg?ts=1690548190890",
    "price": "₹ 1,990.00",
    "details": "Collared shirt with a V-neckline. Long cuffed sleeves. Front button fastening.",
    "id": "productw740"
  },
  {
    "product_name": "ASYMMETRIC SHIRT WITH STRIPES",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/5644/812/060/2/w/448/5644812060_2_1_1.jpg?ts=1692796710955",
    "price": "₹ 2,290.00",
    "details": "Shirt with an asymmetric neckline, long sleeves and pleats at the waist.",
    "id": "productw741"
  },
  {
    "product_name": "FLORAL PRINT SHIRT",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/8446/132/070/2/w/448/8446132070_1_1_1.jpg?ts=1691577080088",
    "price": "₹ 3,290.00",
    "details": "Flowing collared shirt with long sleeves. Split hem. Button-up front.",
    "id": "productw742"
  },
  {
    "product_name": "LINEN SHIRT WITH POCKET",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/4786/320/802/2/w/448/4786320802_1_1_1.jpg?ts=1691590840989",
    "price": "₹ 3,290.00",
    "details": "100% linen collared shirt. Sleeves falling below the elbow. Patch pocket on the chest. Asymmetric hem. Button-up front.",
    "id": "productw743"
  },
  {
    "product_name": "ANIMAL PRINT SATIN SHIRT",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/1971/170/038/2/w/448/1971170038_1_1_1.jpg?ts=1692793471947",
    "price": "₹ 3,290.00",
    "details": "Flowing collared shirt with long cuffed sleeves. Button-up front.",
    "id": "productw744"
  },
  {
    "product_name": "FLORAL PRINT SHIRT",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/4387/249/090/2/w/448/4387249090_1_1_1.jpg?ts=1690199033848",
    "price": "₹ 2,990.00",
    "details": "Collared semi-sheer shirt with long sleeves. Button-up front with matching covered buttons.",
    "id": "productw745"
  },
  {
    "product_name": "CROPPED SATIN SHIRT",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/2298/175/250/2/w/448/2298175250_1_1_1.jpg?ts=1690386810677",
    "price": "₹ 2,590.00",
    "details": "Collared V-neck shirt with long sleeves. Front fastening with matching covered buttons.",
    "id": "productw746"
  },
  {
    "product_name": "SHIRT WITH CONTRAST BOLO TIE",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/4387/260/250/2/w/448/4387260250_1_1_1.jpg?ts=1692203338544",
    "price": "₹ 2,990.00",
    "details": "Collared shirt featuring a contrast bow and long sleeves. Front fastening with matching covered buttons.",
    "id": "productw747"
  },
  {
    "product_name": "PRINTED RAMIE BLOUSE",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/4786/302/300/2/w/448/4786302300_1_1_1.jpg?ts=1688997271735",
    "price": "₹ 4,990.00",
    "details": "Blouse made of 100% ramie. Slot collar and sleeves falling below the elbow. Asymmetric hem with side vents. Button-up front.",
    "id": "productw748"
  },
  {
    "product_name": "CROSSOVER TOP WITH RUFFLES",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/8051/346/800/2/w/448/8051346800_1_1_1.jpg?ts=1691755226340",
    "price": "₹ 2,990.00",
    "details": "Semi-sheer top with a surplice neckline and long sleeves. Ruffle trim details. This garment is not lined.",
    "id": "productw749"
  },
  {
    "product_name": "EMBROIDERED RHINESTONE SHIRT",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/4786/271/251/12/w/448/4786271251_1_1_1.jpg?ts=1689665466067",
    "price": "₹ 5,990.00",
    "details": "Collared semi-sheer shirt featuring long sleeves with cuffs. Chest patch pocket. Embroidery with rhinestone appliqués. Asymmetric hem with side vents. Button-up front.",
    "id": "productw750"
  },
  {
    "product_name": "TIE-DYE PRINT OVERSIZE SHIRT",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/8505/151/330/2/w/448/8505151330_1_1_1.jpg?ts=1691758079741",
    "price": "₹ 3,290.00",
    "details": "Long sleeve shirt with a Johnny collar and slits at the cuffs. Asymmetric hem with side vents. Button-up front.",
    "id": "productw751"
  },
  {
    "product_name": "LINEN SHIRT WITH AN ASYMMETRIC HEM",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/4786/126/251/13/w/448/4786126251_1_1_1.jpg?ts=1691599681781",
    "price": "₹ 3,290.00",
    "details": "Shirt made of 100% linen. Johnny collar with sleeves falling below the elbow. Asymmetric hem with side vents. Button-up front.",
    "id": "productw752"
  },
  {
    "product_name": "RHINESTONE POPLIN SHIRT",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/8741/234/250/2/w/448/8741234250_1_1_1.jpg?ts=1693318193892",
    "price": "₹ 3,290.00",
    "details": "Shirt made of cotton. Lapel collar and long cuffed sleeves. Chest patch pocket. Rhinestone appliqués. Side slits at the hem. Button-up front hidden by a snap-button placket.",
    "id": "productw753"
  },
  {
    "product_name": "SEMI-SHEER BLOUSE WITH RUFFLE TRIMS",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/8081/334/512/2/w/448/8081334512_1_1_1.jpg?ts=1692689344658",
    "price": "₹ 4,990.00",
    "details": "Semi-sheer blouse featuring a V-neckline, long cape sleeves with drawstrings, ruffled details in matching fabric, asymmetric hem and front fastening with matching ties. Made of viscose.",
    "id": "productw754"
  },
  {
    "product_name": "GABARDINE FABRIC CROPPED SHIRT",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/7901/038/058/2/w/448/7901038058_1_1_1.jpg?ts=1691588060811",
    "price": "₹ 2,590.00",
    "details": "Collared shirt made of gabardine fabric. Long sleeves with frayed pleated cuffs. Cut-out chest pocket. Darted back. Button-up front.",
    "id": "productw755"
  },
  {
    "product_name": "PAISLEY PRINT SHIRT",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/8422/135/330/2/w/448/8422135330_1_1_1.jpg?ts=1692008566359",
    "price": "₹ 2,990.00",
    "details": "Collared shirt with a V-neckline and long sleeves. Side vents at the hem. Fastens at the front with buttons.",
    "id": "productw756"
  },
  {
    "product_name": "MINIMALIST BLOUSE WITH BELT",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/8266/357/800/2/w/448/8266357800_1_1_1.jpg?ts=1692689343822",
    "price": "₹ 5,990.00",
    "details": "Semi-sheer blouse made of a viscose blend. V-neckline and long sleeves. Tied belt in the same fabric. Side vents at the hem.",
    "id": "productw757"
  },
  {
    "product_name": "RUFFLED LACE TRIM PRINT SHIRT",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/8468/155/330/2/w/448/8468155330_1_1_1.jpg?ts=1692699025790",
    "price": "₹ 2,990.00",
    "details": "Semi-sheer V-neck shirt with long cuffed sleeves. Contrast lace trims and ruffles on the chest. Front fastening with covered buttons.",
    "id": "productw758"
  },
  {
    "product_name": "LINEN POLO COLLAR BLOUSE",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/4786/289/251/17/w/448/4786289251_1_1_1.jpg?ts=1687533980699",
    "price": "₹ 3,290.00",
    "details": "Blouse made of 100% linen. Featuring a polo collar, sleeves falling below the elbow and an asymmetric hem with side vents.",
    "id": "productw759"
  },
  {
    "product_name": "STRIPED OVERSIZE SHIRT",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/9479/267/096/2/w/448/9479267096_1_1_1.jpg?ts=1691509296694",
    "price": "₹ 3,290.00",
    "details": "Loose-fitting shirt featuring a Johnny collar and long sleeves with cuffs. Chest patch pocket. Pleated detail on the back. Button-up front.",
    "id": "productw760"
  },
  {
    "product_name": "RUFFLED SHIRT WITH FLORAL PRINT",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/8405/227/330/2/w/448/8405227330_1_1_1.jpg?ts=1692612101327",
    "price": "₹ 3,290.00",
    "details": "Shirt with a V-neck and long sleeves. Front ruffle details.",
    "id": "productw761"
  },
  {
    "product_name": "FLORAL PRINT SATIN TOP",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/8472/139/330/2/w/448/8472139330_1_1_1.jpg?ts=1691593335429",
    "price": "₹ 3,290.00",
    "details": "Top featuring a crossover high neck with multi-way tied detail at the back. Long sleeves.",
    "id": "productw762"
  },
  {
    "product_name": "LACE TRIM LINEN SHIRT",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/8078/270/250/17/w/448/8078270250_1_1_1.jpg?ts=1690965610712",
    "price": "₹ 3,290.00",
    "details": "Shirt made of 100% linen. Lapel collar, long sleeves, front lace trims and a button-up front.",
    "id": "productw763"
  },
  {
    "product_name": "SATIN FLORAL PRINT SHIRT",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/8316/715/044/2/w/448/8316715044_1_1_1.jpg?ts=1692008565420",
    "price": "₹ 2,990.00",
    "details": "Collared shirt with a V-neckline and long sleeves. Asymmetric hem with side vents. Button-down front hidden by a placket.",
    "id": "productw764"
  },
  {
    "product_name": "SEMI-SHEER VOLUMINOUS BLOUSE",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/8079/334/676/2/w/448/8079334676_1_1_1.jpg?ts=1692689344184",
    "price": "₹ 4,990.00",
    "details": "Blouse made of viscose. Featuring a straight neckline, long cape sleeves, adjustable shoulder straps and an asymmetric hem.",
    "id": "productw765"
  },
  {
    "product_name": "EMBROIDERED BLOUSE",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/5770/036/506/12/w/448/5770036506_1_1_1.jpg?ts=1685978499499",
    "price": "₹ 3,290.00",
    "details": "Loose-fitting blouse with a slot collar and long sleeves. Contrast embroidery detail.",
    "id": "productw766"
  },
  {
    "product_name": "STRIPED SHIRT",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/9479/276/086/2/w/448/9479276086_1_1_1.jpg?ts=1691509297328",
    "price": "₹ 3,290.00",
    "details": "Johnny collar shirt made of a viscose blend. Cuffed sleeves falling below the elbow. Back pleat detail. Asymmetric hem with side vents. Button-up front.",
    "id": "productw767"
  },
  {
    "product_name": "SEMI-SHEER COMBINED TEXTURED SHIRT",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/1971/164/800/2/w/448/1971164800_2_1_1.jpg?ts=1692203337744",
    "price": "₹ 3,290.00",
    "details": "Collared shirt with long sleeves. Front patch pocket. Textured frayed fabric detail. Button-up front hidden by a placket.",
    "id": "productw768"
  },
  {
    "product_name": "SHIRT WITH CUTWORK EMBROIDERY",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/8741/228/250/2/w/448/8741228250_1_1_1.jpg?ts=1691153432751",
    "price": "₹ 2,990.00",
    "details": "Round neck shirt featuring long sleeves with elasticated trims. Matching embroidery and ruffled trims. Matching front button fastening.",
    "id": "productw769"
  },
  {
    "product_name": "EMBROIDERED COTTON BLOUSE",
    "image_url": "https://static.zara.net/photos///2023/V/0/1/p/5107/046/251/2/w/448/5107046251_1_1_1.jpg?ts=1678811442044",
    "price": "₹ 2,990.00",
    "details": "Long sleeve V-neck blouse made of cotton. Contrast embroidery detail. Button-up fastening at the front.",
    "id": "productw770"
  },
  {
    "product_name": "SHIRT WITH CONTRAST RUFFLES",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/3897/163/712/2/w/448/3897163712_1_1_1.jpg?ts=1692688583205",
    "price": "₹ 2,990.00",
    "details": "Semi-sheer shirt with a slot collar. Long cuffed sleeves. Lining on the front. Ruffle trims with a contrast finish.",
    "id": "productw771"
  },
  {
    "product_name": "100% LINEN SHIRT",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/7558/387/613/2/w/448/7558387613_1_1_1.jpg?ts=1683633497090",
    "price": "₹ 2,990.00",
    "details": "Collared shirt with long sleeves, front patch pockets and a button-up front.",
    "id": "productw772"
  },
  {
    "product_name": "SHIRT WITH DRAWSTRING NECKLINE",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/7797/670/406/2/w/448/7797670406_1_1_1.jpg?ts=1691075841787",
    "price": "₹ 2,990.00",
    "details": "Shirt featuring long sleeves and a Johnny collar with a drawstring.",
    "id": "productw773"
  },
  {
    "product_name": "SATIN TOP WITH KNOT",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/2298/178/611/2/w/448/2298178611_1_1_1.jpg?ts=1691417175817",
    "price": "₹ 2,990.00",
    "details": "Crop top featuring a V-neckline with a knot and long sleeves. Invisible side zip fastening.",
    "id": "productw774"
  },
  {
    "product_name": "SMOCKED PRINTED BLOUSE",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/8348/814/330/2/w/448/8348814330_1_1_1.jpg?ts=1691075773434",
    "price": "₹ 2,990.00",
    "details": "Round neck blouse with smocking, long sleeves with elasticated trims and a button-up front.",
    "id": "productw775"
  },
  {
    "product_name": "TIE-DYE PRINT SHIRT",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/7888/425/330/2/w/448/7888425330_1_1_1.jpg?ts=1689149351146",
    "price": "₹ 3,290.00",
    "details": "Collared shirt with long sleeves. Side vents at the hem. Button-up front.",
    "id": "productw776"
  },
  {
    "product_name": "STRIPED JACQUARD BLOUSE",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/4437/253/700/2/w/448/4437253700_1_1_1.jpg?ts=1691152492038",
    "price": "₹ 3,290.00",
    "details": "Blouse made of a viscose blend. Featuring a V-neckline, long voluminous sleeves, matching stripes and front button fastening.",
    "id": "productw777"
  },
  {
    "product_name": "SHIRT WITH CUTWORK EMBROIDERY",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/7578/101/251/12/w/448/7578101251_1_1_1.jpg?ts=1691599681739",
    "price": "₹ 3,290.00",
    "details": "Collared shirt with short sleeves. Matching cutwork embroidery detail. Button-up front.",
    "id": "productw778"
  },
  {
    "product_name": "PRINTED RAMIE SHIRT",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/4786/304/426/2/w/448/4786304426_1_1_1.jpg?ts=1689936422704",
    "price": "₹ 3,290.00",
    "details": "Shirt made of 100% ramie. Johnny collar and sleeves falling below the elbow with cuffs. Asymmetric hem with side vents. Pleated detail on the back. Front fastening.",
    "id": "productw779"
  },
  {
    "product_name": "OVERSIZE FLOWING SHIRT",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/4387/238/250/2/w/448/4387238250_1_1_1.jpg?ts=1691758138213",
    "price": "₹ 2,290.00",
    "details": "Collared shirt with long sleeves. Front patch pockets. Asymmetric hem. Button-up front.",
    "id": "productw780"
  },
  {
    "product_name": "SEMI-SHEER SHIRT WITH RUFFLES",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/3564/172/800/2/w/448/3564172800_1_1_1.jpg?ts=1687791317841",
    "price": "₹ 2,590.00",
    "details": "Collared sleeveless shirt. Ruffled detail. Button-up front hidden by a placket.This garment is not lined.",
    "id": "productw781"
  },
  {
    "product_name": "OXFORD SHIRT",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/8372/060/403/20/w/448/8372060403_1_1_1.jpg?ts=1692689707366",
    "price": "₹ 2,590.00",
    "details": "Shirt made of a cotton blend. Johnny collar and long sleeves. Button-up front.",
    "id": "productw782"
  },
  {
    "product_name": "ROLL-UP SLEEVE LINEN BLEND SHIRT",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/4387/056/250/20/w/448/4387056250_1_1_1.jpg?ts=1686905617014",
    "price": "₹ 2,590.00",
    "details": "Shirt made of a linen blend. Featuring a slot collar, long roll-up sleeves with buttoned tabs, front flap pockets, side vents at the hem and a button-up front.",
    "id": "productw783"
  },
  {
    "product_name": "DRAPED TOP",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/7484/158/671/2/w/448/7484158671_1_1_1.jpg?ts=1691417177880",
    "price": "₹ 2,590.00",
    "details": "Sleeveless top with a cowl neckline. Featuring gathering on the shoulders.",
    "id": "productw784"
  },
  {
    "product_name": "STRIPED OVERSIZE LINEN BLEND SHIRT",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/7699/493/330/2/w/448/7699493330_1_1_1.jpg?ts=1684406394483",
    "price": "₹ 2,990.00",
    "details": "Collared shirt made of a linen blend. Featuring long sleeves and button fastening at the front.",
    "id": "productw785"
  },
  {
    "product_name": "PRINTED FLOWING BLOUSE",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/7907/033/330/17/w/448/7907033330_1_1_1.jpg?ts=1687966675950",
    "price": "₹ 4,990.00",
    "details": "Flowing collared blouse made of viscose. Short sleeves. Chest patch pockets. Button-up front.",
    "id": "productw786"
  },
  {
    "product_name": "TIE-DYE PRINT CROP TOP",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/8506/170/330/2/w/448/8506170330_1_1_1.jpg?ts=1691758139404",
    "price": "₹ 2,990.00",
    "details": "Top with a surplice neckline and long sleeves. Gathered hem with pleats. Invisible side zip fastening.",
    "id": "productw787"
  },
  {
    "product_name": "100% LINEN SHIRT",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/8372/036/250/20/w/448/8372036250_1_1_1.jpg?ts=1686905893170",
    "price": "₹ 2,890.00",
    "details": "Collared shirt made of 100% linen. Featuring long sleeves, a front patch pocket and button-up front.",
    "id": "productw788"
  },
  {
    "product_name": "CROPPED SHIRT WITH KNOT",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/8071/675/506/2/w/448/8071675506_1_1_1.jpg?ts=1689258558722",
    "price": "₹ 2,290.00",
    "details": "Collared shirt featuring turn-up short sleeves with buttoned tabs. Front patch pockets with flaps. Button and knot front fastening.",
    "id": "productw789"
  },
  {
    "product_name": "CROPPED SHIRT WITH CUTWORK EMBROIDERY",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/7640/914/250/17/w/448/7640914250_1_1_1.jpg?ts=1685104832032",
    "price": "₹ 3,290.00",
    "details": "Collared shirt with long sleeves. Matching cutwork embroidery and lace trim details. Button-up front.",
    "id": "productw790"
  },
  {
    "product_name": "LINEN SHIRT WITH POCKET",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/4877/242/251/2/w/448/4877242251_1_1_1.jpg?ts=1687963972079",
    "price": "₹ 3,290.00",
    "details": "Linen shirt. Collar and sleeves falling below the elbow. Patch pocket on the chest. Asymmetric hem. Button-up front.",
    "id": "productw791"
  },
  {
    "product_name": "LONG BLOUSE WITH KNOT",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/5107/253/712/2/w/448/5107253712_1_1_1.jpg?ts=1688980754918",
    "price": "₹ 3,290.00",
    "details": "Long blouse made of cotton. Johnny collar and sleeves falling below the elbow. Knot detail on the front. Asymmetric hem.",
    "id": "productw792"
  },
  {
    "product_name": "STRIPED SHIRT WITH TIE DETAIL",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/9878/220/044/2/w/448/9878220044_1_1_1.jpg?ts=1684832405054",
    "price": "₹ 3,290.00",
    "details": "Johnny collar shirt with long sleeves. Side dart details. Wrap-style front with ties.",
    "id": "productw793"
  },
  {
    "product_name": "Z1975 DENIM BLOUSE WITH TIE",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/6164/169/427/2/w/448/6164169427_1_1_1.jpg?ts=1686233835509",
    "price": "₹ 3,290.00",
    "details": "Blouse featuring a high neck with a tie detail and a V-neckline. Short sleeves with metallic button.",
    "id": "productw794"
  },
  {
    "product_name": "LONG WRINKLED-EFFECT TOP",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/7822/732/803/2/w/448/7822732803_1_1_1.jpg?ts=1684832404738",
    "price": "₹ 3,290.00",
    "details": "Top with a slot collar and long sleeves. Split hem. Button-up front.",
    "id": "productw795"
  },
  {
    "product_name": "PRINTED COTTON BLOUSE",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/4437/251/500/12/w/448/4437251500_1_1_1.jpg?ts=1688977066749",
    "price": "₹ 3,290.00",
    "details": "Blouse made of 100% cotton. V-neck and full sleeves falling below the elbow. Asymmetric hem. Button-up front.",
    "id": "productw796"
  },
  {
    "product_name": "RUFFLED LINEN BLOUSE",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/4043/267/500/2/w/448/4043267500_1_1_1.jpg?ts=1690801269362",
    "price": "₹ 3,290.00",
    "details": "Blouse made of 100% linen. Featuring a slot collar, ruffle trims in the same fabric and an asymmetric hem.",
    "id": "productw797"
  },
  {
    "product_name": "TRF OVERSIZE DENIM SHIRT",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/3607/272/407/3/w/448/3607272407_1_1_1.jpg?ts=1691743832836",
    "price": "₹ 3,290.00",
    "details": "Oversize collared shirt featuring drop-shoulder long sleeves with cuffs. Faded effect. Dart detail at the back. Button-up front.",
    "id": "productw798"
  },
  {
    "product_name": "SATIN GEOMETRIC PRINT SHIRT",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/2298/162/070/2/w/448/2298162070_1_1_1.jpg?ts=1693318192795",
    "price": "₹ 3,290.00",
    "details": "Loose-fitting collared shirt featuring long sleeves with cuffs. Button-up front hidden by a placket.",
    "id": "productw799"
  },
  {
    "product_name": "RUFFLED SATIN SHIRT",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/7675/796/406/17/w/448/7675796406_1_1_1.jpg?ts=1689176280408",
    "price": "₹ 2,590.00",
    "details": "Collared short sleeve shirt with front ruffle detail. Button-up front hidden by a placket.",
    "id": "productw800"
  },
  {
    "product_name": "CROPPED SHIRT WITH BELT",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/4661/027/803/2/w/448/4661027803_1_1_1.jpg?ts=1692193283702",
    "price": "₹ 2,990.00",
    "details": "Collared shirt featuring long sleeves with pleated cuffs. False welt pocket on the chest. Contrast belt with metal buckle at the hem. Button-up front.",
    "id": "productw801"
  },
  {
    "product_name": "PRINTED BLOUSE WITH RUFFLES",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/3666/159/061/2/w/448/3666159061_1_1_1.jpg?ts=1689328170105",
    "price": "₹ 2,990.00",
    "details": "Blouse with a ruffled V-neck and long sleeves with elasticated trim. Front fastening with matching covered buttons.",
    "id": "productw802"
  },
  {
    "product_name": "BLOUSE WITH GOLD BUTTONS",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/8404/309/620/2/w/448/8404309620_1_1_1.jpg?ts=1691577080334",
    "price": "₹ 2,990.00",
    "details": "V-neck blouse with pleat and false front buttons. Long sleeves with buttoned opening.",
    "id": "productw803"
  },
  {
    "product_name": "BUTTON-UP LINEN SHIRT",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/5427/012/800/2/w/448/5427012800_1_1_1.jpg?ts=1688126312813",
    "price": "₹ 2,990.00",
    "details": "Collared shirt made of 100% linen. Long sleeves with cuffs. Button-up front and buttons at the back.",
    "id": "productw804"
  },
  {
    "product_name": "PRINTED BLOUSE WITH BOW",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/7690/475/330/2/w/448/7690475330_1_1_1.jpg?ts=1688124509731",
    "price": "₹ 2,990.00",
    "details": "Cropped blouse made of a linen blend. Johnny collar and long wide sleeves. Button and tie fastening at the front.",
    "id": "productw805"
  },
  {
    "product_name": "STRIPE CROPPED SHIRT WITH TIE",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/4688/003/049/2/w/448/4688003049_1_1_1.jpg?ts=1692193283876",
    "price": "₹ 2,990.00",
    "details": "Shirt featuring a lapel neck and long cuffed sleeves. Faux piped pocket on front. Tie detail in the same fabric. Button-up front.",
    "id": "productw806"
  },
  {
    "product_name": "PLUMETIS SHIRT WITH RUFFLES",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/8317/711/072/2/w/448/8317711072_1_1_1.jpg?ts=1692699026085",
    "price": "₹ 2,990.00",
    "details": "Semi-sheer collared shirt with long sleeves with ruffled trims and a button-up front. This garment is not lined.",
    "id": "productw807"
  },
  {
    "product_name": "ASYMMETRIC CAPE BLOUSE",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/7627/187/712/12/w/448/7627187712_1_1_1.jpg?ts=1690987260744",
    "price": "₹ 5,990.00",
    "details": "Long cape blouse with a round neck, sleeves falling below the elbow and an asymmetric hem.",
    "id": "productw808"
  },
  {
    "product_name": "FLOWING OVERSIZE BLOUSE WITH GATHERED DETAIL",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/8074/576/431/2/w/448/8074576431_1_1_1.jpg?ts=1690386809866",
    "price": "₹ 2,990.00",
    "details": "Oversize blouse with a V-neck and long sleeves. Gathered detailing on the front and back. Side vents at the hem. Front fastening with matching covered buttons.",
    "id": "productw809"
  },
  {
    "product_name": "LONG EMBROIDERED BLOUSE",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/7521/263/712/2/w/449/7521263712_1_1_1.jpg?ts=1689665200904",
    "price": "₹ 4,990.00",
    "details": "Long blouse made of a viscose blend. Round neck and short full sleeves. Mirror-effect appliqués and contrast embroidery.",
    "id": "productw810"
  },
  {
    "product_name": "LONG SEMI-SHEER BLOUSE",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/7873/566/800/2/w/448/7873566800_1_1_1.jpg?ts=1689761558510",
    "price": "₹ 4,990.00",
    "details": "Long blouse made of 100% viscose. Featuring a V-neckline, short sleeves and an asymmetric hem with front vent.",
    "id": "productw811"
  },
  {
    "product_name": "OVERSIZE BLOUSE WITH GOLD-TONED BUTTONS",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/8090/920/250/2/w/448/8090920250_1_1_1.jpg?ts=1689939073171",
    "price": "₹ 3,290.00",
    "details": "Oversize blouse featuring a johnny collar and long sleeves. Front patch pocket. Hem with side vents. Front fastening with gold-toned buttons.",
    "id": "productw812"
  },
  {
    "product_name": "CROPPED STRIPED SHIRT",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/3067/025/802/2/w/448/3067025802_1_1_1.jpg?ts=1689176606519",
    "price": "₹ 2,590.00",
    "details": "Collared shirt featuring long sleeves with pleated cuffs. Chest patch pocket. Button-up front hidden by a placket.",
    "id": "productw813"
  },
  {
    "product_name": "OVERSIZE LINEN BLEND SHIRT",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/7749/351/123/2/w/448/7749351123_1_1_1.jpg?ts=1686669400529",
    "price": "₹ 3,290.00",
    "details": "Collared shirt made of a linen and cotton blend fabric. Sleeves falling below the elbow. Front button fastening hidden by a placket.",
    "id": "productw814"
  },
  {
    "product_name": "100% LINEN BLOUSE",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/7843/707/250/2/w/448/7843707250_1_1_1.jpg?ts=1685358959194",
    "price": "₹ 3,290.00",
    "details": "Blouse featuring a V-neck with buttons and long sleeves.",
    "id": "productw815"
  },
  {
    "product_name": "STRIPED POPLIN BLOUSE WITH VENTS",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/9479/281/044/2/w/448/9479281044_1_1_1.jpg?ts=1691154412915",
    "price": "₹ 3,290.00",
    "details": "Blouse made of a cotton blend fabric. V-neckline and long voluminous sleeves. Asymmetric hem with front vents. Button-up front.",
    "id": "productw816"
  },
  {
    "product_name": "CROPPED POPLIN SHIRT",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/4437/249/707/2/w/448/4437249707_1_1_1.jpg?ts=1688725166564",
    "price": "₹ 3,290.00",
    "details": "Cropped collared shirt with short sleeves. Adjustable hem with drawstrings in the same fabric. Button-up front.",
    "id": "productw817"
  },
  {
    "product_name": "RUFFLED SHIRT WITH FLORAL PRINT",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/8406/226/330/2/w/448/8406226330_1_1_1.jpg?ts=1691417177607",
    "price": "₹ 3,290.00",
    "details": "Shirt featuring a Johnny collar and long sleeves with ruffles. Button-up front.",
    "id": "productw818"
  },
  {
    "product_name": "CONTRAST POPLIN JACKET",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/0264/467/104/2/w/448/0264467104_1_1_1.jpg?ts=1692196437935",
    "price": "₹ 3,290.00",
    "details": "Long V-neck jacket with long sleeves. Fabric appliqué detail made of poplin with contrast stripes. Side vents at the hem. Button-up front.",
    "id": "productw819"
  },
  {
    "product_name": "STRIPED POPLIN CROPPED SHIRT",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/7889/271/044/2/w/448/7889271044_1_1_1.jpg?ts=1686064621030",
    "price": "₹ 2,990.00",
    "details": "Collared shirt featuring drop-shoulder long sleeves with pleated cuffs. Dart detail at the back. Button-up front.",
    "id": "productw820"
  },
  {
    "product_name": "CONTRAST STRIPE CROPPED SHIRT",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/3298/100/044/2/w/448/3298100044_1_1_1.jpg?ts=1687938557432",
    "price": "₹ 2,990.00",
    "details": "Cropped collared shirt with long sleeves and buttons hidden by a placket. Front patch pocket. Button-up front.",
    "id": "productw821"
  },
  {
    "product_name": "Z1975 DENIM CROPPED SHIRT",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/7796/931/406/2/w/448/7796931406_1_1_1.jpg?ts=1688574085496",
    "price": "₹ 2,990.00",
    "details": "Collared shirt with long sleeves. Faded effect. Front patch pockets with flaps. Button-up front.",
    "id": "productw822"
  },
  {
    "product_name": "ROMANTIC BLOUSE",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/8126/983/250/2/w/448/8126983250_1_1_1.jpg?ts=1689264050967",
    "price": "₹ 2,990.00",
    "details": "Blouse with a slot collar, long sleeves and a button-up front.",
    "id": "productw823"
  },
  {
    "product_name": "PRINTED COTTON SHIRT",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/2183/240/712/2/w/448/2183240712_1_1_1.jpg?ts=1685022466266",
    "price": "₹ 2,990.00",
    "details": "Collared shirt made of cotton. Short turn-up sleeves. Chest patch pocket. Button-up front.",
    "id": "productw824"
  },
  {
    "product_name": "STRIPED LINEN BLEND SHIRT",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/7937/474/044/2/w/448/7937474044_1_1_1.jpg?ts=1686317072363",
    "price": "₹ 2,990.00",
    "details": "Shirt made of a linen blend. Johnny collar and long sleeves. Fastens at the front with buttons.",
    "id": "productw825"
  },
  {
    "product_name": "Z1975 DENIM OVERSIZE JACKET",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/1879/238/427/2/w/448/1879238427_6_1_1.jpg?ts=1692341666521",
    "price": "₹ 2,990.00",
    "details": "Oversize collared jacket featuring long sleeves with cuffs, front patch pockets and a button-up front with metal buttons.",
    "id": "productw826"
  },
  {
    "product_name": "CROPPED POPLIN SHIRT",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/3615/180/800/17/w/448/3615180800_1_1_1.jpg?ts=1687939201373",
    "price": "₹ 2,590.00",
    "details": "Collared shirt with turn-up short sleeves. Front patch pockets. Button-up front.",
    "id": "productw827"
  },
  {
    "product_name": "COTTON BLEND OXFORD SHIRT",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/8372/046/046/19/w/448/8372046046_1_1_1.jpg?ts=1692689692579",
    "price": "₹ 2,590.00",
    "details": "Shirt made of a cotton blend. Johnny collar and long sleeves. Asymmetric hem. Button-up front.",
    "id": "productw828"
  },
  {
    "product_name": "CROP TOP WITH KNOT",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/7484/163/982/2/w/448/7484163982_1_1_1.jpg?ts=1691758354364",
    "price": "₹ 2,590.00",
    "details": "V-neck top with a tie and wide long sleeves with slits.",
    "id": "productw829"
  },
  {
    "product_name": "LINEN SHIRT WITH POCKET",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/4786/324/321/2/w/448/4786324321_1_1_1.jpg?ts=1688997270373",
    "price": "₹ 3,290.00",
    "details": "Collared shirt made of 100% linen. Sleeves falling below the elbow. Chest patch pocket. Button-up front.",
    "id": "productw830"
  },
  {
    "product_name": "TIE-DYE PRINT BLOUSE",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/8040/461/330/2/w/448/8040461330_1_1_1.jpg?ts=1689621977229",
    "price": "₹ 3,290.00",
    "details": "Blouse with a V-neck and long sleeves. Hem with side vents. Button-up front.",
    "id": "productw831"
  },
  {
    "product_name": "GATHERED RAMIE SHIRT",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/8052/745/809/2/w/448/8052745809_1_1_1.jpg?ts=1689782718642",
    "price": "₹ 3,290.00",
    "details": "Slot collar shirt made of 100% ramie. Long sleeves and gathered detailing on the front. Button-up front.",
    "id": "productw832"
  },
  {
    "product_name": "WIDE SLEEVE LINEN SHIRT",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/8402/352/515/2/w/448/8402352515_1_1_1.jpg?ts=1691075771797",
    "price": "₹ 3,290.00",
    "details": "Collared shirt made of 100% linen. Featuring wide sleeves falling below the elbow, side vents at the hem and a button-up front hidden by a placket.",
    "id": "productw833"
  },
  {
    "product_name": "STRIPED MASCULINE POPLIN SHIRT",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/9479/273/400/12/w/448/9479273400_1_1_1.jpg?ts=1690987262193",
    "price": "₹ 3,290.00",
    "details": "Collared shirt made of 100% cotton. Featuring long sleeves with cuffs, a chest patch pocket, an asymmetric hem and a button-up front.",
    "id": "productw834"
  },
  {
    "product_name": "FLORAL PRINT LINEN BLEND SHIRT",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/8319/446/069/2/w/448/8319446069_1_1_1.jpg?ts=1690965016522",
    "price": "₹ 3,290.00",
    "details": "Collared shirt made of a linen blend. Long sleeves. Side vents at the hem. Button-up front.",
    "id": "productw835"
  },
  {
    "product_name": "STRIPED POPLIN CROPPED SHIRT",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/8019/819/912/2/w/448/8019819912_1_1_1.jpg?ts=1689176784706",
    "price": "₹ 2,990.00",
    "details": "Collared shirt featuring long sleeves with pleated cuffs. Chest welt pocket. Button-up front.",
    "id": "productw836"
  },
  {
    "product_name": "BLOUSE WITH RUFFLES",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/3666/162/250/2/w/448/3666162250_1_1_1.jpg?ts=1691593336366",
    "price": "₹ 2,990.00",
    "details": "Blouse featuring a slot collar with faux pearl appliqués. Long sleeves. Front ruffle details.",
    "id": "productw837"
  },
  {
    "product_name": "TRF CROPPED DENIM SHIRT",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/8197/470/400/2/w/448/8197470400_6_1_1.jpg?ts=1690546263239",
    "price": "₹ 2,990.00",
    "details": "Collared cropped shirt featuring long sleeves with cuffs. Chest patch pocket. Frayed hem. Snap-button fastenings on the front.",
    "id": "productw838"
  },
  {
    "product_name": "CROPPED SHIRT WITH POCKET",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/5427/005/250/20/w/448/5427005250_1_1_1.jpg?ts=1687939076057",
    "price": "₹ 2,590.00",
    "details": "Cropped collared shirt with long sleeves. Front patch pocket. Front button fastening.",
    "id": "productw839"
  },
  {
    "product_name": "GABARDINE FABRIC CROPPED SHIRT",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/4432/029/250/2/w/448/4432029250_1_1_1.jpg?ts=1692361751226",
    "price": "₹ 2,590.00",
    "details": "Collared shirt made of gabardine-type fabric. Featuring long cuffed sleeves and patch pockets on the front. Button-up front fastening.",
    "id": "productw840"
  },
  {
    "product_name": "OVERSIZED SHIRT",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/4432/013/250/17/w/448/4432013250_1_1_1.jpg?ts=1692193685526",
    "price": "₹ 2,590.00",
    "details": "Loose-fitting collared shirt featuring long sleeves with cuffs. Chest patch pocket. Pleated detail at the back. Button-up fastening on the front.",
    "id": "productw841"
  },
  {
    "product_name": "CROPPED POPLIN SHIRT",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/3067/008/619/17/w/448/3067008619_1_1_1.jpg?ts=1686065695046",
    "price": "₹ 2,590.00",
    "details": "Collared shirt with long cuffed sleeves. Featuring patch pockets on the front, darts on the back and a button-up front.",
    "id": "productw842"
  },
  {
    "product_name": "STRIPED CROPPED SHIRT",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/3564/151/044/17/w/448/3564151044_1_1_1.jpg?ts=1686131482549",
    "price": "₹ 2,590.00",
    "details": "Collared shirt with short sleeves. Featuring a button-up front and an adjustable elasticated drawstring waistband.",
    "id": "productw843"
  },
  {
    "product_name": "CROPPED POPLIN SHIRT",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/8141/255/403/17/w/448/8141255403_1_1_1.jpg?ts=1691061959330",
    "price": "₹ 2,590.00",
    "details": "Johnny collar shirt with wide sleeves falling below the elbow. Front patch pockets. Contrast topstitching detail. Button-up front.",
    "id": "productw844"
  },
  {
    "product_name": "SATIN CROPPED BOMBER JACKET",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/3472/309/400/2/w/448/3472309400_1_1_1.jpg?ts=1684495640728",
    "price": "₹ 4,990.00",
    "details": "Bomber jacket made of 100% viscose. Round neck and sleeves falling below the elbow. Ribbed elastic trims. Front welt pockets. Front fastening with metal zip.",
    "id": "productw845"
  },
  {
    "product_name": "LONG EMBROIDERED BLOUSE",
    "image_url": "https://static.zara.net/photos///2023/V/0/1/p/5107/047/251/2/w/448/5107047251_1_1_1.jpg?ts=1678811418814",
    "price": "₹ 4,990.00",
    "details": "Long blouse made of cotton. Slot collar with long sleeves. Contrast embroidery detail. Asymmetric hem with side vents. Button-up front.",
    "id": "productw846"
  },
  {
    "product_name": "PATCHWORK PRINT BLOUSE",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/8291/044/330/2/w/448/8291044330_2_1_1.jpg?ts=1690801269964",
    "price": "₹ 4,990.00",
    "details": "Open blouse made of 100% cotton. Long sleeves. Patchwork print detail. Tied belt in the same fabric.",
    "id": "productw847"
  },
  {
    "product_name": "MINIMALIST SATIN CROSSOVER SHIRT",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/8366/966/712/2/w/448/8366966712_1_1_1.jpg?ts=1692259577200",
    "price": "₹ 4,990.00",
    "details": "Shirt made of 100% viscose. Featuring a lapel collar and long sleeves with cuffs. Asymmetric hem with side vents. Crossover button-up front.",
    "id": "productw848"
  },
  {
    "product_name": "TIE-DYE PRINT TULLE SHIRT",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/5039/405/115/2/w/448/5039405115_1_1_1.jpg?ts=1691422500395",
    "price": "₹ 1,990.00",
    "details": "Semi-sheer collared shirt with long sleeves, seamless trims and a button-up front.This garment is not lined.",
    "id": "productw849"
  },
  {
    "product_name": "OVERSIZE RAMIE SHIRT",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/2731/080/613/3/w/448/2731080613_1_1_1.jpg?ts=1684498808386",
    "price": "₹ 3,290.00",
    "details": "Collared oversize shirt made of ramie. Featuring long sleeves with cuffs, front patch pocket and a button-up front.",
    "id": "productw850"
  },
  {
    "product_name": "METALLIC THREAD STRIPED SHIRT",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/7978/779/712/2/w/448/7978779712_1_1_1.jpg?ts=1689852792723",
    "price": "₹ 3,290.00",
    "details": "Shirt with a slot collar and long sleeves with ties. Metallic thread detail. Fastens at the front with buttons.",
    "id": "productw851"
  },
  {
    "product_name": "FRAYED SHIRT",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/3666/155/250/2/w/448/3666155250_1_1_1.jpg?ts=1690546669768",
    "price": "₹ 3,290.00",
    "details": "Collared shirt with long sleeves. Frayed trim detail. Button-up front hidden by a placket.",
    "id": "productw852"
  },
  {
    "product_name": "STRIPED LINEN BLEND SHIRT",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/2187/240/075/2/w/448/2187240075_1_1_1.jpg?ts=1688486452707",
    "price": "₹ 3,290.00",
    "details": "Collared shirt made of a linen blend. Adjustable long sleeves with tab and button. Button-up front.",
    "id": "productw853"
  },
  {
    "product_name": "POPLIN SHIRT WITH PUFF SLEEVES",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/7863/104/250/2/w/448/7863104250_1_1_1.jpg?ts=1691154412490",
    "price": "₹ 3,290.00",
    "details": "Sleeveless collared shirt. Featuring a chest patch pocket, an asymmetric puff hem and a button-up front.",
    "id": "productw854"
  },
  {
    "product_name": "LINEN BLEND PRINTED SHIRT",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/8026/460/070/2/w/448/8026460070_1_1_1.jpg?ts=1687791315655",
    "price": "₹ 3,290.00",
    "details": "Johnny collar shirt in a linen blend. Long sleeves. Hem with side vents. Button-up front.",
    "id": "productw855"
  },
  {
    "product_name": "RUFFLED TEXTURED BLOUSE",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/4437/248/712/2/w/448/4437248712_1_1_1.jpg?ts=1689665200712",
    "price": "₹ 3,290.00",
    "details": "Blouse made of a viscose blend. V-neck and long flared sleeves. Ruffle trims in the same fabric. Frayed trims. Asymmetric hem. Front tie fastening.",
    "id": "productw856"
  },
  {
    "product_name": "SNAKESKIN PRINT TOP",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/8741/247/039/2/w/448/8741247039_1_1_1.jpg?ts=1692352756236",
    "price": "₹ 3,290.00",
    "details": "V-neck top with long balloon sleeves with cuffs. Metallic thread detail. Invisible side zip fastening.",
    "id": "productw857"
  },
  {
    "product_name": "LINEN-BLEND SHIRT WITH POLKA DOTS",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/3044/625/093/2/w/448/3044625093_1_1_1.jpg?ts=1684915901198",
    "price": "₹ 2,990.00",
    "details": "Shirt made of a linen blend. Johnny collar and long sleeves. Front knot detail at the hem. Button-up front.",
    "id": "productw858"
  },
  {
    "product_name": "BLOUSE WITH FULL SLEEVES",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/9878/177/800/12/w/448/9878177800_1_1_1.jpg?ts=1690366870143",
    "price": "₹ 2,990.00",
    "details": "Blouse featuring a round neck with drawstring. V-neck and balloon long sleeves with elastic trim.This garment is not lined.",
    "id": "productw859"
  },
  {
    "product_name": "CABLE-KNIT SHIRT",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/6427/111/644/3/w/448/6427111644_1_1_1.jpg?ts=1690378252620",
    "price": "₹ 2,990.00",
    "details": "Collared shirt with long sleeves and a button-up front.",
    "id": "productw860"
  },
  {
    "product_name": "CROPPED STRIPED SHIRT",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/3067/039/064/2/w/448/3067039064_1_1_1.jpg?ts=1690965391504",
    "price": "₹ 2,990.00",
    "details": "Cropped collared shirt featuring long sleeves with cuffs. False welt pockets on the front. Button-up front hidden by a placket.",
    "id": "productw861"
  },
  {
    "product_name": "BLOUSE WITH BOW COLLAR",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/7484/160/710/22/w/448/7484160710_1_1_1.jpg?ts=1691405381246",
    "price": "₹ 2,990.00",
    "details": "High-neck blouse with a bow, long puff sleeves and a buttoned opening at the back.",
    "id": "productw862"
  },
  {
    "product_name": "TIE-DYE SHIRT",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/8372/229/330/2/w/448/8372229330_1_1_1.jpg?ts=1684495937594",
    "price": "₹ 2,990.00",
    "details": "Collared shirt with short sleeves. Button-up front.",
    "id": "productw863"
  },
  {
    "product_name": "KNOTTED LINEN SHIRT",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/5427/002/800/2/w/448/5427002800_1_1_1.jpg?ts=1688485221464",
    "price": "₹ 2,990.00",
    "details": "Shirt made of 100% linen with a plunging V-neckline, long cuffed sleeves and front knot fastening at the hem.",
    "id": "productw864"
  },
  {
    "product_name": "FLOWING CROPPED BOMBER JACKET",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/9479/245/804/2/w/448/9479245804_1_1_1.jpg?ts=1685374127621",
    "price": "₹ 4,990.00",
    "details": "Cropped bomber jacket made of viscose. Round neck and long sleeves with cuffs. Elastic hem. Button-up front.",
    "id": "productw865"
  },
  {
    "product_name": "LINEN BLEND FRAYED SHIRT",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/4043/251/250/2/w/448/4043251250_1_1_1.jpg?ts=1689335050043",
    "price": "₹ 3,990.00",
    "details": "Shirt made of a linen blend fabric. Lapel collar and long sleeves. Patch pockets on the front. Adjustable opening detail at the back with ties in the same fabric. Frayed hem. Button-up front.",
    "id": "productw866"
  },
  {
    "product_name": "VOLUMINOUS RAMIE BLOUSE",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/4786/278/300/2/w/448/4786278300_1_1_1.jpg?ts=1688997271126",
    "price": "₹ 4,990.00",
    "details": "Blouse made of ramie. Round neck and voluminous long sleeves. Button-up front.",
    "id": "productw867"
  },
  {
    "product_name": "RUSTIC TEXTURED BLOUSE",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/4437/243/711/2/w/448/4437243711_1_1_1.jpg?ts=1685954806890",
    "price": "₹ 3,290.00",
    "details": "Blouse made of a cotton and linen blend. Featuring a round neckline, long sleeves, frayed trims and an asymmetric hem.",
    "id": "productw868"
  },
  {
    "product_name": "CROSSOVER SHIRT WITH POLKA DOTS",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/7969/070/098/2/w/448/7969070098_1_1_1.jpg?ts=1684915903094",
    "price": "₹ 2,590.00",
    "details": "Cropped shirt with a V-neck and sleeves falling below the elbow. Wrap-style front with knot fastening.",
    "id": "productw869"
  },
  {
    "product_name": "DENIM TRF SHIRT",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/8197/270/406/2/w/448/8197270406_1_1_1.jpg?ts=1689176936053",
    "price": "₹ 3,290.00",
    "details": "Collared shirt made of flowing denim fabric. Drop-shoulder long sleeves with cuffs. Front patch pocket. Frayed hem. Button-up front.",
    "id": "productw870"
  },
  {
    "product_name": "EMBROIDERED BLOUSE WITH BEADING",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/1821/121/064/2/w/448/1821121064_1_1_1.jpg?ts=1686234645696",
    "price": "₹ 4,990.00",
    "details": "Blouse featuring a slot collar and long sleeves. Embroidered detail and beading appliqués on the front. Button-up front.",
    "id": "productw871"
  },
  {
    "product_name": "ASYMMETRIC DENIM TRF SHIRT",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/8197/272/400/2/w/448/8197272400_1_1_1.jpg?ts=1685534063978",
    "price": "₹ 2,990.00",
    "details": "Cropped shirt with asymmetric neckline and long cuffed sleeves. Frayed hem. Button-up front.",
    "id": "productw872"
  },
  {
    "product_name": "OVERSIZED LINEN SHIRT",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/7749/366/305/2/w/448/7749366305_1_1_1.jpg?ts=1686669390176",
    "price": "₹ 3,290.00",
    "details": "Loose-fitting collared shirt in 100% linen fabric. Sleeves falling below the elbow. Fastens with concealed buttons on the front.",
    "id": "productw873"
  },
  {
    "product_name": "100% LINEN SHIRT WITH POCKETS",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/7842/707/250/2/w/448/7842707250_1_1_1.jpg?ts=1685358959150",
    "price": "₹ 3,290.00",
    "details": "Collared shirt with long sleeves. Front patch pockets with flaps. Button-up front hidden by a placket.",
    "id": "productw874"
  },
  {
    "product_name": "PRINTED BLOUSE WITH RUFFLES",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/8372/279/064/2/w/448/8372279064_1_1_1.jpg?ts=1690974865164",
    "price": "₹ 2,990.00",
    "details": "Blouse featuring a ruffled V-neck and long sleeves. Metallic thread detail.",
    "id": "productw875"
  },
  {
    "product_name": "LINEN BLOUSE",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/4043/258/807/2/w/448/4043258807_6_1_1.jpg?ts=1689260840142",
    "price": "₹ 3,290.00",
    "details": "Blouse made of 100% linen. Featuring a round neckline, short sleeves and frayed trims.",
    "id": "productw876"
  },
  {
    "product_name": "BLOUSE WITH OPEN BACK",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/3992/240/629/2/w/448/3992240629_1_1_1.jpg?ts=1691594632364",
    "price": "₹ 2,990.00",
    "details": "Blouse made of 100% cotton. Round neck and long flared sleeves with slits. Open back and creased fabric detail. Frayed trims in the same fabric.",
    "id": "productw877"
  },
  {
    "product_name": "SHIRT WITH BOW AND FAUX PEARL BUTTONS",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/7922/478/712/2/w/448/7922478712_1_1_1.jpg?ts=1685091466731",
    "price": "₹ 2,990.00",
    "details": "Collared shirt with bow and short sleeves. Fastens at the front with faux pearl buttons.",
    "id": "productw878"
  },
  {
    "product_name": "LINEN BLEND PRINTED SHIRT",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/7974/482/044/2/w/448/7974482044_1_1_1.jpg?ts=1688375858852",
    "price": "₹ 3,290.00",
    "details": "Shirt made of a linen blend. Round neck and long sleeves. Fastens at the front with buttons.",
    "id": "productw879"
  },
  {
    "product_name": "TEXTURED TOP WITH KNOT",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/3826/294/250/2/w/448/3826294250_1_1_1.jpg?ts=1687855063389",
    "price": "₹ 2,590.00",
    "details": "Top with a plunging V-neckline, a knot detail and long sleeves.",
    "id": "productw880"
  },
  {
    "product_name": "PRINTED CROPPED SHIRT",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/7795/488/330/2/w/448/7795488330_1_1_1.jpg?ts=1688572873970",
    "price": "₹ 2,990.00",
    "details": "Collared shirt with a surplice neckline, long sleeves and an elasticated hem.",
    "id": "productw881"
  },
  {
    "product_name": "FRILL NECKLINE BLOUSE",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/3666/157/942/2/w/448/3666157942_1_1_1.jpg?ts=1689621975835",
    "price": "₹ 3,290.00",
    "details": "Blouse with ruffled collar and gathered detail. Features a V-neckline, balloon long sleeves and button fastening at the front.",
    "id": "productw882"
  },
  {
    "product_name": "GABARDINE FABRIC CROPPED SHIRT",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/8021/231/733/17/w/448/8021231733_1_1_1.jpg?ts=1689176826155",
    "price": "₹ 2,590.00",
    "details": "Collared shirt made of gabardine fabric. Turn-up short sleeves. Front patch pockets. Fastens with concealed buttons on the front hidden by a placket.",
    "id": "productw883"
  },
  {
    "product_name": "STRIPED SHIRT WITH RHINESTONE BUTTON",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/8076/807/044/2/w/448/8076807044_1_1_1.jpg?ts=1689696942914",
    "price": "₹ 2,990.00",
    "details": "Cropped collared shirt featuring long sleeves, a front patch pocket and a rhinestone button-up front.",
    "id": "productw884"
  },
  {
    "product_name": "TIE-DYE RAMIE SHIRT",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/8103/472/330/3/w/448/8103472330_1_1_1.jpg?ts=1689850414644",
    "price": "₹ 4,990.00",
    "details": "Shirt made of 100% ramie. Johnny collar, long sleeves and a button-up front.",
    "id": "productw885"
  },
  {
    "product_name": "LINEN BLEND PEPLUM TOP",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/8123/709/250/2/w/448/8123709250_1_1_1.jpg?ts=1689264048920",
    "price": "₹ 2,990.00",
    "details": "Top made of a linen blend. Round neck and long sleeves. Elastic at the back. Ruffled hem. Opening detail at the back. Tied fastening at the back.",
    "id": "productw886"
  },
  {
    "product_name": "TOP WITH CONTRAST CHEST DETAIL",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/8151/709/712/2/w/448/8151709712_1_1_1.jpg?ts=1691153432676",
    "price": "₹ 2,990.00",
    "details": "Top made of a linen blend. Featuring a V-neckline in contrast fabric with hemstitching. Long sleeves.",
    "id": "productw887"
  },
  {
    "product_name": "ANIMAL PRINT RUFFLED SHIRT",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/8169/458/038/2/w/448/8169458038_6_1_1.jpg?ts=1691999807829",
    "price": "₹ 3,290.00",
    "details": "Oversize V-neck shirt featuring long sleeves with opening trims. Ruffle trims. Side vents at the hem. Front button and tie fastening.",
    "id": "productw888"
  },
  {
    "product_name": "SHIRT WITH CUTWORK EMBROIDERY",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/7639/985/250/2/w/448/7639985250_1_1_1.jpg?ts=1688655831359",
    "price": "₹ 2,990.00",
    "details": "Collared shirt with long sleeves. Asymmetric hem with side vents and a button-up front.",
    "id": "productw889"
  },
  {
    "product_name": "LINEN SHIRT WITH BOW",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/2624/500/250/2/w/448/2624500250_6_1_1.jpg?ts=1689929855482",
    "price": "₹ 2,990.00",
    "details": "Cropped collared shirt made of 100% linen. Featuring a V-neck, long sleeves, elastic hem and wrap front with tie fastening.",
    "id": "productw890"
  },
  {
    "product_name": "TRF PAINT SPLATTER OVERSIZED DENIM OVERSHIRT",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/6045/207/407/2/w/448/6045207407_1_1_1.jpg?ts=1691739235918",
    "price": "₹ 4,990.00",
    "details": "Oversize collared overshirt with long cuffed sleeves and drop shoulders. Featuring front patch pockets. Faded effect with paint platter. Ripped details and front fastening with metal buttons.",
    "id": "productw891"
  },
  {
    "product_name": "PRINTED CROPPED SHIRT",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/7795/616/044/12/w/448/7795616044_1_1_1.jpg?ts=1685978503781",
    "price": "₹ 2,990.00",
    "details": "Collared shirt with a surplice neckline and long sleeves. Elasticated hem.",
    "id": "productw892"
  },
  {
    "product_name": "LINEN SHIRT WITH RUFFLES",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/8221/707/250/2/w/448/8221707250_1_1_1.jpg?ts=1690992239116",
    "price": "₹ 3,290.00",
    "details": "Collared shirt made of 100% linen. Short sleeves. Front ruffle details. Button-up front hidden by a placket.",
    "id": "productw893"
  },
  {
    "product_name": "CROPPED SATIN SHIRT",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/2298/174/250/2/w/448/2298174250_1_1_1.jpg?ts=1690366716454",
    "price": "₹ 2,990.00",
    "details": "Collared shirt with long sleeves, a crossover V-neckline and an elastic hem.",
    "id": "productw894"
  },
  {
    "product_name": "CROPPED SHIRT WITH CROSSOVER BACK",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/6929/208/406/2/w/448/6929208406_1_1_1.jpg?ts=1691588060739",
    "price": "₹ 2,990.00",
    "details": "Cropped collared shirt with long cuffed sleeves. Crossover back with cut-out detail. Button-up front hidden by a placket.",
    "id": "productw895"
  },
  {
    "product_name": "100% LINEN SHIRT WITH BOW",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/7691/500/250/17/w/448/7691500250_1_1_1.jpg?ts=1686737799304",
    "price": "₹ 2,990.00",
    "details": "Shirt made of 100% linen. High neck with ties. V-neck and long sleeves.",
    "id": "productw896"
  },
  {
    "product_name": "SILK SHIRT - LIMITED EDITION",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/8311/762/800/2/w/448/8311762800_6_1_1.jpg?ts=1693304058222",
    "price": "₹ 9,590.00",
    "details": "Collared pyjama-style shirt made of 100% silk. Featuring long sleeves, front patch pockets and contrast piping detail. Side vents at the hem. Button-up front.",
    "id": "productw897"
  },
  {
    "product_name": "PINTUCK PRINTED SHIRT",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/0779/163/207/2/w/448/0779163207_1_1_1.jpg?ts=1691075844835",
    "price": "₹ 2,990.00",
    "details": "Shirt featuring a V-neckline, long sleeves with shoulder pintucks and a button-up front.",
    "id": "productw898"
  },
  {
    "product_name": "EMBROIDERED RUSTIC TOP",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/7973/824/962/12/w/448/7973824962_1_1_1.jpg?ts=1688028768698",
    "price": "₹ 3,290.00",
    "details": "V-neck top with long sleeves. Contrast embroidery detail. Button-up front.",
    "id": "productw899"
  },
  {
    "product_name": "STRIPED POPLIN TOP",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/8022/818/725/3/w/448/8022818725_1_1_1.jpg?ts=1689176912128",
    "price": "₹ 2,590.00",
    "details": "V-neck top with adjustable thin straps. Featuring a box pleat hem and side button fastening.",
    "id": "productw900"
  },
  {
    "product_name": "STRIPED LINEN BLEND SHIRT",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/4043/244/500/12/w/448/4043244500_1_1_1.jpg?ts=1688977065704",
    "price": "₹ 4,990.00",
    "details": "Collared shirt made of a linen blend fabric. Long sleeves with cuffs. Split hem. Button-up front.",
    "id": "productw901"
  },
  {
    "product_name": "SEMI-SHEER BLOUSE WITH HOOD",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/7877/342/800/12/w/448/7877342800_1_1_1.jpg?ts=1690469815306",
    "price": "₹ 4,990.00",
    "details": "Semi-sheer blouse with a round neckline and adjustable hood with drawstrings in the same fabric. Flared long sleeves. Front pouch pocket. Asymmetric hem with side vents.",
    "id": "productw902"
  },
  {
    "product_name": "FLOWING ASYMMETRIC CAPE",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/8686/453/600/17/w/448/8686453600_1_1_1.jpg?ts=1692789303664",
    "price": "₹ 2,290.00",
    "details": "Flowing cape with a round neck and an asymmetric hem.",
    "id": "productw903"
  },
  {
    "product_name": "PRINTED SHIRT WITH POCKET",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/2183/250/400/2/w/448/2183250400_1_1_1.jpg?ts=1691652251111",
    "price": "₹ 3,290.00",
    "details": "Shirt made of 100% cotton. Johnny collar and sleeves that fall below the elbow. Chest patch pocket. Asymmetric hem. Button-up front.",
    "id": "productw904"
  },
  {
    "product_name": "RAMIE SHIRT WITH KNOT DETAIL",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/2731/275/251/2/w/448/2731275251_1_1_1.jpg?ts=1689665199599",
    "price": "₹ 3,290.00",
    "details": "Shirt made of 100% ramie. Johnny collar with long sleeves, elasticated cuffs and ruffle trims. Hem with a knot in the same fabric. Button-up front.",
    "id": "productw905"
  },
  {
    "product_name": "PLUMETIS SHIRT WITH RUFFLES",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/8088/825/712/2/w/448/8088825712_1_1_1.jpg?ts=1689328169911",
    "price": "₹ 2,990.00",
    "details": "Shirt featuring a slot collar and long sleeves with elasticated trims. Lace trim and ruffle details. Button-up front.This garment is not lined.",
    "id": "productw906"
  },
  {
    "product_name": "BLOUSE WITH RUFFLES",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/9878/156/250/12/w/448/9878156250_1_1_1.jpg?ts=1689680124942",
    "price": "₹ 2,990.00",
    "details": "Blouse featuring a Peter Pan collar and long sleeves. Ruffle trims on the front. Button-up front.",
    "id": "productw907"
  },
  {
    "product_name": "CROPPED LINEN SHIRT",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/4786/335/806/2/w/448/4786335806_1_1_1.jpg?ts=1688126789297",
    "price": "₹ 3,290.00",
    "details": "Collared shirt made of linen. Long sleeves with pleated cuffs. Visible topstitching detail. Button-up front.",
    "id": "productw908"
  },
  {
    "product_name": "PRINTED SHIRT",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/2492/151/070/2/w/448/2492151070_1_1_1.jpg?ts=1688568630021",
    "price": "₹ 2,990.00",
    "details": "Round neck shirt featuring a V-neckline and long sleeves with elastic cuffs. Button-up front.",
    "id": "productw909"
  },
  {
    "product_name": "SHINY PRINTED BLOUSE",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/7906/032/330/2/w/448/7906032330_1_1_1.jpg?ts=1686558255338",
    "price": "₹ 3,290.00",
    "details": "Johnny collar blouse with short sleeves. Metallic thread detail. Knotted hem with ties and pleats.",
    "id": "productw910"
  },
  {
    "product_name": "CROPPED SHIRT WITH KNOT",
    "image_url": "https://static.zara.net/photos///2023/V/0/1/p/3198/500/250/2/w/448/3198500250_1_1_1.jpg?ts=1680012649773",
    "price": "₹ 2,990.00",
    "details": "Collared shirt with long sleeves, front patch pockets with flaps and front button and knot fastening.",
    "id": "productw911"
  },
  {
    "product_name": "RAMIE TUNIC WITH PASSEMENTERIE",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/2731/311/807/2/w/448/2731311807_1_1_1.jpg?ts=1688124232195",
    "price": "₹ 4,990.00",
    "details": "Long tunic made of ramie. Lapel collar and long cuffed sleeves. Matching passementerie detail and wrinkled fabric. Asymmetric hem with side vents. Button-up front.",
    "id": "productw912"
  },
  {
    "product_name": "FRAYED LINEN BLOUSE",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/4043/259/802/2/w/448/4043259802_1_1_1.jpg?ts=1689335050560",
    "price": "₹ 3,290.00",
    "details": "Sleeveless blouse made of 100% linen. Featuring a V-neckline, a knotted hem with pleats and frayed trims.",
    "id": "productw913"
  },
  {
    "product_name": "RAMIE TUNIC WITH PASSEMENTERIE",
    "image_url": "https://static.zara.net/photos///2023/V/0/1/p/2731/044/251/17/w/448/2731044251_1_1_1.jpg?ts=1684235192874",
    "price": "₹ 4,990.00",
    "details": "Long collared tunic made of ramie. Featuring long cuffed sleeves. Matching passementerie detail. Asymmetric hem with side vents. Buttoned front.",
    "id": "productw914"
  },
  {
    "product_name": "KNOTTED SHIRT",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/7735/518/406/17/w/448/7735518406_1_1_1.jpg?ts=1686901772415",
    "price": "₹ 2,990.00",
    "details": "Collared shirt made of a linen blend fabric. Long sleeves. Front patch pockets with flaps. Button-up front and knot at the hem.",
    "id": "productw915"
  },
  {
    "product_name": "PADDED JACKET WITH POCKETS",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/4088/242/800/2/w/448/4088242800_1_1_1.jpg?ts=1691658771413",
    "price": "₹ 7,590.00",
    "details": "Padded jacket with a high neck and long sleeves, Front patch pockets. Adjustable hem with matching drawstrings. Front zip fastening.",
    "id": "productw916"
  },
  {
    "product_name": "WOOL BOMBER JACKET WITH ZIP",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/2893/108/704/2/w/448/2893108704_1_1_1.jpg?ts=1693224696563",
    "price": "₹ 7,590.00",
    "details": "Bomber jacket made of 100% wool. Featuring a V-neckline and long sleeves. Front pockets. Ribbed trims. Metal zip fastening at the front.",
    "id": "productw917"
  },
  {
    "product_name": "SATIN KIMONO",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/1131/805/804/2/w/448/1131805804_1_1_1.jpg?ts=1692274456448",
    "price": "₹ 3,290.00",
    "details": "Kimono made of satin fabric. Featuring a crossover V-neckline, long sleeves with vents and crossover fastening with tied detail in the same fabric",
    "id": "productw918"
  },
  {
    "product_name": "TRANSPARENT CROPPED JACKET",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/1255/817/990/2/w/448/1255817990_1_1_1.jpg?ts=1692874440525",
    "price": "₹ 4,990.00",
    "details": "Transparent collared water-repellent jacket. Featuring long sleeves with tabs on the shoulders. Front pockets with zips, a belt in the same material with a rubberised buckle and crossover zip fastening at the front.",
    "id": "productw919"
  },
  {
    "product_name": "SATIN FOIL BOMBER JACKET",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/8495/350/808/2/w/448/8495350808_1_1_1.jpg?ts=1692884607713",
    "price": "₹ 4,990.00",
    "details": "Bomber jacket made of metallic satin fabric. Round neck and long sleeves with elastic cuffs. Front welt pockets. Elastic hem. Contrast lining. Front fastening with metal zip.",
    "id": "productw920"
  },
  {
    "product_name": "WORN EFFECT LEATHER EFFECT BIKER JACKET",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/4341/726/802/2/w/448/4341726802_1_1_1.jpg?ts=1692874442840",
    "price": "₹ 5,990.00",
    "details": "Distressed effect jacket with a lapel collar and long sleeves. Zip details on the front and shoulder tabs. Wrap front with zip fastening.",
    "id": "productw921"
  },
  {
    "product_name": "OVERSIZE TRENCH COAT WITH POCKETS",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/2731/259/711/17/w/448/2731259711_1_1_1.jpg?ts=1692952040464",
    "price": "₹ 7,590.00",
    "details": "Collared trench coat made of a cotton blend. Featuring long flared sleeves. Front patch pockets. Back vent at the hem. Button-up front.",
    "id": "productw922"
  },
  {
    "product_name": "FAUX SUEDE TRENCH COAT",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/4968/223/704/2/w/448/4968223704_1_1_1.jpg?ts=1692964746030",
    "price": "₹ 4,990.00",
    "details": "Trench coat made of faux suede fabric. Lapel collar and long sleeves with tabs on the cuffs and shoulders. Side pockets. Belt in the same fabric with a contrast buckle. Double-breasted button fastening at the front.",
    "id": "productw923"
  },
  {
    "product_name": "SOFT SHORT JACKET",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/3046/260/704/2/w/448/3046260704_1_1_1.jpg?ts=1692964744875",
    "price": "₹ 3,290.00",
    "details": "Long sleeve collared jacket. Front patch pockets with flaps and snap-button fastening at the front.",
    "id": "productw924"
  },
  {
    "product_name": "RUSTIC BOMBER JACKET",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/5584/454/712/2/w/448/5584454712_1_1_1.jpg?ts=1692864058362",
    "price": "₹ 4,990.00",
    "details": "Bomber jacket made of a cotton blend. Featuring a round neckline, long sleeves and cutwork fabric. Matching ribbed trims and metal zip fastening at the front.",
    "id": "productw925"
  },
  {
    "product_name": "LINEN BLEND PLEATED BOMBER JACKET",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/2712/468/832/2/w/448/2712468832_1_1_1.jpg?ts=1692776596473",
    "price": "₹ 5,990.00",
    "details": "Short collared bomber jacket made of a linen blend. Long sleeves. Front welt pockets. Elastic hem with pleats. Matching lining. Zip-up front hidden by a placket.",
    "id": "productw926"
  },
  {
    "product_name": "WORN EFFECT LEATHER EFFECT BOMBER JACKET",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/6318/223/800/12/w/448/6318223800_2_5_1.jpg?ts=1692947673008",
    "price": "₹ 5,990.00",
    "details": "Worn effect bomber jacket with a round neckline and long cuffed sleeves. Front welt pockets. Front fastening with metal zip.",
    "id": "productw927"
  },
  {
    "product_name": "OVERSIZE QUILTED BOMBER JACKET",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/4088/243/802/2/w/448/4088243802_1_1_1.jpg?ts=1692790350505",
    "price": "₹ 7,590.00",
    "details": "Loose-fitting bomber jacket with a round neck and long sleeves. Front flap pockets with snap buttons. Matching ribbed trims. Front zip and snap-button fastening.",
    "id": "productw928"
  },
  {
    "product_name": "DISTRESSED LEATHER EFFECT TRENCH COAT",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/6318/222/800/2/w/448/6318222800_1_1_1.jpg?ts=1692778670061",
    "price": "₹ 9,590.00",
    "details": "Distressed effect trench coat with a lapel collar. Long sleeves with tabs on the cuffs and shoulders. Side pockets. Tied belt in the same fabric. Double-breasted button fastening at the front.",
    "id": "productw929"
  },
  {
    "product_name": "WORN EFFECT CROPPED LEATHER EFFECT BIKER JACKET",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/6318/232/800/17/w/448/6318232800_1_1_1.jpg?ts=1692888198152",
    "price": "₹ 5,990.00",
    "details": "Distressed effect jacket with a lapel collar and long sleeves. Shoulder tabs. False front zip pocket. Belt detail at the hem. Wrap front with zip fastening.",
    "id": "productw930"
  },
  {
    "product_name": "NEOPRENE-EFFECT JACKET",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/8073/221/802/3/w/448/8073221802_1_1_1.jpg?ts=1692355318949",
    "price": "₹ 4,990.00",
    "details": "Hooded longline jacket with long cuffed sleeves. Front patch pockets and metal zip fastening at the front.",
    "id": "productw931"
  },
  {
    "product_name": "TRF DENIM CROPPED JACKET",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/8197/295/400/3/w/448/8197295400_1_1_1.jpg?ts=1691743835514",
    "price": "₹ 3,990.00",
    "details": "Collared jacket featuring long sleeves with cuffs. Front patch pockets. Ripped details. Seamless hem. Metal button fastening on the front.",
    "id": "productw932"
  },
  {
    "product_name": "WORN EFFECT LEATHER EFFECT BIKER JACKET",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/3046/222/800/21/w/448/3046222800_1_1_1.jpg?ts=1692689523050",
    "price": "₹ 5,990.00",
    "details": "Distressed effect jacket with a lapel collar and long sleeves. Featuring front zip pockets, crossover zip fastening at the front and a belt at the hem.",
    "id": "productw933"
  },
  {
    "product_name": "TRF RIPPED CROPPED DENIM JACKET",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/4365/271/407/2/w/448/4365271407_1_1_1.jpg?ts=1692361750024",
    "price": "₹ 3,290.00",
    "details": "Cropped collared jacket featuring long drop-shoulder sleeves with elasticated cuffs. Faded fabric with rips. Front fastening with metal zip.",
    "id": "productw934"
  },
  {
    "product_name": "HIGH NECK TEXTURED BLAZER",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/8001/513/251/2/w/448/8001513251_6_1_1.jpg?ts=1690529214282",
    "price": "₹ 5,990.00",
    "details": "Blazer featuring a high neck and long sleeves with padded shoulders. False flap pockets and front patch pockets. Front hook fastening.",
    "id": "productw935"
  },
  {
    "product_name": "SATIN BOMBER JACKET",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/7854/591/800/12/w/448/7854591800_1_1_1.jpg?ts=1692002574641",
    "price": "₹ 3,990.00",
    "details": "Bomber jacket with a round neckline and long sleeves. Front flap pockets and a zipped sleeve pocket. Elasticated trims. Front fastening with metal zip.",
    "id": "productw936"
  },
  {
    "product_name": "ZW RHINESTONE DENIM JACKET",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/6045/244/428/2/w/448/6045244428_1_1_1.jpg?ts=1682412309615",
    "price": "₹ 8,590.00",
    "details": "ZW ZARA WOMANCollared denim jacket with long sleeves. Chest patch pockets with buttoned flaps. Rhinestone appliqués. Button-up front.",
    "id": "productw937"
  },
  {
    "product_name": "DENIM JACKET WITH PATCH POCKETS",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/0108/042/506/17/w/448/0108042506_1_1_1.jpg?ts=1689085992342",
    "price": "₹ 2,990.00",
    "details": "Jacket with a lapel collar and long sleeves. Front patch pockets. Metal button fastenings on the front.",
    "id": "productw938"
  },
  {
    "product_name": "ZW OVERSIZE DENIM JACKET",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/1213/244/428/2/w/448/1213244428_1_1_1.jpg?ts=1691482579040",
    "price": "₹ 3,990.00",
    "details": "ZW ZARA WOMANLoose-fitting denim jacket featuring a lapel collar and long sleeves with cuffs. Side pockets and chest patch pockets with buttoned flaps. Faded effect. Fastens at the front with metallic buttons.View more",
    "id": "productw939"
  },
  {
    "product_name": "Z1975 CROPPED METALLIC DENIM JACKET",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/6164/190/427/3/w/448/6164190427_1_1_1.jpg?ts=1692201825260",
    "price": "₹ 4,990.00",
    "details": "Collared metallic jacket with long sleeves. Featuring front patch pockets with flaps and button fastening at the front.",
    "id": "productw940"
  },
  {
    "product_name": "CROPPED WAXED TRENCH COAT",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/4432/832/507/2/w/448/4432832507_1_1_1.jpg?ts=1692361751450",
    "price": "₹ 5,990.00",
    "details": "Cropped trench coat featuring a high neck with tab and metal buckle. Long sleeves with shoulder pads and tabs on the cuffs. Front pockets. Matching lining. Button-up front.",
    "id": "productw941"
  },
  {
    "product_name": "STRIPE TEXTURED BLAZER",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/8341/112/070/2/w/448/8341112070_1_1_1.jpg?ts=1691577078132",
    "price": "₹ 5,990.00",
    "details": "Lapelless blazer with long sleeves and shoulder pads. Front patch pockets. Metal hook fastening at the front.",
    "id": "productw942"
  },
  {
    "product_name": "FAUX LEATHER BIKER JACKET",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/3046/060/800/18/w/448/3046060800_1_1_1.jpg?ts=1692689373356",
    "price": "₹ 4,990.00",
    "details": "Collared jacket with long sleeves and shoulder tabs. Featuring front zip pockets, a hem featuring a matching belt with metal buckle and front crossover zip fastening.",
    "id": "productw943"
  },
  {
    "product_name": "SHORT DOUBLE-BREASTED TRENCH COAT",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/7999/818/401/2/w/448/7999818401_1_1_1.jpg?ts=1693305748529",
    "price": "₹ 5,990.00",
    "details": "Short trench coat featuring a lapel collar and long sleeves with buttons. Front welt pockets. Double-breasted button fastening on the front.",
    "id": "productw944"
  },
  {
    "product_name": "FAUX LEATHER OVERSIZE JACKET",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/3427/811/800/20/w/448/3427811800_1_1_1.jpg?ts=1691757557036",
    "price": "₹ 5,990.00",
    "details": "Jacket with a lapel collar and long sleeves. Featuring front pockets with metal zip, shoulder tabs, belt in the same fabric with buckle and metal zip-up fastening on the front.",
    "id": "productw945"
  },
  {
    "product_name": "SNAKESKIN PRINT PUFFER JACKET",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/8147/803/070/2/w/448/8147803070_1_1_1.jpg?ts=1692281895379",
    "price": "₹ 3,990.00",
    "details": "Jacket with a round neck and long sleeves. Front welt pockets. Snap-button fastenings on the front.",
    "id": "productw946"
  },
  {
    "product_name": "Z1975 DENIM OVERSHIRT WITH PATCH POCKETS",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/6147/165/406/2/w/448/6147165406_1_1_1.jpg?ts=1685105199661",
    "price": "₹ 4,990.00",
    "details": "Collared overshirt with long sleeves. Front patch pockets. Side vents at the hem. Front metal button fastening.",
    "id": "productw947"
  },
  {
    "product_name": "CROPPED BOMBER JACKET",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/7893/502/712/17/w/448/7893502712_1_1_1.jpg?ts=1686146625085",
    "price": "₹ 4,990.00",
    "details": "Bomber jacket featuring a round neck and long sleeves with cuffs. Jetted pockets on the front. Front snap-button fastenings.",
    "id": "productw948"
  },
  {
    "product_name": "TRF DENIM CROPPED JACKET",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/8197/257/400/3/w/448/8197257400_1_1_1.jpg?ts=1691077223644",
    "price": "₹ 3,290.00",
    "details": "Jacket featuring a lapel collar and long sleeves with cuffs. Pockets on the front and on the arm. Tab details at the back. Seamless hem. Front metal button fastening.",
    "id": "productw949"
  },
  {
    "product_name": "SHIRT BOMBER JACKET",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/7102/220/800/18/w/448/7102220800_1_1_1.jpg?ts=1692689746266",
    "price": "₹ 3,290.00",
    "details": "Collared bomber jacket featuring long sleeves. Front welt pockets. Elasticated hem. Front fastening with metal zip.",
    "id": "productw950"
  },
  {
    "product_name": "OVERSIZE SHORT TRENCH COAT",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/4432/706/707/17/w/448/4432706707_1_1_1.jpg?ts=1691077270530",
    "price": "₹ 5,990.00",
    "details": "Trench coat with a lapel collar and a crossover neckline. Long sleeves with tabs. Belt with contrast buckle at the hem. Front button fastening.",
    "id": "productw951"
  },
  {
    "product_name": "MAXI BOMBER JACKET WITH POCKETS",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/3736/245/800/18/w/448/3736245800_1_1_1.jpg?ts=1691565073010",
    "price": "₹ 7,590.00",
    "details": "Cropped bomber jacket with a round neck and long sleeves. Front maxi patch pockets with flaps. Lining. Matching ribbed trims. Front snap-button fastening.",
    "id": "productw952"
  },
  {
    "product_name": "SATIN TRENCH COAT",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/8403/260/800/2/w/448/8403260800_1_1_1.jpg?ts=1692362669898",
    "price": "₹ 4,990.00",
    "details": "Flowing trench coat with a lapel collar and long sleeves.",
    "id": "productw953"
  },
  {
    "product_name": "PRINTED OVERSIZE LINEN BLEND JACKET",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/4432/721/050/17/w/448/4432721050_1_1_1.jpg?ts=1690543854132",
    "price": "₹ 4,990.00",
    "details": "Jacket made of a linen blend fabric. Lapel collar and long cuffed sleeves. Side pockets and chest patch pockets. Front metal button fastening.",
    "id": "productw954"
  },
  {
    "product_name": "SATIN BOMBER JACKET WITH TOPSTITCHING",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/1058/407/715/2/w/448/1058407715_1_1_1.jpg?ts=1692273228327",
    "price": "₹ 4,990.00",
    "details": "Satin bomber jacket with a round neck and long sleeves. Front pockets. Contrast pronounced topstitching detail. Metal zip and snap-button fastening at the front.",
    "id": "productw955"
  },
  {
    "product_name": "TULLE DRESS WITH CAPE SLEEVES",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/0085/468/800/2/w/448/0085468800_1_1_1.jpg?ts=1689599720220",
    "price": "₹ 2,990.00",
    "details": "Semi-sheer midi dress featuring a round neck and loose-fitting short sleeves. Buttoned opening at the back. This garment is not lined.",
    "id": "productw956"
  },
  {
    "product_name": "OVERSIZE QUILTED BOMBER JACKET",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/4770/456/670/2/w/448/4770456670_1_1_1.jpg?ts=1690532851594",
    "price": "₹ 3,290.00",
    "details": "Loose-fitting bomber jacket with a high neck and long sleeves with elastic cuffs. Front patch pockets. Elasticated hem. Front zip fastening hidden by a placket.",
    "id": "productw957"
  },
  {
    "product_name": "LONGLINE BOMBER JACKET WITH PATCH POCKETS",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/7997/671/251/2/w/448/7997671251_1_1_1.jpg?ts=1691758079504",
    "price": "₹ 5,990.00",
    "details": "Bomber jacket with a round neck and long sleeves. Front patch pockets with flaps. Elasticated trims. Hidden snap-button fastening on the front.",
    "id": "productw958"
  },
  {
    "product_name": "WATER AND WIND PROTECTION RUBBERISED RAINCOAT",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/6318/023/712/17/w/448/6318023712_1_1_1.jpg?ts=1692286317660",
    "price": "₹ 5,990.00",
    "details": "Raincoat featuring a high collar with hood and drawstrings. Long sleeves with adjustable snap-button cuffs. Front flap pockets. Side vents at the hem. Zip-up front with hidden snap buttons.",
    "id": "productw959"
  },
  {
    "product_name": "NEOPRENE-EFFECT BOMBER JACKET",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/8073/224/922/3/w/448/8073224922_1_1_1.jpg?ts=1692355396708",
    "price": "₹ 3,990.00",
    "details": "Bomber jacket with a round neckline and long sleeves with puffy cuffs. Front welt pockets. Adjustable hem with elastic drawstring and stoppers. Zip-up front.",
    "id": "productw960"
  },
  {
    "product_name": "TULLE JACKET WITH FRINGE",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/2712/832/250/2/w/448/2712832250_1_1_1.jpg?ts=1690529708801",
    "price": "₹ 3,990.00",
    "details": "Long sleeve jacket with a round neckline. Featuring matching fringe trims, lining and fastening at the front with openings and lined hooks.",
    "id": "productw961"
  },
  {
    "product_name": "CROPPED JACKET WITH TOPSTITCHING",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/1478/326/405/2/w/448/1478326405_1_1_1.jpg?ts=1692352293582",
    "price": "₹ 5,590.00",
    "details": "Cropped jacket with a lapel collar. Long sleeves with shoulder pads and buttoned tabs. Flap detail on the chest and contrast topstitching. Button-up front.",
    "id": "productw962"
  },
  {
    "product_name": "PRINTED BOMBER JACKET",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/2010/777/450/2/w/448/2010777450_1_1_1.jpg?ts=1689583016439",
    "price": "₹ 4,990.00",
    "details": "Round neck bomber jacket with long sleeves. Featuring side welt pockets, ribbed trims and zip fastening at the front.",
    "id": "productw963"
  },
  {
    "product_name": "COTTON OVERSHIRT WITH GOLDEN BUTTONS",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/8372/239/712/2/w/448/8372239712_1_1_1.jpg?ts=1689328169413",
    "price": "₹ 3,290.00",
    "details": "Overshirt with a lapel collar and long sleeves. Front patch pockets with flaps. Raised golden button fastening at the front.",
    "id": "productw964"
  },
  {
    "product_name": "FLOWING FRAYED TRENCH COAT",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/7837/342/800/2/w/448/7837342800_1_1_1.jpg?ts=1689766697783",
    "price": "₹ 9,590.00",
    "details": "Flowing semi-sheer trench coat featuring a high round neck and long sleeves with flared trims. Tied belt. Front pockets. Asymmetric hem. Frayed trims in the same fabric. Double-breasted button fastening at the front.View more",
    "id": "productw965"
  },
  {
    "product_name": "Z1975 DENIM OVERSIZE JACKET",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/1879/238/427/2/w/448/1879238427_6_1_1.jpg?ts=1692341666521",
    "price": "₹ 2,990.00",
    "details": "Oversize collared jacket featuring long sleeves with cuffs, front patch pockets and a button-up front with metal buttons.",
    "id": "productw966"
  },
  {
    "product_name": "FLOWING TRENCH COAT",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/8073/043/706/2/w/448/8073043706_1_1_1.jpg?ts=1690970189045",
    "price": "₹ 3,990.00",
    "details": "Collared trench coat with long sleeves. Front welt pockets. Back vent. Fastens at the front with buttons.",
    "id": "productw967"
  },
  {
    "product_name": "LINEN BLEND CROPPED JACKET",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/7932/400/401/2/w/448/7932400401_1_1_1.jpg?ts=1687348745097",
    "price": "₹ 3,990.00",
    "details": "Jacket made of a linen blend fabric. Lapel collar and long sleeves. Front patch pockets. Button-up front.",
    "id": "productw968"
  },
  {
    "product_name": "TRF DENIM SWEATSHIRT",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/4365/275/400/2/w/448/4365275400_1_1_1.jpg?ts=1691662361389",
    "price": "₹ 3,990.00",
    "details": "Denim hoodie. Long sleeves with drop-shoulder cuffs. Front trimmed pouch pockets. Back tabs on the hem.",
    "id": "productw969"
  },
  {
    "product_name": "TIE-DYE PRINT TULLE KIMONO",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/5039/399/086/2/w/448/5039399086_1_1_1.jpg?ts=1691422499805",
    "price": "₹ 1,990.00",
    "details": "Semi-sheer kimono with a lapel collar and a surplice neckline. Long sleeves. Wrap fastening with a tie.This garment is not lined.",
    "id": "productw970"
  },
  {
    "product_name": "LINEN BOMBER JACKET WITH POCKETS",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/2674/244/711/2/w/448/2674244711_1_1_1.jpg?ts=1690450435982",
    "price": "₹ 7,590.00",
    "details": "Short bomber jacket made of 100% linen. Round neck and long sleeves with gathered cuffs. Patch pockets with flaps and metal zips on the chest. Elasticated hem. Matching ribbed trims. Front fastening with metal zip.",
    "id": "productw971"
  },
  {
    "product_name": "FAUX SUEDE CROPPED JACKET",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/4968/225/706/3/w/448/4968225706_1_1_1.jpg?ts=1692009253701",
    "price": "₹ 3,290.00",
    "details": "Collared jacket with long sleeves. Featuring front patch pockets with flaps and a buttoned front.",
    "id": "productw972"
  },
  {
    "product_name": "FAUX SUEDE BOMBER JACKET",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/4968/226/712/2/w/448/4968226712_1_1_1.jpg?ts=1692201138426",
    "price": "₹ 3,290.00",
    "details": "Jacket featuring a round neck and long sleeves with cuffs. Pipped pockets on the front. Front matching snap-button fastenings.",
    "id": "productw973"
  },
  {
    "product_name": "CROPPED PUFFER BOMBER JACKET",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/3046/227/800/2/w/448/3046227800_1_1_1.jpg?ts=1692270091236",
    "price": "₹ 3,290.00",
    "details": "Jacket featuring a round neck and long sleeves with cuffs. Jetted pockets on the front. Front snap-button fastenings.",
    "id": "productw974"
  },
  {
    "product_name": "Z1975 DENIM JACKET WITH BUTTONS",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/6164/160/427/2/w/448/6164160427_1_1_1.jpg?ts=1691757024987",
    "price": "₹ 3,290.00",
    "details": "Long sleeve jacket with a round neckline. Featuring a faded effect and metal button fastening at the front.",
    "id": "productw975"
  },
  {
    "product_name": "WATER-REPELLENT TRENCH COAT",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/8073/222/704/2/w/448/8073222704_1_1_1.jpg?ts=1693305746623",
    "price": "₹ 5,990.00",
    "details": "Trench coat featuring a lapel collar and long sleeves with tabs. Front pockets. Belt in the same fabric with tie. Rear vent at the hem. Double-breasted button fastening on the front.",
    "id": "productw976"
  },
  {
    "product_name": "ZW OVERSIZE DENIM JACKET",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/6186/241/406/2/w/448/6186241406_1_1_1.jpg?ts=1688120938315",
    "price": "₹ 5,990.00",
    "details": "ZW ZARA WOMANLoose-fitting collared jacket featuring long sleeves with cuffs. Chest patch pockets with buttoned flaps and side in-seam pockets. Faded effect. Front button-up fastening.View more",
    "id": "productw977"
  },
  {
    "product_name": "FAUX LEATHER BOMBER JACKET",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/4341/731/800/19/w/448/4341731800_1_1_1.jpg?ts=1692193724904",
    "price": "₹ 5,990.00",
    "details": "Bomber jacket with a round neck and long sleeves. Ribbed trims. Front pockets. Front zip fastening.",
    "id": "productw978"
  },
  {
    "product_name": "OVERSIZED DENIM OVERSHIRT Z1975",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/1879/227/427/2/w/448/1879227427_1_1_1.jpg?ts=1692274585298",
    "price": "₹ 2,990.00",
    "details": "Collared overshirt with long sleeves. Front patch pockets. Faded effect. Frayed trim detail. Side vents at the hem. Front fastening with metal buttons.",
    "id": "productw979"
  },
  {
    "product_name": "SHORT TRENCH COAT",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/8372/256/450/2/w/448/8372256450_1_1_1.jpg?ts=1691149126094",
    "price": "₹ 4,990.00",
    "details": "Short trench coat featuring a lapel collar and long sleeves with buttoned tabs. Front pockets. Double-breasted button fastening on the front.",
    "id": "productw980"
  },
  {
    "product_name": "SATIN CROPPED BOMBER JACKET",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/3472/309/400/2/w/448/3472309400_1_1_1.jpg?ts=1684495640728",
    "price": "₹ 4,990.00",
    "details": "Bomber jacket made of 100% viscose. Round neck and sleeves falling below the elbow. Ribbed elastic trims. Front welt pockets. Front fastening with metal zip.",
    "id": "productw981"
  },
  {
    "product_name": "TRF OVERSIZE DENIM JACKET",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/4365/073/406/3/w/448/4365073406_1_1_1.jpg?ts=1691743834806",
    "price": "₹ 4,990.00",
    "details": "Oversize collared jacket with long cuffed sleeves. Featuring side pockets and patch pockets on the chest. Hem with tabs on the back and front fastening with metal buttons.",
    "id": "productw982"
  },
  {
    "product_name": "STRAIGHT WATER-REPELLENT BOMBER JACKET",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/5320/705/922/2/w/448/5320705922_1_1_1.jpg?ts=1692193283205",
    "price": "₹ 4,990.00",
    "details": "Collared bomber jacket with long cuffed sleeves. Side pockets. Elastic hem. Dart detail. Zip-up front.",
    "id": "productw983"
  },
  {
    "product_name": "TRF DENIM JACKET WITH TROUSER WAISTBAND EFFECT",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/5252/270/406/2/w/448/5252270406_1_1_1.jpg?ts=1689692176910",
    "price": "₹ 3,990.00",
    "details": "Collared jacket with long cuffed sleeves. Featuring a jeans waistband effect at the hem and metal button fastening at the front.",
    "id": "productw984"
  },
  {
    "product_name": "ORGANZA BOMBER JACKET",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/7484/220/800/20/w/448/7484220800_1_1_1.jpg?ts=1690548190874",
    "price": "₹ 3,290.00",
    "details": "Bomber jacket with a round neck and long sleeves. Front welt pockets. Front zip fastening.",
    "id": "productw985"
  },
  {
    "product_name": "OVERSHIRT WITH ADJUSTABLE WAIST",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/7901/124/711/2/w/448/7901124711_1_1_1.jpg?ts=1685541308721",
    "price": "₹ 3,290.00",
    "details": "Collared overshirt featuring turn-up long sleeves with buttoned tabs. Front flaps and an adjustable waist with drawstring. Front pockets. Snap-button fastenings at the front.",
    "id": "productw986"
  },
  {
    "product_name": "EMBROIDERED OVERSHIRT",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/4877/075/505/13/w/448/4877075505_1_1_1.jpg?ts=1689852255004",
    "price": "₹ 3,990.00",
    "details": "Collared overshirt made of cotton featuring long cuffed sleeves, chest patch pockets, contrast embroidery detail, frayed hem and a button-up front.",
    "id": "productw987"
  },
  {
    "product_name": "TRF DENIM BIKER JACKET",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/8197/280/406/2/w/448/8197280406_1_1_1.jpg?ts=1689692178572",
    "price": "₹ 5,990.00",
    "details": "Collared jacket with long cuffed sleeves. Side zip pockets. Matching fabric belt with a metal buckle. Crossover zip fastening at the front.",
    "id": "productw988"
  },
  {
    "product_name": "BOMBER JACKET WITH FLAPS",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/2565/929/800/2/w/448/2565929800_1_1_1.jpg?ts=1692002103769",
    "price": "₹ 7,590.00",
    "details": "Bomber jacket featuring a round neck and adjustable long sleeves with snap-buttons. Front buttoned flaps and welt pockets. Elastic hem. Hidden front zip fastening and metallic snap-button fastenings.",
    "id": "productw989"
  },
  {
    "product_name": "HOODED JACKET",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/8372/255/505/3/w/448/8372255505_1_1_1.jpg?ts=1692009271255",
    "price": "₹ 4,990.00",
    "details": "High-neck jacket with a hood and long sleeves with elasticated trims. Featuring front pockets with flaps and front snap-button fastening.",
    "id": "productw990"
  },
  {
    "product_name": "ZW ASYMMETRIC DENIM CAPE",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/6186/051/427/2/w/448/6186051427_1_1_1.jpg?ts=1690527650310",
    "price": "₹ 5,990.00",
    "details": "ZW ZARA WOMANCollared denim cape. Contrast visible topstitching detail. Frayed trims. Asymmetric hem. Button-up front.",
    "id": "productw991"
  },
  {
    "product_name": "METALLIC CROPPED JACKET",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/6045/016/808/2/w/448/6045016808_1_1_1.jpg?ts=1688628474542",
    "price": "₹ 5,990.00",
    "details": "Cropped jacket featuring a lapel collar and long sleeves with cuffs. Flap detail on the front. Metallic fabric. Fastens at the front with metal buttons.",
    "id": "productw992"
  },
  {
    "product_name": "KNIT CUTWORK BOMBER JACKET",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/3859/056/712/2/w/448/3859056712_1_1_1.jpg?ts=1687345629275",
    "price": "₹ 3,990.00",
    "details": "Bomber jacket with cutwork fabric, a round neckline and long sleeves. Zip-up front.This garment is not lined.",
    "id": "productw993"
  },
  {
    "product_name": "LONG BOMBER JACKET",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/9929/228/711/2/w/448/9929228711_1_1_1.jpg?ts=1692352756695",
    "price": "₹ 5,590.00",
    "details": "Long bomber jacket with a lapel collar. Long sleeves with elasticated cuffs. Front welt pockets. Matching lining. Elasticated hem. Button-up front hidden by a placket.",
    "id": "productw994"
  },
  {
    "product_name": "CROPPED OVERSHIRT WITH PIERCING DETAIL",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/4877/079/711/2/w/448/4877079711_1_1_1.jpg?ts=1685022465510",
    "price": "₹ 4,990.00",
    "details": "Collared overshirt made of cotton. Long sleeves with cuffs. Patch flap pockets with buttons on the chest. Piercing detail. Asymmetric hem. Button-up front.",
    "id": "productw995"
  },
  {
    "product_name": "OVERSIZE RHINESTONE OVERSHIRT",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/4877/240/802/2/w/448/4877240802_1_1_1.jpg?ts=1690967983190",
    "price": "₹ 4,990.00",
    "details": "Collared overshirt made of 100% cotton fabric. Long sleeves featuring buttoned cuffs with an opening. In-seam front pockets. Rhinestone appliqué details. Snap-button fastening on the front.",
    "id": "productw996"
  },
  {
    "product_name": "Z1975 DENIM JACKET",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/7637/603/427/2/w/448/7637603427_1_1_1.jpg?ts=1688732568852",
    "price": "₹ 3,990.00",
    "details": "Collared jacket with long sleeves. Front patch pockets. Asymmetric hem with side vents. Front metal button fastening.",
    "id": "productw997"
  },
  {
    "product_name": "DRAPEY LONG RAINCOAT",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/8073/045/802/2/w/448/8073045802_1_1_1.jpg?ts=1692281895107",
    "price": "₹ 5,590.00",
    "details": "Trench coat with a lapel collar and turn-up long sleeves with buttoned tabs. Front flap pockets. Back vent at the hem. Fastens with a belt in matching fabric.",
    "id": "productw998"
  },
  {
    "product_name": "RUBBERISED RAINCOAT WITH HOOD",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/3046/075/505/2/w/448/3046075505_1_1_1.jpg?ts=1692201135818",
    "price": "₹ 4,990.00",
    "details": "High neck raincoat featuring an adjustable hood with drawstrings. Long sleeves with snap-button cuffs. Patch pockets with flaps on the front. Front zip fastening.",
    "id": "productw999"
  },
  {
    "product_name": "KIMONO WITH LACE TRIM",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/8372/244/505/2/w/448/8372244505_1_1_1.jpg?ts=1689787184560",
    "price": "₹ 5,990.00",
    "details": "Open kimono with wide sleeves falling below the elbow. Featuring lace trims and tasselled string fastening at the front.",
    "id": "productw1000"
  },
  {
    "product_name": "FLOWING BOMBER JACKET",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/7704/677/505/2/w/448/7704677505_1_1_1.jpg?ts=1685088922600",
    "price": "₹ 3,990.00",
    "details": "Bomber jacket with a round neck and long cuffed sleeves. Featuring front jetted pockets, elasticated trims and front zip fastening.",
    "id": "productw1001"
  },
  {
    "product_name": "OVERSIZED OVERSHIRT WITH POCKETS",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/4877/250/533/2/w/448/4877250533_1_1_1.jpg?ts=1688997269547",
    "price": "₹ 3,290.00",
    "details": "Oversize collared overshirt made of 100% cotton. Long cuffed sleeves with buttoned openings. Chest patch pockets. Asymmetric hem with side vents. Button-up front hidden by a placket.",
    "id": "productw1002"
  },
  {
    "product_name": "LONG LINEN BLEND COAT",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/8367/044/505/2/w/448/8367044505_1_1_1.jpg?ts=1690450436588",
    "price": "₹ 5,990.00",
    "details": "Long coat made of a lyocell and linen blend. Round neck with matching ribbed detail and long sleeves with metal zips. Front flap pockets. Adjustable waist with inner elastic drawstring and stopper. Back vent at the hem. Front zip and snap-button fastening.View more",
    "id": "productw1003"
  },
  {
    "product_name": "FAUX SUEDE OVERSHIRT",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/4968/227/620/3/w/448/4968227620_1_1_1.jpg?ts=1692009260599",
    "price": "₹ 3,290.00",
    "details": "Collared overshirt with long sleeves. Front pockets with flaps. Front button fastening and belt in matching fabric.",
    "id": "productw1004"
  },
  {
    "product_name": "FAUX SUEDE COAT",
    "image_url": "https://static.zara.net/photos///2023/V/0/1/p/2712/160/826/2/w/448/2712160826_6_1_1.jpg?ts=1677771864893",
    "price": "₹ 4,990.00",
    "details": "Open coat with a lapel collar and long sleeves.",
    "id": "productw1005"
  },
  {
    "product_name": "SATIN ORGANZA BOMBER JACKET",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/5070/008/715/3/w/448/5070008715_1_1_1.jpg?ts=1686309021152",
    "price": "₹ 3,990.00",
    "details": "Semi-sheer bomber jacket with a round neckline and long sleeves. Matching satin fabric appliqué. Button-up front hidden by a placket.",
    "id": "productw1006"
  },
  {
    "product_name": "LINEN COAT WITH VENTS - LIMITED EDITION",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/7838/023/727/3/w/448/7838023727_1_1_1.jpg?ts=1689780439915",
    "price": "₹ 10,990.00",
    "details": "Long coat made of 100% linen. Lapel collar and long sleeves. Side in-seam pockets. Front vents at the hem. Front fastening with ties in the same fabric.",
    "id": "productw1007"
  },
  {
    "product_name": "OVERSIZE WATER-REPELLENT TRENCH COAT WITH BELT",
    "image_url": "https://static.zara.net/photos///2023/V/0/1/p/0518/043/401/2/w/448/0518043401_1_1_1.jpg?ts=1675435491972",
    "price": "₹ 8,590.00",
    "details": "Loose-fitting trench coat made of a cotton blend. Lapel collar and long sleeves with adjustable tabs. Front pockets. Adjustable belt in the same fabric with a buckle. Buttoned tabs on the shoulders. Double-breasted button fastening at the front.View more",
    "id": "productw1008"
  },
  {
    "product_name": "CHECKED TEXTURED BLAZER",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/4387/250/046/2/w/448/4387250046_6_1_1.jpg?ts=1690382476710",
    "price": "₹ 5,990.00",
    "details": "Blazer featuring a lapel collar and long sleeves with pronounced shoulders. False front flap pockets. Golden button fastening at the front.",
    "id": "productw1009"
  },
  {
    "product_name": "LINEN-BLEND LACE-TRIMMED KIMONO",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/7891/939/800/2/w/448/7891939800_1_1_1.jpg?ts=1688124509787",
    "price": "₹ 4,990.00",
    "details": "Kimono made of a linen blend fabric. Wide sleeves falling below the elbow with matching lace trims. Hem with side vents. Fastens with a belt in matching fabric.",
    "id": "productw1010"
  },
  {
    "product_name": "SATIN BOMBER JACKET",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/7854/543/307/2/w/448/7854543307_1_1_1.jpg?ts=1686063611563",
    "price": "₹ 3,990.00",
    "details": "Bomber jacket with a round neck and long cuffed sleeves. Featuring front flap pockets, elasticated trims and front zip fastening.",
    "id": "productw1011"
  },
  {
    "product_name": "TEXTURED WRAP KIMONO",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/2010/843/800/2/w/448/2010843800_1_1_1.jpg?ts=1686234434317",
    "price": "₹ 3,290.00",
    "details": "Long sleeve kimono with a lapel collar. Featuring side pockets, wrap-style fastening with inner ties and a belt in the same fabric.",
    "id": "productw1012"
  },
  {
    "product_name": "CROPPED JACKET WITH DETACHABLE DETAIL",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/4661/815/746/2/w/448/4661815746_1_1_1.jpg?ts=1685534064107",
    "price": "₹ 5,990.00",
    "details": "Cropped jacket with a lapel collar and crossover V-neckline. Detachable long sleeves with buttons and cuffs. Frayed trims. Tied belt at the hem. Double-breasted button fastening at the front.",
    "id": "productw1013"
  },
  {
    "product_name": "CROPPED COTTON WAXED JACKET",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/4341/738/700/12/w/448/4341738700_1_1_1.jpg?ts=1692363935990",
    "price": "₹ 4,990.00",
    "details": "Jacket made of waxed fabric. Lapel collar and long cuffed sleeves. Front pockets. Elastic hem at the back. Front fastening with metal zip.",
    "id": "productw1014"
  },
  {
    "product_name": "CROPPED FAUX LEATHER JACKET",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/7102/230/800/2/w/448/7102230800_1_1_1.jpg?ts=1692793176920",
    "price": "₹ 3,290.00",
    "details": "Jacket featuring a lapel collar and long sleeves. False welt pocket on the chest. Matching lining. Front metal zip fastening.",
    "id": "productw1015"
  },
  {
    "product_name": "LINEN BLEND BOMBER JACKET",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/4432/713/746/2/w/448/4432713746_1_1_1.jpg?ts=1688732543184",
    "price": "₹ 4,990.00",
    "details": "Bomber jacket made of a linen blend fabric. Round neck and long sleeves with cuffs. Patch pockets on the chest and pockets on the sides. Elasticated hem. Snap-button fastenings hidden by a placket on the front.",
    "id": "productw1016"
  },
  {
    "product_name": "ZW CONTRAST DENIM BOMBER JACKET",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/2553/242/407/2/w/448/2553242407_1_1_1.jpg?ts=1691152492052",
    "price": "₹ 5,990.00",
    "details": "ZW ZARA WOMANShort denim bomber jacket with a round neckline and long sleeves. Front pockets. Combination of denim fabrics. Matching ribbed trims. Front fastening with metal zip.View more",
    "id": "productw1017"
  },
  {
    "product_name": "SOFT BOMBER JACKET",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/3046/272/800/2/w/448/3046272800_6_1_1.jpg?ts=1692951015526",
    "price": "₹ 3,290.00",
    "details": "Bomber jacket with a round neck and long sleeves. Matching elasticated ribbed trims. Front welt pockets. Lining. Front snap-button fastening.",
    "id": "productw1018"
  },
  {
    "product_name": "CREASED KIMONO WITH TIES",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/0264/457/250/2/w/448/0264457250_1_1_1.jpg?ts=1690210736729",
    "price": "₹ 3,290.00",
    "details": "Long sleeve open kimono with a V-neckline. Featuring creased fabric and tie fastening in the same fabric.",
    "id": "productw1019"
  },
  {
    "product_name": "SHORT JACKET WITH RHINESTONE BUTTONS",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/8166/109/712/2/w/448/8166109712_1_1_1.jpg?ts=1692258919779",
    "price": "₹ 5,590.00",
    "details": "Collared jacket with long sleeves. Front patch pockets. Contrast piping detail. Front fastening with rhinestone buttons.",
    "id": "productw1020"
  },
  {
    "product_name": "TRF PAINT SPLATTER OVERSIZED DENIM OVERSHIRT",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/6045/207/407/2/w/448/6045207407_1_1_1.jpg?ts=1691739235918",
    "price": "₹ 4,990.00",
    "details": "Oversize collared overshirt with long cuffed sleeves and drop shoulders. Featuring front patch pockets. Faded effect with paint platter. Ripped details and front fastening with metal buttons.",
    "id": "productw1021"
  },
  {
    "product_name": "BOMBER JACKET WITH CUTWORK EMBROIDERY",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/7565/101/800/12/w/448/7565101800_1_1_1.jpg?ts=1686749148122",
    "price": "₹ 4,990.00",
    "details": "Bomber jacket with a round neck and sleeves falling below the elbow. Cutwork embroidery details, elastic hem and front metal zip fastening.",
    "id": "productw1022"
  },
  {
    "product_name": "FAUX LEATHER JACKET",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/3427/736/800/17/w/448/3427736800_1_1_1.jpg?ts=1687505128322",
    "price": "₹ 4,990.00",
    "details": "Collared jacket featuring long sleeves with tabs on the shoulders. Featuring front pockets with metal zips, a belt in the same material with a metal buckle and zip fastening at the front.",
    "id": "productw1023"
  },
  {
    "product_name": "FLOWING BOMBER JACKET WITH POCKETS",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/7534/419/622/17/w/448/7534419622_1_1_1.jpg?ts=1687966675341",
    "price": "₹ 8,590.00",
    "details": "Flowing bomber jacket made of viscose. High round neck and long sleeves with elastic cuffs. Front patch pockets with flaps. Elastic hem with adjustable ties. Front fastening with metal zip and snap-buttons.",
    "id": "productw1024"
  },
  {
    "product_name": "CROPPED ZIP-UP JACKET",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/2010/756/800/5/w/448/2010756800_1_1_1.jpg?ts=1691507892634",
    "price": "₹ 4,990.00",
    "details": "Jacket featuring a lapel collar and long sleeves with padded shoulders. False welt pocket on the chest. Matching lining. Front metal zip fastening.",
    "id": "productw1025"
  },
  {
    "product_name": "SATIN CROPPED BOMBER JACKET",
    "image_url": "https://static.zara.net/photos///2023/V/0/1/p/4661/770/800/18/w/448/4661770800_1_1_1.jpg?ts=1685628850347",
    "price": "₹ 4,990.00",
    "details": "Bomber jacket with a round neckline and long sleeves with shoulder pads. Featuring matching ribbed trims, side pockets and snap-button fastening at the front.",
    "id": "productw1026"
  },
  {
    "product_name": "SHORT TEXTURED WEAVE BLAZER",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/7995/137/330/2/w/448/7995137330_1_1_1.jpg?ts=1691593336389",
    "price": "₹ 5,990.00",
    "details": "Blazer with a high neck and long sleeves. Front flap pockets. Contrast trim details. Golden button fastenings on the front.",
    "id": "productw1027"
  },
  {
    "product_name": "RIPPED PLUSH BOMBER JACKET",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/2715/001/710/2/w/448/2715001710_1_1_1.jpg?ts=1689692177672",
    "price": "₹ 4,990.00",
    "details": "Bomber jacket made of plush fabric. Round neck and long sleeves. Front flap pockets. Front fastening with metal zip.",
    "id": "productw1028"
  }
];

module.exports = modifiedProducts;