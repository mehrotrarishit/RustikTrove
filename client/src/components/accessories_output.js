const transformedData = [
  {
    "product_name": "GARDENIA 30 ML",
    "image_url": "https://static.zara.net/photos///2023/I/2/1/p/0120/825/999/2/w/448/0120825999_6_1_1.jpg?ts=1691058050679",
    "price": "₹ 790.00",
    "details": "ZARA GARDENIA EAU DE PARFUM 30 ML (1.0 FL. OZ). A gripping fragrance of captivating and silky white flower. Gardenia adds voluptuousness to the scent of orange blossom and coffee, within a fruity universe of peach and raspberry.View more"
  },
  {
    "product_name": "RED VANILLA 30 ML",
    "image_url": "https://static.zara.net/photos///2023/I/2/1/p/0120/841/999/2/w/448/0120841999_6_1_1.jpg?ts=1691058050673",
    "price": "₹ 790.00",
    "details": "ZARA RED VANILLA 30 ML (1.0 FL. OZ). Eau de toilette. A sophisticated, warm and spicy fragrance with floral and sweet notes. A bright bouquet of elegant iris and red peony flowers combined with juicy notes of tangerine and a sweet and delicate hint of raspberry, fused with a note of vanilla.View more"
  },
  {
    "product_name": "WONDER ROSE 30 ML",
    "image_url": "https://static.zara.net/photos///2023/I/2/1/p/0120/808/999/2/w/448/0120808999_6_1_1.jpg?ts=1691573566947",
    "price": "₹ 690.00",
    "details": "ZARA WONDER ROSE EAU DE TOILETTE 30 ML (1.0 FL. OZ). This fragrance reveals all the fantasy of a fruit cocktail comprising peach, red fruity notes and a hint of tutti frutti that gives it a special luminous attraction. Sambac jasmine flower is wrapped in the creaminess of coconut and vanilla, guaranteeing an infinitely addictive power. A fragrance designed for a fun and outgoing girl, who wants to show off her personality through her perfume.View more"
  },
  {
    "product_name": "FEMME 30 ML",
    "image_url": "https://static.zara.net/photos///2023/I/2/1/p/0120/871/999/2/w/448/0120871999_6_1_1.jpg?ts=1691574049857",
    "price": "₹ 790.00",
    "details": "ZARA FEMME 30 ML (1.0 FL. OZ). Eau de toilette. Frangipani flower and peony top notes with subtle hints of bergamot create a vibrant sensation with incredible juiciness. At the heart, the seductive and crushed facets of orchid and heliotrope blend into the addictive creaminess of vanilla and tonka beans. The velvety base of white musk and warm woody notes lend a tactile and delicate character, enveloping the senses in an intense embrace.View more"
  },
  {
    "product_name": "PINK FLAMBÉ 30 ML",
    "image_url": "https://static.zara.net/photos///2023/I/2/1/p/0120/882/999/2/w/448/0120882999_6_1_1.jpg?ts=1691058050952",
    "price": "₹ 790.00",
    "details": "ZARA PINK FLAMBÉ EAU DE TOILETTE 30 ML (1.0 FL. OZ). A fun and boldly feminine fragrance with sweet hints of rose, jasmine and orchid wrapped in the warmth of vanilla, notes of wood and amber. A seductive, addictive and irresistible fragrance.View more"
  },
  {
    "product_name": "NUDE BOUQUET 100ML",
    "image_url": "https://static.zara.net/photos///2023/V/2/1/p/0120/455/999/2/w/448/0120455999_6_1_1.jpg?ts=1683190446031",
    "price": "₹ 1,490.00",
    "details": "ZARA NUDE BOUQUET 100 ML (3.4 FL. OZ). Eau de parfum. The fragrance pyramid reveals notes of cherry, peony and vanilla. A fresh, pleasing and vibrant fragrance."
  },
  {
    "product_name": "LIGHTLY BLOOM 100 ML",
    "image_url": "https://static.zara.net/photos///2023/V/2/1/p/0120/458/999/2/w/448/0120458999_6_1_1.jpg?ts=1679046790197",
    "price": "₹ 1,790.00",
    "details": "ZARA LIGHTLY BLOOM EDP 100 ML (3.4 FL. OZ). Eau de parfum. The scent reveals notes of lotus flower, peony and musk. It’s a comfortable, captivating and elegant fragranceView more"
  },
  {
    "product_name": "FABRIC BELT BAG",
    "image_url": "https://static.zara.net/photos///2023/I/1/1/p/6021/210/719/2/w/448/6021210719_1_1_1.jpg?ts=1692877244813",
    "price": "₹ 2,590.00",
    "details": "Fabric belt bag. Adjustable strap. Front zip pocket. Zip closure. Height x Length x Width 17,9 x 29,3 x 6 cm. / 7.0 x 11.5 x 2.3″"
  },
  {
    "product_name": "FABRIC CROSSBODY BAG",
    "image_url": "https://static.zara.net/photos///2023/I/1/1/p/6020/210/716/2/w/448/6020210716_1_1_1.jpg?ts=1686314716035",
    "price": "₹ 2,890.00",
    "details": "Fabric crossbody bag. Adjustable fabric crossbody strap. Zip closure.Height x Length x Width 42 x 24 x 15 cm. / 16.5 x 9.4 x 5.9″"
  },
  {
    "product_name": "FABRIC CROSSBODY BAG",
    "image_url": "https://static.zara.net/photos///2023/I/1/1/p/6701/210/529/2/w/448/6701210529_1_1_1.jpg?ts=1692877244345",
    "price": "₹ 2,590.00",
    "details": "Fabric crossbody bag. Adjustable fabric crossbody strap. Zip closure.Height x Length x Width 12 x 31 x 12 cm. / 4.7 x 12.2 x 4.7″"
  },
  {
    "product_name": "CROSSBODY PURSE",
    "image_url": "https://static.zara.net/photos///2023/I/1/1/p/6072/210/719/2/w/448/6072210719_1_1_1.jpg?ts=1692877244495",
    "price": "₹ 2,290.00",
    "details": "Crossbody bag that converts into a clutch. Interior with several compartments. Detachable chain shoulder strap. Golden metal hardware. Zip closure.Height x Length x Width 14 x 23 x 3 cm. / 5.5 x 9.0 x 1.1″View more"
  },
  {
    "product_name": "CROSSBODY BAG",
    "image_url": "https://static.zara.net/photos///2023/I/1/1/p/6006/210/800/2/w/448/6006210800_1_1_1.jpg?ts=1692877244799",
    "price": "₹ 2,890.00",
    "details": "Crossbody bag with adjustable strap. Lining. Zip closure.Height x Length x Width 17 x 30 x 11 cm. / 6.6 x 11.8 x 4.3″"
  },
  {
    "product_name": "CROCHET BUCKET BAG WITH FRINGING",
    "image_url": "https://static.zara.net/photos///2023/I/1/1/p/6149/210/800/2/w/448/6149210800_1_1_1.jpg?ts=1692877244950",
    "price": "₹ 4,990.00",
    "details": "Crochet bucket bag with fringing on the sides. Shoulder strap. Magnetic clasp closure. Height x Length x Width 35 x 27 x 11 cm. / 13.7 x 10.6 x 4.3″View more"
  },
  {
    "product_name": "FAUX PEARL SHOULDER BAG",
    "image_url": "https://static.zara.net/photos///2023/I/1/1/p/6088/210/910/2/w/448/6088210910_1_1_1.jpg?ts=1692877245309",
    "price": "₹ 3,290.00",
    "details": "Shoulder bag with faux pearl exterior. Shoulder strap and detachable crossbody strap. Lined interior. Magnetic clasp closure. Height x Length x Width: 22 x 19 x 6.5 cm. / 8.6 x 7.4 x 2.5″View more"
  },
  {
    "product_name": "PATCHWORK SHOULDER BAG",
    "image_url": "https://static.zara.net/photos///2023/I/1/1/p/6140/210/202/2/w/448/6140210202_1_1_1.jpg?ts=1692702214362",
    "price": "₹ 4,990.00",
    "details": "Shoulder bag in patchwork-effect fabric. Front and side flap pockets. Shoulder straps. Zip closure. Height x Length x Width 21,6 x 44 x 17,3 cm. / 8.5 x 17.3 x 6.8″View more"
  },
  {
    "product_name": "PATCHWORK BELT BAG WITH POCKETS",
    "image_url": "https://static.zara.net/photos///2023/I/1/1/p/6142/210/017/2/w/448/6142210017_1_1_1.jpg?ts=1692702214596",
    "price": "₹ 2,890.00",
    "details": "Belt bag in denim fabric. Patchwork-effect pockets in different sizes. Adjustable strap. Height x Length x Width: 15.5 x 38 x 7.7 cm. / 6.1 x 14.9 x 3.0″"
  },
  {
    "product_name": "METALLIC FABRIC TOTE BAG",
    "image_url": "https://static.zara.net/photos///2023/I/1/1/p/6125/210/303/2/w/448/6125210303_1_1_1.jpg?ts=1692705620843",
    "price": "₹ 5,990.00",
    "details": "Metallic-effect tote bag. Shoulder straps. Zip closure. Height x Length x Width: 43 x 58 x 11 cm. / 16.9 x 22.8 x 4.3″"
  },
  {
    "product_name": "METALLIC FABRIC TOTE BAG",
    "image_url": "https://static.zara.net/photos///2023/I/1/1/p/6123/210/808/2/w/448/6123210808_1_1_1.jpg?ts=1692705620480",
    "price": "₹ 3,290.00",
    "details": "Metallic-effect tote bag. Handles and shoulder straps. Magnetic clasp closure. Height x Length x Width: 26 x 43 x 18 cm. / 10.2 x 16.9 x 7.0″"
  },
  {
    "product_name": "METALLIC MINAUDIÈRE",
    "image_url": "https://static.zara.net/photos///2023/I/1/1/p/6292/210/808/2/w/448/6292210808_1_1_1.jpg?ts=1692705620496",
    "price": "₹ 3,990.00",
    "details": "Oval minaudière. Brushed metallic effect. Chain crossbody strap. Metal clasp closure.Height x Length x Width 18 x 19 x 6,5 cm. / 7.0 x 7.4 x 2.5″"
  },
  {
    "product_name": "CROSSBODY BUCKET BAG",
    "image_url": "https://static.zara.net/photos///2023/I/1/1/p/6121/210/709/2/w/448/6121210709_1_1_1.jpg?ts=1692705620515",
    "price": "₹ 2,890.00",
    "details": "Bucket bag. Handle and detachable and adjustable crossbody strap. Inner fabric bag with gathered closure.Height x Length x Width: 21.9 x 19.9 x 13.3 cm. / 8.6 x 7.8 x 5.2″View more"
  },
  {
    "product_name": "CROSSBODY BUCKET BAG",
    "image_url": "https://static.zara.net/photos///2023/I/1/1/p/6192/210/250/2/w/448/6192210250_1_1_1.jpg?ts=1692705620567",
    "price": "₹ 2,890.00",
    "details": "Not Found"
  },
  {
    "product_name": "CROSSBODY BAG WITH METAL PIECE",
    "image_url": "https://static.zara.net/photos///2023/I/1/1/p/6000/210/800/32/w/448/6000210800_2_5_1.jpg?ts=1692796922513",
    "price": "₹ 3,290.00",
    "details": "Crossbody bag. Matching metal piece on the front. Adjustable and detachable canvas strap and a crossbody strap. Double compartment. Zip closure.Height x Length x Width: 13 x 20 x 7 cm. / 5.1 x 7.8 x 2.7″View more"
  },
  {
    "product_name": "CROSSBODY BAG",
    "image_url": "https://static.zara.net/photos///2023/I/1/1/p/6064/110/800/17/w/448/6064110800_1_1_1.jpg?ts=1687362890169",
    "price": "₹ 3,290.00",
    "details": "Crossbody bag with a flap. Two adjustable and detachable straps, one a canvas shoulder strap and the other a crossbody strap. Magnetic clasp closure.Height x Length x Width 20,8 x 24,5 x 9,1 cm. / 8.1 x 9.6 x 3.5″View more"
  },
  {
    "product_name": "CROSSBODY BAG WITH TOPSTITCHING",
    "image_url": "https://static.zara.net/photos///2023/I/1/1/p/6008/210/709/32/w/448/6008210709_6_1_1.jpg?ts=1692012065994",
    "price": "₹ 3,290.00",
    "details": "Crossbody bag with topstitching detail. Long crossbody strap and canvas fabric handle, both adjustable and detachable. Magnetic clasp on the flap. Height x Length x Width 16,2 x 24 x 8 cm. / 6.3 x 9.4 x 3.1″View more"
  },
  {
    "product_name": "CONTRAST CROSSBODY BAG",
    "image_url": "https://static.zara.net/photos///2023/I/1/1/p/6043/210/202/2/w/448/6043210202_1_1_1.jpg?ts=1690466481156",
    "price": "₹ 2,890.00",
    "details": "Crossbody bag in a combination of materials with a flap. Shoulder strap. Magnetic clasp closure.Height x Length x Width: 15 x 29 x 7 cm. / 5.9 x 11.4 x 2.7″View more"
  },
  {
    "product_name": "CONTRAST BUCKET BAG",
    "image_url": "https://static.zara.net/photos///2023/I/1/1/p/6044/210/202/2/w/448/6044210202_1_1_1.jpg?ts=1690466480261",
    "price": "₹ 2,890.00",
    "details": "Bucket bag in a combination of materials. Adjustable crossbody strap. Magnetic clasp closure.Height x Length x Width 33,5 x 24,6 x 14,8 cm. / 13.1 x 9.6 x 5.8″View more"
  },
  {
    "product_name": "FABRIC SHOULDER BAG",
    "image_url": "https://static.zara.net/photos///2023/I/1/1/p/6057/210/716/2/w/448/6057210716_1_1_1.jpg?ts=1688732311243",
    "price": "₹ 2,890.00",
    "details": "Fabric shoulder bag with frayed detail. Magnetic clasp closure on the flap. Shoulder strap.Height x Length x Width: 12 x 27 x 8 cm. / 4.7 x 10.6 x 3.1″View more"
  },
  {
    "product_name": "CROSSBODY BAG WITH PEARLS",
    "image_url": "https://static.zara.net/photos///2023/I/1/1/p/6005/210/910/2/w/448/6005210910_1_1_1.jpg?ts=1686037448051",
    "price": "₹ 3,990.00",
    "details": "Crossbody bag. Faux pearl beads on the exterior. Lining. Shoulder strap and detachable crossbody strap. Magnetic clasp closure.Height x Length x Width: 16 x 26 x 4 cm. / 6.2 x 10.2 x 1.5″View more"
  },
  {
    "product_name": "FAUX PEARL BEAD BUCKET BAG",
    "image_url": "https://static.zara.net/photos///2023/V/1/1/p/6259/110/850/2/w/448/6259110850_1_1_1.jpg?ts=1684228678609",
    "price": "₹ 3,290.00",
    "details": "Bucket bag with faux pearl beads on the exterior. Shoulder strap. Zip closure.Height x Length x Width 24,5 x 16 x 7 cm. / 9.6 x 6.2 x 2.7″"
  },
  {
    "product_name": "SHINY SHOULDER BAG",
    "image_url": "https://static.zara.net/photos///2023/I/1/1/p/6364/210/808/2/w/448/6364210808_1_1_1.jpg?ts=1685615024655",
    "price": "₹ 3,290.00",
    "details": "Shoulder bag with rhinestones. Lined interior. Shoulder strap. Zip fastening. Height x Length x Width 24 x 26 x 8,5 cm. / 9.4 x 10.2 x 3.3″"
  },
  {
    "product_name": "BEADED BUCKET BAG WITH RHINESTONES",
    "image_url": "https://static.zara.net/photos///2023/I/1/1/p/6176/110/909/17/w/448/6176110909_1_1_1.jpg?ts=1687516179809",
    "price": "₹ 3,290.00",
    "details": "Bucket bag with rhinestones and fringing. Top handles. Gathered drawstring closure. Height x Length x Width 19,6 x 22,6 x 4,5 cm. / 7.7 x 8.8 x 1.7″"
  },
  {
    "product_name": "SHOULDER BAG WITH POCKETS",
    "image_url": "https://static.zara.net/photos///2023/I/1/1/p/6023/210/808/2/w/448/6023210808_1_1_1.jpg?ts=1689753602135",
    "price": "₹ 3,290.00",
    "details": "Shoulder bag with a metallic effect. Front pockets. Detachable straps, one being a shoulder strap and another a crossbody canvas strap. Zip closure.Height x Length x Width 14 x 26 x 14 cm. / 5.5 x 10.2 x 5.5″View more"
  },
  {
    "product_name": "TRF DENIM TOTE BAG",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/8197/802/400/2/w/448/8197802400_1_1_1.jpg?ts=1689695026089",
    "price": "₹ 2,990.00",
    "details": "Bag made of denim fabric jeans. Shoulder straps. Front pockets.Height x Length x Width 38 x 40 x 6 cm. / 14.9 x 15.7 x 2.3″"
  },
  {
    "product_name": "TRF DENIM BAG",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/8197/801/400/2/w/448/8197801400_6_1_1.jpg?ts=1689663626255",
    "price": "₹ 2,990.00",
    "details": "Bag made of denim fabric jeans. Adjustable shoulder strap with snap buttons. Ripped details on the flap. Snap-button fastening. Height x Length x Width 23 x 27 x 7 cm. / 9.0 x 10.6 x 2.7″View more"
  },
  {
    "product_name": "TOTE BAG WITH POCKETS",
    "image_url": "https://static.zara.net/photos///2023/I/1/1/p/6017/210/716/2/w/448/6017210716_1_1_1.jpg?ts=1692356732277",
    "price": "₹ 4,990.00",
    "details": "Tote bag with buckled pockets and straps. Shoulder straps and adjustable crossbody strap. Zip closure. Height x Length x Width 45 x 26 x 20 cm. / 17.7 x 10.2 x 7.8″View more"
  },
  {
    "product_name": "SHOULDER BAG WITH POCKETS",
    "image_url": "https://static.zara.net/photos///2023/I/1/1/p/6018/210/627/4/w/448/6018210627_1_1_1.jpg?ts=1692356791979",
    "price": "₹ 2,890.00",
    "details": "Shoulder bag with pockets and buckled bands. Adjustable strap. Zip closure with double pull tab. Height x Length x Width: 12 x 30 x 6 cm. / 4.7 x 11.8 x 2.3″View more"
  },
  {
    "product_name": "BACKPACK WITH POCKETS",
    "image_url": "https://static.zara.net/photos///2023/I/1/1/p/6067/210/716/2/w/448/6067210716_6_1_1.jpg?ts=1688997404815",
    "price": "₹ 3,290.00",
    "details": "Backpack with buckled pockets and straps. Shoulder straps. Gathered drawstring closure and flap.Height x Length x Width 34 x 31 x 16 cm. / 13.3 x 12.2 x 6.2″View more"
  },
  {
    "product_name": "ROCKER SHOULDER BAG WITH FLAP",
    "image_url": "https://static.zara.net/photos///2023/I/1/1/p/6360/615/719/2/w/448/6360615719_1_1_1.jpg?ts=1691143049697",
    "price": "₹ 2,990.00",
    "details": "Soft shoulder bag. Exterior with seam details and three compartments, one of which has zip closure. Chain shoulder strap. Lined interior with pocket. Magnetic clasp closure.Height x Length x Width 18 x 30 x 13,5 cm. / 7.0 x 11.8 x 5.3″View more"
  },
  {
    "product_name": "MINI CITY BAG",
    "image_url": "https://static.zara.net/photos///2023/I/1/1/p/6100/210/800/2/w/448/6100210800_1_1_1.jpg?ts=1692187515704",
    "price": "₹ 2,590.00",
    "details": "Mini city bag. Top handle and detachable and adjustable crossbody strap. Magnetic clasp closure. Height x Length x Width 11 x 22 x 6 cm. / 4.3 x 8.6 x 2.3″View more"
  },
  {
    "product_name": "ROCK SHOULDER BAG WITH FLAP",
    "image_url": "https://static.zara.net/photos///2023/I/1/1/p/6362/210/719/2/w/448/6362210719_1_1_1.jpg?ts=1683212662639",
    "price": "₹ 2,590.00",
    "details": "Soft shoulder bag. Exterior with seam details and three compartments, one of which has zip closure. Chain shoulder strap. Lined interior with pocket. Magnetic clasp closure.Height x Length x Width 23 x 14 x 9 cm. / 9.0 x 5.5 x 3.5″View more"
  },
  {
    "product_name": "TOTE WITH INTERIOR BAG",
    "image_url": "https://static.zara.net/photos///2023/I/1/1/p/6040/210/709/2/w/448/6040210709_1_1_1.jpg?ts=1691591568333",
    "price": "₹ 3,290.00",
    "details": "Tote bag. Shoulder straps. Inner bag with gathered drawstring fastening.Height x Length x Width 22 x 36 x 14 cm. / 8.6 x 14.1 x 5.5″"
  },
  {
    "product_name": "BUCKET BAG WITH TOPSTITCHING",
    "image_url": "https://static.zara.net/photos///2023/I/1/1/p/6702/210/800/2/w/448/6702210800_1_1_1.jpg?ts=1691591567387",
    "price": "₹ 2,590.00",
    "details": "Bucket bag with topstitching details. Top handle and adjustable shoulder strap. Gathered drawstring closure.Height x Length x Width: 20 x 17 x 11 cm. / 7.8 x 6.6 x 4.3″View more"
  },
  {
    "product_name": "MINI CITY BAG",
    "image_url": "https://static.zara.net/photos///2023/I/1/1/p/6041/210/719/2/w/448/6041210719_1_1_1.jpg?ts=1691591567385",
    "price": "₹ 2,890.00",
    "details": "Mini city bag. Top handles and adjustable and crossbody shoulder strap. Zip closure. Inner pouch with gathered drawstring closure.Height x Length x Width 16 x 22 x 7,5 cm. / 6.2 x 8.6 x 2.9″View more"
  },
  {
    "product_name": "SHOULDER BAG WITH GEOMETRIC FLAP",
    "image_url": "https://static.zara.net/photos///2023/I/1/1/p/6066/110/800/2/w/448/6066110800_1_1_1.jpg?ts=1690976672992",
    "price": "₹ 2,590.00",
    "details": "Shoulder bag with a geometric flap. Strap with buckle on the sides. Magnetic clasp closure.Height x Length x Width 26,6 x 13,7 x 5,5 cm. / 10.4 x 5.3 x 2.1″View more"
  },
  {
    "product_name": "MINI CITY BAG",
    "image_url": "https://static.zara.net/photos///2023/V/1/1/p/6311/910/003/12/w/448/6311910003_1_1_1.jpg?ts=1672658666297",
    "price": "₹ 2,890.00",
    "details": "Mini city bag with two inner compartments. Inside pocket with zip closure. Tubular handles and adjustable and detachable crossbody strap. Magnetic clasp closure. Height x Length x Width 18,5 x 22 x 10,5 cm. / 7.2 x 8.6 x 4.1″View more"
  },
  {
    "product_name": "SHIMMERY MINI CITY BAG",
    "image_url": "https://static.zara.net/photos///2023/I/1/1/p/6357/210/604/2/w/448/6357210604_6_1_1.jpg?ts=1684748151252",
    "price": "₹ 3,990.00",
    "details": "Mini city bag with rhinestones. Handles and metal chain crossbody strap. Magnetic clasp closure.Height x Length x Width 14,5 x 17 x 7 cm. / 5.7 x 6.6 x 2.7″View more"
  },
  {
    "product_name": "MOCK CROC TOTE BAG",
    "image_url": "https://static.zara.net/photos///2023/I/1/1/p/6012/110/800/2/w/448/6012110800_1_1_1.jpg?ts=1692187515970",
    "price": "₹ 3,290.00",
    "details": "Tote bag in embossed animal print fabric. Inside zip pocket. Shoulder straps. Magnetic clasp closure.Height x Length x Width 56,3 x 47 x 14 cm. / 22.1 x 18.5 x 5.5″View more"
  },
  {
    "product_name": "MOCK CROC MINI TOTE BAG",
    "image_url": "https://static.zara.net/photos///2023/V/1/1/p/6015/110/800/3/w/448/6015110800_6_1_1.jpg?ts=1673974673278",
    "price": "₹ 2,890.00",
    "details": "Mini tote bag in embossed animal print fabric. Inside zip pocket. Top handles and detachable and adjustable crossbody strap. Magnetic clasp closure.Height x Length x Width: 23.7 x 28.6 x 12.9 cm. / 9.3 x 11.2 x 5.0″View more"
  },
  {
    "product_name": "FABRIC TOTE BAG",
    "image_url": "https://static.zara.net/photos///2023/I/1/1/p/6110/210/719/2/w/448/6110210719_1_1_1.jpg?ts=1692200336749",
    "price": "₹ 3,290.00",
    "details": "Tote bag in fabric. Handles and detachable crossbody shoulder strap. Zip closure.Height x Length x Width: 26.3 x 31.2 x 12.7 cm. / 10.3 x 12.2 x 5.0″"
  },
  {
    "product_name": "FABRIC MINI CITY BAG",
    "image_url": "https://static.zara.net/photos///2023/I/1/1/p/6114/210/017/2/w/448/6114210017_6_1_1.jpg?ts=1692207206618",
    "price": "₹ 2,890.00",
    "details": "Mini city bag in fabric. Handles and detachable crossbody shoulder strap. Zip closure.Height x Length x Width 23,7 x 28,6 x 12,9 cm. / 9.3 x 11.2 x 5.0″View more"
  },
  {
    "product_name": "TOTE BAG WITH TOPSTITCHING",
    "image_url": "https://static.zara.net/photos///2023/I/1/1/p/6206/110/719/2/w/448/6206110719_1_1_1.jpg?ts=1691749861774",
    "price": "₹ 2,290.00",
    "details": "Tote bag with topstitching details. Shoulder straps. Magnetic clasp closure. Height x Length x Width 38 x 34 x 10 cm. / 14.9 x 13.3 x 3.9″"
  },
  {
    "product_name": "BACKPACK WITH FOLDOVER FLAP",
    "image_url": "https://static.zara.net/photos///2023/V/1/1/p/6069/010/040/12/w/448/6069010040_1_1_1.jpg?ts=1672658687543",
    "price": "₹ 2,290.00",
    "details": "Backpack featuring outside pockets, top carry handle and adjustable shoulder straps. Gathered and magnetic clasp closure.Height x Length x Width 29 x 26 x 16 cm. / 11.4 x 10.2 x 6.2″View more"
  },
  {
    "product_name": "BACKPACK WITH FOLDOVER FLAP",
    "image_url": "https://static.zara.net/photos///2023/V/1/1/p/6411/110/719/2/w/448/6411110719_6_1_1.jpg?ts=1676640214214",
    "price": "₹ 2,290.00",
    "details": "Backpack with side pockets. Gathered drawstring closure and magnetic clasp on the flap. Adjustable shoulder straps and top handle. Height x Length x Width 32 x 27,7 x 17,2 cm. / 12.5 x 10.9 x 6.7″View more"
  },
  {
    "product_name": "PEARL BEAD-SHAPED MINAUDIÈRE",
    "image_url": "https://static.zara.net/photos///2023/V/1/1/p/6131/110/850/2/w/448/6131110850_1_1_1.jpg?ts=1676633625128",
    "price": "₹ 3,990.00",
    "details": "Minaudière in the shape of a pearl bead. Rigid metal handle. Height x Length x Width 18,8 x 22,2 x 8,8 cm. / 7.4 x 8.7 x 3.4″"
  },
  {
    "product_name": "DENIM MINI CITY BAG",
    "image_url": "https://static.zara.net/photos///2023/V/1/1/p/6003/110/017/2/w/448/6003110017_1_1_1.jpg?ts=1681379761618",
    "price": "₹ 2,590.00",
    "details": "Mini city bag in denim fabric. Top handles and long adjustable and detachable crossbody strap. Magnetic clasp closure. Height x Length x Width 13,9 x 18,8 x 8,7 cm. / 5.4 x 7.4 x 3.4″View more"
  },
  {
    "product_name": "TOTE BAG WITH CHAIN",
    "image_url": "https://static.zara.net/photos///2023/I/1/1/p/6034/210/618/2/w/448/6034210618_1_1_1.jpg?ts=1691073268449",
    "price": "₹ 2,590.00",
    "details": "Soft tote bag. Chain shoulder strap. Gathered drawstring closure. Height x Length x Width 33,5 x 43.5 x 7 cm. / 13.1 x 17.1 x 2.7″"
  },
  {
    "product_name": "QUILTED DENIM CROSSBODY BAG",
    "image_url": "https://static.zara.net/photos///2023/I/1/1/p/6076/210/017/32/w/448/6076210017_2_3_1.jpg?ts=1689177055136",
    "price": "₹ 3,290.00",
    "details": "Quilted effect denim crossbody bag. Adjustable strap. Magnetic clasp closure. Height x Length x Width: 18 x 19.5 x 15 cm. / 7.0 x 7.6 x 5.9″"
  },
  {
    "product_name": "CROSSBODY BAG WITH FLAP",
    "image_url": "https://static.zara.net/photos///2023/I/1/1/p/6128/110/800/32/w/448/6128110800_1_1_1.jpg?ts=1687266880181",
    "price": "₹ 3,290.00",
    "details": "Crossbody bag with three inner compartments. Adjustable and detachable canvas strap and chain strap. Magnetic clasp closure. Height x Length x Width 15 x 24 x 7 cm. / 5.9 x 9.4 x 2.7″View more"
  },
  {
    "product_name": "MINIMALIST SHOULDER BAG WITH FLAP",
    "image_url": "https://static.zara.net/photos///2023/I/1/1/p/6136/110/400/2/w/448/6136110400_1_1_1.jpg?ts=1691142722742",
    "price": "₹ 2,590.00",
    "details": "Minimalist shoulder bag. Wide strap and buckles on the edges. Lined interior. Magnetic clasp closure.Height x Length x Width: 12 x 26 x 5 cm. / 4.7 x 10.2 x 1.9″View more"
  },
  {
    "product_name": "BUCKLED SHOULDER BAG",
    "image_url": "https://static.zara.net/photos///2023/I/1/1/p/6368/210/700/2/w/448/6368210700_2_1_1.jpg?ts=1691679675696",
    "price": "₹ 2,590.00",
    "details": "Shoulder bag with buckle detail. Adjustable shoulder strap. Zip and magnetic clasp closure.Height x Length x Width 15 x 25 x 6 cm. / 5.9 x 9.8 x 2.3″View more"
  },
  {
    "product_name": "PEARL-EFFECT MINAUDIÈRE",
    "image_url": "https://static.zara.net/photos///2023/I/1/1/p/6047/210/850/2/w/448/6047210850_1_1_1.jpg?ts=1689157160970",
    "price": "₹ 4,990.00",
    "details": "Pearl-effect minaudière. Asymmetric exterior. Raised details. Metal clasp. Height x Length x Width 13 x 19,3 x 7 cm. / 5.1 x 7.5 x 2.7″"
  },
  {
    "product_name": "",
    "image_url": "https://static.zara.net/photos///2023/I/1/1/p/6045/210/719/32/w/448/6045210719_6_8_1.jpg?ts=1689942663212",
    "price": "₹ 3,290.00",
    "details": "Fabric mini tote bag. Top handles and detachable and adjustable crossbody strap. Inner zip pocket. Zip closure. Height x Length x Width 23 x 27 x 9,8 cm. / 9.0 x 10.6 x 3.8″View more"
  },
  {
    "product_name": "QUILTED CLUTCH",
    "image_url": "https://static.zara.net/photos///2023/I/1/1/p/6250/110/716/2/w/448/6250110716_1_1_1.jpg?ts=1689331590997",
    "price": "₹ 1,990.00",
    "details": "Crossbody bag that converts into a clutch. Interior with several compartments. Detachable chain shoulder strap. Magnetic zip closure.Height x Length x Width: 11 x 21 x 6 cm. / 4.3 x 8.2 x 2.3″View more"
  },
  {
    "product_name": "EMBROIDERED TOTE BAG",
    "image_url": "https://static.zara.net/photos///2023/V/1/1/p/6183/110/111/2/w/448/6183110111_1_1_1.jpg?ts=1683128163286",
    "price": "₹ 2,890.00",
    "details": "Tote bag with die-cut fabric and embroidery. Inner bag with gathered closure. Shoulder straps. Height x Length x Width: 32 x 17 x 12.5 cm. / 12.5 x 6.6 x 4.9″View more"
  },
  {
    "product_name": "BRAIDED CROSSBODY BAG",
    "image_url": "https://static.zara.net/photos///2023/I/1/1/p/6305/110/111/2/w/448/6305110111_1_1_1.jpg?ts=1684917674218",
    "price": "₹ 2,290.00",
    "details": "Braided crossbody bag. Adjustable strap with buckle. Lined interior. Magnetic clasp closure. Height x Length x Width 18,2 x 27,7 x 11,6 cm. / 7.1 x 10.9 x 4.5″View more"
  },
  {
    "product_name": "DENIM TOTE BAG",
    "image_url": "https://static.zara.net/photos///2023/I/1/1/p/6028/210/802/22/w/448/6028210802_1_1_1.jpg?ts=1690366743462",
    "price": "₹ 3,290.00",
    "details": "Denim tote bag. Shoulder straps. Height x Length x Width 50 x 39 x 18 cm. / 19.6 x 15.3 x 7.0″"
  },
  {
    "product_name": "BASKET BAG",
    "image_url": "https://static.zara.net/photos///2023/I/1/1/p/6051/210/111/32/w/448/6051210111_1_1_1.jpg?ts=1686739875915",
    "price": "₹ 3,290.00",
    "details": "Raffia basket bag. Handle and detachable and adjustable crossbody strap. Inner bag with gathered closure. Height x Length x Width 18 x 15 x 13,5 cm. / 7.0 x 5.9 x 5.3″View more"
  },
  {
    "product_name": "CROSSBODY BAG WITH KNOTTED STRAP",
    "image_url": "https://static.zara.net/photos///2023/I/1/1/p/6251/110/850/2/w/448/6251110850_1_1_1.jpg?ts=1683212662797",
    "price": "₹ 2,290.00",
    "details": "Crossbody bag. Adjustable strap with knots and metal pieces on the ends. Magnetic clasp closure on the flap. Height x Length x Width 19 x 11 x 4 cm. / 7.4 x 4.3 x 1.5″View more"
  },
  {
    "product_name": "SOFT TOTE BAG",
    "image_url": "https://static.zara.net/photos///2023/I/1/1/p/6077/210/716/2/w/448/6077210716_1_1_1.jpg?ts=1690466480424",
    "price": "₹ 2,590.00",
    "details": "Soft-effect tote bag. Tubular shoulder straps. Magnetic clasp closure. Height x Length x Width 28,8 x 34 x 11,1 cm. / 11.3 x 13.3 x 4.3″"
  },
  {
    "product_name": "CROSSBODY BAG",
    "image_url": "https://static.zara.net/photos///2023/I/1/1/p/6011/210/719/32/w/448/6011210719_2_2_1.jpg?ts=1690382836068",
    "price": "₹ 3,290.00",
    "details": "Crossbody bag with a flap. Two adjustable and detachable straps, one a canvas shoulder strap and the other a crossbody strap. Magnetic clasp closure. Height x Length x Width 20,8 x 24,5 x 9,1 cm. / 8.1 x 9.6 x 3.5″View more"
  },
  {
    "product_name": "CORD BUCKET BAG",
    "image_url": "https://static.zara.net/photos///2023/I/1/1/p/6102/110/719/2/w/448/6102110719_1_1_1.jpg?ts=1685434794516",
    "price": "₹ 3,990.00",
    "details": "Bucket bag with woven cords and beading. Shoulder straps. Inner bag with gathered drawstring closure. Height x Length x Width 31,5 x 37,9 x 11,4 cm. / 12.4 x 14.9 x 4.4″View more"
  },
  {
    "product_name": "BUCKET BAG",
    "image_url": "https://static.zara.net/photos///2023/I/1/1/p/6172/110/111/2/w/448/6172110111_1_1_1.jpg?ts=1687514046045",
    "price": "₹ 2,590.00",
    "details": "Bucket bag. Contrast-coloured details. Shoulder strap.Height x Length x Width 34,4 x 22 x 8,4 cm. / 13.5 x 8.6 x 3.3″"
  },
  {
    "product_name": "METALLIC SHOULDER BAG",
    "image_url": "https://static.zara.net/photos///2023/I/1/1/p/6022/210/808/2/w/448/6022210808_1_1_1.jpg?ts=1689753585837",
    "price": "₹ 2,590.00",
    "details": "Shoulder bag with a metallic effect. Gathered detail at the top. Shoulder strap. Lined interior with pocket. Magnetic clasp closure.Height x Length x Width 35 x 47 x 6 cm. / 13.7 x 18.5 x 2.3″View more"
  },
  {
    "product_name": "FRAYED FABRIC BUCKET BAG",
    "image_url": "https://static.zara.net/photos///2023/I/1/1/p/6052/210/719/2/w/448/6052210719_1_1_1.jpg?ts=1688553117953",
    "price": "₹ 4,990.00",
    "details": "Fabric bucket bag with frayed detail on the side. Shoulder strap.Height x Length x Width 49 x 46 x 13 cm. / 19.2 x 18.1 x 5.1″"
  },
  {
    "product_name": "MINI BUCKET BAG WITH RHINESTONES",
    "image_url": "https://static.zara.net/photos///2023/I/1/1/p/6344/110/604/2/w/448/6344110604_1_1_1.jpg?ts=1689149035269",
    "price": "₹ 4,990.00",
    "details": "Mini bucket bag in rhinestone fabric. Lined interior. Handle and chain crossbody strap. Magnetic clasp closure.Height x Length x Width 16 x 16 x 8 cm. / 6.2 x 6.2 x 3.1″View more"
  },
  {
    "product_name": "SHOULDER BAG WITH CHAIN",
    "image_url": "https://static.zara.net/photos///2023/I/1/1/p/6304/110/626/2/w/448/6304110626_1_1_1.jpg?ts=1685093208112",
    "price": "₹ 3,990.00",
    "details": "Braided shoulder bag. Chain shoulder strap. Lined interior with double compartment and zip. Magnetic clasp closure.Height x Length x Width: 19.9 x 24.7 x 10.6 cm. / 7.8 x 9.7 x 4.1″View more"
  },
  {
    "product_name": "FAUX FUR LEATHER SHOULDER BAG",
    "image_url": "https://static.zara.net/photos///2023/I/1/1/p/6013/210/612/2/w/448/6013210612_1_1_1.jpg?ts=1690968919890",
    "price": "₹ 7,990.00",
    "details": "Leather shoulder bag with faux fur. Adjustable shoulder strap. Zip closure. Height x Length x Width 12,3 x 35,6 x 6,5 cm. / 4.8 x 14.0 x 2.5″"
  },
  {
    "product_name": "PADDED BUCKET BAG",
    "image_url": "https://static.zara.net/photos///2023/I/1/1/p/6035/210/111/2/w/448/6035210111_1_1_1.jpg?ts=1690466481247",
    "price": "₹ 2,590.00",
    "details": "Padded-effect bucket bag. Tubular crossbody straps. Gathered drawstring closure. Height x Length x Width 20,5 x 23,2 x 11 cm. / 8.0 x 9.1 x 4.3″View more"
  },
  {
    "product_name": "PLAITED TOTE BAG",
    "image_url": "https://static.zara.net/photos///2023/I/1/1/p/6265/110/400/2/w/448/6265110400_1_1_1.jpg?ts=1687964272331",
    "price": "₹ 3,290.00",
    "details": "Woven tote bag. Shoulder straps. Magnetic clasp closure. Height x Length x Width: 38.1 x 33.2 x 15.2 cm. / 15.0 x 13.0 x 5.9″"
  },
  {
    "product_name": "CLUTCH BAG WITH STUDS",
    "image_url": "https://static.zara.net/photos///2023/I/1/1/p/6000/110/040/17/w/448/6000110040_1_1_1.jpg?ts=1687516189409",
    "price": "₹ 1,990.00",
    "details": "Crossbody bag that converts into a clutch. Interior with several compartments. Detachable chain shoulder strap. Silver metal hardware. Zip closure.Height x Length x Width 14 x 23 x 3 cm. / 5.5 x 9.0 x 1.1″View more"
  },
  {
    "product_name": "STUDDED SPLIT SUEDE CLUTCH CROSSBODY BAG",
    "image_url": "https://static.zara.net/photos///2023/I/1/1/p/6085/210/718/22/w/448/6085210718_1_1_1.jpg?ts=1684337565507",
    "price": "₹ 2,890.00",
    "details": "Split suede crossbody bag that converts into a clutch. Several inside compartments. Detachable chain shoulder strap. Silver metal pieces. Zip closure.Height x Length x Width 14 x 23 x 3 cm. / 5.5 x 9.0 x 1.1″View more"
  },
  {
    "product_name": "CLUTCH BAG WITH STUDS",
    "image_url": "https://static.zara.net/photos///2023/I/1/1/p/6001/111/092/2/w/448/6001111092_1_1_1.jpg?ts=1685434793367",
    "price": "₹ 1,990.00",
    "details": "Mini crossbody bag. Beading around the edge. Zip closure. Lined interior with pocket.Height x Length x Width 14 x 23 x 3 cm. / 5.5 x 9.0 x 1.1″"
  },
  {
    "product_name": "STUDDED MACRAMÉ WALLET CROSSBODY BAG",
    "image_url": "https://static.zara.net/photos///2023/I/1/1/p/6074/110/719/22/w/448/6074110719_1_1_1.jpg?ts=1687189058332",
    "price": "₹ 2,590.00",
    "details": "Crossbody bag that converts into a wallet. Macramé exterior. Interior with several compartments. Detachable chain shoulder strap. Silver metal pieces. Zip closure.Height x Length x Width 14 x 23 x 3 cm. / 5.5 x 9.0 x 1.1″View more"
  },
  {
    "product_name": "METALLIC QUILTED MINI BUCKET BAG",
    "image_url": "https://static.zara.net/photos///2023/I/1/1/p/6069/210/254/2/w/448/6069210254_1_1_1.jpg?ts=1690968920349",
    "price": "₹ 2,290.00",
    "details": "Metallic-effect quilted mini bucket bag. Detachable and adjustable crossbody strap. Magnetic clasp closure.Height x Length x Width: 13.7 x 18.5 x 14.5 cm. / 5.3 x 7.2 x 5.7″View more"
  },
  {
    "product_name": "FABRIC HANDBAG",
    "image_url": "https://static.zara.net/photos///2023/I/1/1/p/6806/210/850/2/w/448/6806210850_1_1_1.jpg?ts=1691139836248",
    "price": "₹ 2,290.00",
    "details": "Fabric handbag. Handle. Zip closure.Height x Length x Width 30 x 15 x 5 cm. / 11.8 x 5.9 x 1.9″"
  },
  {
    "product_name": "TEXTURED FABRIC BAG",
    "image_url": "https://static.zara.net/photos///2023/I/1/1/p/6300/210/400/2/w/448/6300210400_1_1_1.jpg?ts=1691139835549",
    "price": "₹ 2,290.00",
    "details": "Textured fabric handbag. Handle. Zip closure.Height x Length x Width 30 x 15 x 5 cm. / 11.8 x 5.9 x 1.9″"
  },
  {
    "product_name": "CITY BAG WITH GROMMETS",
    "image_url": "https://static.zara.net/photos///2023/I/1/1/p/6148/210/017/2/w/448/6148210017_1_1_1.jpg?ts=1691679675537",
    "price": "₹ 3,290.00",
    "details": "City bag. Grommets on the exterior. Top handles. Magnetic clasp closure.Height x Length x Width 17 x 14 x 9 cm. / 6.6 x 5.5 x 3.5″"
  },
  {
    "product_name": "BRAIDED BUCKET BAG",
    "image_url": "https://static.zara.net/photos///2023/I/1/1/p/6061/210/604/2/w/448/6061210604_1_1_1.jpg?ts=1691073267677",
    "price": "₹ 8,990.00",
    "details": "Braided bucket bag. Braided shoulder strap. Zip closure. Height x Length x Width 25 x 23 x 9 cm. / 9.8 x 9.0 x 3.5″"
  },
  {
    "product_name": "BRAIDED CROSSBODY BAG",
    "image_url": "https://static.zara.net/photos///2023/I/1/1/p/6059/210/111/2/w/448/6059210111_1_1_1.jpg?ts=1691073268631",
    "price": "₹ 7,990.00",
    "details": "Braided crossbody bag. Long braided strap. Zip closure. Height x Length x Width 18 x 18 x 7 cm. / 7.0 x 7.0 x 2.7″"
  },
  {
    "product_name": "PLAITED TOTE BAG",
    "image_url": "https://static.zara.net/photos///2023/I/1/1/p/6060/210/716/2/w/448/6060210716_1_1_1.jpg?ts=1691073268041",
    "price": "₹ 7,990.00",
    "details": "Braided tote bag. Long braided strap. Zip closure.Height x Length x Width 17 x 35 x 10 cm. / 6.6 x 13.7 x 3.9″"
  },
  {
    "product_name": "BRAIDED FABRIC BUCKET BAG",
    "image_url": "https://static.zara.net/photos///2023/I/1/1/p/6031/210/111/2/w/448/6031210111_1_1_1.jpg?ts=1691073268737",
    "price": "₹ 5,990.00",
    "details": "Bucket bag in braided-effect fabric. Shoulder straps. Magnetic clasp closure. Height x Length x Width 36 x 46 x 9 cm. / 14.1 x 18.1 x 3.5″"
  },
  {
    "product_name": "MESH MINI TOTE BAG",
    "image_url": "https://static.zara.net/photos///2023/V/1/1/p/6108/110/802/22/w/448/6108110802_1_1_1.jpg?ts=1681374851329",
    "price": "₹ 1,990.00",
    "details": "Mini tote bag. Beaded detailing on the exterior. Lining.Height x Length x Width 14,3 x 19 x 7 cm. / 5.6 x 7.4 x 2.7″"
  },
  {
    "product_name": "MACRAMÉ SHOULDER BAG",
    "image_url": "https://static.zara.net/photos///2023/I/1/1/p/6101/110/719/2/w/448/6101110719_15_2_1.jpg?ts=1684498139767",
    "price": "₹ 3,290.00",
    "details": "Knit macramé shoulder bag. Lined interior. Shoulder strap. Magnetic clasp closure. Height x Length x Width 21,1 x 32,6 x 5,4 cm. / 8.3 x 12.8 x 2.1″"
  },
  {
    "product_name": "MACRAMÉ TOTE BAG",
    "image_url": "https://static.zara.net/photos///2023/I/1/1/p/6100/110/719/2/w/448/6100110719_1_1_1.jpg?ts=1684837641502",
    "price": "₹ 5,990.00",
    "details": "Knit macramé tote bag. Shoulder straps. Inner bag with gathered drawstring fastening. Height x Length x Width 34,8 x 58,2 x 20,5 cm. / 13.7 x 22.9 x 8.0″"
  },
  {
    "product_name": "BEADED SHOULDER BAG WITH FRINGING",
    "image_url": "https://static.zara.net/photos///2023/I/1/1/p/6361/010/091/2/w/448/6361010091_1_1_1.jpg?ts=1690968920422",
    "price": "₹ 4,990.00",
    "details": "Shoulder bag with beads and fringing. Magnetic clasp closure on the flap. Height x Length x Width 13 x 23 x 5 cm. / 5.1 x 9.0 x 1.9″"
  },
  {
    "product_name": "CUTWORK MINI TOTE BAG",
    "image_url": "https://static.zara.net/photos///2023/I/1/1/p/6078/210/800/2/w/448/6078210800_1_1_1.jpg?ts=1689686542615",
    "price": "₹ 5,990.00",
    "details": "Mini tote bag with cutwork effect. Fabric inner bag with gathered closure. Top handles and detachable and adjustable crossbody strap. Magnetic clasp closure. Height x Length x Width 18,7 x 24,7 x 11,5 cm. / 7.3 x 9.7 x 4.5″View more"
  },
  {
    "product_name": "MINI LEATHER BUCKET BAG WITH COINS",
    "image_url": "https://static.zara.net/photos///2023/I/1/1/p/6063/210/719/2/w/448/6063210719_1_1_1.jpg?ts=1692200336829",
    "price": "₹ 13,990.00",
    "details": "Mini leather bucket bag. Metallic details in the shape of coins. Shoulder strap. Magnetic clasp closure. Height x Length x Width: 21 x 27 x 11 cm. / 8.2 x 10.6 x 4.3″View more"
  },
  {
    "product_name": "LEATHER BUCKET BAG WITH COINS",
    "image_url": "https://static.zara.net/photos///2023/I/1/1/p/6062/210/719/2/w/448/6062210719_1_1_1.jpg?ts=1690189295087",
    "price": "₹ 16,990.00",
    "details": "Leather bucket bag. Metallic details in the shape of coins. Adjustable shoulder strap. Magnetic clasp closure. Height x Length x Width: 27.7 x 25 x 13.4 cm. / 10.9 x 9.8 x 5.2″View more"
  },
  {
    "product_name": "BRAIDED MINI TOTE BAG",
    "image_url": "https://static.zara.net/photos///2023/I/1/1/p/6213/110/111/2/w/448/6213110111_1_1_1.jpg?ts=1685616454473",
    "price": "₹ 2,590.00",
    "details": "Woven mini tote bag. Handles and detachable and adjustable crossbody strap. Magnetic clasp closure. Height x Length x Width 17 x 22,5 x 10 cm. / 6.6 x 8.8 x 3.9″View more"
  },
  {
    "product_name": "PLAITED TOTE BAG",
    "image_url": "https://static.zara.net/photos///2023/I/1/1/p/6064/210/500/2/w/448/6064210500_1_1_1.jpg?ts=1688732311392",
    "price": "₹ 3,290.00",
    "details": "Woven paper tote bag. Handles.Height x Length x Width 24,6 x 43,8 x 16,4 cm. / 9.6 x 17.2 x 6.4″"
  },
  {
    "product_name": "BUCKET BAG WITH BEADING",
    "image_url": "https://static.zara.net/photos///2023/I/1/1/p/6056/210/700/2/w/448/6056210700_1_1_1.jpg?ts=1688127590908",
    "price": "₹ 4,990.00",
    "details": "Bucket bag with beading. Shoulder strap. Lined interior. Magnetic clasp closure. Height x Length x Width: 31 x 18 x 5 cm. / 12.2 x 7.0 x 1.9″"
  },
  {
    "product_name": "BUCKET BAG WITH RUFFLES",
    "image_url": "https://static.zara.net/photos///2023/I/1/1/p/6049/210/111/2/w/448/6049210111_1_1_1.jpg?ts=1688127590783",
    "price": "₹ 4,990.00",
    "details": "Bucket bag with beading. Ruffled detail. Shoulder strap. Lined interior. Magnetic clasp closure. Height x Length x Width: 14 x 29.5 x 15 cm. / 5.5 x 11.6 x 5.9″View more"
  },
  {
    "product_name": "QUILTED TOTE BAG",
    "image_url": "https://static.zara.net/photos///2023/I/1/1/p/6037/210/300/2/w/448/6037210300_1_1_1.jpg?ts=1690466482853",
    "price": "₹ 2,890.00",
    "details": "Quilted-effect tote bag. Handles and detachable and adjustable crossbody strap. Magnetic clasp closure. Height x Length x Width 31,5 x 26,9 x 12,7 cm. / 12.4 x 10.5 x 5.0″View more"
  },
  {
    "product_name": "DENIM PATCHWORK MINI CITY BAG",
    "image_url": "https://static.zara.net/photos///2023/I/1/1/p/6065/210/802/2/w/448/6065210802_1_1_1.jpg?ts=1689149034950",
    "price": "₹ 2,590.00",
    "details": "Mini city bag in patchwork-effect denim fabric. Handle with knot detail and long crossbody strap. Height x Length x Width 11 x 19 x 7 cm. / 4.3 x 7.4 x 2.7″View more"
  },
  {
    "product_name": "TIE-DYE TOTE BAG",
    "image_url": "https://static.zara.net/photos///2023/I/1/1/p/6053/210/202/2/w/448/6053210202_1_1_1.jpg?ts=1689157164452",
    "price": "₹ 4,990.00",
    "details": "Woven tie-dye effect tote bag. Shoulder straps. Magnetic clasp closure. Height x Length x Width 31,7 x 50,6 x 8,4 cm. / 12.4 x 19.9 x 3.3″"
  },
  {
    "product_name": "TIE-DYE MOBILE PHONE BAG",
    "image_url": "https://static.zara.net/photos///2023/I/1/1/p/6081/210/202/2/w/448/6081210202_1_1_1.jpg?ts=1689157162178",
    "price": "₹ 1,990.00",
    "details": "Crossbody mobile phone bag. Tie-dye effect. Inner bag. Gathered drawstring closure. Height x Length x Width: 17.7 x 12.2 x 4.7 cm. / 6.9 x 4.8 x 1.8″"
  },
  {
    "product_name": "TIE-DYE DENIM MAXI TOTE BAG",
    "image_url": "https://static.zara.net/photos///2023/I/1/1/p/6024/210/202/22/w/448/6024210202_1_1_1.jpg?ts=1689178492449",
    "price": "₹ 4,990.00",
    "details": "Tote bag in tie-dye effect denim fabric. Shoulder straps. Magnetic clasp closure. Height x Length x Width 48 x 62 x 25 cm. / 18.8 x 24.4 x 9.8″"
  },
  {
    "product_name": "CANVAS MINI CITY BAG",
    "image_url": "https://static.zara.net/photos///2023/I/1/1/p/6334/110/800/17/w/448/6334110800_1_1_1.jpg?ts=1687362635298",
    "price": "₹ 2,890.00",
    "details": "Mini city bag in canvas fabric. Contrast-coloured details. Top handle and detachable and adjustable crossbody shoulder strap. Height x Length x Width 16 x 22 x 7,5 cm. / 6.2 x 8.6 x 2.9″View more"
  },
  {
    "product_name": "TEXTURED RIGID SUITCASE",
    "image_url": "https://static.zara.net/photos///2023/I/1/1/p/3001/120/070/502/w/448/3001120070_6_1_1.jpg?ts=1684846781210",
    "price": "₹ 9,590.00",
    "details": "Rigid travel suitcase. The main compartment has double zip closure. Interior with separator with zip closure and adjustable straps for organising luggage. Top handle and extendible pull tab. Four swivel wheels.Height x Length x Width: 55 x 40 x 20 cm. / 21.6 x 15.7 x 7.8″View more"
  },
  {
    "product_name": "SEMI-RIGID SUITCASE",
    "image_url": "https://static.zara.net/photos///2023/I/1/2/p/3000/120/202/2/w/448/3000120202_2_1_1.jpg?ts=1686563299333",
    "price": "₹ 9,590.00",
    "details": "Semi-rigid travel suitcase. The main compartment has double zip closure and a security system with a code. Its interior features a large compartment without closure, a small bag with gathered drawstring closure and two small zip pockets. Also features adjustable straps for organising luggage on the inside. One side has a zip pocket. Two central handles, one top handle and an extendible handle. Rigid base at the back and two wheels at the bottom. Suitable for carry-on luggage depending on the airline. Height x Length x Width 52 x 30 x 32 cm. / 20.4 x 11.8 x 12.5″View more"
  },
  {
    "product_name": "MONOCHROME BRIEFCASE",
    "image_url": "https://static.zara.net/photos///2023/I/1/1/p/3400/220/800/502/w/448/3400220800_6_1_1.jpg?ts=1687872086277",
    "price": "₹ 4,590.00",
    "details": "Plain monochrome briefcase. The main compartment is suitable for electronic devices and laptops of up to 13 inches. Zip closure. The inside has a large pocket without closure. Large front pocket with zip closure.Height x Length x Width 30 x 40 x 3 cm.View more"
  },
  {
    "product_name": "MONOCHROME FORMAL BOWLING BAG",
    "image_url": "https://static.zara.net/photos///2023/I/1/2/p/3100/123/700/2/w/448/3100123700_2_1_1.jpg?ts=1684313564423",
    "price": "₹ 5,990.00",
    "details": "Bowling bag. Soft design. The main compartment closes with a zip and its interior has four pockets, three of them without closure. Has two handles and one adjustable and detachable shoulder strap.Height x Length x Width 33 x 47 x 24 cm. / 12.9 x 18.5 x 9.4″View more"
  },
  {
    "product_name": "DOUBLE BRIEFCASE",
    "image_url": "https://static.zara.net/photos///2023/I/1/2/p/3402/220/800/2/w/448/3402220800_2_1_1.jpg?ts=1687173845118",
    "price": "₹ 5,990.00",
    "details": "Monochrome briefcase. Two main compartments for electronic devices and laptops of up to 13 inches with zip closure. The first main compartment has a medium-sized inside pocket for devices with hook-and-loop strap closure. The second main compartment has two pockets without closures. The front has a compartment with concealed magnetic clasp closure. Two top handles and an adjustable and detachable shoulder strap.Height x Length x Width: 30 x 42 x 15 cm.View more"
  },
  {
    "product_name": "MACRAMÉ BAG",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/4162/201/615/2/w/448/4162201615_1_1_1.jpg?ts=1687963294501",
    "price": "₹ 2,290.00",
    "details": "Bag made of macramé. Shoulder straps.No lining.HEIGHT x LENGTH x WIDTH: 40 x 26 x 1 cm / 15.7 x 10.2 x 0.3″View more"
  },
  {
    "product_name": "PRINTED MAXI BAG",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/2856/205/670/2/w/448/2856205670_1_1_1.jpg?ts=1685615819865",
    "price": "₹ 3,290.00",
    "details": "Max quilted tote bag. Shoulder strap.Height x Length x Width: 50 x 74 x 10 cm. / 19.6 x 29.1 x 3.9″"
  },
  {
    "product_name": "PRINTED QUILTED TOILETRY BAG",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/0264/202/612/2/w/448/0264202612_6_1_1.jpg?ts=1684487567236",
    "price": "₹ 1,890.00",
    "details": "Multi-purpose quilted toiletry bag featuring a main compartment with zip closure with tassel and fringing."
  },
  {
    "product_name": "MESH TOTE BAG",
    "image_url": "https://static.zara.net/photos///2023/I/1/1/p/3342/220/701/502/w/448/3342220701_6_1_1.jpg?ts=1689698623101",
    "price": "₹ 1,590.00",
    "details": "Tote bag. Soft mesh design. No fastening. Two shoulder straps.Height x Length x Width 74 x 36 x 3 cm. / 29.1 x 14.1 x 1.1″"
  },
  {
    "product_name": "CHAIN LINK COIN NECKLACE",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/4548/245/808/2/w/448/4548245808_1_1_1.jpg?ts=1692868198326",
    "price": "₹ 1,890.00",
    "details": "Necklace featuring metal links in different sizes with raised coin pendants. Lobster clasp fastening."
  },
  {
    "product_name": "LEATHER BELT WITH SQUARE BUCKLE",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/6399/203/700/2/w/448/6399203700_1_1_1.jpg?ts=1692868198780",
    "price": "₹ 2,590.00",
    "details": "Leather belt with a square buckle and loops lined in the same material."
  },
  {
    "product_name": "DENIM SASH BELT",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/3183/205/400/13/w/448/3183205400_1_1_1.jpg?ts=1692893221589",
    "price": "₹ 2,290.00",
    "details": "Sash belt in denim fabric. Asymmetric waistband. Front pockets. Metal button fastening on the front."
  },
  {
    "product_name": "FLORAL NECK BOW",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/0653/270/400/12/w/448/0653270400_1_1_1.jpg?ts=1692893120657",
    "price": "₹ 990.00",
    "details": "Long bow with floral detail made of the same fabric."
  },
  {
    "product_name": "DENIM SASH BELT WITH POCKETS",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/3183/203/400/13/w/448/3183203400_1_1_1.jpg?ts=1692893185957",
    "price": "₹ 2,290.00",
    "details": "Sash belt in denim fabric with patch pockets."
  },
  {
    "product_name": "TWILL SASH BELT WITH POCKETS",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/3183/209/712/13/w/448/3183209712_1_1_1.jpg?ts=1692893247924",
    "price": "₹ 2,290.00",
    "details": "Twill sash belt with patch pockets."
  },
  {
    "product_name": "DENIM TOP WITH RHINESTONES",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/0653/273/400/12/w/448/0653273400_2_1_1.jpg?ts=1692947812175",
    "price": "₹ 2,590.00",
    "details": "Top made of denim. Featuring a straight neckline, thin straps, rhinestone appliqués and metal hook fastening at the back."
  },
  {
    "product_name": "MAXI PEARL BEAD NECKLACE",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/1856/344/109/2/w/448/1856344109_1_1_1.jpg?ts=1692607629807",
    "price": "₹ 1,990.00",
    "details": "Double necklace with faux pearl appliqués. Lobster clasp fastening."
  },
  {
    "product_name": "PACK OF FAUX PEARL NECKLACES",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/1856/345/109/3/w/448/1856345109_1_1_1.jpg?ts=1692633398097",
    "price": "₹ 2,990.00",
    "details": "Pack of necklaces:-Long necklaces with faux pearl appliqués.-Necklace with faux pearl appliqués. Lobster clasp fastening."
  },
  {
    "product_name": "LEATHER CORD NECKLACE WITH PLATE",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/1856/349/303/2/w/448/1856349303_1_1_1.jpg?ts=1692607629626",
    "price": "₹ 1,990.00",
    "details": "Metal plate necklace with leather cord."
  },
  {
    "product_name": "INTERWOVEN CHAIN NECKLACE",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/4736/243/303/2/w/448/4736243303_1_1_1.jpg?ts=1692607629660",
    "price": "₹ 1,590.00",
    "details": "Metal necklace with interwoven chain. Lobster clasp fastening."
  },
  {
    "product_name": "MAXI BUTTON EARRINGS",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/1856/338/303/2/w/448/1856338303_1_1_1.jpg?ts=1692607629501",
    "price": "₹ 1,590.00",
    "details": "Metal round earrings. Push-back clasps."
  },
  {
    "product_name": "KAFTAN WITH WOODEN BEADS",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/6188/010/712/2/w/448/6188010712_1_1_1.jpg?ts=1683728027400",
    "price": "₹ 3,990.00",
    "details": "V-neck kaftan with short sleeves. Drawstrings with wooden beads."
  },
  {
    "product_name": "ASYMMETRIC DENIM WAISTCOAT",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/3183/206/400/2/w/448/3183206400_1_1_1.jpg?ts=1692350044208",
    "price": "₹ 2,590.00",
    "details": "Waistcoat made of denim. Featuring an asymmetric neckline, front patch pocket and belt with metal buckle fastening at the waist."
  },
  {
    "product_name": "ASYMMETRIC DENIM SLEEVES",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/3183/207/400/2/w/448/3183207400_1_1_1.jpg?ts=1692350043823",
    "price": "₹ 2,290.00",
    "details": "Sleeves made of denim. Featuring an asymmetric neckline and adjustable metal buckle fastening."
  },
  {
    "product_name": "AVIATOR SUNGLASSES",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/2727/201/303/3/w/448/2727201303_1_1_1.jpg?ts=1685703939310",
    "price": "₹ 1,990.00",
    "details": "Aviator-style sunglasses with a metal frame. Case included.100% UV Protection. Category 3."
  },
  {
    "product_name": "PRINTED MAXI BAG",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/2856/205/670/2/w/448/2856205670_1_1_1.jpg?ts=1685615819865",
    "price": "₹ 3,290.00",
    "details": "Max quilted tote bag. Shoulder strap.Height x Length x Width: 50 x 74 x 10 cm. / 19.6 x 29.1 x 3.9″"
  },
  {
    "product_name": "RESIN SUNGLASSES",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/2727/203/760/12/w/448/2727203760_1_1_1.jpg?ts=1685704020015",
    "price": "₹ 1,990.00",
    "details": "Resin sunglasses. Case included.100% UV Protection. Category 3."
  },
  {
    "product_name": "SURPLICE SWIMSUIT WITH METAL PIECE",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/0167/234/800/12/w/448/0167234800_1_1_1.jpg?ts=1688480100062",
    "price": "₹ 3,290.00",
    "details": "Swimsuit featuring removable cups, a surplice neckline and thin straps. Metal appliqué detail on the front."
  },
  {
    "product_name": "WIDE LEATHER BELT",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/6399/208/800/2/w/448/6399208800_1_1_1.jpg?ts=1691675319810",
    "price": "₹ 2,590.00",
    "details": "Leather belt. Fastening with metal buckle and belt loop."
  },
  {
    "product_name": "IRREGULAR HOOP EARRINGS",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/4736/242/303/2/w/448/4736242303_1_1_1.jpg?ts=1691675319976",
    "price": "₹ 1,590.00",
    "details": "Irregular hoop-shaped metallic earrings. Push-back fastening."
  },
  {
    "product_name": "OVAL EARRINGS",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/4736/236/303/17/w/448/4736236303_1_1_1.jpg?ts=1691736630947",
    "price": "₹ 1,590.00",
    "details": "Contrast metallic oval earrings. Push-back and clip closure."
  },
  {
    "product_name": "MINI HOOP EARRINGS",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/1856/286/881/2/w/448/1856286881_1_1_1.jpg?ts=1691675320097",
    "price": "₹ 1,590.00",
    "details": "Small metal hoop earrings. Push-back closure."
  },
  {
    "product_name": "PACK OF HOOP EARRINGS",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/1856/255/303/17/w/448/1856255303_1_1_1.jpg?ts=1691582964428",
    "price": "₹ 990.00",
    "details": "- Metal earrings. Click fastening. - Metal earrings with rhinestone appliqué. Click fastening. - Metal earrings with rhinestone appliqué. Push-back fastening."
  },
  {
    "product_name": "PACK OF NECKLACES",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/1856/265/303/3/w/448/1856265303_1_1_1.jpg?ts=1690546400962",
    "price": "₹ 1,590.00",
    "details": "Three-pack of necklaces:- Metal chain link necklace. Lobster clasp fastening. - Metal necklace. Lobster clasp fastening. - Metal necklace. Lobster clasp fastening.View more"
  },
  {
    "product_name": "PACK OF HOOP EARRINGS",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/1856/256/808/2/w/448/1856256808_1_1_1.jpg?ts=1690530689657",
    "price": "₹ 990.00",
    "details": "- Metal earrings. Push-back fastening. - Metal earrings. Push-back fastening."
  },
  {
    "product_name": "MEDIUM HOOP EARRINGS",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/1856/257/303/3/w/448/1856257303_1_1_1.jpg?ts=1690546400594",
    "price": "₹ 990.00",
    "details": "Metal earrings. Push-back fastening."
  },
  {
    "product_name": "PACK OF RHINESTONE NECKLACES",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/1856/261/303/3/w/448/1856261303_1_1_1.jpg?ts=1690546400498",
    "price": "₹ 1,590.00",
    "details": "Two-pack of necklaces:- Metal necklace.- Metal necklace with rhinestone appliqués."
  },
  {
    "product_name": "PACK OF FRESH WATER PEARL BEAD NECKLACES",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/1856/260/303/3/w/448/1856260303_1_1_1.jpg?ts=1690546400539",
    "price": "₹ 1,590.00",
    "details": "Two-pack of necklaces:- Metal necklace.- Metal necklace with faux pearl bead appliqués."
  },
  {
    "product_name": "BEADED CROCHET TOP",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/4340/008/330/2/w/448/4340008330_1_1_1.jpg?ts=1687861189709",
    "price": "₹ 5,990.00",
    "details": "Crochet top with multicoloured beads. Round neck and back fastening."
  },
  {
    "product_name": "CROCHET CHOKER WITH FRINGING",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/4340/005/330/2/w/448/4340005330_1_1_1.jpg?ts=1687861189223",
    "price": "₹ 1,990.00",
    "details": "Crochet choker with bead appliqués and fringing. Braided tie closure."
  },
  {
    "product_name": "STRIPED CROCHET HAT",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/3920/214/703/2/w/448/3920214703_1_1_1.jpg?ts=1687861188860",
    "price": "₹ 2,290.00",
    "details": "Hat made of crochet fabric."
  },
  {
    "product_name": "BEADED FLORAL EARRINGS",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/4340/006/330/3/w/448/4340006330_1_1_1.jpg?ts=1687963869620",
    "price": "₹ 1,990.00",
    "details": "Flower-shaped dangle earrings with fabric and multicoloured bead details. Push-back and clip closure."
  },
  {
    "product_name": "ASYMMETRIC HEART EARRINGS",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/1856/319/808/2/w/448/1856319808_1_1_1.jpg?ts=1691049410533",
    "price": "₹ 1,590.00",
    "details": "Heart-shaped metal earrings with faux pearl appliqués. Push-back closure."
  },
  {
    "product_name": "PACK OF RESIN RINGS",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/4736/241/805/2/w/448/4736241805_1_1_1.jpg?ts=1691049409954",
    "price": "₹ 1,590.00",
    "details": "Pack of two metal rings with a transparent resin stone.Measurements: 17 mm and 18 mm."
  },
  {
    "product_name": "COLOURED RHINESTONE EARRINGS",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/1856/289/303/2/w/448/1856289303_1_1_1.jpg?ts=1691049410334",
    "price": "₹ 1,590.00",
    "details": "Metal earrings with coloured rhinestones. Push-back and clip closure."
  },
  {
    "product_name": "ROLLED HOOP EARRINGS",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/1856/258/303/2/w/448/1856258303_1_1_1.jpg?ts=1691049410029",
    "price": "₹ 990.00",
    "details": "Twisted metal hoop earrings. Push-back closure."
  },
  {
    "product_name": "ASYMMETRIC EARRINGS",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/1856/295/303/2/w/448/1856295303_1_1_1.jpg?ts=1691049410312",
    "price": "₹ 1,590.00",
    "details": "Metal asymmetric earrings. Push-back closure."
  },
  {
    "product_name": "CASCADING NECKLACE WITH BEADS",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/1070/201/700/2/w/448/1070201700_1_1_1.jpg?ts=1688032290705",
    "price": "₹ 2,990.00",
    "details": "Cascading necklace with beads in different materials. Lobster clasp fastening."
  },
  {
    "product_name": "BEADED FLORAL EARRINGS",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/7243/204/630/2/w/448/7243204630_1_1_1.jpg?ts=1688032290971",
    "price": "₹ 1,990.00",
    "details": "Flower-shaped long earrings made of tulle with beading. Push-back and clip closure."
  },
  {
    "product_name": "REVERSIBLE RUSTIC HAT",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/0653/236/052/2/w/448/0653236052_1_1_1.jpg?ts=1688032289837",
    "price": "₹ 2,590.00",
    "details": "Reversible hat made of a cotton, linen and jute blend."
  },
  {
    "product_name": "PRINTED LINEN BLEND SCARF",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/9967/201/330/3/w/448/9967201330_1_1_1.jpg?ts=1688460607161",
    "price": "₹ 2,290.00",
    "details": "Scarf made of a linen blend with frayed edges.Measurements: 187 x 105 cm. / 73.6 x 41.3″"
  },
  {
    "product_name": "RIPPED DENIM CAP",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/0653/268/811/2/w/448/0653268811_2_1_1.jpg?ts=1689088656441",
    "price": "₹ 1,590.00",
    "details": "Peak cap made of denim fabric. Adjustable at the back. Ripped details."
  },
  {
    "product_name": "TRIPLE DIAMOND-SHAPED EARRINGS",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/1124/021/303/3/w/448/1124021303_1_1_1.jpg?ts=1685008128900",
    "price": "₹ 1,590.00",
    "details": "Metal dangle earrings in the shape of diamonds. Push-back closure."
  },
  {
    "product_name": "RESIN NECKLACE",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/1856/277/808/12/w/448/1856277808_1_1_1.jpg?ts=1689680843555",
    "price": "₹ 2,590.00",
    "details": "Metallic necklace with transparent resin stones. Lobster clasp fastening."
  },
  {
    "product_name": "RESIN EARRINGS",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/1856/269/808/17/w/448/1856269808_1_1_1.jpg?ts=1689758409775",
    "price": "₹ 1,590.00",
    "details": "Metal earrings with transparent resin stone. Push-back and clip closure."
  },
  {
    "product_name": "FAUX PEARL CHAIN LINK EARRINGS",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/1856/271/808/12/w/448/1856271808_1_1_1.jpg?ts=1689680843776",
    "price": "₹ 1,590.00",
    "details": "Metal chain link earrings with a ball and faux pearl pendant. Push-back clasps."
  },
  {
    "product_name": "PACK OF METALLIC BRACELETS",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/4548/228/808/12/w/448/4548228808_1_1_1.jpg?ts=1689680843456",
    "price": "₹ 1,590.00",
    "details": "Pack of textured metal bracelets."
  },
  {
    "product_name": "XL POLARISED SUNGLASSES",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/2727/007/800/2/w/448/2727007800_6_1_1.jpg?ts=1689602885857",
    "price": "₹ 2,290.00",
    "details": "Sunglasses with XL shield.100% UV Protection. Category 3."
  },
  {
    "product_name": "STRAIGHT SUNGLASSES WITH FRAME",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/4646/002/800/2/w/448/4646002800_6_1_1.jpg?ts=1689601549294",
    "price": "₹ 1,990.00",
    "details": "Sunglasses with a coloured resin frame. Case included.100% UV PROTECTION. CATEGORY 3."
  },
  {
    "product_name": "CATEYE SUNGLASSES",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/4646/201/800/2/w/448/4646201800_1_1_1.jpg?ts=1684420173174",
    "price": "₹ 1,990.00",
    "details": "Sunglasses with a resin frame. Case included.100% UV PROTECTION. CATEGORY 3."
  },
  {
    "product_name": "MAXI WOODEN NECKLACE",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/4736/212/303/2/w/448/4736212303_1_1_1.jpg?ts=1684852151014",
    "price": "₹ 2,290.00",
    "details": "Maxi necklace with contrasting wood. Lobster clasp fastening."
  },
  {
    "product_name": "CIRCULAR WOODEN NECKLACE",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/1856/212/303/2/w/448/1856212303_1_1_1.jpg?ts=1684852148956",
    "price": "₹ 1,990.00",
    "details": "Metal necklace with a circular wooden pendant."
  },
  {
    "product_name": "MAXI BEADED NECKLACE",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/7243/200/700/17/w/448/7243200700_1_1_1.jpg?ts=1692187333204",
    "price": "₹ 2,990.00",
    "details": "Maxi necklace with beads. Lobster clasp fastening."
  },
  {
    "product_name": "SATIN TURBAN CAP",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/0653/266/620/17/w/448/0653266620_1_1_1.jpg?ts=1692187330999",
    "price": "₹ 990.00",
    "details": "Satin cap headband. Elastic detail and tie detail."
  },
  {
    "product_name": "NECK FLOWER WITH CORD",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/0653/272/800/17/w/448/0653272800_1_1_1.jpg?ts=1692186532353",
    "price": "₹ 990.00",
    "details": "Long cord with flowers made of fabric."
  },
  {
    "product_name": "STRETCH BELT WITH ACETATE EFFECT",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/1736/219/052/17/w/448/1736219052_1_1_1.jpg?ts=1692187337882",
    "price": "₹ 1,990.00",
    "details": "Stretch jute belt. Contrast acetate-effect buckle."
  },
  {
    "product_name": "PACK OF LONG NECKLACES",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/4548/236/303/12/w/448/4548236303_1_1_1.jpg?ts=1690546393650",
    "price": "₹ 1,890.00",
    "details": "Two-pack of necklaces:-Necklace with coloured beads.-Fine chain with pendants in the shape of a fish and coloured rhinestones."
  },
  {
    "product_name": "FAN EARRINGS",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/1856/281/303/17/w/448/1856281303_1_1_1.jpg?ts=1691583113474",
    "price": "₹ 1,590.00",
    "details": "Fan-shaped metal earrings. Push-back and clip closure."
  },
  {
    "product_name": "METAL NECKLACE",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/1856/224/808/2/w/448/1856224808_1_1_1.jpg?ts=1689929449635",
    "price": "₹ 990.00",
    "details": "Rigid metal necklace."
  },
  {
    "product_name": "FAUX PEARL BEAD DOUBLE NECKLACE",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/4548/235/303/2/w/448/4548235303_1_1_1.jpg?ts=1689929452348",
    "price": "₹ 1,990.00",
    "details": "Short double necklace with faux pearl beads. Lobster clasp fastening."
  },
  {
    "product_name": "PEARL BEAD HOOP EARRINGS",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/1856/282/303/2/w/448/1856282303_1_1_1.jpg?ts=1689929451970",
    "price": "₹ 1,590.00",
    "details": "Hoop earrings with faux pearl bead appliqués. Push-back closure."
  },
  {
    "product_name": "FLOWER BROOCH",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/0653/271/800/2/w/448/0653271800_1_1_1.jpg?ts=1689929448906",
    "price": "₹ 990.00",
    "details": "Flower-shaped fabric brooch. Double clip-on and safety pin fastening."
  },
  {
    "product_name": "PACK OF RESIN RINGS",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/4548/223/330/17/w/448/4548223330_1_1_1.jpg?ts=1686738753806",
    "price": "₹ 1,590.00",
    "details": "Pack of three resin rings."
  },
  {
    "product_name": "PACK OF RESIN BRACELETS",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/4548/216/330/17/w/448/4548216330_1_1_1.jpg?ts=1686738560423",
    "price": "₹ 1,890.00",
    "details": "Pack of two resin bracelets."
  },
  {
    "product_name": "BUCKET HAT WITH WIDE BRIM",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/3739/214/705/2/w/448/3739214705_1_1_1.jpg?ts=1688550128360",
    "price": "₹ 2,290.00",
    "details": "Wide-brimmed bucket hat with a shapewear border."
  },
  {
    "product_name": "PACK OF RESIN RINGS",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/8435/203/712/2/w/448/8435203712_1_1_1.jpg?ts=1688550128589",
    "price": "₹ 1,590.00",
    "details": "Pack of two resin rings.Size S = 16.5 mm.Size M = 17.5 mm."
  },
  {
    "product_name": "PACK OF FAUX PEARL AND CHAIN EARRINGS AND EAR CUFFS",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/1856/278/808/17/w/448/1856278808_1_1_1.jpg?ts=1691583067763",
    "price": "₹ 1,590.00",
    "details": "Pack of earrings:-Ear cuffs with faux pearls and thin chains. -Earrings with faux pearl appliqués and thin chains. Push-back closure."
  },
  {
    "product_name": "HEART EARRINGS",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/1856/318/808/17/w/448/1856318808_1_1_1.jpg?ts=1691583141043",
    "price": "₹ 990.00",
    "details": "Heart-shaped metal earrings. Push-back closure."
  },
  {
    "product_name": "RIGID V-SHAPED CHOKER",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/4548/275/303/2/w/448/4548275303_1_1_1.jpg?ts=1691579760435",
    "price": "₹ 2,290.00",
    "details": "Rigid metal V-shaped choker."
  },
  {
    "product_name": "PACK OF BEAD AND RHINESTONE CHAINS",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/1856/263/303/17/w/448/1856263303_1_1_1.jpg?ts=1691583037173",
    "price": "₹ 1,590.00",
    "details": "Pack of two chains:- Thin metal bead chain. Lobster clasp fastening.- Thin metal chain with rhinestone appliqués. Lobster clasp fastening.View more"
  },
  {
    "product_name": "HEART CORD NECKLACE",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/1856/276/615/12/w/448/1856276615_1_1_1.jpg?ts=1689939817006",
    "price": "₹ 1,590.00",
    "details": "Long cord necklace made of leather with a pendant in the shape of a resin heart."
  },
  {
    "product_name": "MACRAMÉ DRESS",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/3920/219/251/2/w/448/3920219251_1_1_1.jpg?ts=1689003670922",
    "price": "₹ 4,990.00",
    "details": "Sleeveless fabric dress with knot detail, a round neckline and a fringed hem.This garment is not lined."
  },
  {
    "product_name": "COLOURED RESIN EARRINGS",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/1856/268/808/2/w/448/1856268808_1_1_1.jpg?ts=1689003669698",
    "price": "₹ 1,590.00",
    "details": "Metal earrings with resin oval stone. Push-back and clip clasps."
  },
  {
    "product_name": "PRINTED COTTON MULTIWAY PAREO",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/0264/203/402/2/w/448/0264203402_1_1_1.jpg?ts=1689003671397",
    "price": "₹ 2,290.00",
    "details": "Multiway pareo made of cotton. Fringed trim."
  },
  {
    "product_name": "NECKLACE WITH MULTICOLOURED BEADS",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/4548/230/330/2/w/448/4548230330_1_1_1.jpg?ts=1689003671777",
    "price": "₹ 2,590.00",
    "details": "Multi-strand necklace with multicoloured beads. Lobster clasp fastening."
  },
  {
    "product_name": "SEASHELL DENIM NECKLACE",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/1856/272/400/12/w/448/1856272400_1_1_1.jpg?ts=1689939817724",
    "price": "₹ 1,590.00",
    "details": "Braided denim necklace with a seashell pendant. Lobster clasp fastening."
  },
  {
    "product_name": "PACK OF FISH CHAIN NECKLACES",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/4548/234/303/2/w/448/4548234303_1_1_1.jpg?ts=1689003670697",
    "price": "₹ 1,590.00",
    "details": "Two-pack of necklaces:Thin metal chain. Lobster clasp fastening.-Thin metal chain with a fish pendant. Lobster clasp fastening."
  },
  {
    "product_name": "EAR CUFF HOOP EARRING",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/1856/294/303/3/w/448/1856294303_1_1_1.jpg?ts=1690993221162",
    "price": "₹ 990.00",
    "details": "-Metal ear cuff.-Small open metal hoop. Push-back clasp."
  },
  {
    "product_name": "FLORAL DRAWSTRING BELT",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/4548/248/800/23/w/448/4548248800_1_1_1.jpg?ts=1690993468935",
    "price": "₹ 1,990.00",
    "details": "Belt with metal flowers. Drawstring fastening with a knot or tie."
  },
  {
    "product_name": "FAUX PEARL EAR CUFF HOOP EARRING",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/1856/293/808/2/w/448/1856293808_1_1_1.jpg?ts=1690810874989",
    "price": "₹ 990.00",
    "details": "-Metal ear cuff with faux pearl appliqué.-Small open metal hoop. Push-back clasp."
  },
  {
    "product_name": "TWISTED EARRINGS",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/1856/342/303/2/w/448/1856342303_1_1_1.jpg?ts=1692193785852",
    "price": "₹ 1,590.00",
    "details": "Twisted dangle earrings. Push-back fastening."
  },
  {
    "product_name": "ABSTRACT EARRINGS",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/1856/347/303/2/w/448/1856347303_1_1_1.jpg?ts=1692193785884",
    "price": "₹ 1,590.00",
    "details": "Metal earrings. Push-back and clip closure."
  },
  {
    "product_name": "RHINESTONE TOP",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/4548/286/808/17/w/448/4548286808_1_1_1.jpg?ts=1692198906287",
    "price": "₹ 5,990.00",
    "details": "Crop top featuring a straight neckline and wide straps. Metal chain fastening at the back."
  },
  {
    "product_name": "LEATHER BELT WITH TUBULAR PIECE",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/1736/224/808/2/w/448/1736224808_1_1_1.jpg?ts=1692193786095",
    "price": "₹ 2,290.00",
    "details": "Leather belt with a tubular metal piece."
  },
  {
    "product_name": "OPEN CIRCULAR EARRINGS",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/1124/204/303/2/w/448/1124204303_1_1_1.jpg?ts=1688546406508",
    "price": "₹ 1,590.00",
    "details": "Metal earrings in an open flat circular shape with texture. Push-back closure."
  },
  {
    "product_name": "IRREGULAR CIRCLE EARRINGS",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/1124/206/817/2/w/448/1124206817_6_1_1.jpg?ts=1688544358465",
    "price": "₹ 1,590.00",
    "details": "Irregular metal circle earrings. Push-back fastening."
  },
  {
    "product_name": "PACK OF METALLIC BRACELETS",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/1856/247/808/17/w/448/1856247808_2_2_1.jpg?ts=1691155520915",
    "price": "₹ 1,590.00",
    "details": "Pack of multiple thin metal bracelets."
  },
  {
    "product_name": "RESIN CASCADING EARRINGS",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/1856/249/303/12/w/448/1856249303_1_1_1.jpg?ts=1688631537513",
    "price": "₹ 1,590.00",
    "details": "Metal dangle earrings with coloured resin stones. Push-back and clip closure."
  },
  {
    "product_name": "MULTICOLOURED RESIN NECKLACE",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/1856/236/303/12/w/448/1856236303_1_1_1.jpg?ts=1688631525468",
    "price": "₹ 2,290.00",
    "details": "Metal necklace with multicoloured resin appliqués. Lobster clasp fastening."
  },
  {
    "product_name": "POINTELLE HAT",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/0653/209/052/2/w/448/0653209052_1_1_1.jpg?ts=1685015300183",
    "price": "₹ 2,590.00",
    "details": "Natural fibre hat."
  },
  {
    "product_name": "WIDE ELASTIC BELT",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/1736/204/052/2/w/448/1736204052_1_1_1.jpg?ts=1684919833319",
    "price": "₹ 2,290.00",
    "details": "Wide belt with striped detail. Metal fastening."
  },
  {
    "product_name": "PACK OF MULTICOLOURED EARRINGS",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/4548/222/330/2/w/448/4548222330_1_1_1.jpg?ts=1689754041307",
    "price": "₹ 1,590.00",
    "details": "Pack of earrings in different shapes and appliqués. Push-back and screw-back closure."
  },
  {
    "product_name": "METAL NECKLACE",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/1856/273/808/12/w/448/1856273808_2_3_1.jpg?ts=1690366952080",
    "price": "₹ 1,990.00",
    "details": "Articulated metal necklace. Lobster clasp fastening."
  },
  {
    "product_name": "SEASHELL EARRINGS",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/1856/292/303/2/w/448/1856292303_1_1_1.jpg?ts=1689788790699",
    "price": "₹ 1,590.00",
    "details": "Metal earrings in the shape of seashells. Push-back and clip fastening."
  },
  {
    "product_name": "METAL RESIN EARRINGS",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/1856/274/808/2/w/448/1856274808_6_1_1.jpg?ts=1689601550651",
    "price": "₹ 1,590.00",
    "details": "Metal earrings with coloured resin stones. Push-back and clip closure."
  },
  {
    "product_name": "BIKINI TOP",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/0167/226/636/2/w/448/0167226636_1_1_1.jpg?ts=1686034757019",
    "price": "₹ 1,990.00",
    "details": "Bikini top with removable cups and a lined metal piece on the chest."
  },
  {
    "product_name": "CURTAIN STRING BIKINI BOTTOMS",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/0167/227/636/2/w/448/0167227636_1_1_1.jpg?ts=1684935151059",
    "price": "₹ 1,890.00",
    "details": "Curtain string bikini bottoms."
  },
  {
    "product_name": "PLEATED BIKINI TOP",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/2856/219/330/2/w/448/2856219330_1_1_1.jpg?ts=1686034746896",
    "price": "₹ 1,990.00",
    "details": "Bikini top with removable cups, a round neck and thin adjustable straps. Fastening at the back."
  },
  {
    "product_name": "PLEATED BIKINI BOTTOMS",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/2856/221/330/2/w/448/2856221330_1_1_1.jpg?ts=1684935151526",
    "price": "₹ 1,890.00",
    "details": "Bikini bottoms in pleated fabric."
  },
  {
    "product_name": "CUT-OUT SWIMSUIT",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/0167/224/610/2/w/448/0167224610_1_1_1.jpg?ts=1685607448224",
    "price": "₹ 3,290.00",
    "details": "V-neck swimsuit with straps. Featuring an adjustable slit and tie detail on the front."
  },
  {
    "product_name": "BEADED NECKLACE",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/4736/237/712/22/w/448/4736237712_1_1_1.jpg?ts=1691048936986",
    "price": "₹ 1,990.00",
    "details": "Long necklace with bead appliqués and teardrop pendants."
  },
  {
    "product_name": "PACK OF BANGLES",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/4736/225/303/22/w/448/4736225303_1_1_1.jpg?ts=1691048992652",
    "price": "₹ 1,890.00",
    "details": "Pack of two metal bangles."
  },
  {
    "product_name": "FAN EARRINGS",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/1856/290/303/22/w/448/1856290303_1_1_1.jpg?ts=1691049841398",
    "price": "₹ 1,590.00",
    "details": "Raised metal earrings. Push-back closure."
  },
  {
    "product_name": "RESIN PLAQUE EARRINGS",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/1856/316/712/22/w/448/1856316712_1_1_1.jpg?ts=1691049861260",
    "price": "₹ 1,590.00",
    "details": "Metal earrings with a coloured resin plaque. Push-back and clip closure."
  },
  {
    "product_name": "CONTRASTING EARRINGS",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/4736/239/303/22/w/448/4736239303_1_1_1.jpg?ts=1691049890767",
    "price": "₹ 1,590.00",
    "details": "Contrast oval earrings. Push-back and clip closure."
  },
  {
    "product_name": "METAL FLOWER EARRINGS",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/1856/219/303/2/w/448/1856219303_1_1_1.jpg?ts=1688722785869",
    "price": "₹ 1,890.00",
    "details": "Textured and floral-shaped metal dangle earrings. Push-back and clip closure."
  },
  {
    "product_name": "LINEN BLEND SCARF",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/0653/267/712/2/w/448/0653267712_1_1_1.jpg?ts=1688722784725",
    "price": "₹ 2,290.00",
    "details": "Scarf made of a linen blend with frayed edges.Measurements: 195 x 105 cm / 76.7 x 41.3″"
  },
  {
    "product_name": "METAL FLOWER EARRINGS",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/1856/239/303/2/w/448/1856239303_1_1_1.jpg?ts=1688722784965",
    "price": "₹ 1,590.00",
    "details": "Textured and floral-shaped metal earrings. Push-back and clip closure."
  },
  {
    "product_name": "PRINTED SATIN SCARF",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/4758/012/615/2/w/448/4758012615_1_1_1.jpg?ts=1688722785806",
    "price": "₹ 990.00",
    "details": "Printed satin scarf.Measurements: 70 x 70 cm / 27.5 x 27.5″"
  },
  {
    "product_name": "SEASHELL CORD NECKLACE",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/1856/287/303/2/w/448/1856287303_1_1_1.jpg?ts=1689783795721",
    "price": "₹ 1,590.00",
    "details": "Braided cord necklace with a metal seashell-shaped pendant. Lobster clasp fastening."
  },
  {
    "product_name": "SEQUINNED BUTTERFLY EARRINGS",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/1856/248/303/12/w/448/1856248303_1_1_1.jpg?ts=1688564866751",
    "price": "₹ 1,890.00",
    "details": "Metal butterfly-shaped earrings with sequin appliqués. Push-back and clip closure."
  },
  {
    "product_name": "UNDERWIRED BIKINI TOP",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/2910/201/717/2/w/448/2910201717_1_1_1.jpg?ts=1685615820208",
    "price": "₹ 1,990.00",
    "details": "Bikini top with underwire and removable cups. Double thin straps. Fastening at the back."
  },
  {
    "product_name": "HIGH-WAIST BIKINI BOTTOM",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/2910/202/717/2/w/448/2910202717_1_1_1.jpg?ts=1685704730589",
    "price": "₹ 1,990.00",
    "details": "High-waist bikini bottom."
  },
  {
    "product_name": "BANDEAU SWIMSUIT WITH BEAD",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/0167/228/650/12/w/448/0167228650_2_1_1.jpg?ts=1688479980515",
    "price": "₹ 3,290.00",
    "details": "Swimsuit featuring removable cups, a straight-cut neckline and exposed shoulders. Tied straps at the neck. Bead appliqué detail."
  },
  {
    "product_name": "KNOTTED SWIMSUIT",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/0167/204/701/12/w/448/0167204701_1_1_1.jpg?ts=1685704282771",
    "price": "₹ 3,290.00",
    "details": "Swimsuit with removable cups, a V-neckline and multiple thin straps with a knotted detail at the back."
  },
  {
    "product_name": "TRIANGLE BIKINI TOP WITH PATTERNED EMBROIDERY",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/0167/213/800/2/w/448/0167213800_1_1_1.jpg?ts=1685615818493",
    "price": "₹ 1,990.00",
    "details": "Bikini top featuring removable cups, a V-neck and straps. Contrast patterned embroidery detail."
  },
  {
    "product_name": "ASYMMETRIC RHINESTONE SWIMSUIT",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/0167/232/800/3/w/448/0167232800_1_1_1.jpg?ts=1685704304996",
    "price": "₹ 3,290.00",
    "details": "Swimsuit with removable cups, a straight neckline and metallic straps with rhinestones."
  },
  {
    "product_name": "FADED CAP WITH SLOGAN",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/0653/263/832/2/w/448/0653263832_1_1_1.jpg?ts=1688127860733",
    "price": "₹ 1,590.00",
    "details": "Peak cap. Contrast embroidered slogan. Adjustable at the back."
  },
  {
    "product_name": "SEASHELL EARRINGS WITH MULTICOLOURED BEADS",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/4340/015/330/2/w/494/4340015330_1_1_1.jpg?ts=1684756462124",
    "price": "₹ 1,590.00",
    "details": "Metal dangle earrings with seashell appliqués and multicoloured beads. Push-back and omega-clip closure."
  },
  {
    "product_name": "SEQUINNED CASCADING EARRINGS",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/4340/004/611/2/w/448/4340004611_1_1_1.jpg?ts=1684756460877",
    "price": "₹ 1,990.00",
    "details": "Metal earrings with multicoloured sequin appliqués. Push-back closure."
  },
  {
    "product_name": "BASIC TWILL CAP",
    "image_url": "https://static.zara.net/photos///2023/V/0/1/p/1023/001/712/12/w/448/1023001712_1_1_1.jpg?ts=1678449719293",
    "price": "₹ 990.00",
    "details": "Peak cap with an adjustable strap at the back."
  },
  {
    "product_name": "STAR FLOWER EARRINGS",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/4340/007/330/2/w/448/4340007330_1_1_1.jpg?ts=1687963293765",
    "price": "₹ 1,890.00",
    "details": "Flower-shaped dangle earrings with beads and stars. Push-back and clip fastening."
  },
  {
    "product_name": "MACRAMÉ BAG",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/4162/201/615/2/w/448/4162201615_1_1_1.jpg?ts=1687963294501",
    "price": "₹ 2,290.00",
    "details": "Bag made of macramé. Shoulder straps.No lining.HEIGHT x LENGTH x WIDTH: 40 x 26 x 1 cm / 15.7 x 10.2 x 0.3″View more"
  },
  {
    "product_name": "STRIPED CROCHET HAT",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/3920/215/330/2/w/448/3920215330_1_1_1.jpg?ts=1687963293156",
    "price": "₹ 2,290.00",
    "details": "Hat made of crochet fabric. Adjustable braided drawstrings with beads."
  },
  {
    "product_name": "CROCHET BANDANA",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/2673/004/630/2/w/448/2673004630_1_1_1.jpg?ts=1687963293120",
    "price": "₹ 1,590.00",
    "details": "Crochet bandana. Braided tie fastening."
  },
  {
    "product_name": "CHARM NECKLACE",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/7243/010/630/2/w/448/7243010630_6_1_1.jpg?ts=1687776284564",
    "price": "₹ 2,290.00",
    "details": "Necklace with fringe-shaped beads. Lobster clasp fastening."
  },
  {
    "product_name": "MAXI BEADED CHOKER",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/4340/221/330/2/w/448/4340221330_1_1_1.jpg?ts=1688035953045",
    "price": "₹ 2,590.00",
    "details": "Maxi choker made with metallic thread and fringing with bead appliqués. Braided tie closure."
  },
  {
    "product_name": "PACK OF MULTICOLOURED BRACELETS",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/4340/217/330/2/w/448/4340217330_1_1_1.jpg?ts=1687963293503",
    "price": "₹ 1,590.00",
    "details": "Pack of bracelets lined with multicoloured thread."
  },
  {
    "product_name": "FLAT METAL EARRINGS",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/1124/203/303/17/w/448/1124203303_1_1_1.jpg?ts=1692187333521",
    "price": "₹ 1,590.00",
    "details": "Flat metal textured earrings. Push-back closure."
  },
  {
    "product_name": "RESIN HOOP EARRINGS",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/1124/202/303/2/w/448/1124202303_1_1_1.jpg?ts=1687506067431",
    "price": "₹ 1,890.00",
    "details": "Open hoop earrings featuring irregular dangle hoop and resin stone. Push-back closure."
  },
  {
    "product_name": "PACK OF METALLIC BRACELETS",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/4340/203/303/2/w/494/4340203303_1_1_1.jpg?ts=1687506068091",
    "price": "₹ 1,590.00",
    "details": "Pack of bracelets lined with metallic thread."
  },
  {
    "product_name": "CHAIN EARRINGS WITH FAUX PEARLS AND RHINESTONES",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/4548/229/808/2/w/448/4548229808_1_1_1.jpg?ts=1691152934534",
    "price": "₹ 1,890.00",
    "details": "Metal hoop earrings with faux pearl appliqués, rhinestones and thin chains. Push-back closure."
  },
  {
    "product_name": "PACK OF FAUX PEARL AND CHAIN NECKLACES",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/1856/304/808/2/w/448/1856304808_1_1_1.jpg?ts=1691152934480",
    "price": "₹ 1,890.00",
    "details": "Two-pack of necklaces:-Metal necklace with fresh water pearl bead appliqués. Lobster clasp fastening.-Necklace with faux pearl appliqués and chains. Lobster clasp fastening.View more"
  },
  {
    "product_name": "PATCHWORK DENIM BUCKET HAT",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/3920/238/400/12/w/448/3920238400_1_1_1.jpg?ts=1689939817209",
    "price": "₹ 1,890.00",
    "details": "Patchwork denim bucket hat."
  },
  {
    "product_name": "DENIM BUCKET HAT WITH RHINESTONES",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/0653/269/400/12/w/448/0653269400_1_1_1.jpg?ts=1689939817594",
    "price": "₹ 1,890.00",
    "details": "Bucket hat made of denim. Rhinestone appliqués."
  },
  {
    "product_name": "DENIM BUCKET HAT WITH DRAWSTRING",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/3920/230/400/2/w/448/3920230400_1_1_1.jpg?ts=1689088658914",
    "price": "₹ 1,890.00",
    "details": "Bucket hat made of denim fabric with frayed edges. Adjustable drawstring."
  },
  {
    "product_name": "NECKLACE WITH RESIN PIECES",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/4548/231/805/12/w/448/4548231805_1_1_1.jpg?ts=1689939817034",
    "price": "₹ 1,990.00",
    "details": "Denim necklace with transparent resin pieces."
  },
  {
    "product_name": "ASYMMETRICAL HOOP EARRINGS",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/4548/232/303/2/w/449/4548232303_2_1_1.jpg?ts=1689067534566",
    "price": "₹ 1,590.00",
    "details": "Textured irregular hoop earrings. Push-back clasps."
  },
  {
    "product_name": "DENIM BUCKET HAT",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/3920/235/800/2/w/448/3920235800_1_1_1.jpg?ts=1689938373552",
    "price": "₹ 1,890.00",
    "details": "Bucket hat made of denim fabric with a brim. Matching visible topstitching detail."
  },
  {
    "product_name": "FLORAL EARRINGS",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/4548/212/500/2/w/448/4548212500_1_1_1.jpg?ts=1683719567830",
    "price": "₹ 1,890.00",
    "details": "Dangle earrings in the shape of flowers."
  },
  {
    "product_name": "PRINTED QUILTED TOILETRY BAG",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/0264/202/612/2/w/448/0264202612_6_1_1.jpg?ts=1684487567236",
    "price": "₹ 1,890.00",
    "details": "Multi-purpose quilted toiletry bag featuring a main compartment with zip closure with tassel and fringing."
  },
  {
    "product_name": "CORAL ARM CUFF",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/4548/210/600/2/w/448/4548210600_1_1_1.jpg?ts=1685009842864",
    "price": "₹ 2,290.00",
    "details": "Enamelled metal arm cuff in the shape of coral."
  },
  {
    "product_name": "KAFTAN DRESS WITH METALLIC THREAD FRINGING",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/3920/217/808/3/w/448/3920217808_1_1_1.jpg?ts=1686149607358",
    "price": "₹ 4,990.00",
    "details": "Semi-sheer kaftan dress with metallic thread, a round neckline, short sleeves and fringing."
  },
  {
    "product_name": "METALLIC SWIMSUIT",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/0501/201/808/17/w/448/0501201808_1_1_1.jpg?ts=1686739079437",
    "price": "₹ 3,290.00",
    "details": "Swimsuit featuring removable cups with a round neckline and straps."
  },
  {
    "product_name": "METALLIC BIKINI TOP",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/0501/215/920/2/w/448/0501215920_1_1_1.jpg?ts=1685009960390",
    "price": "₹ 1,990.00",
    "details": "Bikini top with removable cups. Adjustable thin straps. Knot detail on the chest."
  },
  {
    "product_name": "METALLIC BIKINI BOTTOMS",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/0501/216/920/2/w/448/0501216920_1_1_1.jpg?ts=1685009959776",
    "price": "₹ 1,890.00",
    "details": "Bikini bottoms."
  },
  {
    "product_name": "CROCHET SASH BELT",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/2673/003/717/2/w/448/2673003717_1_1_1.jpg?ts=1685609207750",
    "price": "₹ 2,290.00",
    "details": "Crochet sash belt. Drawstring fastening with tassel."
  },
  {
    "product_name": "BEADED EARRINGS",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/7243/034/330/2/w/448/7243034330_1_1_1.jpg?ts=1683815623394",
    "price": "₹ 1,890.00",
    "details": "Dangle earrings with multicoloured bead appliqués. Push-back and clip closure."
  },
  {
    "product_name": "TRIPLE RHINESTONE EARRINGS",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/4736/228/330/2/w/448/4736228330_1_1_1.jpg?ts=1690360067997",
    "price": "₹ 1,590.00",
    "details": "Metal dangle earrings with coloured rhinestone appliqués. Push-back and clip closure."
  },
  {
    "product_name": "PRINTED TULLE SWIMSUIT",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/2856/208/330/17/w/448/2856208330_1_1_1.jpg?ts=1686824149488",
    "price": "₹ 3,290.00",
    "details": "Swimsuit with removable cups, a round neck and thin straps. Adjustable side gathering detail with ties.Due to the dyeing process, the colour on each garment is unique and special, therefore it may differ from what is shown in the photo.View more"
  },
  {
    "product_name": "TULLE PRINTED BIKINI TOP",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/2856/212/612/17/w/448/2856212612_1_1_1.jpg?ts=1686824154534",
    "price": "₹ 1,990.00",
    "details": "Bandeau bikini top with removable cups, a straight neckline and a rigid piece on the chest. Fastens at the back."
  },
  {
    "product_name": "BIKINI TOP WITH FRILLS",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/2856/048/545/17/w/448/2856048545_1_1_1.jpg?ts=1686824128162",
    "price": "₹ 2,290.00",
    "details": "Bikini top with removable cups, a straight-cut neckline and exposed shoulders. Featuring matching ruffle trims."
  },
  {
    "product_name": "PLEATED SWIMSUIT",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/0167/223/717/2/w/448/0167223717_1_1_1.jpg?ts=1683728026823",
    "price": "₹ 3,290.00",
    "details": "Swimsuit with removable cups, a V-neckline and straps. Pleated fabric."
  },
  {
    "product_name": "RHINESTONE BIKINI TOP",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/0167/235/800/12/w/448/0167235800_1_1_1.jpg?ts=1688458895182",
    "price": "₹ 1,990.00",
    "details": "Bikini top with removable cups and an asymmetric neckline. Adjustable thin straps with metallic appliqué and rhinestones."
  },
  {
    "product_name": "RHINESTONE BIKINI BOTTOMS",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/0167/236/800/12/w/448/0167236800_1_1_1.jpg?ts=1688458908454",
    "price": "₹ 1,990.00",
    "details": "Bikini bottoms with metallic appliqué on the side with rhinestones."
  }
];

export default transformedData;
