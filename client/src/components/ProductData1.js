const products = [
  {
    "product_name": "PACK OF 2 STRIPED POPLIN BOXERS",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/1063/301/401/2/w/448/1063301401_6_1_1.jpg?ts=1691411229580",
    "price": "₹ 1,990.00",
    "details": "Pack of 2 pairs of boxers made of poplin fabric. Elastic waistband.",
    "id": "producta1"
  },
  {
    "product_name": "PACK OF 2 STRIPED POPLIN BOXERS",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/0775/304/555/2/w/448/0775304555_6_1_1.jpg?ts=1685087981331",
    "price": "₹ 1,990.00",
    "details": "Pack of 2 pairs of boxers made of cotton poplin fabric. Elasticated waistband.",
    "id": "producta2"
  },
  {
    "product_name": "2-PACK OF SHORT POPLIN BOXERS",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/1063/308/555/2/w/448/1063308555_6_1_1.jpg?ts=1692953919685",
    "price": "₹ 1,990.00",
    "details": "Pack of 2 pairs of short boxers made of cotton poplin fabric. Elasticated waistband.",
    "id": "producta3"
  },
  {
    "product_name": "2-PACK OF BOXERS WITH CUTWORK EMBROIDERY",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/0775/307/555/2/w/448/0775307555_6_1_1.jpg?ts=1688110429483",
    "price": "₹ 2,590.00",
    "details": "Pack of 2 pairs of boxers made of poplin. Elasticated waistband. Cutwork embroidery all over the garment.",
    "id": "producta4"
  },
  {
    "product_name": "3-PACK OF BASIC BOXERS",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/4442/405/250/2/w/448/4442405250_6_1_1.jpg?ts=1691587305797",
    "price": "₹ 1,990.00",
    "details": "Pack of 3 pairs of boxers with an elastic waistband.",
    "id": "producta5"
  },
  {
    "product_name": "3-PACK OF BASIC BOXERS",
    "image_url": "https://static.zara.net/photos///2023/V/0/2/p/3661/401/555/2/w/448/3661401555_6_1_1.jpg?ts=1680518949636",
    "price": "₹ 1,990.00",
    "details": "Pack of 3 pairs of boxers with an elasticated waistband.",
    "id": "producta6"
  },
  {
    "product_name": "PACK OF 3 SOFT BOXERS",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/4442/307/555/2/w/448/4442307555_6_1_1.jpg?ts=1692953919902",
    "price": "₹ 1,990.00",
    "details": "Pack of three boxers with an elastic waistband. Fabric with a velvety finish.",
    "id": "producta7"
  },
  {
    "product_name": "PACK OF 3 SOFT BOXERS",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/4442/306/555/2/w/448/4442306555_6_1_1.jpg?ts=1691587306492",
    "price": "₹ 1,990.00",
    "details": "Pack of three boxers made of a velvety-finish fabric. Elastic waistband.",
    "id": "producta8"
  },
  {
    "product_name": "3-PACK OF ASSORTED BOXERS",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/4442/311/555/2/w/448/4442311555_6_1_1.jpg?ts=1692790057824",
    "price": "₹ 1,990.00",
    "details": "Pack of three boxers with an elastic waistband. Fabric with a faded finish.",
    "id": "producta9"
  },
  {
    "product_name": "3-PACK OF ASSORTED BRIEFS",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/3661/304/555/2/w/448/3661304555_6_1_1.jpg?ts=1691752221311",
    "price": "₹ 1,990.00",
    "details": "Pack of 3 pairs of briefs with an elasticated waistband.",
    "id": "producta10"
  },
  {
    "product_name": "SMART LEATHER BELT",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/2823/407/800/32/w/448/2823407800_1_1_1.jpg?ts=1692806802807",
    "price": "₹ 2,990.00",
    "details": "Leather belt. Fastening with metal buckle and belt loop.",
    "id": "producta11"
  },
  {
    "product_name": "LEATHER BELT",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/5717/301/705/2/w/448/5717301705_6_1_1.jpg?ts=1689260306274",
    "price": "₹ 2,990.00",
    "details": "Leather belt with a nubuck finish. Fastening with metal buckle and loop.",
    "id": "producta12"
  },
  {
    "product_name": "FADED LEATHER BELT",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/5919/312/800/2/w/448/5919312800_6_1_1.jpg?ts=1690470215826",
    "price": "₹ 2,990.00",
    "details": "Faded leather belt with metal buckle fastening.",
    "id": "producta13"
  },
  {
    "product_name": "THIN LEATHER BELT",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/6399/403/832/2/w/448/6399403832_6_1_1.jpg?ts=1692350271232",
    "price": "₹ 2,990.00",
    "details": "Thin leather belt. Fastens with metal buckle and loop.",
    "id": "producta14"
  },
  {
    "product_name": "SPLIT SUEDE BELT",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/6399/401/737/2/w/448/6399401737_6_1_1.jpg?ts=1683819347036",
    "price": "₹ 2,590.00",
    "details": "Leather belt with a split suede finish. Topstitching detail. Fastening with a metal buckle and belt loop.",
    "id": "producta15"
  },
  {
    "product_name": "CONTRAST LEATHER BELT",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/2823/303/746/2/w/448/2823303746_6_1_1.jpg?ts=1686123672080",
    "price": "₹ 2,990.00",
    "details": "Leather belt. Contrast topstitching detail. Fastens with a metal buckle and loop.",
    "id": "producta16"
  },
  {
    "product_name": "LEATHER BELT",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/2823/307/800/2/w/448/2823307800_6_1_1.jpg?ts=1690187824999",
    "price": "₹ 2,990.00",
    "details": "Leather belt. Metallic eyelets. Fastening with metallic buckle and belt loop.",
    "id": "producta17"
  },
  {
    "product_name": "LEATHER BELT",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/5919/306/800/2/w/448/5919306800_6_1_1.jpg?ts=1689260306189",
    "price": "₹ 2,990.00",
    "details": "Leather belt. Metal loop and buckle fastening with embossed details.",
    "id": "producta18"
  },
  {
    "product_name": "LEATHER BELT",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/5919/303/800/2/w/448/5919303800_6_1_1.jpg?ts=1688713056878",
    "price": "₹ 2,990.00",
    "details": "Thin leather belt with metal buckle fastening.",
    "id": "producta19"
  },
  {
    "product_name": "SPLIT SUEDE BELT",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/2823/409/702/2/w/448/2823409702_6_1_1.jpg?ts=1692790067427",
    "price": "₹ 2,990.00",
    "details": "Narrow leather belt with a split suede finish. Fastening with metal buckle and loop.",
    "id": "producta20"
  },
  {
    "product_name": "THIN LEATHER BELT",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/5919/307/700/2/w/448/5919307700_6_1_1.jpg?ts=1691739356850",
    "price": "₹ 2,990.00",
    "details": "Leather belt. Metal loop and buckle fastening.",
    "id": "producta21"
  },
  {
    "product_name": "BRAIDED STRETCH BELT",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/2823/306/800/2/w/448/2823306800_6_1_1.jpg?ts=1689591106266",
    "price": "₹ 2,990.00",
    "details": "Elastic belt. Leather trims. Fastens with metal buckle and loop.",
    "id": "producta22"
  },
  {
    "product_name": "EMBOSSED LEATHER BELT",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/2823/304/702/2/w/448/2823304702_6_1_1.jpg?ts=1689924373743",
    "price": "₹ 2,990.00",
    "details": "Leather belt. Embossed geometric detail. Fastening with metallic buckle and belt loop.",
    "id": "producta23"
  },
  {
    "product_name": "BRAIDED BELT",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/2823/305/500/2/w/448/2823305500_6_1_1.jpg?ts=1689924373698",
    "price": "₹ 2,590.00",
    "details": "Plaited cotton belt. Fastening with metallic buckle and belt loop.",
    "id": "producta24"
  },
  {
    "product_name": "STRETCH REVERSIBLE BELT",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/2823/302/800/2/w/448/2823302800_6_1_1.jpg?ts=1688714104398",
    "price": "₹ 2,990.00",
    "details": "Reversible stretch belt. Leather trims. Buckle and loop fastening.",
    "id": "producta25"
  },
  {
    "product_name": "REVERSIBLE LEATHER BELT",
    "image_url": "https://static.zara.net/photos///2023/V/0/2/p/5919/401/800/2/w/448/5919401800_6_1_1.jpg?ts=1675328793662",
    "price": "₹ 2,890.00",
    "details": "Reversible leather belt. Buckle and loop fastening.",
    "id": "producta26"
  },
  {
    "product_name": "REVERSIBLE LEATHER BELT",
    "image_url": "https://static.zara.net/photos///2023/V/0/2/p/6907/406/800/2/w/448/6907406800_6_1_1.jpg?ts=1674036216150",
    "price": "₹ 2,890.00",
    "details": "Reversible leather belt. Metal loop and buckle fastening.",
    "id": "producta27"
  },
  {
    "product_name": "REVERSIBLE LEATHER BELT",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/5919/302/746/2/w/448/5919302746_6_1_1.jpg?ts=1685693915753",
    "price": "₹ 2,990.00",
    "details": "Reversible leather belt. Metallic buckle and loop fastening.",
    "id": "producta28"
  },
  {
    "product_name": "PACK OF 3 RIBBED SOCKS",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/3992/300/800/2/w/448/3992300800_6_1_1.jpg?ts=1690803332071",
    "price": "₹ 990.00",
    "details": "Pack of three pairs of ribbed knit socks with ribbed elasticated trims.",
    "id": "producta29"
  },
  {
    "product_name": "3-PACK OF MERCERISED COTTON SOCKS",
    "image_url": "https://static.zara.net/photos///2022/I/0/2/p/6389/400/800/2/w/448/6389400800_6_1_1.jpg?ts=1661175210049",
    "price": "₹ 1,590.00",
    "details": "Pack of 3 pairs of ribbed knit socks with a mercerised cotton finish and ribbed elastic trims.",
    "id": "producta30"
  },
  {
    "product_name": "3-PACK OF COMBINED SOCKS",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/0348/321/555/2/w/448/0348321555_6_1_1.jpg?ts=1692790067423",
    "price": "₹ 990.00",
    "details": "Pack of 3 pairs of lightweight socks made of a spun cotton blend fabric. Ribbed trims.",
    "id": "producta31"
  },
  {
    "product_name": "3-PACK OF MATCHING SOCKS",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/3992/328/555/2/w/448/3992328555_6_1_1.jpg?ts=1688713058666",
    "price": "₹ 990.00",
    "details": "Pack of 3 pairs of socks made of a spun cotton blend fabric. Ribbed trims.",
    "id": "producta32"
  },
  {
    "product_name": "PACK OF 3 RIBBED SOCKS",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/3992/309/555/2/w/448/3992309555_6_1_1.jpg?ts=1688111367562",
    "price": "₹ 990.00",
    "details": "Pack of three pairs of knit socks with ribbed trims.",
    "id": "producta33"
  },
  {
    "product_name": "SOCKS WITH STRIPE AND EMBROIDERY",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/0348/319/507/2/w/448/0348319507_6_1_1.jpg?ts=1693207611797",
    "price": "₹ 690.00",
    "details": "Socks made of a spun cotton blend. Matching embroidery detail. Ribbed trims.",
    "id": "producta34"
  },
  {
    "product_name": "PACK OF 4 ANKLE SOCKS",
    "image_url": "https://static.zara.net/photos///2023/V/0/2/p/0348/485/250/2/w/448/0348485250_6_1_1.jpg?ts=1676891337982",
    "price": "₹ 990.00",
    "details": "Pack of four pairs of ankle socks made of a spun cotton blend fabric. Ribbed trims.",
    "id": "producta35"
  },
  {
    "product_name": "4-PACK OF NO-SHOW SOCKS",
    "image_url": "https://static.zara.net/photos///2023/V/0/2/p/0348/407/250/2/w/448/0348407250_6_1_1.jpg?ts=1672908227874",
    "price": "₹ 990.00",
    "details": "Pack of no-show ankle socks made of a cotton blend fabric. Ribbed trims.",
    "id": "producta36"
  },
  {
    "product_name": "4-PACK OF NO-SHOW SOCKS",
    "image_url": "https://static.zara.net/photos///2023/V/0/2/p/0348/482/555/2/w/448/0348482555_6_1_1.jpg?ts=1675854282846",
    "price": "₹ 990.00",
    "details": "Pack of four pairs of no-show ankle socks made of a spun cotton blend fabric. Ribbed trims.",
    "id": "producta37"
  },
  {
    "product_name": "4-PACK OF NO-SHOW SOCKS",
    "image_url": "https://static.zara.net/photos///2023/V/0/2/p/0348/400/800/2/w/448/0348400800_6_1_1.jpg?ts=1672908228701",
    "price": "₹ 990.00",
    "details": "Pack of four pairs of no-show socks made of a cotton blend fabric. Ribbed trims.",
    "id": "producta38"
  },
  {
    "product_name": "4-PACK OF NO-SHOW SOCKS",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/0348/305/555/2/w/448/0348305555_6_1_1.jpg?ts=1686123672463",
    "price": "₹ 990.00",
    "details": "Pack of 4 pairs of no-show socks made of a spun cotton blend fabric. Ribbed trims.",
    "id": "producta39"
  },
  {
    "product_name": "PACK OF 3 STRIPED SOCKS",
    "image_url": "https://static.zara.net/photos///2023/V/0/2/p/3992/416/250/2/w/448/3992416250_6_1_1.jpg?ts=1681310780550",
    "price": "₹ 990.00",
    "details": "Ribbed knit socks with ribbed elastic trims. Contrast stripe detail.",
    "id": "producta40"
  },
  {
    "product_name": "ROLLTOP SPORTS BACKPACK",
    "image_url": "https://static.zara.net/photos///2023/I/1/2/p/3240/220/800/2/w/448/3240220800_6_1_1.jpg?ts=1692268022274",
    "price": "₹ 4,990.00",
    "details": "Multi-pocket backpack. Combination of materials on the exterior. The main compartment fastens with a zip and rolls up with clip buckles on both sides. It also opens from the front with a zip closure. Two small front pockets with thermo-sealed zip fastening. Featuring two adjustable mesh pockets on the sides. Top handle and two adjustable, breathable shoulder straps. Each compartment has a thermo-sealed zip closure. Ergonomic padded back for improved comfort during use. Adjustable chest with clip buckle fastening.Height x Length x Width 44 x 27 x 14 cm. / 17.3 x 10.6 x 5.5″View more",
    "id": "producta41"
  },
  {
    "product_name": "TECHNICAL BUCKET HAT",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/5875/301/250/2/w/448/5875301250_1_1_1.jpg?ts=1691052738297",
    "price": "₹ 1,990.00",
    "details": "Bucket hat made of breathable stretch fabric. Adjustable matching drawstring.Zara Athleticz.",
    "id": "producta42"
  },
  {
    "product_name": "NYLON BELT BAG",
    "image_url": "https://static.zara.net/photos///2023/I/1/2/p/3640/220/202/612/w/448/3640220202_6_1_1.jpg?ts=1692352453916",
    "price": "₹ 2,590.00",
    "details": "Soft belt bag. Technical fabric upper. Main compartment with zip closure. Front pocket with technical clasp. Adjustable handle with clip buckle. Height x Length: 18.5 x 37 cm. / 7.2 x 14.5″View more",
    "id": "producta43"
  },
  {
    "product_name": "TECHNICAL BUCKET HAT",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/5875/400/700/2/w/448/5875400700_1_1_1.jpg?ts=1687950698709",
    "price": "₹ 2,290.00",
    "details": "Hat made of lightweight technical fabric. Featuring a wide brim with topstitching detail and adjustable chin tie.Zara Athleticz.",
    "id": "producta44"
  },
  {
    "product_name": "TECHNICAL BACKPACK",
    "image_url": "https://static.zara.net/photos///2023/I/1/2/p/3241/220/802/2/w/448/3241220802_6_1_1.jpg?ts=1692887333245",
    "price": "₹ 4,990.00",
    "details": "Multi-pocket backpack. The main compartment has zip closure and its interior has three small pockets with zip closure. Featuring two large front pockets, one with zip and the other with adjustable fastening. Side pockets with adjustable fastening. Top handle and two adjustable shoulder straps. Ergonomic padded back for improved comfort during use. Adjustable strap on the chest with clip buckle fastening.Height x Length x Width 44 x 27 x 17 cm. / 17.3 x 10.6 x 6.6″View more",
    "id": "producta45"
  },
  {
    "product_name": "SPORTS BACKPACK",
    "image_url": "https://static.zara.net/photos///2023/I/1/2/p/3239/220/400/2/w/448/3239220400_1_1_1.jpg?ts=1691052738259",
    "price": "₹ 4,990.00",
    "details": "Multi-pocket backpack. Combination of materials and colours on the exterior. The main compartment fastens with a zip and features an inside pocket without closure for electronic devices of up to 13 inches. On the front it has a flat pocket with zip closure. Adjustable mesh pockets on the sides. Top handle and two adjustable shoulder straps with zip pockets. Ergonomic padded back for improved comfort during use. Adjustable chest strap with clip buckle fastening. Height x Length x Width: 39 x 26 x 13 cm.View more",
    "id": "producta46"
  },
  {
    "product_name": "BASEBALL TRAINING CAP",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/3920/312/706/2/w/448/3920312706_6_1_1.jpg?ts=1686640606920",
    "price": "₹ 1,890.00",
    "details": "Peak cap with an adjustable strap at the back.Zara Athleticz.",
    "id": "producta47"
  },
  {
    "product_name": "CAP",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/2966/306/001/2/w/448/2966306001_6_1_1.jpg?ts=1684420908929",
    "price": "₹ 1,890.00",
    "details": "Cap made of stretchy, breathable fabric. Secure fit with inner elastic band.Zara Athleticz.",
    "id": "producta48"
  },
  {
    "product_name": "PACK OF 3 TRAINING SOCKS",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/2496/300/803/2/w/448/2496300803_6_1_1.jpg?ts=1690965973334",
    "price": "₹ 990.00",
    "details": "Pack of 3 pairs of socks made of a spun cotton blend fabric. Ribbed trims.Zara Athleticz.",
    "id": "producta49"
  },
  {
    "product_name": "PACK OF 2 TRAINING SOCKS",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/2496/310/802/2/w/448/2496310802_6_1_1.jpg?ts=1690965973365",
    "price": "₹ 990.00",
    "details": "Pack of 2 pairs of seamless socks with ribbed trims.Zara Athleticz.",
    "id": "producta50"
  },
  {
    "product_name": "TRAINING SOCKS",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/2496/309/121/2/w/448/2496309121_6_1_1.jpg?ts=1687938651972",
    "price": "₹ 990.00",
    "details": "Pack of 2 pairs of seamless mesh socks with ribbed trims.",
    "id": "producta51"
  },
  {
    "product_name": "GEOMETRIC PRINT SWIMMING TRUNKS",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/2634/306/401/2/w/448/2634306401_1_1_1.jpg?ts=1689157213064",
    "price": "₹ 2,990.00",
    "details": "Swimming trunks made of technical fabric with a velvety finish. Elasticated waistband with drawstrings. Front pockets and pocket detail at the waist. Rear welt pocket. Lining. Includes a bag in the same fabric.Length of inner leg seam: 13 cm. / 5.1″Length of outer leg seam: 36 cm. / 14.1″View more",
    "id": "producta52"
  },
  {
    "product_name": "LONG CARGO SWIMMING TRUNKS",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/8574/371/400/2/w/448/8574371400_6_1_1.jpg?ts=1692790056945",
    "price": "₹ 2,590.00",
    "details": "Swimming trunks made of a velvety-finish technical fabric. Elasticated waistband and adjustable drawstring. Front pockets and a rear pocket. Patch pocket appliqué with a flap on the leg. Lining. Length of inner leg seam: 17 cm. / 6.6″Length of outer leg seam: 41 cm. / 16.1″View more",
    "id": "producta53"
  },
  {
    "product_name": "STRIPE PRINT SWIMMING TRUNKS",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/8574/426/555/2/w/448/8574426555_6_1_1.jpg?ts=1692790057286",
    "price": "₹ 2,590.00",
    "details": "Swimming trunks made of a technical fabric. Elasticated waistband and adjustable drawstring. Side pockets and a rear pocket. Lining.Length of inner leg seam: 12 cm. / 4.7″Length of outer leg seam: 36 cm. / 14.1″View more",
    "id": "producta54"
  },
  {
    "product_name": "BASIC SWIMMING TRUNKS",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/2634/305/403/2/w/448/2634305403_1_1_1.jpg?ts=1687346680726",
    "price": "₹ 2,290.00",
    "details": "Swimming trunks made of a technical fabric. Elasticated waistband and adjustable drawstrings. Side pockets and a back patch pocket. Lining.Length of inner leg seam: 11 cm. / 4.3″Length of outer leg seam: 31 cm. / 12.2″View more",
    "id": "producta55"
  },
  {
    "product_name": "ACID WASH SWIMMING TRUNKS",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/2634/309/802/2/w/448/2634309802_6_1_1.jpg?ts=1689162979852",
    "price": "₹ 2,590.00",
    "details": "Swimming trunks made of technical fabric. Adjustable elasticated drawstring waistband. Side pockets and back pocket detail. Lining. Side slits at the hems. Faded acid wash.Length of inner leg seam: 17 cm. / 6.6″Length of outer leg seam: 41 cm. / 16.1″View more",
    "id": "producta56"
  },
  {
    "product_name": "MOSAIC PRINT SWIMMING TRUNKS",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/0495/316/403/2/w/448/0495316403_6_1_1.jpg?ts=1689260267956",
    "price": "₹ 2,590.00",
    "details": "Swimming trunks made of technical fabric. Elasticated waistband with adjustable drawstring. Side pockets and a rear patch pocket with a flap. Lining.Length of inner leg seam: 12 cm. / 4.7″Length of outer leg seam: 33 cm. / 12.9″View more",
    "id": "producta57"
  },
  {
    "product_name": "LONG SWIMMING TRUNKS WITH SUN DETAIL",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/8574/388/402/2/w/448/8574388402_6_1_1.jpg?ts=1689260268015",
    "price": "₹ 2,590.00",
    "details": "Swimming trunks made of a velvety-finish technical fabric. Elasticated waistband with adjustable drawstring. Front pockets and a rear zip pocket. Lining. Length of inner leg seam: 17 cm. / 6.6″Length of outer leg seam: 41 cm. / 16.1″View more",
    "id": "producta58"
  },
  {
    "product_name": "FLORAL PRINT SWIMMING TRUNKS",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/2634/307/526/2/w/448/2634307526_6_1_1.jpg?ts=1689260268194",
    "price": "₹ 2,990.00",
    "details": "Swimming trunks made of technical fabric. Elasticated waistband with adjustable drawstring. Front pockets and rear welt pocket. Lining. Includes a bag in the same fabric.Length of inner leg seam: 12 cm. / 4.7″Length of outer leg seam: 33 cm. / 12.9″View more",
    "id": "producta59"
  },
  {
    "product_name": "STRIPE PRINT SWIMMING TRUNKS",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/0495/321/712/2/w/448/0495321712_6_1_1.jpg?ts=1690976519493",
    "price": "₹ 2,590.00",
    "details": "Swimming trunks made of a technical fabric. Elasticated waistband and adjustable drawstring. Side pockets and a rear patch pocket. Lining.Length of inner leg seam: 12 cm. / 4.7″Length of outer leg seam: 33 cm. / 12.9″View more",
    "id": "producta60"
  },
  {
    "product_name": "LONG SWIMMING TRUNKS",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/0775/303/514/2/w/448/0775303514_6_1_1.jpg?ts=1689782190044",
    "price": "₹ 2,290.00",
    "details": "Swimming trunks made of a technical fabric. Elastic waistband and adjustable drawstring. Side pockets and a back patch pocket. Lining.Length of inner leg seam: 18 cm. / 7.0″Length of outer leg seam: 42 cm. / 16.5″View more",
    "id": "producta61"
  },
  {
    "product_name": "SEERSUCKER SWIMMING TRUNKS",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/8574/373/690/2/w/448/8574373690_6_1_1.jpg?ts=1689162981156",
    "price": "₹ 2,590.00",
    "details": "Swimming trunks made of a technical fabric. Elastic waistband and adjustable drawstring. Side pockets and a back patch pocket. Lining.Length of inner leg seam: 12 cm. / 4.7″Length of outer leg seam: 36 cm. / 14.1″View more",
    "id": "producta62"
  },
  {
    "product_name": "BASIC SWIMMING TRUNKS",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/8574/400/630/3/w/448/8574400630_1_1_1.jpg?ts=1691595916043",
    "price": "₹ 2,290.00",
    "details": "Swimming trunks made of a technical fabric. Elasticated waistband and adjustable drawstrings. Side pockets and a back patch pocket. Lining.Length of inner leg seam: 12 cm. / 4.7″Length of outer leg seam: 36 cm. / 14.1″View more",
    "id": "producta63"
  },
  {
    "product_name": "SEERSUCKER SWIMMING TRUNKS",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/8574/332/404/2/w/448/8574332404_1_1_1.jpg?ts=1686064963056",
    "price": "₹ 2,590.00",
    "details": "Swimming trunks made of a technical fabric. Elasticated waistband and adjustable drawstrings. Side pockets and a back patch pocket. Lining.Length of inner leg seam: 11 cm. / 4.3″Length of outer leg seam: 36 cm. / 14.1″View more",
    "id": "producta64"
  },
  {
    "product_name": "TECHNICAL CHECK TEXTURE SWIMMING TRUNKS",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/8574/379/704/2/w/448/8574379704_1_1_1.jpg?ts=1689157208916",
    "price": "₹ 2,990.00",
    "details": "Swimming trunks made of technical fabric. Elasticated waistband. Side pockets and back patch pocket with flap. Lining.Length of inner leg seam: 12 cm. / 4.7″Length of outer leg seam: 34 cm. / 13.3″View more",
    "id": "producta65"
  },
  {
    "product_name": "CHECKED TECHNICAL SWIMMING TRUNKS",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/8574/387/712/2/w/448/8574387712_1_1_1.jpg?ts=1689157212496",
    "price": "₹ 2,590.00",
    "details": "Swimming trunks made of a technical fabric. Adjustable elasticated waistband with drawstring. Side pockets and back welt pocket. Lining.Length of inner leg seam: 7 cm. / 2.7″Length of outer leg seam: 29 cm. / 11.4″View more",
    "id": "producta66"
  },
  {
    "product_name": "GEOMETRIC PRINT SWIMMING TRUNKS",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/0495/303/555/2/w/448/0495303555_1_1_1.jpg?ts=1687346678282",
    "price": "₹ 2,590.00",
    "details": "Swimming trunks made of a technical fabric. Elasticated waistband and adjustable drawstring. Side pockets and a back patch pocket. Lining.Length of inner leg seam: 12 cm. / 4.7″Length of outer leg seam: 33 cm. / 12.9″View more",
    "id": "producta67"
  },
  {
    "product_name": "LONG TIE-DYE SWIMMING TRUNKS",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/8574/367/712/2/w/448/8574367712_6_1_1.jpg?ts=1689162979212",
    "price": "₹ 2,590.00",
    "details": "Swimming trunks made of technical fabric. Adjustable elasticated waistband. Front pockets and back zip pocket. Lining.Length of inner leg seam: 16 cm. / 6.2″Length of outer leg seam: 37 cm. / 14.5″View more",
    "id": "producta68"
  },
  {
    "product_name": "ABSTRACT PRINT SWIMMING TRUNKS",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/0495/307/712/2/w/448/0495307712_1_1_1.jpg?ts=1686064939700",
    "price": "₹ 2,590.00",
    "details": "Swimming trunks made of technical fabric. Elasticated waistband and adjustable drawstring. Front welt pockets and back patch pocket detail. Lining.Length of inner leg seam: 14 cm. / 5.5″Length of outer leg seam: 33 cm. / 12.9″View more",
    "id": "producta69"
  },
  {
    "product_name": "FLORAL PRINT SWIMMING TRUNKS",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/8574/308/406/2/w/448/8574308406_1_1_1.jpg?ts=1687346680923",
    "price": "₹ 2,590.00",
    "details": "Swimming trunks made of technical fabric. Adjustable elasticated waistband with drawstring. Side pockets and back patch pocket with flap. Lining.Length of inner leg seam: 17 cm. / 6.6″Length of outer leg seam: 37 cm. / 14.5″View more",
    "id": "producta71"
  },
  {
    "product_name": "BLEND PRINT SWIMMING TRUNKS",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/0495/310/620/2/w/448/0495310620_6_1_1.jpg?ts=1684426407643",
    "price": "₹ 2,590.00",
    "details": "Swimming trunks made of a velvety-finish technical fabric. Elasticated waistband and adjustable drawstring. Side pockets and a back patch pocket. Lining.Length of inner leg seam: 14 cm. / 5.5″Length of outer leg seam: 36 cm. / 14.1″View more",
    "id": "producta72"
  },
  {
    "product_name": "LONG PRINTED SWIMMING TRUNKS",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/0495/313/802/2/w/448/0495313802_1_1_1.jpg?ts=1687346678711",
    "price": "₹ 2,590.00",
    "details": "Swimming trunks made of a technical fabric. Elasticated waistband and adjustable drawstrings. Side pockets and a back patch pocket. Lining.Length of inner leg seam: 16 cm. / 6.2″Length of outer leg seam: 39 cm. / 15.3″View more",
    "id": "producta73"
  },
  {
    "product_name": "PAISLEY PRINT SWIMMING TRUNKS",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/8574/386/400/2/w/448/8574386400_1_1_1.jpg?ts=1689157211794",
    "price": "₹ 2,590.00",
    "details": "Swimming trunks made of a velvety-finish technical fabric. Elasticated waistband and adjustable drawstrings. Side pockets and a rear patch pocket. Lining. Length of inner leg seam: 13 cm. / 5.1″Length of outer leg seam: 37 cm. / 14.5″View more",
    "id": "producta74"
  },
  {
    "product_name": "LONG GEOMETRIC PRINT SWIMMING TRUNKS",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/8574/375/400/2/w/448/8574375400_1_1_1.jpg?ts=1689157208773",
    "price": "₹ 2,590.00",
    "details": "Swimming trunks made of a velvety-finish technical fabric. Elasticated waistband and adjustable drawstrings. Side pockets and a rear patch pocket. Lining. Length of inner leg seam: 17 cm. / 6.6″Length of outer leg seam: 41 cm. / 16.1″View more",
    "id": "producta75"
  },
  {
    "product_name": "CARGO SWIM SHORTS",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/8574/309/401/2/w/448/8574309401_1_1_1.jpg?ts=1687346683692",
    "price": "₹ 2,590.00",
    "details": "Swimming trunks made of technical fabric with a velvety finish. Adjustable elasticated waist with drawstring. Contrast trim detail. Rear patch pocket. Patch pockets on the legs. Side vents at the hem. Lining.Length of inner leg seam: 13 cm. / 5.1″Length of outer leg seam: 37 cm. / 14.5″View more",
    "id": "producta76"
  },
  {
    "product_name": "SEERSUCKER SWIMMING TRUNKS",
    "image_url": "https://static.zara.net/photos///2023/V/0/2/p/8574/418/807/2/w/448/8574418807_6_1_1.jpg?ts=1678814850639",
    "price": "₹ 2,990.00",
    "details": "Swimming trunks made of technical fabric. Elasticated waistband. Front pockets and side zip pocket detail. Patch pocket at the back. Lining. Side vents at the hem. Zip fly and snap-button fastening.Length of inner leg seam: 18 cm. / 7.0″Length of outer leg seam: 38 cm. / 14.9″View more",
    "id": "producta77"
  },
  {
    "product_name": "SLOGAN PRINT SWIMMING TRUNKS",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/0495/308/605/2/w/448/0495308605_1_1_1.jpg?ts=1687347056786",
    "price": "₹ 2,590.00",
    "details": "Swimming trunks made of a technical fabric. Elasticated waistband and adjustable drawstring. Side pockets and a back patch pocket. Lining.Length of inner leg seam: 12 cm. / 4.7″Length of outer leg seam: 34 cm. / 13.3″View more",
    "id": "producta78"
  },
  {
    "product_name": "GEOMETRIC PRINT SWIMMING TRUNKS",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/2634/301/611/2/w/448/2634301611_1_1_1.jpg?ts=1687346681920",
    "price": "₹ 2,590.00",
    "details": "Swimming trunks made of a technical fabric. Adjustable elasticated waistband with drawstring. Front pockets and rear welt pocket detail. Lining.Length of inner leg seam: 12 cm. / 4.7″Length of outer leg seam: 33 cm. / 12.9″View more",
    "id": "producta79"
  },
  {
    "product_name": "GEOMETRIC PRINT SWIMMING TRUNKS",
    "image_url": "https://static.zara.net/photos///2023/V/0/2/p/8574/427/306/2/w/448/8574427306_1_1_1.jpg?ts=1680521189654",
    "price": "₹ 2,590.00",
    "details": "Swimming trunks made of technical fabric. Elasticated waistband and adjustable drawstrings. Side pockets and a back patch pocket. Lining. Side vents at the hem.Length of inner leg seam: 12 cm. / 4.7″Length of outer leg seam: 35 cm. / 13.7″View more",
    "id": "producta80"
  },
  {
    "product_name": "FISH PRINT SWIMMING TRUNKS",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/8574/328/626/2/w/448/8574328626_1_1_1.jpg?ts=1687346684393",
    "price": "₹ 2,590.00",
    "details": "Swimming trunks made of technical fabric. Adjustable elasticated waistband with drawstring. Side pockets and a back patch pocket. Lining.Length of inner leg seam: 12 cm. / 4.7″Length of outer leg seam: 33 cm. / 12.9″View more",
    "id": "producta81"
  },
  {
    "product_name": "LONG SWIMMING TRUNKS",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/8574/384/611/2/w/448/8574384611_1_1_1.jpg?ts=1689157210723",
    "price": "₹ 2,590.00",
    "details": "Swimming trunks made of a technical fabric. Adjustable elasticated waistband with drawstring. Front pockets and back zip pocket. Lining.Length of inner leg seam: 17 cm. / 6.6″Length of outer leg seam: 40 cm. / 15.7″View more",
    "id": "producta82"
  },
  {
    "product_name": "TIE-DYE PRINT SWIMMING TRUNKS",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/0495/320/555/2/w/448/0495320555_6_1_1.jpg?ts=1689162979201",
    "price": "₹ 2,590.00",
    "details": "Swimming trunks made of a technical fabric. Adjustable elasticated waistband. Side pockets and a rear patch pocket. Lining.Length of inner leg seam: 11 cm. / 4.3″Length of outer leg seam: 32 cm. / 12.5″View more",
    "id": "producta83"
  },
  {
    "product_name": "LONG TIE-DYE SWIMMING TRUNKS",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/8574/369/300/2/w/448/8574369300_6_1_1.jpg?ts=1689169420465",
    "price": "₹ 2,590.00",
    "details": "Swimming trunks made of technical fabric. Adjustable elasticated waistband. Front pockets and back zip pocket. Lining.Length of inner leg seam: 17 cm. / 6.6″Length of outer leg seam: 38 cm. / 14.9″View more",
    "id": "producta84"
  },
  {
    "product_name": "STRIPED TECHNICAL SWIMMING TRUNKS",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/8574/383/505/2/w/448/8574383505_1_1_1.jpg?ts=1689157410719",
    "price": "₹ 2,990.00",
    "details": "Swimming trunks made of a technical fabric. Adjustable elasticated waistband with side tabs. Front pockets and back patch pocket. Lining.Length of inner leg seam: 15 cm. / 5.9″Length of outer leg seam: 37 cm. / 14.5″View more",
    "id": "producta85"
  },
  {
    "product_name": "100% LINEN PAREO",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/9198/301/712/2/w/448/9198301712_6_1_1.jpg?ts=1690451086349",
    "price": "₹ 3,290.00",
    "details": "Lightweight pareo made of linen. Featuring a contrast stripe and frayed trims.Measurements: 100 x 200 cm. / 39.3 x 78.7″",
    "id": "producta86"
  },
  {
    "product_name": "GEOMETRIC JACQUARD BEACH TOWEL",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/1027/301/183/2/w/448/1027301183_6_1_1.jpg?ts=1688483860332",
    "price": "₹ 2,590.00",
    "details": "Beach towel made of terry cotton.Measurements: 91 x 180 cm / 35.8 x 70.8″",
    "id": "producta87"
  },
  {
    "product_name": "RECTANGULAR SUNGLASSES - LIMITED EDITION",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/2750/304/800/33/w/448/2750304800_1_1_1.jpg?ts=1692187656155",
    "price": "₹ 4,990.00",
    "details": "Sunglasses with a rectangular acetate frame. Case included.UV/UVA 400 protection. Category 1.",
    "id": "producta88"
  },
  {
    "product_name": "OVAL SUNGLASSES - LIMITED EDITION",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/2750/303/700/2/w/448/2750303700_1_1_1.jpg?ts=1689577315538",
    "price": "₹ 4,990.00",
    "details": "Sunglasses with an oval acetate frame. Case included.UV/UVA 400 protection. Category 1.",
    "id": "producta89"
  },
  {
    "product_name": "PREMIUM SQUARE SUNGLASSES",
    "image_url": "https://static.zara.net/photos///2022/I/0/2/p/2750/308/555/2/w/448/2750308555_1_1_1.jpg?ts=1658214603209",
    "price": "₹ 4,990.00",
    "details": "Sunglasses with a square tortoiseshell-effect acetate frame. Polarised lenses. Case included.UV/UVA 400 protection. Category 1.",
    "id": "producta90"
  },
  {
    "product_name": "PREMIUM SQUARE SUNGLASSES",
    "image_url": "https://static.zara.net/photos///2022/I/0/2/p/2750/307/732/2/w/448/2750307732_2_1_1.jpg?ts=1658214624486",
    "price": "₹ 4,990.00",
    "details": "Sunglasses with a square acetate frame. Polarised lenses. Case included.UV/UVA 400 protection. Category 1.",
    "id": "producta91"
  },
  {
    "product_name": "RECTANGULAR SUNGLASSES",
    "image_url": "https://static.zara.net/photos///2023/V/0/2/p/2750/422/700/202/w/489/2750422700_6_1_1.jpg?ts=1678959020747",
    "price": "₹ 5,990.00",
    "details": "Sunglasses with an acetate frame. Polarised lenses. Case included.UV/UVA 400 protection. Category 3.Origins special collection.View more",
    "id": "producta92"
  },
  {
    "product_name": "100% SILK TEXTURED TIE",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/5568/401/800/82/w/448/5568401800_2_5_1.jpg?ts=1689784687317",
    "price": "₹ 2,590.00",
    "details": "Wide tie made of textured silk fabric.",
    "id": "producta93"
  },
  {
    "product_name": "100% SILK WIDE TIE",
    "image_url": "https://static.zara.net/photos///2021/I/0/2/p/7347/380/800/2/w/448/7347380800_2_1_1.jpg?ts=1630050428039",
    "price": "₹ 1,990.00",
    "details": "Wide tie made of silk with diagonal texture.",
    "id": "producta94"
  },
  {
    "product_name": "100% SILK SKINNY TIE",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/7347/347/800/15/w/448/7347347800_2_4_1.jpg?ts=1689781607530",
    "price": "₹ 2,590.00",
    "details": "Skinny tie made of textured silk.",
    "id": "producta95"
  },
  {
    "product_name": "100% SILK TEXTURED TIE",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/9569/112/450/2/w/448/9569112450_6_1_1.jpg?ts=1685432142187",
    "price": "₹ 2,590.00",
    "details": "Wide tie made of silk fabric.",
    "id": "producta96"
  },
  {
    "product_name": "JACQUARD TIE WITH CYCLIST",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/2241/301/400/2/w/448/2241301400_6_1_1.jpg?ts=1692350271967",
    "price": "₹ 2,590.00",
    "details": "Wide tie made of a silk and cotton blend.",
    "id": "producta97"
  },
  {
    "product_name": "SILK - WOOL JACQUARD TIE",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/2241/302/401/2/w/448/2241302401_6_1_1.jpg?ts=1692350272001",
    "price": "₹ 2,590.00",
    "details": "Wide tie made of a silk and wool blend.",
    "id": "producta98"
  },
  {
    "product_name": "SILK OTTOMAN BOW TIE",
    "image_url": "https://static.zara.net/photos///2021/I/0/2/p/5213/502/800/2/w/448/5213502800_6_1_1.jpg?ts=1637143495324",
    "price": "₹ 1,590.00",
    "details": "Bow tie made of silk. Adjustable elastic with metal hook.",
    "id": "producta99"
  },
  {
    "product_name": "DENIM CAP",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/9065/316/807/82/w/448/9065316807_1_1_1.jpg?ts=1692259614857",
    "price": "₹ 1,890.00",
    "details": "Faded peak cap. Adjustable at the back.",
    "id": "producta100"
  },
  {
    "product_name": "SOFT CAP",
    "image_url": "https://static.zara.net/photos///2023/V/0/2/p/9065/300/712/2/w/448/9065300712_2_2_1.jpg?ts=1681397012740",
    "price": "₹ 1,590.00",
    "details": "Peak cap with an adjustable strap at the back.",
    "id": "producta101"
  },
  {
    "product_name": "FADED TEXTURED CAP",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/9065/319/806/2/w/448/9065319806_6_1_1.jpg?ts=1692008109598",
    "price": "₹ 1,890.00",
    "details": "Peak cap. Embroidered detail on the back. Adjustable drawstrings.",
    "id": "producta102"
  },
  {
    "product_name": "TEXTURED CAP",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/9065/321/639/2/w/448/9065321639_6_1_1.jpg?ts=1688713058835",
    "price": "₹ 1,890.00",
    "details": "Peak cap with an adjustable strap fastening in the back.",
    "id": "producta103"
  },
  {
    "product_name": "TEXTURED PEAK CAP",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/9065/313/712/2/w/448/9065313712_6_1_1.jpg?ts=1690470215596",
    "price": "₹ 1,590.00",
    "details": "Visor with an adjustable strap at the back.",
    "id": "producta104"
  },
  {
    "product_name": "CAP WITH CONTRAST PATCH",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/9065/513/600/22/w/448/9065513600_1_1_1.jpg?ts=1688394110056",
    "price": "₹ 1,890.00",
    "details": "Peak cap with a contrast patch detail on the front. Adjustable at the back.",
    "id": "producta105"
  },
  {
    "product_name": "CAP WITH CONTRAST EMBROIDERY",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/9065/302/700/2/w/448/9065302700_6_1_1.jpg?ts=1690371234507",
    "price": "₹ 1,890.00",
    "details": "Peak cap. Contrast embroidered detail on the front. Adjustable at the back.",
    "id": "producta106"
  },
  {
    "product_name": "CAP WITH EMBROIDERED SLOGAN",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/9065/317/500/2/w/448/9065317500_6_1_1.jpg?ts=1688713059825",
    "price": "₹ 1,890.00",
    "details": "Peak cap with a matching embroidery slogan on the front. Adjustable fastening at the back.",
    "id": "producta107"
  },
  {
    "product_name": "CAP WITH EMBROIDERED SLOGAN",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/9065/320/506/2/w/448/9065320506_6_1_1.jpg?ts=1688713669140",
    "price": "₹ 1,890.00",
    "details": "Peak cap with a contrast embroidery slogan on the front. Adjustable fastening at the back.",
    "id": "producta108"
  },
  {
    "product_name": "2-PACK OF STONE RINGS",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/1012/306/808/22/w/448/1012306808_1_1_1.jpg?ts=1688393920863",
    "price": "₹ 1,890.00",
    "details": "Pack of two metal rings with contrast stone. 925 MM silver-plated finish.Measurements:Size M: Circumference: 61 mm. // Diameter: 19.4 mm.Size L: Circumference: 63 mm. // Diameter: 20 mm.View more",
    "id": "producta109"
  },
  {
    "product_name": "SIGNET RING",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/8435/333/800/2/w/448/8435333800_6_1_1.jpg?ts=1692350270541",
    "price": "₹ 1,590.00",
    "details": "Metal signet ring. Aged finish.Measurements:Size M: Circumference: 61 mm. // Diameter: 19.4 mm.Size L: Circumference: 63 mm. // Diameter: 20 mm.View more",
    "id": "producta110"
  },
  {
    "product_name": "SIGNET RING",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/8435/311/910/2/w/448/8435311910_6_1_1.jpg?ts=1692272919598",
    "price": "₹ 1,590.00",
    "details": "Metal signet ring. Measurements:Size M: Circumference: 61 mm. // Diameter: 19.4 mm.Size L: Circumference: 63 mm. // Diameter: 20 mm.View more",
    "id": "producta111"
  },
  {
    "product_name": "BAND RING",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/8435/310/808/2/w/448/8435310808_6_1_1.jpg?ts=1689939256163",
    "price": "₹ 1,590.00",
    "details": "Metal ring. 925 MM silver-plated finish.Measurements:Size M: Circumference: 61 mm. // Diameter: 19.4 mm.Size L: Circumference: 63 mm. // Diameter: 20 mm.View more",
    "id": "producta112"
  },
  {
    "product_name": "CONTRAST SIGNET RING",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/1012/305/808/2/w/448/1012305808_6_1_1.jpg?ts=1692272919589",
    "price": "₹ 1,590.00",
    "details": "Metal contrast signet ring. 925 MM silver-plated finish.Measurements:Size M: Circumference: 61 mm. // Diameter: 19.4 mm.Size L: Circumference: 63 mm. // Diameter: 20 mm.View more",
    "id": "producta113"
  },
  {
    "product_name": "CHAIN WITH GEOMETRIC PENDANT",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/8435/329/808/2/w/448/8435329808_6_1_1.jpg?ts=1692350271137",
    "price": "₹ 1,990.00",
    "details": "Metal chain with matching geometric pendant. Lobster clasp fastening.Length: Medium.",
    "id": "producta114"
  },
  {
    "product_name": "METAL LINK CHAIN",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/8435/330/808/2/w/448/8435330808_6_1_1.jpg?ts=1692350271581",
    "price": "₹ 1,990.00",
    "details": "Chain comprising metal chain links. Bar closure.Length: Medium.",
    "id": "producta115"
  },
  {
    "product_name": "CHAIN PENDANT",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/1012/300/808/22/w/448/1012300808_1_1_1.jpg?ts=1688393776124",
    "price": "₹ 1,890.00",
    "details": "Metal chain with matching pendant detail. 925 MM silver-plated finish. Lobster clasp fastening.Length: Medium.",
    "id": "producta116"
  },
  {
    "product_name": "METAL LINK CHAIN",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/8435/305/910/2/w/448/8435305910_6_1_1.jpg?ts=1689941559216",
    "price": "₹ 1,990.00",
    "details": "Chain comprising metal chain links. Lobster clasp closure.Length: Medium.",
    "id": "producta117"
  },
  {
    "product_name": "METAL LINK CHAIN",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/8435/303/808/2/w/448/8435303808_6_1_1.jpg?ts=1689941559253",
    "price": "₹ 1,990.00",
    "details": "Chain comprising metal links with a 925 MM silver-plated finish. Lobster clasp fastening.Length: Medium.",
    "id": "producta118"
  },
  {
    "product_name": "CONTRAST CHAIN WITH PEARL BEADS",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/1012/301/808/2/w/448/1012301808_6_1_1.jpg?ts=1688111365684",
    "price": "₹ 1,990.00",
    "details": "Contrast metal chain with pearl beads. 925 MM silver-plated finish. Lobster clasp fastening.Length: Medium.",
    "id": "producta119"
  },
  {
    "product_name": "ENGRAVED CHAIN LINK BRACELET",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/8435/331/808/2/w/448/8435331808_6_1_1.jpg?ts=1692350271721",
    "price": "₹ 1,890.00",
    "details": "Bracelet comprising metal links with engraved slogan detail. Clasp fastening.",
    "id": "producta120"
  },
  {
    "product_name": "CHAIN LINK BRACELET",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/8435/306/808/2/w/448/8435306808_6_1_1.jpg?ts=1690447147351",
    "price": "₹ 1,890.00",
    "details": "Bracelet comprising metal links with a 925 MM silver-plated finish. Lobster clasp fastening.",
    "id": "producta121"
  },
  {
    "product_name": "BRACELET WITH METAL LINKS",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/8435/308/910/2/w/448/8435308910_6_1_1.jpg?ts=1689939256884",
    "price": "₹ 1,890.00",
    "details": "Bracelet with metal chain links. Lobster clasp closure.",
    "id": "producta122"
  },
  {
    "product_name": "IRREGULAR RIGID BRACELET",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/1012/304/808/2/w/448/1012304808_6_1_1.jpg?ts=1688111365318",
    "price": "₹ 1,890.00",
    "details": "Open metal bracelet. Irregular 925 MM silver-plated finish.",
    "id": "producta123"
  },
  {
    "product_name": "MINI NYLON MESSENGER BAG",
    "image_url": "https://static.zara.net/photos///2023/I/1/2/p/3902/220/032/2/w/448/3902220032_6_1_1.jpg?ts=1688726746043",
    "price": "₹ 1,590.00",
    "details": "Crossbody bag. Soft design. The main compartment is under the flap and fastens with a metal hook. Adjustable strap.Height x Length x Width: 16.5 x 11.5 x 3 cm. / 6.4 x 4.5 x 1.1″View more",
    "id": "producta124"
  },
  {
    "product_name": "MINI CROSSBODY BAG WITH FLAP",
    "image_url": "https://static.zara.net/photos///2023/I/1/2/p/3612/220/800/2/w/448/3612220800_2_1_1.jpg?ts=1692627350574",
    "price": "₹ 2,590.00",
    "details": "Crossbody bag. Soft construction. The main compartment has zip closure and the inside has a small pocket without closure. Front pocket with magnetic closure and flap. Adjustable and detachable shoulder strap.Height x Length x Width 19 x 11 x 6 cm. / 7.4 x 4.3 x 2.3″View more",
    "id": "producta125"
  },
  {
    "product_name": "BAG WITH MULTIPLE POCKETS",
    "image_url": "https://static.zara.net/photos///2023/I/1/2/p/3905/220/032/2/w/448/3905220032_6_1_1.jpg?ts=1688052334618",
    "price": "₹ 2,890.00",
    "details": "Handbag. Multiple detachable pockets on a central hoop. Main bag with zip closure. The inside has four small pockets without closures. Second small bucket bag with gathered drawstring closure. Third small bag that can be used as a purse or a case for headphones (compatible with AirPods® sizes). Adjustable shoulder strap.Main pocket: Length x height: 19 x 12 cm / 7.4 x 4.7″Bucket pocket: Length x height x width: 8 x 10 x 8 cm. / 3.1 x 3.9 x 3.1″Purse pocket: Height x Length: 7.5 x 7 cm / 2.9 x 2.7″View more",
    "id": "producta126"
  },
  {
    "product_name": "DENIM EARPHONE BAG",
    "image_url": "https://static.zara.net/photos///2023/I/1/2/p/3907/220/400/2/w/448/3907220400_6_1_1.jpg?ts=1688127031862",
    "price": "₹ 1,590.00",
    "details": "Earphone bag made of denim. Zip closure. Adjustable and detachable cord.Height x Length x Width 8 x 8 x 2.5 cm. / 3.1 x 3.1 x 0.9″",
    "id": "producta127"
  },
  {
    "product_name": "NYLON MULTI-POCKET BAG",
    "image_url": "https://static.zara.net/photos///2023/V/1/2/p/3908/120/800/2/w/448/3908120800_2_1_1.jpg?ts=1683289816763",
    "price": "₹ 2,890.00",
    "details": "Handbag. Multiple detachable pockets on a central hoop. Main bag with zip closure. The inside has four small pockets without closures. Second small bucket bag with gathered drawstring closure. Third small bag that can be used as a purse or a case for headphones (compatible with AirPods® sizes). Adjustable shoulder strap.Main pocket: Length x height: 19 x 12 cm / 7.4 x 4.7″Bucket pocket: Length x height x width: 8 x 10 x 8 cm / 3.1 x 3.9 x 3.1″Purse pocket: Height x Length: 7.5 x 7 cm / 2.9 x 2.7″View more",
    "id": "producta128"
  },
  {
    "product_name": "HOOP EARRINGS",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/8435/334/808/2/w/448/8435334808_6_1_1.jpg?ts=1692350270627",
    "price": "₹ 1,590.00",
    "details": "Metal earrings. Push-back closure.",
    "id": "producta129"
  },
  {
    "product_name": "IRREGULAR EARRINGS",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/1012/307/800/2/w/448/1012307800_6_1_1.jpg?ts=1688111365866",
    "price": "₹ 1,590.00",
    "details": "Earrings with an irregular finish. Push-back fastening.",
    "id": "producta130"
  },
  {
    "product_name": "EARRINGS",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/8435/312/808/2/w/448/8435312808_6_1_1.jpg?ts=1689939257107",
    "price": "₹ 1,590.00",
    "details": "Metal earrings. 925 MM silver-plated finish. Push-back clasps.",
    "id": "producta131"
  },
  {
    "product_name": "BUCKET HAT",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/9065/301/527/22/w/448/9065301527_2_4_1.jpg?ts=1688394236782",
    "price": "₹ 1,990.00",
    "details": "Hat made of cotton fabric. Wide brim with topstitching detail. Frayed trim. Faded effect.",
    "id": "producta132"
  },
  {
    "product_name": "UTILITY HAT",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/3920/314/727/2/w/448/3920314727_6_1_1.jpg?ts=1689162978248",
    "price": "₹ 2,290.00",
    "details": "Wide-brimmed hat with topstitching detail. Zip pocket. Adjustable drawstring.",
    "id": "producta133"
  },
  {
    "product_name": "STRIPED CROCHET HAT",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/3920/362/712/2/w/448/3920362712_6_1_1.jpg?ts=1690902092632",
    "price": "₹ 2,590.00",
    "details": "Hat made of spun cotton fabric.",
    "id": "producta134"
  },
  {
    "product_name": "WOVEN BUCKET HAT",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/3920/343/746/2/w/448/3920343746_6_1_1.jpg?ts=1689260306578",
    "price": "₹ 2,590.00",
    "details": "Woven hat with an open texture.",
    "id": "producta135"
  },
  {
    "product_name": "CONTRAST CROCHET HAT",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/3920/344/800/2/w/448/3920344800_6_1_1.jpg?ts=1688483860408",
    "price": "₹ 2,590.00",
    "details": "Hat made of spun cotton thread. Contrast topstitching on the brim.",
    "id": "producta136"
  },
  {
    "product_name": "TEXTURED BUCKET HAT",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/9065/303/800/83/w/448/9065303800_2_4_1.jpg?ts=1689168830471",
    "price": "₹ 1,990.00",
    "details": "Hat made of textured ripstop fabric that is resistant to tearing. Wide brim with topstitching detail.",
    "id": "producta137"
  },
  {
    "product_name": "BUCKET HAT WITH CONTRAST TOPSTITCHING",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/9065/323/712/2/w/448/9065323712_6_1_1.jpg?ts=1689162981770",
    "price": "₹ 2,290.00",
    "details": "Hat made of cotton fabric. Wide brim with contrast topstitching detail and frayed trim.",
    "id": "producta138"
  },
  {
    "product_name": "TEXTURED BUCKET HAT",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/9065/311/506/2/w/448/9065311506_6_1_1.jpg?ts=1689162981491",
    "price": "₹ 1,990.00",
    "details": "Hat made of cotton fabric. Brim with topstitching detail. Faded effect.",
    "id": "producta139"
  },
  {
    "product_name": "DENIM BUCKET HAT",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/9065/314/807/2/w/448/9065314807_6_1_1.jpg?ts=1690445057547",
    "price": "₹ 1,990.00",
    "details": "Hat made of denim fabric. Faded effect.",
    "id": "producta140"
  },
  {
    "product_name": "BUCKET HAT",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/9065/318/629/2/w/448/9065318629_6_1_1.jpg?ts=1690902033189",
    "price": "₹ 1,990.00",
    "details": "Hat made of cotton fabric. Wide brim with topstitching detail. Faded effect.",
    "id": "producta141"
  },
  {
    "product_name": "SHORT BEANIE",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/9065/512/506/2/w/448/9065512506_6_1_1.jpg?ts=1692028180826",
    "price": "₹ 1,890.00",
    "details": "Adjustable hat made of textured rip-stop fabric that is resistant to tearing. Turn-up brim.",
    "id": "producta142"
  },
  {
    "product_name": "TEXTURED COTTON FLAT CAP",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/9065/324/505/2/w/448/9065324505_6_1_1.jpg?ts=1691136843305",
    "price": "₹ 1,990.00",
    "details": "Flat cap with visor. Adjustable elastic.",
    "id": "producta143"
  },
  {
    "product_name": "TIE-DYE PRINT BANDANA",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/1271/317/555/2/w/448/1271317555_6_1_1.jpg?ts=1690187825500",
    "price": "₹ 990.00",
    "details": "Bandana made of cotton.Measurements: 60 x 60 cm. / 23.6 x 23.6″",
    "id": "producta144"
  },
  {
    "product_name": "GEOMETRIC EMBROIDERY BANDANA",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/1271/306/800/2/w/448/1271306800_6_1_1.jpg?ts=1689259126539",
    "price": "₹ 990.00",
    "details": "Bandana made of cotton. Contrast embroidery.Measurements: 60 x 60 cm. / 23.6 x 23.6″",
    "id": "producta145"
  },
  {
    "product_name": "ABSTRACT PRINT BANDANA",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/1271/302/555/2/w/448/1271302555_6_1_1.jpg?ts=1690187824717",
    "price": "₹ 990.00",
    "details": "Bandana made of cotton. Measurements: 60 x 60 cm. / 23.6 x 23.6″",
    "id": "producta146"
  },
  {
    "product_name": "PAISLEY PRINT BANDANNA",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/1271/311/712/2/w/448/1271311712_6_1_1.jpg?ts=1690371232347",
    "price": "₹ 990.00",
    "details": "Bandana made of cotton.Measurements: 60 x 60 cm / 23.6 x 23.6″",
    "id": "producta147"
  },
  {
    "product_name": "MULTI-POCKET BACKPACK",
    "image_url": "https://static.zara.net/photos///2023/I/1/2/p/3217/220/107/2/w/448/3217220107_2_1_1.jpg?ts=1692627350123",
    "price": "₹ 5,590.00",
    "details": "Multi-pocket backpack made of technical fabric. Featuring three main compartments in the same size, all with zip closure and a common clip buckle. The inside features a pocket for electronic devices of up to 13 inches and a zip pocket. Features two small front zip pockets. Top handle and two adjustable shoulder straps. Quilted back for improved comfort during use.Height x Length x Width 45 x 32 x 18 cm.View more",
    "id": "producta148"
  },
  {
    "product_name": "EXPLORER BACKPACK",
    "image_url": "https://static.zara.net/photos///2023/I/1/2/p/3229/220/032/2/w/448/3229220032_6_1_1.jpg?ts=1691048326548",
    "price": "₹ 4,990.00",
    "details": "Multi-pocket explorer backpack. Technical fabric. The main compartment fastens with a flap, gathering and a clip buckle. The flap has a small zip pocket. The inside has a pocket without closure for electronic devices of up to 13 inches. Medium side pockets with no fastening. Small front flap pocket with zip closure. Top handle and two adjustable shoulder straps.Height x Length x Width 43 x 30 x 15 cm.View more",
    "id": "producta149"
  },
  {
    "product_name": "MONOCHROME NYLON BACKPACK",
    "image_url": "https://static.zara.net/photos///2023/I/1/2/p/3228/220/800/2/w/448/3228220800_6_1_1.jpg?ts=1692803282506",
    "price": "₹ 4,990.00",
    "details": "Explorer backpack. The main compartment has a gathered drawstring closure and a flap with two clip buckles. The inside has a pocket without closure for electronic devices of up to 13 inches. Features a small zip pocket on the front. Top handle and two adjustable shoulder straps.Height x Length x Width: 40 x 29 x 19 cm.View more",
    "id": "producta150"
  },
  {
    "product_name": "SLIM RUBBERISED BACKPACK",
    "image_url": "https://static.zara.net/photos///2023/I/1/2/p/3227/220/800/2/w/448/3227220800_2_1_1.jpg?ts=1691062145773",
    "price": "₹ 3,990.00",
    "details": "Backpack with a rubberised finish. Plain exterior. The main compartment closes with a zip and its interior has two pockets, one of which is large for electronic devices of up to 13 inches and another medium pocket with zip closure. On the front there is a medium pocket with zip closure. The back is padded and has fastening to attach it to luggage. It has one handle and two adjustable padded shoulder straps. Height x Length x Width 42 x 29 x 11 cm.View more",
    "id": "producta151"
  },
  {
    "product_name": "SPORTS BACKPACK",
    "image_url": "https://static.zara.net/photos///2023/I/1/2/p/3239/220/400/2/w/448/3239220400_1_1_1.jpg?ts=1691052738259",
    "price": "₹ 4,990.00",
    "details": "Multi-pocket backpack. Combination of materials and colours on the exterior. The main compartment fastens with a zip and features an inside pocket without closure for electronic devices of up to 13 inches. On the front it has a flat pocket with zip closure. Adjustable mesh pockets on the sides. Top handle and two adjustable shoulder straps with zip pockets. Ergonomic padded back for improved comfort during use. Adjustable chest strap with clip buckle fastening. Height x Length x Width: 39 x 26 x 13 cm.View more",
    "id": "producta152"
  },
  {
    "product_name": "SPORTS BACKPACK",
    "image_url": "https://static.zara.net/photos///2023/I/1/2/p/3210/220/700/2/3210220700_16_1_1/w/448/poster.jpg?ts=1689664622831",
    "price": "₹ 4,590.00",
    "details": "Multi-pocket backpack. Combination of materials and colours on the upper. The main compartment has two zip fastenings at different heights (the top access to the pocket is adjustable on each side thanks to two technical fasteners). Two adjustable mesh pockets on the sides. Top handle and two adjustable shoulder straps. Ergonomic padded back for improved comfort during use. Adjustable strap to the chest with clip buckle fastening.Height x Length x Width 45 x 32 x 17 cm. / 17.7 x 12.5 x 6.6″ATHLETICZ Collection.View more",
    "id": "producta153"
  },
  {
    "product_name": "ROLLTOP SPORTS BACKPACK",
    "image_url": "https://static.zara.net/photos///2023/I/1/2/p/3240/220/800/2/w/448/3240220800_6_1_1.jpg?ts=1692268022274",
    "price": "₹ 4,990.00",
    "details": "Multi-pocket backpack. Combination of materials on the exterior. The main compartment fastens with a zip and rolls up with clip buckles on both sides. It also opens from the front with a zip closure. Two small front pockets with thermo-sealed zip fastening. Featuring two adjustable mesh pockets on the sides. Top handle and two adjustable, breathable shoulder straps. Each compartment has a thermo-sealed zip closure. Ergonomic padded back for improved comfort during use. Adjustable chest with clip buckle fastening.Height x Length x Width 44 x 27 x 14 cm. / 17.3 x 10.6 x 5.5″View more",
    "id": "producta154"
  },
  {
    "product_name": "TECHNICAL BACKPACK",
    "image_url": "https://static.zara.net/photos///2023/I/1/2/p/3241/220/802/2/w/448/3241220802_6_1_1.jpg?ts=1692887333245",
    "price": "₹ 4,990.00",
    "details": "Multi-pocket backpack. The main compartment has zip closure and its interior has three small pockets with zip closure. Featuring two large front pockets, one with zip and the other with adjustable fastening. Side pockets with adjustable fastening. Top handle and two adjustable shoulder straps. Ergonomic padded back for improved comfort during use. Adjustable strap on the chest with clip buckle fastening.Height x Length x Width 44 x 27 x 17 cm. / 17.3 x 10.6 x 6.6″View more",
    "id": "producta155"
  },
  {
    "product_name": "NYLON TOILETRY BAG",
    "image_url": "https://static.zara.net/photos///2023/I/1/2/p/3714/220/800/612/w/448/3714220800_6_1_1.jpg?ts=1692352453966",
    "price": "₹ 2,590.00",
    "details": "Toiletry bag. Combination of materials on the upper. Main compartment with zip closure. Six small pockets on the inside without fastening. Side pockets with technical clasp fastening. Two handles on each side in different sizes.Height x Length x Width: 13.5 x 25 x 14 cm. / 5.3 x 9.8 x 5.5″View more",
    "id": "producta156"
  },
  {
    "product_name": "NYLON BELT BAG",
    "image_url": "https://static.zara.net/photos///2023/I/1/2/p/3640/220/202/612/w/448/3640220202_6_1_1.jpg?ts=1692352453916",
    "price": "₹ 2,590.00",
    "details": "Soft belt bag. Technical fabric upper. Main compartment with zip closure. Front pocket with technical clasp. Adjustable handle with clip buckle. Height x Length: 18.5 x 37 cm. / 7.2 x 14.5″View more",
    "id": "producta157"
  },
  {
    "product_name": "ATHLETICZ SPORTS BELT BAG",
    "image_url": "https://static.zara.net/photos///2023/V/1/2/p/3613/120/032/2/w/448/3613120032_2_1_1.jpg?ts=1679500863401",
    "price": "₹ 1,990.00",
    "details": "Sports belt bag with a combination of materials on the exterior. The pocket has zip closure. The front has a reflective detail. The back part is made of elastic mesh that allows you to touch the screen without removing the device. The strap is elastic and adjustable with a technical clip buckle.Height x Length x Width 6 x 20 x 5 cm. / 2.3 x 7.8 x 1.9″View more",
    "id": "producta158"
  },
  {
    "product_name": "XL RUBBERISED CROSSBODY WALLET",
    "image_url": "https://static.zara.net/photos///2023/I/1/2/p/3816/220/800/2/w/448/3816220800_2_1_1.jpg?ts=1692627350747",
    "price": "₹ 2,590.00",
    "details": "XL wallet with a rubberised finish. Plain exterior. Main compartment with zip closure. The inside features four compartments. Zip pocket. Several slots for cards and banknotes. Small pocket on the front with zip closure. Adjustable and detachable shoulder strap.Height x Length: 12 x 22.5 cm. / 4.7 x 8.8″View more",
    "id": "producta159"
  },
  {
    "product_name": "MINI TIE-DYE TOTE BAG",
    "image_url": "https://static.zara.net/photos///2023/I/1/2/p/3635/220/800/2/w/448/3635220800_6_1_1.jpg?ts=1692706013577",
    "price": "₹ 2,890.00",
    "details": "Mini tote bag. Rigid exterior. One pocket with magnetic closure. Two handles and an adjustable and detachable shoulder strap.Height x Length x Width 18 x 15 x 6 cm. / 7.0 x 5.9 x 2.3″View more",
    "id": "producta160"
  },
  {
    "product_name": "RUBBERISED CROSSBODY BAG",
    "image_url": "https://static.zara.net/photos///2023/I/1/2/p/3530/120/097/2/w/448/3530120097_2_1_1.jpg?ts=1684753831877",
    "price": "₹ 2,990.00",
    "details": "Crossbody bag. Semi-rigid exterior. Rubberised finish with embossing. The main compartment fastens with a flap and double magnetic closure. The interior features two main compartments, one without closure with a small zip pocket and the other with zip closure. Matching adjustable shoulder strap.Length x Height x Width: 19 x 12 x 7 cm. / 7.4 x 4.7 x 2.7″View more",
    "id": "producta161"
  },
  {
    "product_name": "MULTIFUNCTIONAL BRIEFCASE",
    "image_url": "https://static.zara.net/photos///2023/I/1/2/p/3404/220/800/2/w/448/3404220800_2_1_1.jpg?ts=1691754036893",
    "price": "₹ 7,590.00",
    "details": "Monochrome briefcase with a rubberised finish. The main compartment with zip closure is suitable for electronic devices and laptops of up to 13 inches. Its interior features several pockets in different sizes and one large pocket with zip closure. On the front it has a small flat pocket with push-back fastening. Two zip pockets at the back. Handle and two adjustable padded shoulder straps so it can be used as a backpack. Height x Length x Width 31 x 43 x 16 cm.View more",
    "id": "producta162"
  },
  {
    "product_name": "RUBBERISED MINI BOWLING BAG",
    "image_url": "https://static.zara.net/photos///2023/I/1/2/p/3109/220/800/2/w/448/3109220800_6_1_1.jpg?ts=1689335429340",
    "price": "₹ 2,890.00",
    "details": "Bowling bag. Rubberised finish. The main compartment fastens with a zip and its interior has a small zip pocket. Small zip pocket at the front. Features two handles and one adjustable and detachable shoulder strap.Height x Length x Width 12 x 26 x 12 cm. / 4.7 x 10.2 x 4.7″View more",
    "id": "producta163"
  },
  {
    "product_name": "RUBBERISED BOWLING BAG",
    "image_url": "https://static.zara.net/photos///2023/I/1/2/p/3120/121/107/2/w/448/3120121107_2_1_1.jpg?ts=1684764005146",
    "price": "₹ 5,990.00",
    "details": "Bowling bag. Plain upper. The main compartment has zip closure and its interior has two pockets without closure and one zip pocket. Medium pocket with push-back fastening at the front and no fastening on one side. Featuring two handles and an adjustable and detachable shoulder strap. Height x Length x Width 30 x 47 x 31 cm. / 11.8 x 18.5 x 12.2″View more",
    "id": "producta164"
  },
  {
    "product_name": "RUBBERISED BOWLING BAG",
    "image_url": "https://static.zara.net/photos///2023/V/1/2/p/3120/120/800/2/w/448/3120120800_2_1_1.jpg?ts=1677583242129",
    "price": "₹ 5,990.00",
    "details": "Bowling bag made of technical rubberised fabric. Main compartment with zip closure and the inside has two pockets without closure and a zip pocket. Snap-button pocket on the front. Pocket on one side and a strap on the other. Two handles and an adjustable and detachable shoulder strap.Height x Length x Width 12 x 49 x 25 cm. / 4.7 x 19.2 x 9.8″View more",
    "id": "producta165"
  },
  {
    "product_name": "RUBBERISED MINI CROSSBODY BAG WITH FLAP",
    "image_url": "https://static.zara.net/photos///2023/I/1/2/p/3636/220/500/2/w/448/3636220500_2_1_1.jpg?ts=1691487479659",
    "price": "₹ 2,890.00",
    "details": "Crossbody bag with a rubberised finish. Main compartment with zip closure. Small inner pocket with zip closure. Front pocket with magnetic clasp closure and a flap. Back pocket with snap-button fastening. Adjustable shoulder strap. Height x Length x Width 11 x 18 x 7 cm. / 4.3 x 7.0 x 2.7″View more",
    "id": "producta166"
  },
  {
    "product_name": "XL CROSSBODY WALLET",
    "image_url": "https://static.zara.net/photos///2023/I/1/2/p/3605/221/500/2/w/448/3605221500_6_1_1.jpg?ts=1690450142294",
    "price": "₹ 2,890.00",
    "details": "XL crossbody wallet. Plain upper. Main compartment with zip closure. Featuring six inner compartments. Two zip pockets. Several card slots and notes. Front pocket with hidden magnetic clasp closure. Back pocket with snap button fastening. Adjustable shoulder strap.Height x Length x Width 13,5 x 22 x 6 cm. / 5.3 x 8.6 x 2.3″View more",
    "id": "producta167"
  },
  {
    "product_name": "CONTRAST LEATHER TOTE BAG",
    "image_url": "https://static.zara.net/photos///2023/I/1/1/p/3345/220/002/2/w/448/3345220002_2_1_1.jpg?ts=1692193323931",
    "price": "₹ 11,990.00",
    "details": "Tote bag. Soft construction. Combination of leather and fabric on the upper. Main pocket with zip closure. Its interior features a small pocket without closure. Two handles and a longer shoulder strap.Height x Length x Width 30,5 x 58 x 28 cm. / 12.0 x 22.8 x 11.0″View more",
    "id": "producta168"
  },
  {
    "product_name": "CANVAS TOTE BAG",
    "image_url": "https://static.zara.net/photos///2023/I/1/2/p/3329/220/052/2/w/448/3329220052_2_1_1.jpg?ts=1689941745016",
    "price": "₹ 3,290.00",
    "details": "Tote bag. Soft design. Main pocket with no closure. Its interior has a small pocket with zip closure. Its front has a pocket with a push-back closure. Two handles and a longer shoulder strap.Height x Length x Width: 38 x 57 x 23 cm. / 14.9 x 22.4 x 9.0″View more",
    "id": "producta169"
  },
  {
    "product_name": "BACKPACK WITH GATHERED DETAIL",
    "image_url": "https://static.zara.net/photos///2023/I/1/2/p/3233/220/800/2/w/448/3233220800_2_1_1.jpg?ts=1691062145204",
    "price": "₹ 2,890.00",
    "details": "Bag-style backpack. Soft construction. Main compartment with gathered drawstring closure and inside zip pocket. Front medium-sized compartment with zip closure. Two handles and two adjustable rope shoulder straps. Height x Length x Width: 43 x 32 x 3 cm. / 16.9 x 12.5 x 1.1″View more",
    "id": "producta170"
  },
  {
    "product_name": "L HAND HELD TOTE BAG",
    "image_url": "https://static.zara.net/photos///2023/I/1/2/p/3306/220/800/2/w/448/3306220800_2_1_1.jpg?ts=1686306555948",
    "price": "₹ 2,990.00",
    "details": "Semi-rigid tote bag. Main pocket with a magnetic closure. Its interior has a pocket with no closure. Features two rigid handles.Height x Length x Width 33 x 26 x 1 cm. / 12.9 x 10.2 x 0.3″View more",
    "id": "producta171"
  },
  {
    "product_name": "MINI MINIMALIST TOTE BAG",
    "image_url": "https://static.zara.net/photos///2023/I/1/2/p/3633/220/800/2/w/448/3633220800_6_1_1.jpg?ts=1691073818622",
    "price": "₹ 2,890.00",
    "details": "Mini tote bag. Semi-rigid exterior. Main pocket with magnetic closure. Two handles and an adjustable and detachable shoulder strap.Height x Length x Width: 18.5 x 15 x 6.5 cm. / 7.2 x 5.9 x 2.5″View more",
    "id": "producta172"
  },
  {
    "product_name": "M HAND HELD TOTE BAG",
    "image_url": "https://static.zara.net/photos///2023/I/1/2/p/3331/220/800/2/w/448/3331220800_6_1_1.jpg?ts=1692282820282",
    "price": "₹ 3,290.00",
    "details": "Semi-rigid tote bag. Main pocket with a magnetic closure. Its interior has a pocket with no closure. Features two rigid handles.Height x Length x Width 18 x 14,5 x 6,5 cm. / 7.0 x 5.7 x 2.5″View more",
    "id": "producta173"
  },
  {
    "product_name": "DETACHABLE CROSSBODY BAG",
    "image_url": "https://static.zara.net/photos///2023/I/1/1/p/3510/220/800/3/w/448/3510220800_2_1_1.jpg?ts=1692609559453",
    "price": "₹ 3,290.00",
    "details": "Crossbody accessory. Soft design. Three detachable and interchangeable compartments with a hidden magnetic closure: the largest with three card slots on the inside. Belt-style buckle fastening.",
    "id": "producta174"
  },
  {
    "product_name": "MINI CROSSBODY BAG WITH FLAP",
    "image_url": "https://static.zara.net/photos///2023/I/1/2/p/3612/220/800/2/w/448/3612220800_2_1_1.jpg?ts=1692627350574",
    "price": "₹ 2,590.00",
    "details": "Crossbody bag. Soft construction. The main compartment has zip closure and the inside has a small pocket without closure. Front pocket with magnetic closure and flap. Adjustable and detachable shoulder strap.Height x Length x Width 19 x 11 x 6 cm. / 7.4 x 4.3 x 2.3″View more",
    "id": "producta175"
  },
  {
    "product_name": "SLIM EMBOSSED CLUTCH",
    "image_url": "https://static.zara.net/photos///2023/I/1/2/p/3705/220/800/2/w/448/3705220800_2_1_1.jpg?ts=1687947344954",
    "price": "₹ 2,590.00",
    "details": "Clutch bag. Main compartment with zip closure. Small inside pocket with zip closure. Medium-sized front pocket with magnetic clasp and flap. Matching handle. Height x Length: 19.5 x 30 cm. / 7.6 x 11.8″View more",
    "id": "producta176"
  },
  {
    "product_name": "RIGID MINAUDIÈRE MINI CROSSBODY BAG",
    "image_url": "https://static.zara.net/photos///2023/I/1/2/p/3629/220/800/2/w/448/3629220800_2_1_1.jpg?ts=1687947291300",
    "price": "₹ 2,890.00",
    "details": "Rectangular rigid crossbody bag. Plain exterior. The main compartment has metallic closure and its interior has a flat pocket. Adjustable and detachable shoulder strap and handle. Height x Length x Width: 17 x 18 x 7 cm. / 6.6 x 7.0 x 2.7″View more",
    "id": "producta177"
  },
  {
    "product_name": "BACKPACK WITH FOLDOVER FLAP",
    "image_url": "https://static.zara.net/photos///2023/I/1/2/p/3200/220/120/2/w/448/3200220120_2_2_1.jpg?ts=1686306556637",
    "price": "₹ 4,590.00",
    "details": "Monochrome backpack. Embossed exterior. The main compartment has zip closure and its interior has a large pocket without closure. Medium pocket on the front with hidden magnetic clasp closure. The back and base are padded. Top handle and two adjustable padded shoulder straps.Height x Length x Width: 44 x 34 x 18 cm. / 17.3 x 13.3 x 7.0″View more",
    "id": "producta178"
  },
  {
    "product_name": "RUBBERISED EXPLORER BACKPACK",
    "image_url": "https://static.zara.net/photos///2023/I/1/2/p/3221/220/800/2/w/448/3221220800_6_1_1.jpg?ts=1692023928866",
    "price": "₹ 5,590.00",
    "details": "Multi-pocket explorer backpack. Rubberised finish. The main compartment fastens with a foldover flap, gathered detail and clip buckle. The inside has a zip pocket. Featuring two front zip pockets. Top handle and two adjustable padded shoulder straps.Height x Length x Width 38 x 28 x 16 cm. / 14.9 x 11.0 x 6.2″View more",
    "id": "producta179"
  },
  {
    "product_name": "TOILETRY BAG WITH TOPSTITCHING",
    "image_url": "https://static.zara.net/photos///2023/I/1/2/p/3701/220/800/2/w/448/3701220800_6_1_1.jpg?ts=1687935488408",
    "price": "₹ 2,590.00",
    "details": "Toiletry bag. Soft construction. The main compartment has zip closure with a small flap. The inside has a small pocket without closure. Front pocket with zip closure with a small flap. Features a handle on the side.Height x Length x Width 13 x 25 x 9,5 cm. / 5.1 x 9.8 x 3.7″View more",
    "id": "producta180"
  },
  {
    "product_name": "CONTRAST RUBBERISED TOILETRY BAG",
    "image_url": "https://static.zara.net/photos///2023/I/1/2/p/3703/220/203/2/w/448/3703220203_6_1_1.jpg?ts=1691684458750",
    "price": "₹ 2,590.00",
    "details": "Toiletry bag. Rubberised finish. The main compartment has a zip closure. The inside has a small flat pocket with no closure. The front and back has a pocket with zip closure. Features a handle on one side.Height x Length x Width: 13 x 26 x 11 cm. / 5.1 x 10.2 x 4.3″View more",
    "id": "producta181"
  },
  {
    "product_name": "RUBBERISED TOILETRY BAG",
    "image_url": "https://static.zara.net/photos///2023/I/1/2/p/3706/220/800/2/w/448/3706220800_6_1_1.jpg?ts=1690975610624",
    "price": "₹ 2,890.00",
    "details": "Toiletry bag. Rubberised finish. The main compartment has zip closure. The inside has a zip pocket. Front pocket with zip closure and a small flap. Features a handle on the side.Height x Length x Width 15 x 22 x 12 cm. / 5.9 x 8.6 x 4.7″View more",
    "id": "producta182"
  },
  {
    "product_name": "LEATHER TOILETRY BAG",
    "image_url": "https://static.zara.net/photos///2023/I/1/2/p/3702/120/700/2/w/448/3702120700_2_1_1.jpg?ts=1686306556669",
    "price": "₹ 2,990.00",
    "details": "Leather toiletry bag. The main compartment fastens with a zip. The inside has a pocket. Handle on one side.Height x Length x Width 12 x 23 x 11 cm. / 4.7 x 9.0 x 4.3″View more",
    "id": "producta183"
  },
  {
    "product_name": "EMBOSSED BOWLING BAG",
    "image_url": "https://static.zara.net/photos///2023/V/1/2/p/3127/120/800/2/w/448/3127120800_2_1_1.jpg?ts=1681996102664",
    "price": "₹ 4,590.00",
    "details": "Bowling bag with a soft design. Technical fabric. Main compartment with zip closure and the inside has two pockets, one with no closure and the other with zip closure. Small pocket on the front with hook-and-loop fastening. Two handles and an adjustable and detachable shoulder strap.Height x Length x Width 25 x 58 x 22 cm. / 9.8 x 22.8 x 8.6″View more",
    "id": "producta184"
  },
  {
    "product_name": "LIGHTWEIGHT TECHNICAL BOWLING BAG",
    "image_url": "https://static.zara.net/photos///2023/I/1/2/p/3114/220/032/2/w/448/3114220032_6_1_1.jpg?ts=1692266207287",
    "price": "₹ 4,990.00",
    "details": "Bowling bag with a soft design. Technical fabric. Main compartment with zip closure and a flap with a hidden magnetic clasp and the inside has a pocket without closure. On the front, there is a pocket with a hidden magnet closure. Two handles and an adjustable and detachable shoulder strap.Height x Length x Width 30 x 45 x 23 cm. / 11.8 x 17.7 x 9.0″View more",
    "id": "producta185"
  },
  {
    "product_name": "CANVAS EXPLORER BACKPACK",
    "image_url": "https://static.zara.net/photos///2023/I/1/2/p/3231/220/704/2/w/448/3231220704_6_1_1.jpg?ts=1690882062991",
    "price": "₹ 4,990.00",
    "details": "Backpack. Canvas exterior. The main compartment has a gathered drawstring closure and a flap with two snap buttons. The inside has a pocket without closure for electronic devices of up to 13 inches. Medium side pockets with flaps and snap-button fastening. Features a small pocket on the front that fastens with a hook-and-loop strap. Top handle and two adjustable shoulder straps.Height x Length x Width 40 x 29 x 19 cm.View more",
    "id": "producta186"
  },
  {
    "product_name": "CONTRAST CANVAS TOTE BAG",
    "image_url": "https://static.zara.net/photos///2023/I/1/2/p/3333/220/800/2/w/448/3333220800_6_1_1.jpg?ts=1690967484077",
    "price": "₹ 4,990.00",
    "details": "Tote bag. Main compartment with snap-button fastening. Four inside pockets, one of which fastens with a zip. Featuring two front pockets with two snap buttons. Featuring two handles and a detachable and adjustable shoulder strap. Height x Length x Width: 42 x 36 x 12 cm. / 16.5 x 14.1 x 4.7″View more",
    "id": "producta187"
  },
  {
    "product_name": "MONOCHROME FORMAL BOWLING BAG",
    "image_url": "https://static.zara.net/photos///2023/I/1/2/p/3100/123/700/2/w/448/3100123700_2_1_1.jpg?ts=1684313564423",
    "price": "₹ 5,990.00",
    "details": "Bowling bag. Soft design. The main compartment closes with a zip and its interior has four pockets, three of them without closure. Has two handles and one adjustable and detachable shoulder strap.Height x Length x Width 33 x 47 x 24 cm. / 12.9 x 18.5 x 9.4″View more",
    "id": "producta188"
  },
  {
    "product_name": "EMBOSSED BOWLING BAG",
    "image_url": "https://static.zara.net/photos///2023/I/1/2/p/3100/220/800/2/w/448/3100220800_6_1_1.jpg?ts=1689852154195",
    "price": "₹ 4,590.00",
    "details": "Bowling bag. Soft design. Embossing on the exterior. The main compartment closes with a zip and its interior has a pocket with a zip closure. Includes two handles and one adjustable and detachable shoulder strap.Height x Length x Width 46 x 30 x 20 cm. / 18.1 x 11.8 x 7.8″View more",
    "id": "producta189"
  },
  {
    "product_name": "SOFT FORMAL BOWLING BAG",
    "image_url": "https://static.zara.net/photos///2023/I/1/2/p/3111/220/800/2/w/448/3111220800_6_1_1.jpg?ts=1688564995497",
    "price": "₹ 5,990.00",
    "details": "Bowling bag. Soft design. The main compartment closes with a zip and it has four small inner pockets, three of them open. Two handles and an adjustable and detachable shoulder strap.Height x Length x Width 30 x 47 x 19 cm. / 11.8 x 18.5 x 7.4″View more",
    "id": "producta190"
  },
  {
    "product_name": "EMBOSSED BOWLING BAG",
    "image_url": "https://static.zara.net/photos///2023/I/1/2/p/3111/221/500/2/w/448/3111221500_6_1_1.jpg?ts=1692714934685",
    "price": "₹ 5,990.00",
    "details": "Bowling bag. Soft design. Embossing on the exterior. The main compartment closes with a zip and its interior has two pockets, one with no closure and the other with a zip closure. Includes two handles and one adjustable and detachable shoulder strap in contrast materials.Height x Length x Width 30 x 47 x 22 cm. / 11.8 x 18.5 x 8.6″View more",
    "id": "producta191"
  },
  {
    "product_name": "LEATHER MINI CROSSBODY BAG WITH FLAP",
    "image_url": "https://static.zara.net/photos///2023/I/1/2/p/3627/220/500/2/w/448/3627220500_2_1_1.jpg?ts=1691580011027",
    "price": "₹ 5,990.00",
    "details": "Leather crossbody bag. Plain design. Main compartment with flap and double hidden magnetic closure. The inside features a small pocket with no closure. Detachable and adjustable shoulder strap.Height x Length x Width 13 x 20 x 5 cm. / 5.1 x 7.8 x 1.9″View more",
    "id": "producta192"
  },
  {
    "product_name": "LEATHER MINI CROSSBODY BAG",
    "image_url": "https://static.zara.net/photos///2023/I/1/2/p/3512/220/120/2/w/448/3512220120_6_1_1.jpg?ts=1689258889422",
    "price": "₹ 7,590.00",
    "details": "Mini crossbody bag made of leather. Main compartment underneath the flap. Adjustable shoulder strap. Available in several colours.Height x Length x Width 13,5 x 18 x 10 cm. / 5.3 x 7.0 x 3.9″View more",
    "id": "producta193"
  },
  {
    "product_name": "EMBOSSED CROSSBODY BAG",
    "image_url": "https://static.zara.net/photos///2023/I/1/2/p/3600/220/800/2/w/448/3600220800_2_1_1.jpg?ts=1687947261467",
    "price": "₹ 2,890.00",
    "details": "Crossbody bag. Embossed detailing on the seams. Main compartment with zip closure. Small inner pocket without closure. Front pocket with magnetic flap closure. Adjustable padded shoulder strap.Length x Height x Width: 25 x 16 x 6 cm. / 9.8 x 6.2 x 2.3″View more",
    "id": "producta194"
  },
  {
    "product_name": "RUBBERISED CROSSBODY BAG",
    "image_url": "https://static.zara.net/photos///2023/I/1/2/p/3603/220/800/2/w/448/3603220800_6_1_1.jpg?ts=1688551805484",
    "price": "₹ 2,590.00",
    "details": "Crossbody bag in a combination of materials. Rubberised finish. Main compartment with zip closure. Small inner pocket without closure. Front pocket with zip closure. Adjustable shoulder strap.Height x Length x Width 15 x 23 x 8 cm. / 5.9 x 9.0 x 3.1″View more",
    "id": "producta195"
  },
  {
    "product_name": "CROSSBODY BAG WITH PURSE",
    "image_url": "https://static.zara.net/photos///2023/I/1/2/p/3509/220/700/2/w/448/3509220700_2_1_1.jpg?ts=1692627350185",
    "price": "₹ 3,290.00",
    "details": "Crossbody bag. Plain exterior. Main compartment with flap and magnetic closure. Its interior features two main compartments, one with zip closure. The other has no closure and a small inside pocket also without closure. Detachable and adjustable matching shoulder strap. Detachable purse with closure.Height x Length x Width 12,5 x 18,5 x 7 cm. / 4.9 x 7.2 x 2.7″View more",
    "id": "producta196"
  },
  {
    "product_name": "RUBBERISED BOWLING BAG",
    "image_url": "https://static.zara.net/photos///2023/I/1/2/p/3103/220/800/2/w/448/3103220800_2_1_1.jpg?ts=1692627347977",
    "price": "₹ 5,990.00",
    "details": "Bowling bag. Plain design with a rubberised finish. The main compartment fastens with a zip and the inside has two pockets, one with a zip and the other with no closure. The front has a small zip pocket. Two handles and an adjustable and detachable shoulder strap.Height x Length x Width 30 x 51 x 19 cm. / 11.8 x 20.0 x 7.4″View more",
    "id": "producta197"
  },
  {
    "product_name": "RUBBERISED EMBOSSED EXPLORER BACKPACK",
    "image_url": "https://static.zara.net/photos///2023/I/1/2/p/3205/220/800/2/w/448/3205220800_6_1_1.jpg?ts=1689774964190",
    "price": "₹ 5,990.00",
    "details": "Explorer backpack. Rubberised finish with embossed details. The main compartment closes with a flap, gathering and a double matching clip buckle. The inside has a pocket with zip closure. Medium pockets on each side with flaps and magnetic clasp closure. The front has a flap pocket with zip fastening. Top handle and two adjustable shoulder straps. Height x Length x Width 46,5 x 27 x 21 cm. / 18.3 x 10.6 x 8.2″View more",
    "id": "producta198"
  },
  {
    "product_name": "RUBBERISED EMBOSSED BOWLING BAG",
    "image_url": "https://static.zara.net/photos///2023/I/1/2/p/3108/220/800/2/w/448/3108220800_2_1_1.jpg?ts=1690213160968",
    "price": "₹ 2,990.00",
    "details": "Bowling style bag. Embossed finish. The main compartment fastens with a zip and its interior has a small zip pocket. Small zip pocket at the front. Features two handles and one adjustable and detachable shoulder strap.Height x Length x Width 17 x 36 x 15 cm. / 6.6 x 14.1 x 5.9″View more",
    "id": "producta199"
  },
  {
    "product_name": "MINI NYLON SHOULDER BAG",
    "image_url": "https://static.zara.net/photos///2023/I/1/2/p/3620/220/805/2/w/448/3620220805_2_1_1.jpg?ts=1690885877577",
    "price": "₹ 2,590.00",
    "details": "Nylon crossbody shoulder bag. Soft construction. The main pocket has zip closure. Adjustable shoulder strap.Height x Length x Width 22 x 29 x 7.5 cm. / 8.6 x 11.4 x 2.9″View more",
    "id": "producta200"
  },
  {
    "product_name": "MESH TOTE BAG",
    "image_url": "https://static.zara.net/photos///2023/I/1/1/p/3342/220/701/502/w/448/3342220701_6_1_1.jpg?ts=1689698623101",
    "price": "₹ 1,590.00",
    "details": "Tote bag. Soft mesh design. No fastening. Two shoulder straps.Height x Length x Width 74 x 36 x 3 cm. / 29.1 x 14.1 x 1.1″",
    "id": "producta201"
  },
  {
    "product_name": "MINIMALIST TOTE BAG",
    "image_url": "https://static.zara.net/photos///2023/I/1/2/p/3328/220/120/2/w/448/3328220120_6_1_1.jpg?ts=1689784587483",
    "price": "₹ 3,290.00",
    "details": "Large rigid tote bag. Main compartment with hidden magnetic closure. The inside has a zip pocket. Two handles and an adjustable and detachable shoulder strap.Height x Length x Width 36 x 27 x 10 cm. / 14.1 x 10.6 x 3.9″View more",
    "id": "producta202"
  },
  {
    "product_name": "XL MULTICOLOURED SHOULDER BAG",
    "image_url": "https://static.zara.net/photos///2023/I/1/2/p/3309/220/203/2/w/448/3309220203_2_1_1.jpg?ts=1687445432602",
    "price": "₹ 4,590.00",
    "details": "Crossbody shoulder bag. Extra-large soft design. The main pocket has a zip closure. The inside has a small pocket without closure. Adjustable shoulder strap.Height x Length x Width: 32 x 79 x 15 cm. / 12.5 x 31.1 x 5.9″View more",
    "id": "producta203"
  },
  {
    "product_name": "NYLON SHOULDER BAG",
    "image_url": "https://static.zara.net/photos///2023/I/1/2/p/3515/220/514/2/w/448/3515220514_6_1_1.jpg?ts=1691151382051",
    "price": "₹ 2,990.00",
    "details": "Crossbody shoulder bag. Made of fabric. Soft construction. The main pocket has double zip closure. The inside has a small pocket. Adjustable shoulder strap. Medium size.Height x Length x Width: 55 x 25 x 12 cm. / 21.6 x 9.8 x 4.7″View more",
    "id": "producta204"
  },
  {
    "product_name": "XL SHOULDER BAG",
    "image_url": "https://static.zara.net/photos///2023/I/1/2/p/3105/220/300/2/w/448/3105220300_2_1_1.jpg?ts=1687186988914",
    "price": "₹ 2,990.00",
    "details": "Crossbody shoulder bag. Soft construction in terry fabric. The main pocket has zip closure. Its interior has a pocket with no fastening. Features an adjustable shoulder strap.Height x Length x Width 38 x 74 x 15 cm. / 14.9 x 29.1 x 5.9″View more",
    "id": "producta205"
  },
  {
    "product_name": "DOUBLE BRIEFCASE",
    "image_url": "https://static.zara.net/photos///2023/I/1/2/p/3402/220/800/2/w/448/3402220800_2_1_1.jpg?ts=1687173845118",
    "price": "₹ 5,990.00",
    "details": "Monochrome briefcase. Two main compartments for electronic devices and laptops of up to 13 inches with zip closure. The first main compartment has a medium-sized inside pocket for devices with hook-and-loop strap closure. The second main compartment has two pockets without closures. The front has a compartment with concealed magnetic clasp closure. Two top handles and an adjustable and detachable shoulder strap.Height x Length x Width: 30 x 42 x 15 cm.View more",
    "id": "producta206"
  },
  {
    "product_name": "MONOCHROME BRIEFCASE",
    "image_url": "https://static.zara.net/photos///2023/I/1/1/p/3400/220/800/502/w/448/3400220800_6_1_1.jpg?ts=1687872086277",
    "price": "₹ 4,590.00",
    "details": "Plain monochrome briefcase. The main compartment is suitable for electronic devices and laptops of up to 13 inches. Zip closure. The inside has a large pocket without closure. Large front pocket with zip closure.Height x Length x Width 30 x 40 x 3 cm.View more",
    "id": "producta207"
  },
  {
    "product_name": "MONOCHROME SLIM BRIEFCASE",
    "image_url": "https://static.zara.net/photos///2023/I/1/2/p/3401/220/800/32/w/489/3401220800_1_1_1.jpg?ts=1692806841260",
    "price": "₹ 3,290.00",
    "details": "Monochrome briefcase. Plain exterior. The main compartment is suitable for electronic devices and laptops of up to 13 inches. Zip closure. The inside has a large pocket without closure.Height x Length x Width 30 x 40 x 3 cm.View more",
    "id": "producta208"
  },
  {
    "product_name": "RUBBERIZED CARD HOLDER WALLET",
    "image_url": "https://static.zara.net/photos///2023/I/1/2/p/3812/220/032/2/w/448/3812220032_6_1_1.jpg?ts=1690888831346",
    "price": "₹ 990.00",
    "details": "Card holder purse with a rubberised finish. Featuring a compartment for storing banknotes. Featuring six inner card slots, three outer pockets, two extra compartments on each side and a coin purse with zip closure.Length x Height x Width: 12 x 10 x 2 cm / 4.7 x 3.9 x 0.7″View more",
    "id": "producta209"
  },
  {
    "product_name": "RUBBERISED WALLET",
    "image_url": "https://static.zara.net/photos///2023/I/1/2/p/3811/220/032/2/w/448/3811220032_6_1_1.jpg?ts=1690888831204",
    "price": "₹ 1,490.00",
    "details": "Wallet with a rubberised finish. Featuring a pocket for storing notes, three card slots, two extra compartments on each side and a coin purse with snap fastening. Elastic band closure.Length x Height x Width: 11 x 9 x 1.5 cm / 4.3 x 3.5 x 0.5″View more",
    "id": "producta210"
  },
  {
    "product_name": "WALLET WITH TOPSTITCHING",
    "image_url": "https://static.zara.net/photos///2023/I/1/2/p/3804/220/800/2/w/448/3804220800_6_1_1.jpg?ts=1688637368405",
    "price": "₹ 1,790.00",
    "details": "Monochrome card holder wallet. Main compartment with a pocket for storing notes. Three card slots on each side. Contrast topstitching detail.Length x Height x Width: 7.5 x 10 x 1.5 cm / 2.9 x 3.9 x 0.5″View more",
    "id": "producta211"
  },
  {
    "product_name": "WALLET WITH TOPSTITCHING",
    "image_url": "https://static.zara.net/photos///2023/I/1/2/p/3802/220/800/2/w/448/3802220800_6_1_1.jpg?ts=1688630935909",
    "price": "₹ 1,790.00",
    "details": "Basic monochrome wallet. Main compartment with a pocket for storing notes. Four card slots, two on each side. Matching topstitching detail.Length x Height x Width: 11 x 9 x 1.5 cm. / 4.3 x 3.5 x 0.5″View more",
    "id": "producta212"
  },
  {
    "product_name": "WALLET WITH TOPSTITCHING",
    "image_url": "https://static.zara.net/photos///2023/I/1/2/p/3803/220/800/2/w/448/3803220800_6_1_1.jpg?ts=1688633524010",
    "price": "₹ 1,790.00",
    "details": "Wallet. Plain exterior. Compartment for notes, three compartments for cards and a coin purse with a clip buckle. Zip closure. Height x Length x Width 9 x 11 x 2 cm. / 3.5 x 4.3 x 0.7″View more",
    "id": "producta213"
  },
  {
    "product_name": "MINI NYLON CROSSBODY BAG WITH PURSE",
    "image_url": "https://static.zara.net/photos///2023/I/1/2/p/3608/220/500/2/w/448/3608220500_2_1_1.jpg?ts=1689941744317",
    "price": "₹ 2,590.00",
    "details": "Crossbody bag. Plain design. Main compartment with flap and clip buckle. The inside features a flat pocket with no closure. Pocket on the front with no closure and another pocket with a magnetic closure on the back. Matching adjustable shoulder strap. Detachable purse with zip.Height x Length x Width 12,5 x 18,5 x 3 cm. / 4.9 x 7.2 x 1.1″View more",
    "id": "producta214"
  },
  {
    "product_name": "LEATHER BOWLING BAG",
    "image_url": "https://static.zara.net/photos///2023/I/1/1/p/3106/120/800/32/w/489/3106120800_1_1_1.jpg?ts=1692894124768",
    "price": "₹ 17,990.00",
    "details": "Bowling bag. Made of leather. The main compartment closes with a zip and its interior has three pockets, one with a zip closure and two without closure. Has two handles and one adjustable and detachable shoulder strap.Height x Length x Width: 30 x 47 x 19 cm. / 11.8 x 18.5 x 7.4″View more",
    "id": "producta215"
  },
  {
    "product_name": "LEATHER BACKPACK WITH BUCKLE",
    "image_url": "https://static.zara.net/photos///2023/I/1/2/p/3225/220/800/32/w/448/3225220800_1_1_1.jpg?ts=1691507009934",
    "price": "₹ 13,990.00",
    "details": "Monochrome backpack. Made of leather. The main compartment fastens with a zip and buckle. The inside features a small zip pocket. Top handle and two adjustable shoulder straps.Height x Length x Width 44 x 31 x 14 cm. / 17.3 x 12.2 x 5.5″View more",
    "id": "producta216"
  },
  {
    "product_name": "LEATHER CROSSBODY BAG",
    "image_url": "https://static.zara.net/photos///2023/I/1/2/p/3337/220/800/2/w/448/3337220800_6_1_1.jpg?ts=1688644098065",
    "price": "₹ 11,990.00",
    "details": "Leather crossbody shoulder bag. Soft construction. The main pocket does not fasten. Features a medium-sized front pocket under the flap. Adjustable shoulder strap.Height x Length x Width 51,5 x 41,5 x 13 cm. / 20.2 x 16.3 x 5.1″View more",
    "id": "producta217"
  },
  {
    "product_name": "RIGID CROSSBODY BAG",
    "image_url": "https://static.zara.net/photos///2023/I/1/2/p/3625/220/133/2/w/448/3625220133_2_1_1.jpg?ts=1690987043260",
    "price": "₹ 2,890.00",
    "details": "Rigid crossbody bag. Raised rubberised finish. The main compartment has a thermo-sealed zip fastening and there is a mesh bag in its interior. Has an adjustable and detachable matching shoulder strap.Height x Length x Width: 13 x 19 x 7 cm. / 5.1 x 7.4 x 2.7″View more",
    "id": "producta218"
  },
  {
    "product_name": "NYLON MAXI SHOULDER BAG - LIMITED EDITION",
    "image_url": "https://static.zara.net/photos///2023/I/1/2/p/3308/220/120/2/w/448/3308220120_2_1_1.jpg?ts=1689941743539",
    "price": "₹ 2,990.00",
    "details": "Crossbody shoulder bag. Soft construction. Main pocket with zip closure. The inside has a flat pocket without closure. Features a large outer zip pocket. Adjustable shoulder strap.Height x Length x Width 38 x 45 x 17 cm. / 14.9 x 17.7 x 6.6″View more",
    "id": "producta219"
  },
  {
    "product_name": "MINI NYLON MESSENGER BAG",
    "image_url": "https://static.zara.net/photos///2023/I/1/2/p/3609/220/120/2/w/448/3609220120_6_1_1.jpg?ts=1689087450935",
    "price": "₹ 2,590.00",
    "details": "Crossbody bag. Plain upper. Soft construction. Main compartment with zip closure. The inside has a flat pocket without closure. Featuring a medium-sized front pocket with zip fastening. Matching adjustable shoulder strap.Height x Length x Width 19 x 23 x 7 cm. / 7.4 x 9.0 x 2.7″View more",
    "id": "producta220"
  },
  {
    "product_name": "MULTICOLORED CROSSBODY BAG",
    "image_url": "https://static.zara.net/photos///2023/I/1/2/p/3106/220/202/2/w/448/3106220202_2_1_1.jpg?ts=1687186989297",
    "price": "₹ 2,990.00",
    "details": "Crossbody bag. Soft construction. Main compartment with zip closure. Features three interior pockets, one of which fastens with a zip. On the front there is a small pocket with adjustable gathered drawstring closure. Medium pockets on the sides with zip and hook-and-loop fastening. Featuring two handles and an adjustable and detachable shoulder strap.Length x Height x Width: 35 x 21 x 20 cm. / 13.7 x 8.2 x 7.8″View more",
    "id": "producta221"
  },
  {
    "product_name": "MULTICOLOURED MINI CROSSBODY BAG",
    "image_url": "https://static.zara.net/photos///2023/I/1/2/p/3610/220/202/2/w/448/3610220202_2_1_1.jpg?ts=1684764084278",
    "price": "₹ 1,990.00",
    "details": "Crossbody bag. Main compartment with zip closure. Two pockets on the front in different sizes, both with zip closure. Adjustable and detachable shoulder strap.Height x Length x Width 20 x 12 x 8 cm. / 7.8 x 4.7 x 3.1″View more",
    "id": "producta222"
  },
  {
    "product_name": "PRINTED CANVAS BACKPACK",
    "image_url": "https://static.zara.net/photos///2023/I/1/2/p/3216/220/202/2/w/448/3216220202_6_1_1.jpg?ts=1690447591389",
    "price": "₹ 4,990.00",
    "details": "Printed backpack made of canvas fabric. The main compartment closes with a zip and its interior has a space for electronic devices of up to 13 inches and a pocket with zip closure. On the front there is a pocket with zip closure. The back is padded. It has one handle and two adjustable padded shoulder straps.Height x Length x Width 41 x 32 x 15 cm.View more",
    "id": "producta223"
  },
  {
    "product_name": "PRINTED CANVAS MINI CROSSBODY BAG",
    "image_url": "https://static.zara.net/photos///2023/I/1/2/p/3622/220/202/2/w/448/3622220202_6_1_1.jpg?ts=1690450057610",
    "price": "₹ 2,590.00",
    "details": "Crossbody bag made of canvas fabric. Main compartment with zip closure. On the front there is another smaller compartment with zip closure. Adjustable shoulder strap.Height x Length x Width 20 x 13 x 6 cm. / 7.8 x 5.1 x 2.3″View more",
    "id": "producta224"
  },
  {
    "product_name": "XL CROSSBODY WALLET",
    "image_url": "https://static.zara.net/photos///2023/I/1/2/p/3810/220/800/2/w/448/3810220800_2_1_1.jpg?ts=1686666006051",
    "price": "₹ 2,590.00",
    "details": "XL wallet. Plain upper. Main compartment with zip closure. The inside features four compartments. Two zip pockets. Several slots for cards and banknotes. Adjustable and detachable shoulder strap. Height x Length: 12 x 22 cm. / 4.7 x 8.6″View more",
    "id": "producta225"
  },
  {
    "product_name": "EMBOSSED WALLET",
    "image_url": "https://static.zara.net/photos///2023/I/1/2/p/3813/220/800/2/w/448/3813220800_6_1_1.jpg?ts=1689764822249",
    "price": "₹ 990.00",
    "details": "Embossed wallet. Main compartment with pocket for notes. Four card slots, two on each side. Matching topstitching detail.Length x Height: 7.5 x 10 cm. / 2.9 x 3.9″",
    "id": "producta226"
  },
  {
    "product_name": "COIN PURSE",
    "image_url": "https://static.zara.net/photos///2023/I/1/2/p/3800/220/802/2/w/448/3800220802_6_1_1.jpg?ts=1689333612370",
    "price": "₹ 990.00",
    "details": "Wallet. Plain exterior. Has a compartment for notes, three compartments for cards and a coin purse with a clip buckle closure, and a compartment at the back.Height x Length x Width 9 x 11 x 1.5 cm. / 3.5 x 4.3 x 0.5″View more",
    "id": "producta227"
  },
  {
    "product_name": "CARD HOLDER PURSE",
    "image_url": "https://static.zara.net/photos///2023/I/1/2/p/3801/220/802/2/w/448/3801220802_6_1_1.jpg?ts=1689333612659",
    "price": "₹ 890.00",
    "details": "Card holder with five compartments and wallet with zip closure. Plain exterior.Height x length: 12.5 x 8 cm / 4.9 x 3.1″",
    "id": "producta228"
  },
  {
    "product_name": "RUBBERISED TRANSLUCENT MINI CROSSBODY BAG",
    "image_url": "https://static.zara.net/photos///2023/I/1/2/p/3999/120/300/2/w/0/3999120300_2_1_1.jpg?ts=1687186988870",
    "price": "₹ 2,890.00",
    "details": "Crossbody bag in a combination of materials. Rubberised finish. The main compartment rolls down and fastens with a maxi clip. Zip on the outside to open inside pocket. Quilted back. Adjustable and detachable shoulder strap.Height x Length x Width: 22 x 14 x 5 cm. / 8.6 x 5.5 x 1.9″View more",
    "id": "producta229"
  },
  {
    "product_name": "RUBBERISED CROSSBODY BAG",
    "image_url": "https://static.zara.net/photos///2023/I/1/2/p/3611/220/800/2/w/448/3611220800_2_1_1.jpg?ts=1684753832081",
    "price": "₹ 2,890.00",
    "details": "Crossbody bag. Semi-rigid exterior. Rubberised finish with embossing. The main compartment fastens with a flap and double magnetic closure. Features a small inside pocket with zip closure. Matching adjustable shoulder strap.Length x Height x Width: 19 x 12 x 7 cm. / 7.4 x 4.7 x 2.7″View more",
    "id": "producta230"
  },
  {
    "product_name": "EMBOSSED MINI CROSSBODY BAG",
    "image_url": "https://static.zara.net/photos///2023/I/1/2/p/3901/220/131/2/w/448/3901220131_2_1_1.jpg?ts=1690472297402",
    "price": "₹ 1,590.00",
    "details": "Rectangular rigid mini crossbody bag. Plain exterior. The main compartment has zip closure and its interior has a small flat pocket. Adjustable and detachable shoulder strap. Height x Length x Width 10,5 x 18 x 3 cm. / 4.1 x 7.0 x 1.1″View more",
    "id": "producta231"
  },
  {
    "product_name": "RIGID CROSSBODY BAG",
    "image_url": "https://static.zara.net/photos///2023/I/1/2/p/3601/120/627/2/w/448/3601120627_2_1_1.jpg?ts=1685703862849",
    "price": "₹ 2,890.00",
    "details": "Rigid crossbody bag. Raised rubberised finish. The main compartment has a thermo-sealed zip fastening and there is a mesh bag in its interior. Has an adjustable and detachable shoulder strap.Height x Length x Width: 11 x 17 x 6 cm. / 4.3 x 6.6 x 2.3″View more",
    "id": "producta232"
  },
  {
    "product_name": "WOVEN LEATHER TOTE BAG",
    "image_url": "https://static.zara.net/photos///2023/I/1/2/p/3335/220/800/2/w/448/3335220800_2_1_1.jpg?ts=1689699478025",
    "price": "₹ 15,990.00",
    "details": "Tote bag. Made of leather. Soft construction. Main compartment with fabric lining. Two handles and a shoulder strap.Height x Length x Width 42 x 31 x 11 cm. / 16.5 x 12.2 x 4.3″View more",
    "id": "producta233"
  },
  {
    "product_name": "XL LEATHER TOTE BAG",
    "image_url": "https://static.zara.net/photos///2023/I/1/2/p/3336/220/700/2/w/448/3336220700_2_1_1.jpg?ts=1689699477975",
    "price": "₹ 18,990.00",
    "details": "Leather tote bag. Soft design. Main compartment with a magnetic closure. Its interior has a small pocket with zip closure. Flat pocket on the front with a flap. Two adjustable handles.Height x Length x Width 46 x 52 x 20,5 cm. / 18.1 x 20.4 x 8.0″View more",
    "id": "producta234"
  },
  {
    "product_name": "LEATHER SHOULDER BAG",
    "image_url": "https://static.zara.net/photos///2023/V/1/2/p/3520/120/800/82/w/448/3520120800_1_1_1.jpg?ts=1677490247572",
    "price": "₹ 9,590.00",
    "details": "Leather crossbody shoulder bag. Soft construction. The main pocket has double zip closure. The inside has a pocket without closure. Adjustable shoulder strap.Height x Length x Width 58 x 24 x 11 cm. / 22.8 x 9.4 x 4.3″View more",
    "id": "producta235"
  },
  {
    "product_name": "NYLON MINI BACKPACK",
    "image_url": "https://static.zara.net/photos///2023/I/1/2/p/3219/220/800/2/w/448/3219220800_2_1_1.jpg?ts=1689941742603",
    "price": "₹ 3,290.00",
    "details": "Soft backpack. The main compartment closes with a zip and its interior has a pocket with a zip closure. The front has a zip pocket. Each side has small zip pockets. Features an adjustable and padded shoulder strap for improved comfort during use. Height x Length x Width 29 x 25,5 x 13 cm. / 11.4 x 10.0 x 5.1″View more",
    "id": "producta236"
  },
  {
    "product_name": "MULTICOLOURED NYLON BACKPACK",
    "image_url": "https://static.zara.net/photos///2023/I/1/2/p/3213/220/203/2/w/448/3213220203_2_1_1.jpg?ts=1687421823150",
    "price": "₹ 4,990.00",
    "details": "Multicoloured backpack. Soft construction. Featuring one main zip pocket and a medium-sized zip pocket on the inside. Small zip pockets on the sides and front flap pockets. Includes a handle and two adjustable padded shoulder straps for improved comfort during use. Height x Length x Width: 41 x 32 x 17 cm. / 16.1 x 12.5 x 6.6″View more",
    "id": "producta237"
  },
  {
    "product_name": "SOFT S CROSSBODY BAG",
    "image_url": "https://static.zara.net/photos///2023/I/1/2/p/3617/220/120/2/w/448/3617220120_6_1_1.jpg?ts=1689327168350",
    "price": "₹ 2,590.00",
    "details": "Small crossbody bag. Plain exterior. Soft construction. Main compartment with zip closure. The interior features two pockets, one with a zip closure and the other with no fastening. Matching adjustable shoulder strap.Height x Length x Width 16 x 23 x 6 cm. / 6.2 x 9.0 x 2.3″View more",
    "id": "producta238"
  },
  {
    "product_name": "MINI DENIM SHOULDER BAG",
    "image_url": "https://static.zara.net/photos///2023/I/1/2/p/3506/220/400/2/w/448/3506220400_6_1_1.jpg?ts=1688716336854",
    "price": "₹ 2,590.00",
    "details": "Crossbody shoulder bag in denim fabric. Soft design. The main pocket has a zip closure. Its interior has a small flat pocket with no closure. Features an adjustable shoulder strap. Height x Length x Width: 18 x 33 x 11 cm. / 7.0 x 12.9 x 4.3″View more",
    "id": "producta239"
  },
  {
    "product_name": "RIGID DENIM CROSSBODY BAG",
    "image_url": "https://static.zara.net/photos///2023/I/1/2/p/3624/220/400/2/w/448/3624220400_6_1_1.jpg?ts=1688385095048",
    "price": "₹ 2,890.00",
    "details": "Rectangular rigid mini crossbody bag. Denim exterior. The main compartment has a metallic closure and its interior has a pocket with no closure. Adjustable and detachable shoulder strap.Height x Length x Width 10.5 x 18.5 x 4.5 cm. / 4.1 x 7.2 x 1.7″View more",
    "id": "producta240"
  },
  {
    "product_name": "DENIM EARPHONE BAG",
    "image_url": "https://static.zara.net/photos///2023/I/1/2/p/3907/220/400/2/w/448/3907220400_6_1_1.jpg?ts=1688127031862",
    "price": "₹ 1,590.00",
    "details": "Earphone bag made of denim. Zip closure. Adjustable and detachable cord.Height x Length x Width 8 x 8 x 2.5 cm. / 3.1 x 3.1 x 0.9″",
    "id": "producta241"
  },
  {
    "product_name": "EMBOSSED BOWLING BAG",
    "image_url": "https://static.zara.net/photos///2023/I/1/2/p/3107/220/802/2/w/448/3107220802_2_1_1.jpg?ts=1690213160959",
    "price": "₹ 5,590.00",
    "details": "Bowling style bag. Embossed finish. The main compartment fastens with a zip and its interior has a small zip pocket. Small zip pocket at the front. Features two handles and one adjustable and detachable shoulder strap.Height x Length x Width 21 x 53 x 25 cm. / 8.2 x 20.8 x 9.8″View more",
    "id": "producta242"
  },
  {
    "product_name": "EMBOSSED BACKPACK",
    "image_url": "https://static.zara.net/photos///2023/I/1/2/p/3218/220/800/2/w/448/3218220800_6_1_1.jpg?ts=1689085042581",
    "price": "₹ 4,990.00",
    "details": "Monochrome backpack. Embossed finish. The main compartment fastens with a zip and has two pockets inside, one with zip closure and a flat one with no closure. Front zip pocket. The back is padded. Handle and two adjustable and breathable padded shoulder straps.Height x Length x Width 41 x 29 x 16 cm. / 16.1 x 11.4 x 6.2″View more",
    "id": "producta243"
  },
  {
    "product_name": "EMBOSSED MINI CROSSBODY BAG",
    "image_url": "https://static.zara.net/photos///2023/I/1/2/p/3619/220/808/2/w/448/3619220808_6_1_1.jpg?ts=1689772244136",
    "price": "₹ 2,590.00",
    "details": "Crossbody bag. Main compartment with zip closure. The front features a small flat pocket with magnetic closure and a small inside pocket. Adjustable shoulder strap. Height x Length x Width 18 x 13 x 5 cm. / 7.0 x 5.1 x 1.9″View more",
    "id": "producta244"
  },
  {
    "product_name": "MINI CROSSBODY BAG WITH FLAP",
    "image_url": "https://static.zara.net/photos///2023/V/1/2/p/3637/120/800/2/w/448/3637120800_2_1_1.jpg?ts=1681988993966",
    "price": "₹ 2,590.00",
    "details": "Crossbody bag. Main compartment with flap and double magnetic clasp closure. Two pockets, one inside pocket without closure and another back pocket with push-back fastening. Plain design. Matching adjustable shoulder strap.Height x Length x Width 12 x 20 x 4 cm. / 4.7 x 7.8 x 1.5″View more",
    "id": "producta245"
  },
  {
    "product_name": "NYLON BELT BAG",
    "image_url": "https://static.zara.net/photos///2023/I/1/2/p/3615/220/800/2/w/448/3615220800_2_1_1.jpg?ts=1692627350589",
    "price": "₹ 2,590.00",
    "details": "Soft belt bag. Nylon upper. Main compartment with zip closure and an inside pocket with no closure. Front pocket with zip closure. Back pocket with zip closure. Adjustable strap with clip buckle.Height x Length x Width 15 x 34 x 8 cm. / 5.9 x 13.3 x 3.1″View more",
    "id": "producta246"
  },
  {
    "product_name": "SOFT MINI CROSSBODY BAG",
    "image_url": "https://static.zara.net/photos///2023/I/1/2/p/3616/120/032/2/w/448/3616120032_6_1_1.jpg?ts=1689772244737",
    "price": "₹ 2,590.00",
    "details": "Crossbody bag made of technical fabric. Main compartment with zip closure. Inside zip pocket. Front zip pocket. Adjustable shoulder strap.",
    "id": "producta247"
  },
  {
    "product_name": "NYLON MULTI-POCKET BAG",
    "image_url": "https://static.zara.net/photos///2023/V/1/2/p/3908/120/800/2/w/448/3908120800_2_1_1.jpg?ts=1683289816763",
    "price": "₹ 2,890.00",
    "details": "Handbag. Multiple detachable pockets on a central hoop. Main bag with zip closure. The inside has four small pockets without closures. Second small bucket bag with gathered drawstring closure. Third small bag that can be used as a purse or a case for headphones (compatible with AirPods® sizes). Adjustable shoulder strap.Main pocket: Length x height: 19 x 12 cm / 7.4 x 4.7″Bucket pocket: Length x height x width: 8 x 10 x 8 cm / 3.1 x 3.9 x 3.1″Purse pocket: Height x Length: 7.5 x 7 cm / 2.9 x 2.7″View more",
    "id": "producta248"
  },
  {
    "product_name": "BAG WITH MULTIPLE POCKETS",
    "image_url": "https://static.zara.net/photos///2023/I/1/2/p/3905/220/032/2/w/448/3905220032_6_1_1.jpg?ts=1688052334618",
    "price": "₹ 2,890.00",
    "details": "Handbag. Multiple detachable pockets on a central hoop. Main bag with zip closure. The inside has four small pockets without closures. Second small bucket bag with gathered drawstring closure. Third small bag that can be used as a purse or a case for headphones (compatible with AirPods® sizes). Adjustable shoulder strap.Main pocket: Length x height: 19 x 12 cm / 7.4 x 4.7″Bucket pocket: Length x height x width: 8 x 10 x 8 cm. / 3.1 x 3.9 x 3.1″Purse pocket: Height x Length: 7.5 x 7 cm / 2.9 x 2.7″View more",
    "id": "producta249"
  },
  {
    "product_name": "MINI CROSSBODY BAG WITH TOPSTITCHING",
    "image_url": "https://static.zara.net/photos///2023/I/1/2/p/3602/220/800/2/w/0/3602220800_2_1_1.jpg?ts=1687173845640",
    "price": "₹ 1,990.00",
    "details": "Crossbody bag. Vertical design. Topstitching on the seams. Main compartment with zip closure. Small inner pocket without closure. Front pocket with zip closure. Adjustable shoulder strap.Length x Height x Width: 12 x 17 x 5 cm. / 4.7 x 6.6 x 1.9″View more",
    "id": "producta250"
  },
  {
    "product_name": "TOP STITCHED MESSENGER BAG",
    "image_url": "https://static.zara.net/photos///2023/I/1/2/p/3601/220/800/2/w/448/3601220800_6_1_1.jpg?ts=1689757583942",
    "price": "₹ 2,890.00",
    "details": "Crossbody bag with topstitching on the seams. Main compartment with zip closure. Small inside pocket with no closure. Front zip pocket. Adjustable shoulder strap.Length x Height x Width: 25 x 16 x 6 cm. / 9.8 x 6.2 x 2.3″View more",
    "id": "producta251"
  },
  {
    "product_name": "SOFT BACKPACK WITH TOPSTITCHING",
    "image_url": "https://static.zara.net/photos///2023/I/1/2/p/3201/220/500/2/w/448/3201220500_2_1_1.jpg?ts=1686563300278",
    "price": "₹ 5,990.00",
    "details": "Soft backpack. Contrast-coloured topstitching on the upper. Main compartment with zip closure and a large inside pocket. Front zip pocket. Features two medium-sized zip pockets on the sides. Featuring a handle and two adjustable padded shoulder straps for improved comfort during use.Height x Length x Width: 44 x 40 x 18 cm. / 17.3 x 15.7 x 7.0″View more",
    "id": "producta252"
  },
  {
    "product_name": "BOWLING BAG WITH TOPSTITCHING",
    "image_url": "https://static.zara.net/photos///2023/I/1/2/p/3101/220/800/2/w/448/3101220800_6_1_1.jpg?ts=1689786235907",
    "price": "₹ 4,990.00",
    "details": "Bowling bag. Combined colours and materials on the exterior. The main compartment fastens with a zip and its interior has a pocket with no fastening. Two handles and one adjustable and detachable shoulder strap.Height x Length x Width 22 x 50 x 23 cm. / 8.6 x 19.6 x 9.0″View more",
    "id": "producta253"
  },
  {
    "product_name": "BACKPACK WITH FOLDOVER FLAP",
    "image_url": "https://static.zara.net/photos///2023/I/1/2/p/3220/220/800/2/w/448/3220220800_2_1_1.jpg?ts=1690472296642",
    "price": "₹ 4,990.00",
    "details": "Monochrome backpack. The main compartment has double magnetic closure and its interior has three pockets, one of which has zip closure. Top handle and two adjustable shoulder straps. Height x Length x Width 40,5 x 30 x 9 cm. / 15.9 x 11.8 x 3.5″View more",
    "id": "producta254"
  },
  {
    "product_name": "EMBOSSED BACKPACK",
    "image_url": "https://static.zara.net/photos///2023/V/1/2/p/3232/120/800/2/w/448/3232120800_2_1_1.jpg?ts=1681996104564",
    "price": "₹ 4,990.00",
    "details": "Monochrome backpack with a plain exterior. The main compartment closes with a zip and its interior has two pockets, one of which is large for electronic devices of up to 13 inches and another medium pocket with zip closure. On the front there is a medium pocket with zip closure. The back is padded. Has one handle and two adjustable padded shoulder straps.Height x Length x Width 45 x 29 x 15 cm.View more",
    "id": "producta255"
  },
  {
    "product_name": "STRIPED CANVAS TOTE BAG",
    "image_url": "https://static.zara.net/photos///2023/I/1/2/p/3327/120/300/2/w/448/3327120300_6_1_1.jpg?ts=1689780789503",
    "price": "₹ 2,890.00",
    "details": "Tote bag. Soft design. Main pocket with no closure. Its interior has a small pocket with zip closure. Its front has a pocket with a push-back closure. Two handles and a longer shoulder strap.Height x Length x Width: 36 x 52 x 23 cm / 14.1 x 20.4 x 9.0″View more",
    "id": "producta256"
  },
  {
    "product_name": "STRIPED CANVAS MINI CROSSBODY BAG",
    "image_url": "https://static.zara.net/photos///2023/I/1/2/p/3647/120/401/2/w/448/3647120401_6_1_1.jpg?ts=1689772967454",
    "price": "₹ 1,990.00",
    "details": "Crossbody bag. Soft construction. Vertical design. Main compartment without closure. Small inside pocket with zip closure. Small pocket with no closure on the front. Long crossbody strap. Height x Length: 24 x 19 cm. / 9.4 x 7.4″View more",
    "id": "producta257"
  },
  {
    "product_name": "SEMI-RIGID SUITCASE",
    "image_url": "https://static.zara.net/photos///2023/I/1/2/p/3000/120/202/2/w/448/3000120202_2_1_1.jpg?ts=1686563299333",
    "price": "₹ 9,590.00",
    "details": "Semi-rigid travel suitcase. The main compartment has double zip closure and a security system with a code. Its interior features a large compartment without closure, a small bag with gathered drawstring closure and two small zip pockets. Also features adjustable straps for organising luggage on the inside. One side has a zip pocket. Two central handles, one top handle and an extendible handle. Rigid base at the back and two wheels at the bottom. Suitable for carry-on luggage depending on the airline. Height x Length x Width 52 x 30 x 32 cm. / 20.4 x 11.8 x 12.5″View more",
    "id": "producta258"
  },
  {
    "product_name": "URBAN BACKPACK",
    "image_url": "https://static.zara.net/photos///2023/I/1/2/p/3206/120/800/2/w/448/3206120800_2_1_1.jpg?ts=1686563299827",
    "price": "₹ 5,990.00",
    "details": "Backpack in a combination of materials. Soft construction. The main compartment fastens with a zip. The inside has a pocket for electronic devices of up to 13 inches with hook-and-loop closure. The sides have zip pockets. The front has two zips, one of which is for a small pocket and another that has a main compartment. Top handle and two adjustable, padded and breathable shoulder straps.Height x Length x Width 47 x 34 x 15 cm.View more",
    "id": "producta259"
  },
  {
    "product_name": "MINI URBAN CROSSBODY BAG",
    "image_url": "https://static.zara.net/photos///2023/I/1/2/p/3627/120/800/2/w/448/3627120800_2_1_1.jpg?ts=1686130021620",
    "price": "₹ 2,890.00",
    "details": "Crossbody bag in a combination of materials. The main compartment fastens with a flap, clip closure and zip. The inside has a small flat pocket. Small outer pocket with zip closure. Quilted back. Adjustable shoulder strap. Height x Length x Width 20 x 17 x 7 cm. / 7.8 x 6.6 x 2.7″View more",
    "id": "producta260"
  },
  {
    "product_name": "MINI CROSSBODY BAG WITH FLAP",
    "image_url": "https://static.zara.net/photos///2023/V/1/2/p/3615/120/800/2/w/448/3615120800_2_1_1.jpg?ts=1681299392175",
    "price": "₹ 2,590.00",
    "details": "Crossbody bag. Soft construction. Two compartments under the flap with magnetic closure. The main compartment has a pocket without closure. The back has a pocket with a snap-button closure. Adjustable shoulder strap.Height x Length x Width 12 x 13 x 19 cm. / 4.7 x 5.1 x 7.4″View more",
    "id": "producta261"
  },
  {
    "product_name": "M ORIGAMI TOTE BAG",
    "image_url": "https://static.zara.net/photos///2023/I/1/2/p/3305/220/800/2/w/448/3305220800_2_1_1.jpg?ts=1685708659784",
    "price": "₹ 2,990.00",
    "details": "Medium-sized tote bag. Semi-rigid exterior. Main compartment with hidden magnetic closure. Two handles and an adjustable and detachable shoulder strap. Height x Length x Width: 28 x 21 x 8 cm. / 11.0 x 8.2 x 3.1″View more",
    "id": "producta262"
  },
  {
    "product_name": "MINI ORIGAMI TOTE BAG",
    "image_url": "https://static.zara.net/photos///2023/I/1/2/p/3606/220/070/2/w/448/3606220070_2_1_1.jpg?ts=1684764053370",
    "price": "₹ 2,890.00",
    "details": "Mini tote bag. Semi-rigid exterior. Main pocket with magnetic closure. Two handles and an adjustable and detachable shoulder strap.Height x Length x Width: 18 x 15 x 6 cm / 7.0 x 5.9 x 2.3″View more",
    "id": "producta263"
  },
  {
    "product_name": "CROSSBODY BAG WITH METALLIC CLOSURE",
    "image_url": "https://static.zara.net/photos///2023/I/1/2/p/3626/220/800/2/w/448/3626220800_2_1_1.jpg?ts=1690472297819",
    "price": "₹ 2,890.00",
    "details": "Crossbody bag. Semi-rigid design. Plain upper. Main compartment with flap and metal clasp. The interior is divided into two compartments and has a pocket without closure. Features a snap-button pocket at the back. Top handle and a matching adjustable shoulder strap.Height x Length x Width 14 x 22 x 9 cm. / 5.5 x 8.6 x 3.5″View more",
    "id": "producta264"
  },
  {
    "product_name": "SOFT WOVEN TOTE BAG",
    "image_url": "https://static.zara.net/photos///2023/I/1/2/p/3334/220/002/2/w/0/3334220002_1_1_1.jpg?ts=1688478128036",
    "price": "₹ 3,990.00",
    "details": "Tote bag. Soft construction in a combination of different woven designs. Flat inner pocket. Top handles and shoulder strap for wearing as a crossbody bag. Height x Length x Width: 35 x 32 x 11 cm. / 13.7 x 12.5 x 4.3″Special STUDIO SUMMER collection.View more",
    "id": "producta265"
  },
  {
    "product_name": "SOFT WOVEN TOTE BAG",
    "image_url": "https://static.zara.net/photos///2023/I/1/1/p/3317/120/800/36/w/0/3317120800_1_1_1.jpg?ts=1688035805938",
    "price": "₹ 2,890.00",
    "details": "Tote bag. Soft construction in a combination of different woven designs. Flat inner pocket. Top handles and shoulder strap for wearing as a crossbody bag. Height x Length x Width: 35 x 32 x 11 cm. / 13.7 x 12.5 x 4.3″View more",
    "id": "producta266"
  },
  {
    "product_name": "SOFT WOVEN MINI CROSSBODY BAG",
    "image_url": "https://static.zara.net/photos///2023/V/1/2/p/3642/120/107/2/w/448/3642120107_2_1_1.jpg?ts=1684317205433",
    "price": "₹ 2,590.00",
    "details": "Crossbody bag. Soft construction in a combination of different woven designs. Main compartment without closure. Long adjustable crossbody strap. Height x Length x Width: 20 x 19 x 6 cm. / 7.8 x 7.4 x 2.3″View more",
    "id": "producta267"
  },
  {
    "product_name": "TEXTURED RIGID SUITCASE",
    "image_url": "https://static.zara.net/photos///2023/I/1/1/p/3001/120/070/502/w/448/3001120070_6_1_1.jpg?ts=1684846781210",
    "price": "₹ 9,590.00",
    "details": "Rigid travel suitcase. The main compartment has double zip closure. Interior with separator with zip closure and adjustable straps for organising luggage. Top handle and extendible pull tab. Four swivel wheels.Height x Length x Width: 55 x 40 x 20 cm. / 21.6 x 15.7 x 7.8″View more",
    "id": "producta268"
  },
  {
    "product_name": "CROSSBODY BAG WITH FOLDOVER FLAP",
    "image_url": "https://static.zara.net/photos///2023/V/1/2/p/3648/020/800/2/w/448/3648020800_2_1_1.jpg?ts=1683541806049",
    "price": "₹ 2,890.00",
    "details": "Crossbody bag. Main compartment with flap and double magnetic closure. The inside features two pockets, one with zip closure. Plain design. Matching adjustable shoulder strap.Height x Length x Width 13 x 20 x 5 cm. / 5.1 x 7.8 x 1.9″View more",
    "id": "producta269"
  },
  {
    "product_name": "MINI CROSSBODY BAG",
    "image_url": "https://static.zara.net/photos///2023/I/1/2/p/3632/120/400/2/w/448/3632120400_2_1_1.jpg?ts=1684753832309",
    "price": "₹ 2,590.00",
    "details": "Crossbody bag. The main compartment closes with a zip and its interior has a mesh pocket with no closure. Front pocket with a zip. It has an adjustable and detachable shoulder strap.Height x Length x Width 12 x 18 x 4 cm. / 4.7 x 7.0 x 1.5″View more",
    "id": "producta270"
  },
  {
    "product_name": "TIE-DYE BACKPACK",
    "image_url": "https://static.zara.net/photos///2023/I/1/2/p/3235/220/400/2/w/448/3235220400_6_1_1.jpg?ts=1691148417508",
    "price": "₹ 3,290.00",
    "details": "Canvas backpack. The main compartment closes with a zip and its interior has a space for electronic devices of up to 13 inches and a pocket with zip closure. On the front there is a medium pocket with zip closure. The back is padded. It has one handle and two adjustable padded shoulder straps.Height x Length x Width: 39 x 31 x 14.5 cm.View more",
    "id": "producta271"
  },
  {
    "product_name": "FADED CANVAS BACKPACK",
    "image_url": "https://static.zara.net/photos///2023/I/1/2/p/3234/220/500/2/w/448/3234220500_6_1_1.jpg?ts=1692192266697",
    "price": "₹ 3,290.00",
    "details": "Faded-effect canvas backpack. The main compartment closes with a zip and its interior has a space for electronic devices of up to 13 inches and a pocket with zip closure. On the front there is a medium pocket with zip closure. The back is padded. It has one handle and two adjustable padded shoulder straps.Height x Length x Width: 39 x 31 x 14.5 cm.View more",
    "id": "producta272"
  },
  {
    "product_name": "MINI NYLON MESSENGER BAG",
    "image_url": "https://static.zara.net/photos///2023/I/1/2/p/3630/220/120/2/w/448/3630220120_6_1_1.jpg?ts=1691752920872",
    "price": "₹ 2,590.00",
    "details": "Crossbody bag. Plain design. Main compartment with flap and manual closure. The inside features a small mesh pocket. Matching adjustable shoulder strap.Height x Length x Width 15 x 20 x 6 cm. / 5.9 x 7.8 x 2.3″View more",
    "id": "producta273"
  },
  {
    "product_name": "MINI NYLON MESSENGER BAG",
    "image_url": "https://static.zara.net/photos///2023/I/1/2/p/3902/220/032/2/w/448/3902220032_6_1_1.jpg?ts=1688726746043",
    "price": "₹ 1,590.00",
    "details": "Crossbody bag. Soft design. The main compartment is under the flap and fastens with a metal hook. Adjustable strap.Height x Length x Width: 16.5 x 11.5 x 3 cm. / 6.4 x 4.5 x 1.1″View more",
    "id": "producta274"
  },
  {
    "product_name": "NYLON BRIEFCASE",
    "image_url": "https://static.zara.net/photos///2023/I/1/2/p/3405/220/800/2/w/448/3405220800_6_1_1.jpg?ts=1692706013172",
    "price": "₹ 2,890.00",
    "details": "Monochrome briefcase. Plain technical fabric exterior. Main compartment with different spaces, one of which is specific and quilted for electronic devices and laptops of up to 13 inches. Flap with buckle fastening. Features a pocket with hidden magnetic closure at the back. Adjustable shoulder strap.Height x Length x Width 27 x 36 x 10 cm.View more",
    "id": "producta275"
  },
  {
    "product_name": "NYLON BACKPACK",
    "image_url": "https://static.zara.net/photos///2023/I/1/2/p/3214/220/800/2/w/448/3214220800_6_1_1.jpg?ts=1688554492477",
    "price": "₹ 2,990.00",
    "details": "Monochrome backpack. Soft design. The main compartment fastens with a zip and has two pockets inside, one with zip closure and a flat one with no closure. On the front there is a pocket with metal hook fastening. The back is padded and has fastening to attach it to luggage. Handle and two adjustable and breathable padded shoulder straps.Height x Length x Width: 40 x 27 x 15 cm. / 15.7 x 10.6 x 5.9″View more",
    "id": "producta276"
  },
  {
    "product_name": "CROSSBODY BUCKET BAG",
    "image_url": "https://static.zara.net/photos///2023/I/1/2/p/3618/220/800/2/w/448/3618220800_2_1_1.jpg?ts=1690472295687",
    "price": "₹ 2,890.00",
    "details": "Crossbody bag. Soft design. Main compartment with gathered drawstring closure and a small flat pocket on the inside. Flat adjustable shoulder strap, which can be worn crossbody style. Height x Length: 33 x 27 cm. / 12.9 x 10.6″View more",
    "id": "producta277"
  },
  {
    "product_name": "CROSSBODY BAG WITH FLAP",
    "image_url": "https://static.zara.net/photos///2023/I/1/2/p/3631/220/800/2/w/448/3631220800_6_1_1.jpg?ts=1691506702541",
    "price": "₹ 2,890.00",
    "details": "Crossbody bag. Featuring four pockets under the flap, one of which fastens with a zip. Adjustable shoulder strap.Height x Length x Width: 13 x 19.5 x 7 cm. / 5.1 x 7.6 x 2.7″View more",
    "id": "producta278"
  },
  {
    "product_name": "MINI CROSSBODY BAG WITH ASYMMETRIC FLAP",
    "image_url": "https://static.zara.net/photos///2023/I/1/2/p/3632/220/800/2/w/448/3632220800_6_1_1.jpg?ts=1692787344689",
    "price": "₹ 2,590.00",
    "details": "Crossbody bag. Main compartment with flap and double magnetic closure. The inside features a zip pocket. Plain exterior. Topstitching detail on the exterior. Features a small flat pocket at the back. Adjustable matching shoulder strap.Length x Height x Width: 20 x 13.5 x 5 cm. / 7.8 x 5.3 x 1.9″View more",
    "id": "producta279"
  },
  {
    "product_name": "SOFT TOTE BAG WITH DOUBLE POCKET",
    "image_url": "https://static.zara.net/photos///2023/I/1/2/p/3104/220/800/2/w/448/3104220800_2_1_1.jpg?ts=1685708659866",
    "price": "₹ 3,990.00",
    "details": "Tote bag. Main compartment with zip closure. Small pocket on the inside with zip closure. On the front there are two pockets with hidden magnetic closures. Two handles and a detachable and adjustable shoulder strap.Height x Length x Width: 40 x 38 x 9 cm / 15.7 x 14.9 x 3.5″View more",
    "id": "producta280"
  },
  {
    "product_name": "XL SOFT TOTE BAG",
    "image_url": "https://static.zara.net/photos///2023/I/1/2/p/3330/220/800/2/w/448/3330220800_6_1_1.jpg?ts=1690817759154",
    "price": "₹ 3,290.00",
    "details": "Tote bag. Soft construction. Main compartment without closure. Its interior features a small flat pocket without closure. Two adjustable handles.Height x Length x Width 43,5 x 48 x 15 cm. / 17.1 x 18.8 x 5.9″View more",
    "id": "producta281"
  },
  {
    "product_name": "EMBOSSED BACKPACK",
    "image_url": "https://static.zara.net/photos///2023/I/1/2/p/3243/220/800/2/w/448/3243220800_2_1_1.jpg?ts=1692627348613",
    "price": "₹ 4,990.00",
    "details": "Monochrome backpack with an embossed exterior. The main compartment closes with a zip and its interior has two pockets, one of which is large for electronic devices of up to 13 inches and another with a zip. On the front there is a medium pocket with zip closure. The back is padded. Top handle, two adjustable padded shoulder straps and a luggage tag. Height x Length x Width: 43 x 31 x 15 cm.View more",
    "id": "producta282"
  },
  {
    "product_name": "EMBOSSED BOWLING BAG WITH POCKETS",
    "image_url": "https://static.zara.net/photos///2023/I/1/2/p/3110/220/800/2/w/448/3110220800_6_1_1.jpg?ts=1689675460902",
    "price": "₹ 5,990.00",
    "details": "Bowling bag. Embossed detailing on the exterior. The main compartment has a double zip closure and the inside has a zip pocket. Featuring two medium-sized front pockets and zip fastening. Side pockets with no fastening. Featuring two handles and a matching adjustable and detachable shoulder strap.Height x Length x Width 30 x 50 x 20 cm. / 11.8 x 19.6 x 7.8″View more",
    "id": "producta283"
  },
  {
    "product_name": "RUBBERISED BACKPACK WITH FLAP",
    "image_url": "https://static.zara.net/photos///2023/I/1/2/p/3211/220/107/2/w/448/3211220107_2_1_1.jpg?ts=1689941743116",
    "price": "₹ 2,990.00",
    "details": "Backpack with a rubberised finish. The main compartment folds towards the front and closes with a zip and clip buckle. The inside has a zip pocket. The front has a zip pocket. Handle and two adjustable and breathable shoulder straps. The back is padded and breathable for improved comfort during use.Height x Length x Width 40 x 30 x 15 cm. / 15.7 x 11.8 x 5.9″View more",
    "id": "producta284"
  },
  {
    "product_name": "COMBINED BACKPACK WITH FLAP",
    "image_url": "https://static.zara.net/photos///2023/V/1/2/p/3209/220/400/2/w/448/3209220400_2_1_1.jpg?ts=1683289817172",
    "price": "₹ 3,290.00",
    "details": "Backpack in a combination of materials. The main compartment folds towards the front and closes with a zip and clip buckle. The inside has a zip pocket. The front has a flap pocket. The handle and two adjustable and breathable shoulder straps. The back is padded and breathable for improved comfort during use. Height x Length x Width: 40 x 30 x 15 cm. / 15.7 x 11.8 x 5.9″View more",
    "id": "producta285"
  },
  {
    "product_name": "SOFT XL CROSSBODY BAG",
    "image_url": "https://static.zara.net/photos///2023/V/1/2/p/3307/220/800/2/w/448/3307220800_2_1_1.jpg?ts=1682521166161",
    "price": "₹ 2,890.00",
    "details": "Crossbody bag. Monochrome. Plain design. Soft construction. The main pocket has double zip closure. The inside has a zip pocket. Adjustable shoulder strap.Height x Length x Width 38 x 42 x 5 cm. / 14.9 x 16.5 x 1.9″View more",
    "id": "producta286"
  },
  {
    "product_name": "DENIM SNEAKERS",
    "image_url": "https://static.zara.net/photos///2023/I/1/2/p/2216/220/202/2/w/448/2216220202_2_1_1.jpg?ts=1690213159158",
    "price": "₹ 3,990.00",
    "details": "Sneakers with a combination of materials, pieces and colours on the upper. Seven-eyelet facing. Contrast chunky sole.",
    "id": "producta287"
  },
  {
    "product_name": "CHUNKY TRAINERS",
    "image_url": "https://static.zara.net/photos///2023/V/1/2/p/2206/120/802/2/w/448/2206120802_2_1_1.jpg?ts=1683033215969",
    "price": "₹ 3,990.00",
    "details": "Monochrome trainers. Seven-eyelet facing. The laces are semi-hidden under two pieces, one on each side of the instep. Chunky sole with an irregular design.",
    "id": "producta288"
  },
  {
    "product_name": "CHUNKY TRAINERS",
    "image_url": "https://static.zara.net/photos///2023/I/1/2/p/2245/220/001/2/w/448/2245220001_6_1_1.jpg?ts=1692019633659",
    "price": "₹ 3,990.00",
    "details": "Sneakers. Plain upper. Seven-eyelet facing. Chunky sole with irregular design at the back.",
    "id": "producta289"
  },
  {
    "product_name": "MULTIPIECE TRAINERS",
    "image_url": "https://static.zara.net/photos///2023/I/1/2/p/2236/220/202/2/w/448/2236220202_2_1_1.jpg?ts=1692608383106",
    "price": "₹ 2,990.00",
    "details": "Trainers. Combination of materials, pieces and colours on the upper. Six-eyelet facing. Irregular and chunky sole.",
    "id": "producta290"
  },
  {
    "product_name": "LEATHER MONK SHOES",
    "image_url": "https://static.zara.net/photos///2023/I/1/2/p/2403/220/800/2/w/448/2403220800_2_1_1.jpg?ts=1686234638400",
    "price": "₹ 7,990.00",
    "details": "Leather monk shoes. Two metal buckles. Leather insole. Semi-pointed toe. Classic design. Matching sole.",
    "id": "producta291"
  },
  {
    "product_name": "SMART LEATHER SHOES",
    "image_url": "https://static.zara.net/photos///2023/I/1/1/p/2407/220/800/32/w/489/2407220800_1_1_1.jpg?ts=1692874273545",
    "price": "₹ 6,990.00",
    "details": "Oxford shoes. Plain upper with topstitching detail on the vamp and toecap. Five-eyelet facing. Classic style. Round toe.",
    "id": "producta292"
  },
  {
    "product_name": "LEATHER SQUARE TOE ANKLE BOOTS",
    "image_url": "https://static.zara.net/photos///2023/I/1/2/p/2010/220/800/2/w/448/2010220800_1_1_1.jpg?ts=1689577314802",
    "price": "₹ 9,590.00",
    "details": "Leather Chelsea boots. Elastic side gores for slipping on with ease. Square toe. Back pull tab for slipping on with ease. Thin sole.",
    "id": "producta293"
  },
  {
    "product_name": "CHELSEA BOOTS",
    "image_url": "https://static.zara.net/photos///2023/I/1/2/p/2000/220/800/2/w/448/2000220800_6_1_1.jpg?ts=1691592336024",
    "price": "₹ 4,590.00",
    "details": "Monochrome Chelsea boots. Two elastic side gores and pull tab at the back for slipping on with ease. Rounded toe. Welt with matching topstitching. Slightly chunky sole.",
    "id": "producta294"
  },
  {
    "product_name": "CHELSEA BOOTS WITH POINTED TOES",
    "image_url": "https://static.zara.net/photos///2023/I/1/2/p/2009/221/709/2/w/448/2009221709_6_1_1.jpg?ts=1692630744180",
    "price": "₹ 4,990.00",
    "details": "Monochrome Chelsea boots. Two elastic side gores and pull tab at the back for slipping on with ease. Pointed toe. Welt with matching topstitching. Slightly chunky sole.",
    "id": "producta295"
  },
  {
    "product_name": "CHELSEA BOOTS",
    "image_url": "https://static.zara.net/photos///2023/I/1/2/p/2009/220/800/2/w/448/2009220800_6_1_1.jpg?ts=1691135082187",
    "price": "₹ 4,990.00",
    "details": "Monochrome ankle boots. Matching side gores and back pull tab for slipping on with ease. Pointed toe. Classic style.",
    "id": "producta296"
  },
  {
    "product_name": "CHELSEA BOOTS",
    "image_url": "https://static.zara.net/photos///2023/I/1/2/p/2004/220/800/2/w/448/2004220800_6_1_1.jpg?ts=1689867413313",
    "price": "₹ 4,590.00",
    "details": "Chelsea boots. Matching elastic side gores on both sides. Round toe. Back pull tab for slipping on with ease. Thin sole.",
    "id": "producta297"
  },
  {
    "product_name": "LACE-UP ANKLE BOOTS",
    "image_url": "https://static.zara.net/photos///2023/I/1/2/p/2016/220/800/2/w/448/2016220800_6_1_1.jpg?ts=1692631383668",
    "price": "₹ 4,990.00",
    "details": "Lace-up boots. Seven-eyelet facing, the last two with a metal piece. Contrast-coloured rubberised detail around the upper. Back pull tab for slipping on with ease. Round toe. Slightly chunky track sole.",
    "id": "producta298"
  },
  {
    "product_name": "CHUNKY TRACK SOLE SHOES",
    "image_url": "https://static.zara.net/photos///2023/I/1/2/p/2410/220/800/2/w/448/2410220800_6_1_1.jpg?ts=1690537873492",
    "price": "₹ 3,990.00",
    "details": "Derby shoes. Four-eyelet facing. Round toe. Chunky track sole with an irregular design.",
    "id": "producta299"
  },
  {
    "product_name": "TRACK SOLE PENNY LOAFERS",
    "image_url": "https://static.zara.net/photos///2023/I/1/2/p/2621/220/800/2/w/448/2621220800_6_1_1.jpg?ts=1687854348784",
    "price": "₹ 3,990.00",
    "details": "Plain loafers. Decorative penny strap on the instep. Black chunky track sole with welt.",
    "id": "producta300"
  },
  {
    "product_name": "ROPE TRAINERS",
    "image_url": "https://static.zara.net/photos///2023/I/1/2/p/2201/221/800/2/w/448/2201221800_2_1_1.jpg?ts=1692608381803",
    "price": "₹ 3,990.00",
    "details": "Trainers. Six-eyelet facing. Rope-style laces. Contrast piece on the heel. Irregular chunky sole.",
    "id": "producta301"
  },
  {
    "product_name": "MINIMALIST RETRO TRAINERS",
    "image_url": "https://static.zara.net/photos///2023/V/1/2/p/2208/120/120/2/w/448/2208120120_2_1_1.jpg?ts=1682001963314",
    "price": "₹ 2,890.00",
    "details": "Trainers. Monochrome upper with a combination of pieces. Seven-eyelet facing. Uneven chunky sole. Retro-inspired design.",
    "id": "producta302"
  },
  {
    "product_name": "SNEAKERS WITH PIECES",
    "image_url": "https://static.zara.net/photos///2023/I/1/2/p/2213/220/800/2/w/448/2213220800_2_1_1.jpg?ts=1691062145831",
    "price": "₹ 3,990.00",
    "details": "Monochrome sneakers. Contrast rubberised pieces on the upper. Seven-eyelet facing. Chunky sole.",
    "id": "producta303"
  },
  {
    "product_name": "TRAINERS WITH TOPSTITCHING",
    "image_url": "https://static.zara.net/photos///2023/I/1/2/p/2222/220/202/2/w/448/2222220202_2_1_1.jpg?ts=1692608383079",
    "price": "₹ 2,990.00",
    "details": "Trainers with a combination of pieces. Six-eyelet facing. Chunky sole with an irregular design.",
    "id": "producta304"
  },
  {
    "product_name": "RUNNING TRAINERS WITH CHUNKY SOLES",
    "image_url": "https://static.zara.net/photos///2023/I/1/2/p/2341/120/500/2/w/448/2341120500_2_1_1.jpg?ts=1690213160278",
    "price": "₹ 2,990.00",
    "details": "Running trainers. Combination of pieces and materials on the upper. Five-eyelet facing. Back pull tab for slipping on with ease. Chunky sole with an irregular design and a combination of textures.",
    "id": "producta305"
  },
  {
    "product_name": "SPLIT SUEDE LEATHER ANKLE BOOTS",
    "image_url": "https://static.zara.net/photos///2023/I/1/2/p/2001/220/723/2/w/448/2001220723_2_1_1.jpg?ts=1690544878690",
    "price": "₹ 5,990.00",
    "details": "Leather Chelsea boots with a split suede finish. Matching elastic gores on both sides for slipping on with ease. Rounded toes. Contrast topstitching detail on the welt. Contrast rubberised soles.",
    "id": "producta306"
  },
  {
    "product_name": "MONK SHOES",
    "image_url": "https://static.zara.net/photos///2023/I/1/2/p/2402/220/800/2/w/448/2402220800_2_1_1.jpg?ts=1684313564417",
    "price": "₹ 4,990.00",
    "details": "Monk shoes. Metal buckle fastening. Semi-pointed toe. Classic style. Matching sole.",
    "id": "producta307"
  },
  {
    "product_name": "WOVEN FORMAL SHOES",
    "image_url": "https://static.zara.net/photos///2023/I/1/2/p/2425/220/700/2/w/448/2425220700_6_1_1.jpg?ts=1688654471392",
    "price": "₹ 5,590.00",
    "details": "Oxford shoes. Raised detail on the upper. .Five-eyelet facing. Classic style.",
    "id": "producta308"
  },
  {
    "product_name": "SMART SHOES",
    "image_url": "https://static.zara.net/photos///2023/I/1/2/p/2400/220/700/2/w/448/2400220700_2_1_1.jpg?ts=1686234636043",
    "price": "₹ 4,990.00",
    "details": "Classic derby shoes with a five-eyelet facing and a semi-round toe.",
    "id": "producta309"
  },
  {
    "product_name": "FORMAL SHOES",
    "image_url": "https://static.zara.net/photos///2023/V/1/2/p/2405/120/800/2/w/448/2405120800_2_1_1.jpg?ts=1671529442885",
    "price": "₹ 4,990.00",
    "details": "Derby shoes. Plain upper with matching topstitching detail. Five-eyelet facing. Classic style.",
    "id": "producta310"
  },
  {
    "product_name": "SPLIT SUEDE LEATHER SHOES WITH MOC TOE",
    "image_url": "https://static.zara.net/photos///2023/I/1/2/p/2505/220/700/2/w/448/2505220700_2_1_1.jpg?ts=1692873695026",
    "price": "₹ 7,590.00",
    "details": "Shoes with a moc toe and matching seams. Made of leather with a split suede finish. Lace-up fastening and two eyelets. Decorative welt detail around the entire shoe. Chunky sole with an irregular design.",
    "id": "producta311"
  },
  {
    "product_name": "SPLIT SUEDE LEATHER LOAFERS",
    "image_url": "https://static.zara.net/photos///2023/I/1/2/p/2644/220/800/2/w/448/2644220800_2_1_1.jpg?ts=1687946905950",
    "price": "₹ 5,990.00",
    "details": "Loafers. Made of leather with a split suede finish. Decorative penny strap on the instep. Welt detail around the upper. Chunky sole in a matching colour.",
    "id": "producta312"
  },
  {
    "product_name": "LEATHER LOAFERS",
    "image_url": "https://static.zara.net/photos///2023/V/1/2/p/2610/120/800/2/w/448/2610120800_2_1_1.jpg?ts=1681831914188",
    "price": "₹ 6,990.00",
    "details": "Leather loafers. Made of leather with a glossy finish. Decorative penny strap on the instep. Rounded toe.",
    "id": "producta313"
  },
  {
    "product_name": "LEATHER TASSEL LOAFERS",
    "image_url": "https://static.zara.net/photos///2023/I/1/2/p/2640/220/022/2/w/448/2640220022_6_1_1.jpg?ts=1692697729419",
    "price": "₹ 8,590.00",
    "details": "Leather loafers featuring decorative penny strap with fringed tassels on the instep and a contrast sole.",
    "id": "producta314"
  },
  {
    "product_name": "LEATHER LOAFERS WITH FRINGED PENNY STRAP",
    "image_url": "https://static.zara.net/photos///2023/I/1/2/p/2639/220/800/2/w/448/2639220800_6_1_1.jpg?ts=1692633545484",
    "price": "₹ 8,590.00",
    "details": "Leather loafers. Plain upper. Decorative penny strap with fringe on the instep. Matching sole.",
    "id": "producta315"
  },
  {
    "product_name": "KNIT FABRIC RUNNING TRAINERS",
    "image_url": "https://static.zara.net/photos///2023/V/1/2/p/2327/120/102/2/w/448/2327120102_2_1_1.jpg?ts=1682001966385",
    "price": "₹ 2,990.00",
    "details": "Running trainers with no laces. Made of knit fabric. Combination of pieces and colours on the upper. Chunky multi-piece sole with irregular design.",
    "id": "producta316"
  },
  {
    "product_name": "KNIT FABRIC HIGH-TOP TRAINERS",
    "image_url": "https://static.zara.net/photos///2023/I/1/2/p/2107/220/800/2/w/448/2107220800_2_1_1.jpg?ts=1684499235381",
    "price": "₹ 3,990.00",
    "details": "High-top trainers. Made of knit fabric. Wraparound upper in a single piece, sock-style design, without laces. Chunky sole with contrast irregular design.",
    "id": "producta317"
  },
  {
    "product_name": "RUNNING SNEAKERS WITH CHUNKY SOLES",
    "image_url": "https://static.zara.net/photos///2023/I/1/2/p/2306/220/800/2/w/448/2306220800_6_1_1.jpg?ts=1690543068926",
    "price": "₹ 3,990.00",
    "details": "Sneakers. Combination of pieces and textures on the upper. Seven-eyelet facing. Chunky sole with a raised detail on the front and with an irregular design. Retro-inspired design.",
    "id": "producta318"
  },
  {
    "product_name": "RUNNING SNEAKERS WITH CHUNKY SOLES",
    "image_url": "https://static.zara.net/photos///2023/I/1/2/p/2308/220/120/2/w/448/2308220120_6_1_1.jpg?ts=1691572960293",
    "price": "₹ 4,590.00",
    "details": "Running sneakers. Combination of pieces and materials on the upper. Six-eyelet facing. Chunky sole with an irregular design and hollow detail in the centre of the sole in a combination of textures.",
    "id": "producta319"
  },
  {
    "product_name": "CHUNKY LEATHER BOOTS",
    "image_url": "https://static.zara.net/photos///2023/I/1/2/p/2011/220/800/2/w/0/2011220800_2_2_1.jpg?ts=1690471799752",
    "price": "₹ 9,590.00",
    "details": "Leather monochrome Chelsea boots. Elastic side gores and pull tab at the back for slipping on with ease. Round toe. Matching topstitching on the welt. Chunky track sole.",
    "id": "producta320"
  },
  {
    "product_name": "LEATHER KNEE-HIGH BOOTS",
    "image_url": "https://static.zara.net/photos///2023/I/1/2/p/2071/220/800/2/w/0/2071220800_1_1_1.jpg?ts=1689577315044",
    "price": "₹ 11,990.00",
    "details": "Leather knee-high boots. 10-eyelet facing. Inner zip for slipping on with ease. Round toe. Chunky track sole.",
    "id": "producta321"
  },
  {
    "product_name": "LEATHER CHELSEA BOOTS",
    "image_url": "https://static.zara.net/photos///2023/I/1/2/p/2007/220/800/2/w/448/2007220800_6_1_1.jpg?ts=1692866827693",
    "price": "₹ 6,990.00",
    "details": "Leather Chelsea boots. Elastic side gores and pull tab at the back for slipping on with ease. Round toe. Chunky track sole.",
    "id": "producta322"
  },
  {
    "product_name": "DOUBLE-STRAP SANDALS",
    "image_url": "https://static.zara.net/photos///2023/I/1/2/p/2700/220/700/2/w/448/2700220700_2_1_1.jpg?ts=1687946939707",
    "price": "₹ 3,290.00",
    "details": "Sandals with two wide buckled straps across the instep. Chunky sole.",
    "id": "producta323"
  },
  {
    "product_name": "DOUBLE-STRAP SANDALS",
    "image_url": "https://static.zara.net/photos///2023/V/1/2/p/2700/120/800/2/w/448/2700120800_2_1_1.jpg?ts=1670846673452",
    "price": "₹ 2,990.00",
    "details": "Slide sandals. Two wide straps across the instep with buckle details. Insole with anatomical shoe last and matching chunky sole.",
    "id": "producta324"
  },
  {
    "product_name": "SPORTY SPLIT SUEDE LOAFERS",
    "image_url": "https://static.zara.net/photos///2023/V/1/2/p/2618/120/707/2/w/448/2618120707_2_1_1.jpg?ts=1683033229015",
    "price": "₹ 5,990.00",
    "details": "Leather loafers. Plain upper. Welt around the upper. Contrast-coloured chunky sole.",
    "id": "producta325"
  },
  {
    "product_name": "CHUNKY TRAINERS",
    "image_url": "https://static.zara.net/photos///2023/V/1/2/p/2253/120/001/2/w/448/2253120001_2_1_1.jpg?ts=1683033214995",
    "price": "₹ 4,990.00",
    "details": "Trainers with contrast materials and colours on the upper. Seven-eyelet facing. Contrast colour piece at the back. Chunky sole with irregular design.",
    "id": "producta326"
  },
  {
    "product_name": "CHUNKY HIGH-TOP SNEAKERS",
    "image_url": "https://static.zara.net/photos///2023/I/1/2/p/2105/220/202/2/w/448/2105220202_2_1_1.jpg?ts=1692608382269",
    "price": "₹ 3,990.00",
    "details": "High-top sneakers. Nine-eyelet facing, the top three with metal detail. Features a contrast-coloured piece at the back. Slightly chunky rubber sole with an irregular design on the toecap.",
    "id": "producta327"
  },
  {
    "product_name": "MULTI-PIECE HIGH-TOP SNEAKERS",
    "image_url": "https://static.zara.net/photos///2023/I/1/2/p/2104/220/001/2/w/448/2104220001_2_1_1.jpg?ts=1692608381454",
    "price": "₹ 3,290.00",
    "details": "High-top sneakers. Contrast pieces on the upper. Nine-eyelet facing. Chunky rubber sole. Retro design.",
    "id": "producta328"
  },
  {
    "product_name": "LACE-UP HIGH-TOP TRAINERS",
    "image_url": "https://static.zara.net/photos///2023/I/1/2/p/2101/220/120/2/w/448/2101220120_2_1_1.jpg?ts=1686559821642",
    "price": "₹ 3,990.00",
    "details": "High-top trainers. Combination of colours on the upper. Seven-eyelet facing. Chunky rubber sole.",
    "id": "producta329"
  },
  {
    "product_name": "LEATHER PENNY STRAP LOAFERS",
    "image_url": "https://static.zara.net/photos///2023/I/1/2/p/2686/120/800/2/w/448/2686120800_2_1_1.jpg?ts=1686234636019",
    "price": "₹ 7,990.00",
    "details": "Leather loafers. Plain upper. Decorative penny strap detail on the instep. Round toe. Matching sole.",
    "id": "producta330"
  },
  {
    "product_name": "LEATHER PENNY STRAP LOAFERS",
    "image_url": "https://static.zara.net/photos///2023/I/1/2/p/2602/220/800/2/w/448/2602220800_6_1_1.jpg?ts=1692019633682",
    "price": "₹ 6,990.00",
    "details": "Leather loafers. Welt detail around the upper. Decorative penny strap on the instep. Matching sole.",
    "id": "producta331"
  },
  {
    "product_name": "LEATHER PENNY STRAP LOAFERS",
    "image_url": "https://static.zara.net/photos///2023/I/1/2/p/2633/220/700/2/w/448/2633220700_6_1_1.jpg?ts=1690817759147",
    "price": "₹ 7,590.00",
    "details": "Leather loafers. Plain upper. Decorative penny strap on the instep. Welt detail with contrast-coloured topstitching. Round toe. Contrast sole.",
    "id": "producta332"
  },
  {
    "product_name": "BASIC LOAFERS WITH PENNY STRAP",
    "image_url": "https://static.zara.net/photos///2023/I/1/2/p/2601/221/707/2/w/448/2601221707_2_1_1.jpg?ts=1687946753673",
    "price": "₹ 4,990.00",
    "details": "Loafers. Plain upper. Decorative penny strap detail on the instep. Matching sole.",
    "id": "producta333"
  },
  {
    "product_name": "CONTRAST TRAINERS",
    "image_url": "https://static.zara.net/photos///2023/I/1/2/p/2204/220/001/2/w/448/2204220001_2_1_1.jpg?ts=1687173844797",
    "price": "₹ 2,890.00",
    "details": "Trainers. Combination of pieces and colours on the upper. .Seven-eyelet facing. Contrast-coloured, slightly chunky rubber sole.",
    "id": "producta334"
  },
  {
    "product_name": "SNEAKERS WITH CONTRAST PIECES",
    "image_url": "https://static.zara.net/photos///2023/I/1/2/p/2255/220/202/2/w/448/2255220202_6_1_1.jpg?ts=1692019633665",
    "price": "₹ 2,890.00",
    "details": "Casual sneakers. Combination of pieces and colours on the upper. Seven-eyelet facing. Matching, slightly chunky rubber sole.",
    "id": "producta335"
  },
  {
    "product_name": "CHELSEA BOOTS WITH CHUNKY TRACK SOLES",
    "image_url": "https://static.zara.net/photos///2023/I/1/1/p/2012/220/002/2/w/448/2012220002_2_1_1.jpg?ts=1692256328281",
    "price": "₹ 4,990.00",
    "details": "Chelsea boots with elastic side gores and pull tab at the back for slipping on with ease. Round toe. Matching topstitching on the welt. Chunky track sole.",
    "id": "producta336"
  },
  {
    "product_name": "CHUNKY SOLE ANKLE BOOTS",
    "image_url": "https://static.zara.net/photos///2023/I/1/2/p/2005/222/202/2/w/448/2005222202_2_1_1.jpg?ts=1689699478093",
    "price": "₹ 5,990.00",
    "details": "Chelsea boots. Elastic side gores for slipping on with ease. Round toe. Chunky contrast-coloured track sole.",
    "id": "producta337"
  },
  {
    "product_name": "CHUNKY LACE-UP BOOTS",
    "image_url": "https://static.zara.net/photos///2023/I/1/2/p/2022/220/800/2/w/448/2022220800_6_1_1.jpg?ts=1692195074272",
    "price": "₹ 5,990.00",
    "details": "Lace-up boots. Eight-eyelet facing. Back pull tab for slipping on with ease. Round toe. Double welt detail around the upper. Matching chunky track sole.",
    "id": "producta338"
  },
  {
    "product_name": "DENIM SANDALS",
    "image_url": "https://static.zara.net/photos///2023/I/1/2/p/2718/220/401/2/w/448/2718220401_6_1_1.jpg?ts=1689697483635",
    "price": "₹ 3,290.00",
    "details": "Denim print sandals. Two wide straps across the instep. Double chunky track sole.",
    "id": "producta339"
  },
  {
    "product_name": "KNIT FABRIC RUNNING SNEAKERS",
    "image_url": "https://static.zara.net/photos///2023/I/1/2/p/2310/220/512/2/w/0/2310220512_2_1_1.jpg?ts=1690213160178",
    "price": "₹ 2,890.00",
    "details": "Running sneakers made of knit fabric. Lace-up fastening with seven-eyelet facing. Combination of pieces and materials on the upper. Chunky multi-piece sole with irregular design.",
    "id": "producta340"
  },
  {
    "product_name": "CONTRAST RETRO RUNNING SNEAKERS",
    "image_url": "https://static.zara.net/photos///2023/I/1/1/p/2311/220/202/2/w/448/2311220202_2_1_1.jpg?ts=1692872843479",
    "price": "₹ 3,990.00",
    "details": "Running sneakers in a combination of pieces and materials on the upper. Six-eyelet facing. Chunky sole with an irregular design and a combination of textures. Retro-inspired design.",
    "id": "producta341"
  },
  {
    "product_name": "CONTRAST RUNNING SNEAKERS",
    "image_url": "https://static.zara.net/photos///2023/I/1/2/p/2329/220/400/2/w/448/2329220400_2_1_1.jpg?ts=1692627349104",
    "price": "₹ 3,990.00",
    "details": "Running sneakers in a combination of materials and pieces on the upper. Seven-eyelet facing. Chunky sole in contrast textures, with an irregular design.",
    "id": "producta342"
  },
  {
    "product_name": "CONTRAST RUNNING SNEAKERS",
    "image_url": "https://static.zara.net/photos///2023/I/1/2/p/2307/220/107/2/w/448/2307220107_2_1_1.jpg?ts=1690213158621",
    "price": "₹ 4,590.00",
    "details": "Running sneakers. Combination of pieces and materials on the upper. Six-eyelet facing. Back pull tab for slipping on with ease. Chunky sole with an irregular design and a combination of textures.",
    "id": "producta343"
  },
  {
    "product_name": "ANIMAL PRINT LEATHER BOOTS",
    "image_url": "https://static.zara.net/photos///2023/I/1/1/p/2080/220/107/2/w/448/2080220107_2_4_1.jpg?ts=1692257064456",
    "price": "₹ 11,990.00",
    "details": "Leather boots. Animal print on the upper. Square heel. Side zip for slipping on with ease. Semi-round toe.",
    "id": "producta344"
  },
  {
    "product_name": "LEATHER COWBOY BOOTS",
    "image_url": "https://static.zara.net/photos///2023/I/1/1/p/2035/220/800/3/w/448/2035220800_2_1_1.jpg?ts=1692610101794",
    "price": "₹ 10,990.00",
    "details": "Monochrome cowboy boots. Made of leather. Back pull tab for slipping on with ease. Pointed toe. Block heel.",
    "id": "producta345"
  },
  {
    "product_name": "VIBRAM® RUNNING SNEAKERS",
    "image_url": "https://static.zara.net/photos///2023/I/1/2/p/2355/120/800/2/w/448/2355120800_2_2_1.jpg?ts=1692697108377",
    "price": "₹ 10,990.00",
    "details": "Running sneakers. Combination of materials and pieces on the upper. Six-eyelet facing. Vibram® sole for greater grip and traction. Vibram® sole.",
    "id": "producta346"
  },
  {
    "product_name": "CHUNKY SLIDERS WITH TEXTURES",
    "image_url": "https://static.zara.net/photos///2023/I/1/2/p/2775/220/002/2/w/448/2775220002_2_1_1.jpg?ts=1687186989077",
    "price": "₹ 2,890.00",
    "details": "Slider pool sandals with chunky rubber soles and wide textured strap across the instep. Matching sole.",
    "id": "producta347"
  },
  {
    "product_name": "TEXTURED SLIDERS",
    "image_url": "https://static.zara.net/photos///2023/V/1/2/p/2702/120/800/2/w/448/2702120800_2_1_1.jpg?ts=1682001969713",
    "price": "₹ 1,490.00",
    "details": "Monochrome slider sandals. Chunky rubber sole and wide strap across the instep. Textured detail on the instep and heel.",
    "id": "producta348"
  },
  {
    "product_name": "FORMAL SHOES",
    "image_url": "https://static.zara.net/photos///2023/V/1/2/p/2401/222/800/2/w/448/2401222800_2_1_1.jpg?ts=1684317203836",
    "price": "₹ 4,990.00",
    "details": "Classic derby shoes with a five-eyelet facing and round toe.",
    "id": "producta349"
  },
  {
    "product_name": "SMART SHOES WITH BROGUING",
    "image_url": "https://static.zara.net/photos///2023/I/1/2/p/2423/220/700/2/w/448/2423220700_6_1_1.jpg?ts=1691058450515",
    "price": "₹ 4,590.00",
    "details": "Oxford shoes with broguing. Five-eyelet facing. Classic style. Rounded toe.",
    "id": "producta350"
  },
  {
    "product_name": "BASIC TASSEL LOAFERS",
    "image_url": "https://static.zara.net/photos///2023/V/1/2/p/2606/120/800/2/w/448/2606120800_2_1_1.jpg?ts=1681297995490",
    "price": "₹ 4,990.00",
    "details": "Loafers with decorative penny strap with tassels with fringing on the instep and a matching sole.",
    "id": "producta351"
  },
  {
    "product_name": "SPLIT SUEDE LEATHER SANDALS",
    "image_url": "https://static.zara.net/photos///2023/I/1/2/p/2725/220/723/32/w/448/2725220723_1_1_1.jpg?ts=1689165453908",
    "price": "₹ 3,990.00",
    "details": "Leather sandals with a split suede finish. Featuring two wide straps across the instep with buckle detail. Chunky sole.",
    "id": "producta352"
  },
  {
    "product_name": "SPLIT SUEDE LEATHER SANDALS WITH STRAPS",
    "image_url": "https://static.zara.net/photos///2023/I/1/2/p/2726/220/707/2/w/448/2726220707_6_1_1.jpg?ts=1688026051933",
    "price": "₹ 3,990.00",
    "details": "Leather sandals with a split suede finish. Featuring three wide straps on the instep. Chunky sole.",
    "id": "producta353"
  },
  {
    "product_name": "SPLIT SUEDE LEATHER SANDALS",
    "image_url": "https://static.zara.net/photos///2023/I/1/2/p/2752/220/131/2/w/448/2752220131_6_1_1.jpg?ts=1689149326548",
    "price": "₹ 3,290.00",
    "details": "Leather sandals with a split suede finish. Two wide straps across the instep with hook-and-loop fastening. Slightly chunky sole.",
    "id": "producta354"
  },
  {
    "product_name": "MONOCHROME SNEAKERS",
    "image_url": "https://static.zara.net/photos///2023/I/1/2/p/2243/220/001/2/w/448/2243220001_6_1_1.jpg?ts=1690973962820",
    "price": "₹ 2,890.00",
    "details": "Monochrome sneakers. Three hook-and-loop strap fastening. Lightweight chunky sole.",
    "id": "producta355"
  },
  {
    "product_name": "MINIMALIST LACE-UP TRAINERS WITH TOPSTITCHING",
    "image_url": "https://static.zara.net/photos///2023/I/1/2/p/2281/220/001/2/w/448/2281220001_2_1_1.jpg?ts=1686559823210",
    "price": "₹ 2,590.00",
    "details": "Trainers. Plain upper. Seven-eyelet facing. Topstitching detail and reinforced piece on the instep. Slightly chunky sole.",
    "id": "producta356"
  },
  {
    "product_name": "CHUNKY LACE-UP BOOTS",
    "image_url": "https://static.zara.net/photos///2023/I/1/2/p/2006/221/203/2/w/448/2006221203_6_1_1.jpg?ts=1689323990322",
    "price": "₹ 5,990.00",
    "details": "Boots. Adjustable strap with buckle on the leg. Inner zip. Seven-eyelet facing. Round toe. Contrast chunky track sole.",
    "id": "producta357"
  },
  {
    "product_name": "COLOURED TRACK SHOES",
    "image_url": "https://static.zara.net/photos///2023/I/1/2/p/2418/220/030/2/w/448/2418220030_6_1_1.jpg?ts=1692024922137",
    "price": "₹ 4,590.00",
    "details": "Derby shoes. Plain upper. Four-eyelet facing. Round toe. Double trim around the upper, chunky track sole in a contrast colour.",
    "id": "producta358"
  },
  {
    "product_name": "MOC TOE CHUNKY SHOES",
    "image_url": "https://static.zara.net/photos///2023/I/1/2/p/2419/220/800/2/w/448/2419220800_6_1_1.jpg?ts=1692019634075",
    "price": "₹ 4,990.00",
    "details": "Shoes with a moc toe detail with matching seams. Two-eyelet facing. Decorative welt detail around the entire shoe in the same colour as the chunky track sole.",
    "id": "producta359"
  },
  {
    "product_name": "CONTRAST PENNY STRAP LOAFERS",
    "image_url": "https://static.zara.net/photos///2023/I/1/2/p/2625/220/001/2/w/448/2625220001_2_1_1.jpg?ts=1690472194616",
    "price": "₹ 4,590.00",
    "details": "Loafers with contrast colours on the upper. Decorative penny strap on the instep. Welt detail around the upper. Chunky track sole.",
    "id": "producta360"
  },
  {
    "product_name": "KNIT ESPADRILLES",
    "image_url": "https://static.zara.net/photos///2023/I/1/2/p/2743/120/400/2/w/448/2743120400_2_1_1.jpg?ts=1687946964561",
    "price": "₹ 2,890.00",
    "details": "Espadrilles in knit fabric. Jute-lined sole.",
    "id": "producta361"
  },
  {
    "product_name": "CONTRAST ESPADRILLES",
    "image_url": "https://static.zara.net/photos///2023/V/1/2/p/2745/120/719/2/w/448/2745120719_2_1_1.jpg?ts=1681831918903",
    "price": "₹ 2,890.00",
    "details": "Espadrilles made of cotton fabric. Jute-lined sole.",
    "id": "producta362"
  },
  {
    "product_name": "OPEN LEATHER SHOES",
    "image_url": "https://static.zara.net/photos///2023/I/1/2/p/2453/220/800/2/w/448/2453220800_2_1_1.jpg?ts=1687946718374",
    "price": "₹ 8,590.00",
    "details": "Leather shoes. Plain upper. Round toe. Buckle fastening on the instep.",
    "id": "producta363"
  },
  {
    "product_name": "LEATHER MULE MOCCASINS",
    "image_url": "https://static.zara.net/photos///2023/I/1/2/p/2412/220/800/2/w/448/2412220800_2_1_1.jpg?ts=1689699478063",
    "price": "₹ 8,590.00",
    "details": "Babouches made of leather. Square toe. Can be worn as a mules with the heels down.",
    "id": "producta364"
  },
  {
    "product_name": "LEATHER SQUARE LOAFERS - LIMITED EDITION",
    "image_url": "https://static.zara.net/photos///2023/I/1/2/p/2615/220/800/2/w/448/2615220800_6_1_1.jpg?ts=1689255427356",
    "price": "₹ 8,590.00",
    "details": "Leather loafers. Plain upper. Decorative penny strap on the instep. Square toe. Matching slightly chunky sole.",
    "id": "producta365"
  },
  {
    "product_name": "TEXTURED TRAINERS",
    "image_url": "https://static.zara.net/photos///2023/I/1/2/p/2223/220/120/2/w/448/2223220120_2_1_1.jpg?ts=1686130020763",
    "price": "₹ 3,990.00",
    "details": "Trainers. Combination of pieces on the upper. Six-eyelet facing. Chunky raised sole with an irregular design.",
    "id": "producta366"
  },
  {
    "product_name": "TEXTURED HIGH-TOP SNEAKERS",
    "image_url": "https://static.zara.net/photos///2023/I/1/2/p/2111/220/800/2/w/448/2111220800_6_1_1.jpg?ts=1692172783853",
    "price": "₹ 4,990.00",
    "details": "High-top sneakers. Textured upper. Eight-eyelet facing. Back pull tab for slipping on with ease. Trimming around the upper. Matching chunky sole.",
    "id": "producta367"
  },
  {
    "product_name": "MONOCHROME TRAINERS",
    "image_url": "https://static.zara.net/photos///2023/I/1/2/p/2224/220/500/2/w/448/2224220500_2_1_1.jpg?ts=1686234636715",
    "price": "₹ 4,590.00",
    "details": "Monochrome trainers. Seven-eyelet facing. Chunky sole.",
    "id": "producta368"
  },
  {
    "product_name": "CONTRAST RUNNING SNEAKERS",
    "image_url": "https://static.zara.net/photos///2023/I/1/2/p/2358/220/001/2/w/448/2358220001_2_1_1.jpg?ts=1691674274158",
    "price": "₹ 3,290.00",
    "details": "Running sneakers in a combination of materials on the upper. Six-eyelet facing. Chunky sole in contrast colours. Retro-inspired design.",
    "id": "producta369"
  },
  {
    "product_name": "CONTRAST RETRO RUNNING SNEAKERS",
    "image_url": "https://static.zara.net/photos///2023/I/1/2/p/2335/220/402/2/w/448/2335220402_2_1_1.jpg?ts=1691576546420",
    "price": "₹ 3,990.00",
    "details": "Running trainers in a combination of materials and colours on the upper. Six-eyelet facing. Chunky sole in contrast colours. Retro-inspired design.",
    "id": "producta370"
  },
  {
    "product_name": "CONTRAST RUNNING TRAINERS",
    "image_url": "https://static.zara.net/photos///2023/I/1/2/p/2301/220/800/2/w/448/2301220800_2_1_1.jpg?ts=1691062145111",
    "price": "₹ 3,590.00",
    "details": "Running trainers in a combination of materials and colours on the upper. Seven-eyelet facing. Chunky sole in contrast colours. Retro-inspired design.",
    "id": "producta371"
  },
  {
    "product_name": "CONTRAST RUNNING SNEAKERS",
    "image_url": "https://static.zara.net/photos///2023/I/1/2/p/2316/220/800/2/w/448/2316220800_2_1_1.jpg?ts=1692627350148",
    "price": "₹ 3,990.00",
    "details": "Running sneakers in a combination of materials on the upper. Six-eyelet facing. Chunky track sole in a contrast colour. Retro-inspired design.",
    "id": "producta372"
  },
  {
    "product_name": "SOFT LEATHER LOAFERS",
    "image_url": "https://static.zara.net/photos///2023/V/1/2/p/2614/120/700/2/w/448/2614120700_2_1_1.jpg?ts=1681297996885",
    "price": "₹ 6,990.00",
    "details": "Leather loafers. Welt detail around the upper. Decorative tassel on the instep. Contrast-coloured sole.",
    "id": "producta373"
  },
  {
    "product_name": "SPLIT SUEDE LOAFERS WITH TASSELS",
    "image_url": "https://static.zara.net/photos///2023/I/1/2/p/2627/220/400/2/w/448/2627220400_6_1_1.jpg?ts=1691573804312",
    "price": "₹ 5,990.00",
    "details": "Loafers. Made of split suede leather. Welt detail around the upper. Tassels on the instep. Contrast sole.",
    "id": "producta374"
  },
  {
    "product_name": "MULTICOLOURED TECHNICAL SANDALS",
    "image_url": "https://static.zara.net/photos///2023/I/1/2/p/2705/220/202/2/w/448/2705220202_6_1_1.jpg?ts=1689693871785",
    "price": "₹ 2,590.00",
    "details": "Sandals with multicoloured straps. Hook-and-loop fastening at the ankle and a back piece for a better fit. Lightweight sole.",
    "id": "producta375"
  },
  {
    "product_name": "CHUNKY TECHNICAL SLIDE SANDALS",
    "image_url": "https://static.zara.net/photos///2023/I/1/2/p/2720/220/805/2/w/448/2720220805_2_1_1.jpg?ts=1687186988743",
    "price": "₹ 2,590.00",
    "details": "Technical slide sandals. Wide strap with three hook-and-loop straps. Chunky track sole.",
    "id": "producta376"
  },
  {
    "product_name": "CHUNKY TECHNICAL SLIDE SANDALS",
    "image_url": "https://static.zara.net/photos///2023/I/1/2/p/2720/221/500/2/w/448/2720221500_2_1_1.jpg?ts=1687190990933",
    "price": "₹ 2,590.00",
    "details": "Technical slide sandals. Wide strap with hook-and-loop fastening and two contrast-coloured straps. Chunky track sole.",
    "id": "producta377"
  },
  {
    "product_name": "CHUNKY SHOES WITH TOPSTITCHING",
    "image_url": "https://static.zara.net/photos///2023/I/1/2/p/2417/220/800/2/w/448/2417220800_2_1_1.jpg?ts=1690472193697",
    "price": "₹ 4,590.00",
    "details": "Lace-up shoes. Plain upper. Four-eyelet facing. Moc toe detail and contrast-coloured topstitching around the upper. Round toe. Double welt around the upper. Chunky track sole.",
    "id": "producta378"
  },
  {
    "product_name": "CHUNKY TRACK SOLE SHOES",
    "image_url": "https://static.zara.net/photos///2023/I/1/2/p/2414/221/001/2/w/448/2414221001_2_1_1.jpg?ts=1684763746755",
    "price": "₹ 4,990.00",
    "details": "Derby shoes. Plain upper. Four-eyelet facing. Round toe. Matching chunky track sole.",
    "id": "producta379"
  },
  {
    "product_name": "TRACK SOLE LOAFERS",
    "image_url": "https://static.zara.net/photos///2023/I/1/2/p/2620/220/800/2/w/0/2620220800_2_1_1.jpg?ts=1684763884540",
    "price": "₹ 4,590.00",
    "details": "Loafers. Plain upper. Decorative penny strap with metal appliqué on the instep. Matching chunky track sole and welt.",
    "id": "producta380"
  },
  {
    "product_name": "MOC TOE SHOES",
    "image_url": "https://static.zara.net/photos///2023/I/1/2/p/2500/220/800/2/w/448/2500220800_2_1_1.jpg?ts=1686666005169",
    "price": "₹ 4,590.00",
    "details": "Shoes featuring moc toe detail with matching seams. Lace-up fastening. Decorative welt detail around the entire shoe. Chunky track sole with an irregular design and welt.",
    "id": "producta381"
  },
  {
    "product_name": "SPORTY LEATHER LOAFERS",
    "image_url": "https://static.zara.net/photos///2023/V/1/2/p/2630/120/805/2/w/448/2630120805_2_1_1.jpg?ts=1680774584344",
    "price": "₹ 4,590.00",
    "details": "Loafers made of leather with a split suede finish. Plain upper with moc toe detail. Round toe. Contrast-coloured sole.",
    "id": "producta382"
  },
  {
    "product_name": "CANVAS DECK SHOES",
    "image_url": "https://static.zara.net/photos///2023/V/1/2/p/2656/220/102/2/w/448/2656220102_2_1_1.jpg?ts=1683545134010",
    "price": "₹ 3,990.00",
    "details": "Sporty deck shoes. Contrast piece detail on the back and around the edge. Two-eyelet facing. Contrast chunky sole.",
    "id": "producta383"
  },
  {
    "product_name": "BRAIDED SANDALS",
    "image_url": "https://static.zara.net/photos///2023/I/1/2/p/2727/220/800/2/w/448/2727220800_2_1_1.jpg?ts=1686234637194",
    "price": "₹ 2,890.00",
    "details": "Monochrome slide sandals. Chunky rubber sole and wide braided strap across the instep. Round toe.",
    "id": "producta384"
  },
  {
    "product_name": "CROSSOVER SANDALS",
    "image_url": "https://static.zara.net/photos///2023/V/1/2/p/2707/120/800/2/w/448/2707120800_2_1_1.jpg?ts=1681297999957",
    "price": "₹ 2,890.00",
    "details": "Slide sandals with two wide criss-cross straps on the instep. Matching sole with slight volume.",
    "id": "producta385"
  },
  {
    "product_name": "CRISS-CROSS SANDALS",
    "image_url": "https://static.zara.net/photos///2023/V/1/2/p/2707/121/120/2/w/448/2707121120_2_1_1.jpg?ts=1683816080493",
    "price": "₹ 2,890.00",
    "details": "Slider sandals with two wide criss-cross straps on the instep. Matching sole.",
    "id": "producta386"
  },
  {
    "product_name": "LEATHER PENNY STRAP LOAFERS",
    "image_url": "https://static.zara.net/photos///2023/V/1/2/p/2615/120/700/2/w/448/2615120700_2_1_1.jpg?ts=1678112603994",
    "price": "₹ 7,990.00",
    "details": "Leather loafers. Plain upper. Decorative penny strap detail on the instep. Round toe. Contrast sole.",
    "id": "producta387"
  },
  {
    "product_name": "BASIC TASSEL LOAFERS",
    "image_url": "https://static.zara.net/photos///2022/I/1/2/p/2601/020/100/2/w/448/2601020100_2_1_1.jpg?ts=1663602227246",
    "price": "₹ 4,990.00",
    "details": "Loafers featuring decorative penny strap with tassels with fringing on the instep and a matching sole.",
    "id": "producta388"
  },
  {
    "product_name": "LEATHER SHOES",
    "image_url": "https://static.zara.net/photos///2023/V/1/2/p/2400/121/105/2/w/448/2400121105_2_1_1.jpg?ts=1683033226867",
    "price": "₹ 7,990.00",
    "details": "Lace-up derby shoes made of leather. Rounded toe. Five-eyelet facing. Classic style.",
    "id": "producta389"
  },
  {
    "product_name": "TRACK SOLE DERBY SHOES",
    "image_url": "https://static.zara.net/photos///2023/V/1/1/p/2505/120/800/82/w/0/2505120800_1_1_1.jpg?ts=1677060879703",
    "price": "₹ 4,590.00",
    "details": "Lace-up derby shoes. Rounded toe. Four-eyelet facing. Slightly chunky track sole.",
    "id": "producta390"
  },
  {
    "product_name": "MULTIPIECE SNEAKERS",
    "image_url": "https://static.zara.net/photos///2023/V/1/2/p/2205/120/203/2/w/0/2205120203_2_1_1.jpg?ts=1671529438807",
    "price": "₹ 4,990.00",
    "details": "Lace-up trainers. Combination of pieces and colours on the upper. Six-eyelet facing. Contrast-coloured topstitching detail. Slightly chunky sole.",
    "id": "producta391"
  },
  {
    "product_name": "MULTIPIECE SNEAKERS",
    "image_url": "https://static.zara.net/photos///2023/V/1/2/p/2215/120/203/2/w/448/2215120203_2_1_1.jpg?ts=1679323441591",
    "price": "₹ 4,590.00",
    "details": "Trainers with a combination of materials, pieces and colours on the upper. Eight-eyelet facing. Chunky sole in a combination of colours with an irregular design.",
    "id": "producta392"
  },
  {
    "product_name": "MULTI-PIECE SNEAKERS",
    "image_url": "https://static.zara.net/photos///2023/V/1/2/p/2217/120/203/2/w/0/2217120203_2_1_1.jpg?ts=1679323441772",
    "price": "₹ 4,590.00",
    "details": "Trainers. Combination of materials, pieces and colours on the upper. Six-eyelet facing. Slightly chunky sole. Retro design.",
    "id": "producta393"
  },
  {
    "product_name": "MULTIPIECE SNEAKERS",
    "image_url": "https://static.zara.net/photos///2023/V/1/2/p/2302/120/203/2/w/448/2302120203_2_1_1.jpg?ts=1675083705265",
    "price": "₹ 4,990.00",
    "details": "Trainers with contrast materials and colours on the upper. Five-eyelet facing. Chunky sole with contrasting colours and irregular design.",
    "id": "producta394"
  },
  {
    "product_name": "MINIMALIST LACE-UP TRAINERS",
    "image_url": "https://static.zara.net/photos///2022/I/1/2/p/2221/020/001/2/w/448/2221020001_2_1_1.jpg?ts=1660225517147",
    "price": "₹ 2,990.00",
    "details": "Trainers. Seven-eyelet facing. White sole.",
    "id": "producta395"
  },
  {
    "product_name": "CHUNKY SANDALS",
    "image_url": "https://static.zara.net/photos///2023/V/1/2/p/2711/120/800/2/w/448/2711120800_2_1_1.jpg?ts=1677583222583",
    "price": "₹ 1,790.00",
    "details": "Slide sandals. Plain upper. Matching chunky sole.",
    "id": "producta396"
  },
  {
    "product_name": "ATHLETICZ RUNNING TRAINERS",
    "image_url": "https://static.zara.net/photos///2023/V/1/1/p/2380/220/800/2/w/0/2380220800_2_1_1.jpg?ts=1683186343514",
    "price": "₹ 5,990.00",
    "details": "Running trainers with Spume Foam technology that guarantees lightness and comfort. Contrast colours and materials on the upper. Six-eyelet facing. Slightly chunky sole.ATHLETICZ Collection.View more",
    "id": "producta398"
  },
  {
    "product_name": "ATHLETICZ RUNNING TRAINERS",
    "image_url": "https://static.zara.net/photos///2023/V/1/2/p/2336/120/202/2/2336120202_16_1_1/w/37/poster.jpg?ts=1677143005372",
    "price": "₹ 5,990.00",
    "details": "Running trainers. Designed for running thanks to Spume Foam technology that guarantees lightness and comfort. Multicoloured upper in a breathable technical fabric with rubberised details. Seven-eyelet facing. Chunky sole in a combination of colours.ATHLETICZ Collection.View more",
    "id": "producta399"
  },
  {
    "product_name": "CHUNKY LEATHER SHOES WITH TOECAP DETAIL",
    "image_url": "https://static.zara.net/photos///2023/I/1/1/p/2416/220/800/34/w/448/2416220800_1_1_1.jpg?ts=1692003866919",
    "price": "₹ 8,590.00",
    "details": "Leather derby shoes. Plain upper. Four-eyelet facing. Round toe. Matching chunky sole.",
    "id": "producta400"
  },
  {
    "product_name": "CHUNKY LEATHER SHOES",
    "image_url": "https://static.zara.net/photos///2023/I/1/2/p/2456/220/800/2/w/448/2456220800_6_1_1.jpg?ts=1691748309461",
    "price": "₹ 8,590.00",
    "details": "Leather derby shoes. Plain upper. Five-eyelet facing. Round toe. Chunky sole.",
    "id": "producta401"
  },
  {
    "product_name": "MINIMALIST LACE-UP TRAINERS",
    "image_url": "https://static.zara.net/photos///2023/I/1/2/p/2210/220/716/2/w/448/2210220716_2_1_1.jpg?ts=1684937055032",
    "price": "₹ 2,890.00",
    "details": "Trainers with a plain upper. Seven-eyelet facing. Slightly chunky uniform sole.",
    "id": "producta402"
  },
  {
    "product_name": "LEATHER LOAFERS WITH TASSEL",
    "image_url": "https://static.zara.net/photos///2023/I/1/2/p/2605/220/402/2/w/448/2605220402_2_1_1.jpg?ts=1684313565612",
    "price": "₹ 5,990.00",
    "details": "Leather loafers. Bow detail on the instep with a continuation of the drawstring on the side. Contrast sole.",
    "id": "producta403"
  },
  {
    "product_name": "LEATHER VIBRAM® SLINGBACK LOAFERS",
    "image_url": "https://static.zara.net/photos///2023/I/1/1/p/2638/220/800/2/w/448/2638220800_2_1_1.jpg?ts=1692259024123",
    "price": "₹ 11,990.00",
    "details": "Slingback loafers. Made of leather. Round toe. Strap at the back for improved comfort during use. Chunky Vibram® sole for greater grip and traction.",
    "id": "producta404"
  },
  {
    "product_name": "RUNNING SNEAKERS",
    "image_url": "https://static.zara.net/photos///2023/I/1/1/p/2383/220/600/2/w/448/2383220600_2_1_1.jpg?ts=1692954206490",
    "price": "₹ 5,990.00",
    "details": "Running sneakers with Spume Foam technology that guarantees lightness and comfort. Contrast colours and materials on the upper. Six-eyelet facing that can be adjusted with a technical piece. Chunky track sole.ATHLETICZ Collection.View more",
    "id": "producta405"
  },
  {
    "product_name": "RUNNING SNEAKERS",
    "image_url": "https://static.zara.net/photos///2023/I/1/2/p/2313/220/624/613/w/448/2313220624_6_1_1.jpg?ts=1692346963453",
    "price": "₹ 3,990.00",
    "details": "Running sneakers with Spume Foam technology that guarantees lightness and comfort. Combination of colours and materials on the upper. Eight-eyelet facing that can be adjusted with a technical piece. Slightly chunky track sole.ATHLETICZ Collection.View more",
    "id": "producta406"
  },
  {
    "product_name": "CROSS TRAINING SNEAKERS",
    "image_url": "https://static.zara.net/photos///2023/I/1/2/p/2328/220/800/2/w/448/2328220800_6_1_1.jpg?ts=1692800354201",
    "price": "₹ 8,590.00",
    "details": "Sneakers. Designed for training, with improved shock absorption, a stabilising heel that holds the entire back of the foot and a reinforced toecap. Made of a special fabric that is highly resistant to friction thanks to the form of the threads, which also helps breathability. Replaceable insole. ATHLETICZ Collection.View more",
    "id": "producta407"
  },
  {
    "product_name": "RUNNING SNEAKERS",
    "image_url": "https://static.zara.net/photos///2023/I/1/2/p/2314/220/802/2/2314220802_16_1_1/w/448/poster.jpg?ts=1690899229192",
    "price": "₹ 3,990.00",
    "details": "Running sneakers with Spume Foam technology that guarantees lightness and comfort. Contrast colours and materials on the upper. Six-eyelet facing. Slightly chunky track sole.ATHLETICZ Collection.View more",
    "id": "producta408"
  },
  {
    "product_name": "MONOCHROME SLIDES",
    "image_url": "https://static.zara.net/photos///2023/I/1/2/p/2770/220/800/2/2770220800_16_1_1/w/37/poster.jpg?ts=1688026448552",
    "price": "₹ 2,590.00",
    "details": "Monochrome slider sandals. Wide strap across the instep. Matching chunky sole.ATHLETICZ Collection.",
    "id": "producta409"
  },
  {
    "product_name": "CHUNKY TRAINERS",
    "image_url": "https://static.zara.net/photos///2023/I/1/2/p/2202/220/001/2/w/448/2202220001_2_1_1.jpg?ts=1686559821619",
    "price": "₹ 3,990.00",
    "details": "Trainers. Contrast materials on the upper. Seven-eyelet facing. Has a contrast-coloured piece on the heel. Chunky sole in contrast colours. Retro-inspired design.",
    "id": "producta410"
  },
  {
    "product_name": "RETRO SNEAKERS",
    "image_url": "https://static.zara.net/photos///2023/I/1/2/p/2205/220/800/2/w/448/2205220800_2_1_1.jpg?ts=1688034306812",
    "price": "₹ 3,990.00",
    "details": "Trainers. Combination of pieces on the upper. Seven-eyelet facing. Sole in a combination of colours with an irregular design. Retro-inspired design.",
    "id": "producta411"
  },
  {
    "product_name": "CONTRAST TRAINERS",
    "image_url": "https://static.zara.net/photos///2023/I/1/2/p/2232/220/202/2/w/448/2232220202_2_1_1.jpg?ts=1691487479443",
    "price": "₹ 4,990.00",
    "details": "Sneakers. Combination of pieces and materials on the upper. Five-eyelet facing. Raised chunky sole with an irregular design.",
    "id": "producta412"
  },
  {
    "product_name": "LEATHER TRAINERS",
    "image_url": "https://static.zara.net/photos///2023/I/1/1/p/2207/220/001/2/w/448/2207220001_2_1_1.jpg?ts=1690879794803",
    "price": "₹ 5,990.00",
    "details": "Leather sneakers. Combination of colours and pieces on the upper. Six-eyelet facing. Sole in a contrast colour with an irregular design.",
    "id": "producta413"
  },
  {
    "product_name": "CHUNKY LEATHER TRAINERS",
    "image_url": "https://static.zara.net/photos///2023/I/1/2/p/2203/220/001/2/w/448/2203220001_2_1_1.jpg?ts=1691062146810",
    "price": "₹ 5,990.00",
    "details": "Monochrome leather sneakers. Five-eyelet facing. Chunky sole.",
    "id": "producta414"
  },
  {
    "product_name": "LEATHER TRAINERS",
    "image_url": "https://static.zara.net/photos///2023/I/1/2/p/2216/120/800/2/w/448/2216120800_2_1_1.jpg?ts=1691419019473",
    "price": "₹ 5,990.00",
    "details": "Leather trainers. Seven-eyelet facing. Combination of pieces on the upper. Round toe. Chunky sole and uneven design.",
    "id": "producta415"
  },
  {
    "product_name": "STRAPPY SANDALS",
    "image_url": "https://static.zara.net/photos///2023/I/1/2/p/2704/221/709/2/w/448/2704221709_2_1_1.jpg?ts=1686130021347",
    "price": "₹ 2,890.00",
    "details": "Slide sandals with straps on the instep. Matching slightly chunky sole.",
    "id": "producta416"
  },
  {
    "product_name": "STRAPPY SANDALS",
    "image_url": "https://static.zara.net/photos///2023/I/1/2/p/2704/220/800/2/w/448/2704220800_2_1_1.jpg?ts=1684313565679",
    "price": "₹ 2,890.00",
    "details": "Flat slider sandals. Fastens at the instep with interwoven straps. Strap with toe divider. Matching sole.",
    "id": "producta417"
  },
  {
    "product_name": "STRAPPY SANDALS WITH BUCKLE FASTENING",
    "image_url": "https://static.zara.net/photos///2023/I/1/2/p/2702/220/800/2/w/448/2702220800_2_1_1.jpg?ts=1686234636728",
    "price": "₹ 2,990.00",
    "details": "Monochrome strappy sandals. Fastens at the instep with interwoven straps. One toe strap and another strap around the ankle with buckle fastening. Matching slightly chunky sole.",
    "id": "producta418"
  },
  {
    "product_name": "STRAPPY LEATHER SANDALS",
    "image_url": "https://static.zara.net/photos///2023/I/1/2/p/2736/220/800/2/w/448/2736220800_6_1_1.jpg?ts=1688396635176",
    "price": "₹ 3,290.00",
    "details": "Flat slider sandals with three straps across the instep, two of which are horizontal. Round toe. Matching slightly chunky sole.",
    "id": "producta419"
  },
  {
    "product_name": "SPLIT SUEDE LEATHER LOAFERS",
    "image_url": "https://static.zara.net/photos///2023/I/1/2/p/2610/220/107/2/w/448/2610220107_2_1_1.jpg?ts=1686234638087",
    "price": "₹ 4,590.00",
    "details": "Leather loafers with a split suede finish. Bow detail on the instep. Matching sole.",
    "id": "producta420"
  },
  {
    "product_name": "MULTI-PIECE SNEAKERS",
    "image_url": "https://static.zara.net/photos///2023/I/1/2/p/2259/120/202/2/w/448/2259120202_2_1_1.jpg?ts=1692627348263",
    "price": "₹ 4,590.00",
    "details": "Sneakers. Combination of materials, pieces and colours on the upper. Six-eyelet facing. Chunky sole, combination of colours and uneven design. Retro-inspired design.",
    "id": "producta421"
  },
  {
    "product_name": "CHUNKY PRINTED SPORTS TRAINERS",
    "image_url": "https://static.zara.net/photos///2023/I/1/2/p/2225/220/001/2/w/448/2225220001_2_1_1.jpg?ts=1684743034308",
    "price": "₹ 3,990.00",
    "details": "Trainers with a combination of colours on the upper. Seven-eyelet facing. Contrast colour piece at the back. Chunky sole with irregular design.",
    "id": "producta422"
  },
  {
    "product_name": "LEATHER HIKING SHOES",
    "image_url": "https://static.zara.net/photos///2023/I/1/1/p/2457/220/800/2/w/448/2457220800_2_1_1.jpg?ts=1691482351727",
    "price": "₹ 10,990.00",
    "details": "Leather hiking shoes with a subtle shiny finish. Five-eyelet facing. Round toe. Slightly chunky track sole.",
    "id": "producta423"
  },
  {
    "product_name": "ANIMAL PRINT LOAFERS",
    "image_url": "https://static.zara.net/photos///2023/I/1/2/p/2603/220/700/2/w/448/2603220700_6_1_1.jpg?ts=1689678023102",
    "price": "₹ 9,590.00",
    "details": "Loafers. Animal print on the upper. Decorative penny strap on the instep. Chunky track sole with an irregular design.",
    "id": "producta424"
  },
  {
    "product_name": "LEATHER SHOES WITH TRIM",
    "image_url": "https://static.zara.net/photos///2023/I/1/2/p/2413/120/800/2/w/448/2413120800_6_1_1.jpg?ts=1690269683494",
    "price": "₹ 8,590.00",
    "details": "Leather derby shoes. Four-eyelet facing. Decorative trim detail on the toecap. Rounded toe. Chunky sole with an irregular design, welt and track sole.",
    "id": "producta425"
  },
  {
    "product_name": "SPLIT SUEDE AND JUTE LOAFERS",
    "image_url": "https://static.zara.net/photos///2023/I/1/2/p/2611/220/107/2/w/448/2611220107_2_1_1.jpg?ts=1687946778783",
    "price": "₹ 3,990.00",
    "details": "Loafers. Made of leather with a split suede finish. Decorative penny strap on the instep. Contrast topstitching around the upper. Jute-lined sole.",
    "id": "producta426"
  },
  {
    "product_name": "LEATHER AND JUTE ESPADRILLES",
    "image_url": "https://static.zara.net/photos///2023/I/1/2/p/2612/220/102/2/w/448/2612220102_6_1_1.jpg?ts=1688028705863",
    "price": "₹ 3,990.00",
    "details": "Espadrilles made of leather with a split suede finish. Welt around the upper. Jute-lined sole.",
    "id": "producta427"
  },
  {
    "product_name": "LEATHER MULE SANDALS",
    "image_url": "https://static.zara.net/photos///2023/I/1/2/p/2706/220/032/2/w/448/2706220032_2_1_1.jpg?ts=1684407153341",
    "price": "₹ 3,990.00",
    "details": "Flat leather sandals with a split suede finish. Wide strap on the front and a strap at the back. Jute sole.LIMITED EDITION collection.",
    "id": "producta428"
  },
  {
    "product_name": "TEXTURED SNEAKERS",
    "image_url": "https://static.zara.net/photos///2023/I/1/2/p/2212/220/120/2/w/448/2212220120_2_1_1.jpg?ts=1691062145471",
    "price": "₹ 2,890.00",
    "details": "Sneakers in a combination of materials and finishes on the upper. Seven-eyelet facing. Lightweight chunky sole with toecap detail.",
    "id": "producta429"
  },
  {
    "product_name": "EMBOSSED LACELESS TRAINERS",
    "image_url": "https://static.zara.net/photos///2023/I/1/2/p/2209/220/120/2/w/448/2209220120_2_1_1.jpg?ts=1684937053968",
    "price": "₹ 2,890.00",
    "details": "Laceless trainers. Decorative embossed detail on the upper. Elastic side gores for slipping on with ease. Contrast sole.",
    "id": "producta430"
  },
  {
    "product_name": "LEATHER SPORTS LOAFERS WITH TASSELS",
    "image_url": "https://static.zara.net/photos///2023/I/1/2/p/2616/220/102/2/w/448/2616220102_2_1_1.jpg?ts=1684313566669",
    "price": "₹ 4,590.00",
    "details": "Loafers. Made of leather with a split suede finish. Decorative tassel detail with fringing on the instep. Plain upper with moc toe detail. Round toe. Contrast-coloured sole.",
    "id": "producta431"
  },
  {
    "product_name": "SPLIT SUEDE SNEAKERS WITH MOC TOE DETAIL",
    "image_url": "https://static.zara.net/photos///2023/I/1/2/p/2508/220/102/2/w/448/2508220102_6_1_1.jpg?ts=1691061370319",
    "price": "₹ 4,990.00",
    "details": "Sneakers made of leather with a split suede finish. Five-eyelet facing. Chunky sole.",
    "id": "producta432"
  },
  {
    "product_name": "CHUNKY SHOES WITH TOPSTITCHING",
    "image_url": "https://static.zara.net/photos///2023/I/1/2/p/2411/220/800/2/w/448/2411220800_2_1_1.jpg?ts=1688053469685",
    "price": "₹ 4,990.00",
    "details": "Derby shoes with a plain upper. Contrast topstitching. Four-eyelet facing. Round toe. Chunky track sole and welt.",
    "id": "producta433"
  },
  {
    "product_name": "CANVAS SNEAKERS",
    "image_url": "https://static.zara.net/photos///2023/I/1/2/p/2211/220/202/33/w/448/2211220202_1_1_1.jpg?ts=1688644338103",
    "price": "₹ 1,990.00",
    "details": "Trainers. Decorative thread topstitching on the side. Seven-eyelet facing. Contrast-coloured irregular sole.",
    "id": "producta434"
  },
  {
    "product_name": "CANVAS HIGH-TOP TRAINERS",
    "image_url": "https://static.zara.net/photos///2023/I/1/2/p/2102/220/120/2/w/448/2102220120_6_1_1.jpg?ts=1689698208681",
    "price": "₹ 2,590.00",
    "details": "High-top sneakers. Plain canvas upper. Monochrome. Nine-eyelet facing. Slightly chunky sole.",
    "id": "producta435"
  },
  {
    "product_name": "SPLIT SUEDE LEATHER SANDALS",
    "image_url": "https://static.zara.net/photos///2023/I/1/2/p/2747/220/131/2/w/448/2747220131_2_1_1.jpg?ts=1687947184605",
    "price": "₹ 3,290.00",
    "details": "Monochrome slider sandals. Made of leather with a split suede finish. Lightweight track sole.",
    "id": "producta436"
  },
  {
    "product_name": "RUBBERISED TOE SHOES",
    "image_url": "https://static.zara.net/photos///2023/I/1/2/p/2503/220/001/2/w/448/2503220001_2_1_1.jpg?ts=1689941744201",
    "price": "₹ 4,590.00",
    "details": "Sneaker-style shoes. Combination of materials and finishes on the upper. Six-eyelet facing. Rubberised trim around the upper. Contrast track sole with an irregular design.",
    "id": "producta437"
  },
  {
    "product_name": "VOLUMINOUS MOULD CLOGS",
    "image_url": "https://static.zara.net/photos///2023/I/1/2/p/2303/220/120/2/w/448/2303220120_2_1_1.jpg?ts=1690213160394",
    "price": "₹ 3,990.00",
    "details": "Monochrome clogs. Wraparound upper in a single piece. Strap at the back for a better fit. Raised details on the upper. Round toe. Matching chunky track sole.",
    "id": "producta438"
  },
  {
    "product_name": "RUNNING MOULD SNEAKERS",
    "image_url": "https://static.zara.net/photos///2023/I/1/2/p/2331/220/515/2/w/448/2331220515_6_1_1.jpg?ts=1690903141263",
    "price": "₹ 4,990.00",
    "details": "Running sneakers. Wraparound single-piece upper with a raised pattern. Removable knit fabric socks. Five-eyelet facing.",
    "id": "producta439"
  },
  {
    "product_name": "RUNNING TRAINERS WITH TEXTURED SOLES",
    "image_url": "https://static.zara.net/photos///2023/I/1/1/p/2332/220/802/2/w/448/2332220802_2_1_1.jpg?ts=1692610773757",
    "price": "₹ 5,990.00",
    "details": "Running trainers. Combination of pieces and materials on the upper. Six-eyelet facing. Back pull tab for slipping on with ease. Chunky sole with an irregular design and a combination of textures.",
    "id": "producta440"
  },
  {
    "product_name": "LACE-UP HIGH-TOP TRAINERS",
    "image_url": "https://static.zara.net/photos///2023/I/1/2/p/2106/120/800/2/w/448/2106120800_2_1_1.jpg?ts=1689941743627",
    "price": "₹ 2,990.00",
    "details": "High-top trainers. Uniform colour all over the upper. Nine-eyelet facing. Lightweight rubber sole with an irregular design.",
    "id": "producta441"
  },
  {
    "product_name": "HIGH-TOP DENIM SNEAKERS",
    "image_url": "https://static.zara.net/photos///2023/I/1/2/p/2108/220/800/2/w/448/2108220800_6_1_1.jpg?ts=1690282910562",
    "price": "₹ 3,290.00",
    "details": "High-top sneakers. Plain denim print upper with a contrast colour on the inside. Eight-eyelet facing. Slightly chunky sole.",
    "id": "producta442"
  },
  {
    "product_name": "LACELESS KNIT FABRIC TRAINERS",
    "image_url": "https://static.zara.net/photos///2023/V/1/2/p/2220/220/407/2/w/448/2220220407_2_1_1.jpg?ts=1683288356964",
    "price": "₹ 2,990.00",
    "details": "Laceless trainers. Made of fabric with elastic side panels and a back pull tab for slipping on with ease. Matching trimming.",
    "id": "producta443"
  },
  {
    "product_name": "KNIT FABRIC TRAINERS",
    "image_url": "https://static.zara.net/photos///2023/I/1/2/p/2221/220/512/2/w/448/2221220512_2_1_1.jpg?ts=1687946677191",
    "price": "₹ 2,990.00",
    "details": "Knit fabric trainers. Five-eyelet facing. Back pull tab for slipping on with ease. Lightweight uniform sole.",
    "id": "producta444"
  },
  {
    "product_name": "STRAPPY LEATHER SANDALS",
    "image_url": "https://static.zara.net/photos///2023/I/1/2/p/2715/221/107/2/w/448/2715221107_2_3_1.jpg?ts=1686666006302",
    "price": "₹ 5,990.00",
    "details": "Leather cage sandals with a split suede finish. Interwoven straps on the front. Buckled ankle strap fastening.",
    "id": "producta445"
  },
  {
    "product_name": "LEATHER CAGE SANDALS",
    "image_url": "https://static.zara.net/photos///2023/I/1/1/p/2715/220/800/2/w/448/2715220800_2_1_1.jpg?ts=1685440465276",
    "price": "₹ 5,990.00",
    "details": "Cage sandals made of leather. Adjustable strap at the back. Slightly chunky sole.",
    "id": "producta446"
  },
  {
    "product_name": "MULTICOLOURED RUNNING TRAINERS",
    "image_url": "https://static.zara.net/photos///2023/I/1/2/p/2305/220/618/2/w/448/2305220618_2_1_1.jpg?ts=1684491505462",
    "price": "₹ 4,590.00",
    "details": "Running trainers. Combination of colours and finishes on the upper. Six-eyelet facing. Chunky track sole.",
    "id": "producta447"
  },
  {
    "product_name": "CHUNKY SANDALS",
    "image_url": "https://static.zara.net/photos///2023/I/1/2/p/2735/220/800/2/w/448/2735220800_2_1_1.jpg?ts=1686234637838",
    "price": "₹ 3,990.00",
    "details": "Strappy sandals. Three straps with hook-and-loop strap fastening on the instep and one back strap. Chunky track sole with an uneven design.",
    "id": "producta448"
  },
  {
    "product_name": "QUILTED STRAPPY SANDALS",
    "image_url": "https://static.zara.net/photos///2023/I/1/2/p/2703/220/800/2/w/448/2703220800_2_1_1.jpg?ts=1686130021195",
    "price": "₹ 3,990.00",
    "details": "Sandals. Quilted straps. Two straps on the front and back. Matching chunky sole.",
    "id": "producta449"
  },
  {
    "product_name": "TRACK SOLE SANDALS",
    "image_url": "https://static.zara.net/photos///2023/V/1/2/p/2450/120/800/2/w/448/2450120800_2_1_1.jpg?ts=1683033214986",
    "price": "₹ 4,990.00",
    "details": "Strappy sandals. Four straps fastened at the instep and features a fifth strap that joins them all, and a sixth that closes around the ankle. Chunky track sole with an uneven design.",
    "id": "producta450"
  },
  {
    "product_name": "MOULD CLOGS WITH TRACK SOLE",
    "image_url": "https://static.zara.net/photos///2023/I/1/2/p/2750/220/800/2/w/448/2750220800_2_1_1.jpg?ts=1684917325860",
    "price": "₹ 2,890.00",
    "details": "Clogs. Wraparound upper in a single piece. Raised details on the upper. Round toe. Matching chunky track sole.",
    "id": "producta451"
  },
  {
    "product_name": "SOFT LEATHER LOAFERS - LIMITED EDITION",
    "image_url": "https://static.zara.net/photos///2023/I/1/2/p/2699/220/800/2/w/448/2699220800_6_1_1.jpg?ts=1689785186739",
    "price": "₹ 8,590.00",
    "details": "Babouches made of leather. Round toe. Can be worn with the heel flattened.Collection - Special EDITION.",
    "id": "producta452"
  }
];

// // Add id field to each product
// const productsWithId = products.map((product, index) => ({
//   ...product,
//   id: `producta${index + 1}`
// }));

// // Store the modified data in another JavaScript file
// const fs = require('fs');
// const path = require('path');
// const outputPath = path.join(__dirname, 'modifiedProducts.js');

// fs.writeFileSync(outputPath, `const modifiedProducts = ${JSON.stringify(productsWithId, null, 2)};\n\nmodule.exports = modifiedProducts;`);

// console.log(`Modified products data stored in ${outputPath}`);

