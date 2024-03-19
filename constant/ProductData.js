const productsmen = [
  {
    "product_name": "BASIC BLAZER",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/5899/420/800/2/w/448/5899420800_1_1_1.jpg?ts=1692288839221",
    "price": "₹ 7,590.00",
    "details": "Straight-fit blazer with a notched lapel collar and long sleeves with buttoned cuffs. Patch pockets at the hip and an inside pocket detail. Back vents at the hem. Buttoned front."
  },
  {
    "product_name": "100% WOOL SUIT BLAZER - LIMITED EDITION",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/5828/542/800/2/w/448/5828542800_1_1_1.jpg?ts=1689334796692",
    "price": "₹ 11,990.00",
    "details": "Blazer made of wool. Peak lapel collar and long sleeves with buttoned cuffs. Open chest pocket and flap pockets on the hip. Inner pocket detail. Back vent at the centre of the hem and a button-up front."
  },
  {
    "product_name": "100% WOOL SUIT BLAZER",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/5955/218/401/2/w/448/5955218401_1_1_1.jpg?ts=1691507788884",
    "price": "₹ 11,990.00",
    "details": "Blazer made of Italian wool fabric. Notch lapel collar and long sleeves with buttoned cuffs. Chest welt pocket and hip flap pockets. Interior pocket detail. Back vents at the hem. Button-up front."
  },
  {
    "product_name": "100% WOOL PINSTRIPE SUIT BLAZER",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/5955/063/801/2/w/448/5955063801_1_1_1.jpg?ts=1692785577384",
    "price": "₹ 11,990.00",
    "details": "Straight fit blazer made of Italian wool fabric. Notched lapel collar and long sleeves with buttoned cuffs. Chest welt pocket and flap pockets on the hip. Inner pocket detail. Back vents at the hem and a button-up front."
  },
  {
    "product_name": "100% WOOL OVERSIZE BLAZER",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/6333/062/800/2/w/448/6333062800_1_1_1.jpg?ts=1692956953700",
    "price": "₹ 11,990.00",
    "details": "Oversize blazer made of wool. Notched lapel collar and long sleeves with buttoned cuffs. Hip flap pockets and inside pocket detail. Central back vent at the hem. Buttoned front."
  },
  {
    "product_name": "SLIM FIT SUIT BLAZER",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/1564/700/401/2/w/448/1564700401_1_1_1.jpg?ts=1689605444897",
    "price": "₹ 5,990.00",
    "details": "Blazer with a notched lapel collar. Long sleeves with button details on the cuffs. Chest welt pocket and hip flap pockets. Inside pocket detail. Front button fastening."
  },
  {
    "product_name": "CHECKED SUIT BLAZER",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/5734/521/707/2/w/448/5734521707_1_1_1.jpg?ts=1689605447954",
    "price": "₹ 9,590.00",
    "details": "Straight fit blazer with a notched lapel collar. Long sleeves with buttoned cuffs. Chest welt pocket and flap hip pockets. Inside pocket detail. Back vents at the hem. Front button fastening."
  },
  {
    "product_name": "CHECKED SUIT BLAZER",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/5734/502/420/2/w/448/5734502420_1_1_1.jpg?ts=1689605445606",
    "price": "₹ 9,590.00",
    "details": "Regular-fit blazer with a notched lapel collar. Long sleeves with buttoned cuffs. Chest welt pocket and hip flap pocket. Inside pocket detail. Back vents at the hem. Buttoned front."
  },
  {
    "product_name": "SUIT BLAZER",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/5623/243/500/2/w/448/5623243500_1_1_1.jpg?ts=1689334797377",
    "price": "₹ 9,590.00",
    "details": "Straight fit blazer with a notched lapel collar, long sleeves with buttoned cuffs, flap pockets at the hip and an inside pocket. Central back vent at the hem and front button fastening."
  },
  {
    "product_name": "BLAZER WITH POCKETS",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/6452/507/708/2/w/448/6452507708_2_1_1.jpg?ts=1691072087218",
    "price": "₹ 8,590.00",
    "details": "Relaxed fit blazer with a pointed lapel collar, long sleeves with buttoned cuffs, a patch pocket on the chest and patch pockets with flaps at the hip. Central back vent at the hem and front button fastening."
  },
  {
    "product_name": "STRAIGHT-FIT SUIT BLAZER",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/5623/086/819/2/w/448/5623086819_1_1_1.jpg?ts=1689695238812",
    "price": "₹ 9,590.00",
    "details": "Straight-fit blazer. Notched lapel collar and long sleeves with buttoned cuffs. Flap pockets at the hip. Interior pocket detail. Hem with back vents. Front button fastening."
  },
  {
    "product_name": "SUIT BLAZER WITH IRREGULAR TRIMS",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/5825/507/800/2/w/448/5825507800_1_1_1.jpg?ts=1689675754633",
    "price": "₹ 8,590.00",
    "details": "Relaxed fit blazer. Notched lapel collar. Long sleeves with buttoned cuffs. Hip flap pockets. Inner pocket detail. Back vents at the hem. Irregular trims. Front button fastening."
  },
  {
    "product_name": "RELAXED-FIT SUIT",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/0706/576/706/2/w/448/0706576706_1_1_1.jpg?ts=1689670150991",
    "price": "₹ 9,590.00",
    "details": "Relaxed fit blazer with a notched lapel collar, long sleeves with buttoned cuffs, flap pockets at the hip and an inside pocket. Central back vent at the hem and front button fastening."
  },
  {
    "product_name": "SLIM-FIT SUIT WAISTCOAT",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/1564/414/800/2/w/448/1564414800_1_1_1.jpg?ts=1689605442136",
    "price": "₹ 3,990.00",
    "details": "Slim-fit waistcoat with a V-neckline. Jetted pockets at the hip. Adjustable tabs at the back. Button-up front."
  },
  {
    "product_name": "BUTTONED WAISTCOAT",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/0706/606/800/2/w/448/0706606800_1_1_1.jpg?ts=1689763217426",
    "price": "₹ 4,990.00",
    "details": "Waistcoat with a V-neckline. Featuring welt pockets at the waist and a button-up front."
  },
  {
    "product_name": "TEXTURED SUIT BLAZER",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/4025/227/800/2/w/448/4025227800_1_1_1.jpg?ts=1689681785962",
    "price": "₹ 8,590.00",
    "details": "Slim-fit blazer with a notched lapel collar and long sleeves with buttoned cuffs. Welt pockets on the chest and at the hip. Inside pocket detail. Central back vent at the hem. Front button fastening."
  },
  {
    "product_name": "COMFORT BLAZER",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/0706/635/800/12/w/448/0706635800_1_1_1.jpg?ts=1692961881868",
    "price": "₹ 4,990.00",
    "details": "Straight fit blazer made of highly stretchy fabric. Notched lapel collar and long sleeves. Hip welt pockets and inside pocket detail. Back vent at the hem. Front button fastening."
  },
  {
    "product_name": "100% LINEN SUIT BLAZER",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/1564/100/401/202/w/489/1564100401_1_1_1.jpg?ts=1689928368171",
    "price": "₹ 11,990.00",
    "details": "Regular-fit blazer made of linen. Notched lapel collar and long sleeves with buttoned cuffs. Chest welt pocket and flap pockets on the hip. Inside pocket. Central back vent at the hem and a button-up front.Origins special collection.View more"
  },
  {
    "product_name": "100% LINEN SUIT BLAZER",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/4470/003/251/2/w/448/4470003251_1_1_1.jpg?ts=1689605444336",
    "price": "₹ 10,990.00",
    "details": "Straight fit blazer made of linen. Notched lapel collar. Long sleeves with buttoned cuffs. Chest welt pocket and hip flap pocket detail. Inner pocket detail. Back vents at the hem and a button-up front."
  },
  {
    "product_name": "100% LINEN DOUBLE-BREASTED BLAZER",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/5695/519/652/12/w/448/5695519652_1_1_1.jpg?ts=1689074067798",
    "price": "₹ 10,990.00",
    "details": "Straight fit blazer made of linen. Lapel collar and long sleeves with buttoned cuffs. Chest welt pocket and patch pockets on the hip. Inner pocket detail. Back vents at the hem and a double-breasted button-up front."
  },
  {
    "product_name": "100% LINEN WAISTCOAT",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/7380/677/658/2/w/448/7380677658_2_1_1.jpg?ts=1688114516227",
    "price": "₹ 4,990.00",
    "details": "Linen waistcoat. V-neckline and no sleeves. Welt pockets at the waist. Button-up front."
  },
  {
    "product_name": "SEERSUCKER BLAZER",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/7380/302/800/13/w/448/7380302800_1_1_1.jpg?ts=1691680479809",
    "price": "₹ 5,990.00",
    "details": "Regular-fit blazer. Notched lapel collar and long sleeves. Hip flap pockets. Front button fastening."
  },
  {
    "product_name": "SWEATSHIRT WITH ZIP COLLAR",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/6462/330/251/2/w/448/6462330251_1_1_1.jpg?ts=1689932178850",
    "price": "₹ 2,990.00",
    "details": "Sweatshirt featuring a high neck with front zip fastening, long sleeves and ribbed trims."
  },
  {
    "product_name": "REFLECTIVE EFFECT JACKET",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/1732/314/446/3/w/448/1732314446_1_1_1.jpg?ts=1693233018145",
    "price": "₹ 7,590.00",
    "details": "Jacket made of a very lightweight and reflective technical fabric.- High neck with stow-away hood on the inside.- Long sleeves with elastic cuffs.- Thermo-sealed inner seams.- Pocket with autolock zip fastening on the chest and hip pockets.- Adjustable hem with elastic at the sides.- Logo print on the front.Zara Athleticz.View more"
  },
  {
    "product_name": "COTTON HOODIE",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/0761/331/712/3/w/448/0761331712_1_1_1.jpg?ts=1693233015377",
    "price": "₹ 3,990.00",
    "details": "Hoodie made of compact cotton fabric. Adjustable hood and long sleeves. Front pouch pocket. Ribbed trims.Zara Athleticz."
  },
  {
    "product_name": "PREMIUM SWEATSHIRT",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/0761/438/401/2/w/448/0761438401_1_1_1.jpg?ts=1692951284259",
    "price": "₹ 2,590.00",
    "details": "Loose-fitting sweatshirt with a wide ribbed neck and short sleeves."
  },
  {
    "product_name": "SWEATSHIRT WITH CONTRAST TRIMS",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/0761/309/251/2/w/448/0761309251_1_1_1.jpg?ts=1685432803292",
    "price": "₹ 3,290.00",
    "details": "Loose-fitting sweatshirt with a round neck and short sleeves. Contrast piping details on the front and back. Ribbed trims."
  },
  {
    "product_name": "RIBBED SWEATSHIRT",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/5039/501/251/2/w/448/5039501251_1_1_1.jpg?ts=1692956951377",
    "price": "₹ 2,990.00",
    "details": "Short sleeve sweatshirt with a round neck."
  },
  {
    "product_name": "POLO SWEATSHIRT",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/0526/330/066/2/w/448/0526330066_1_1_1.jpg?ts=1692022320087",
    "price": "₹ 3,290.00",
    "details": "Collared polo shirt with a buttoned front hidden by a placket. Long sleeves. Ribbed trims."
  },
  {
    "product_name": "POLO SWEATSHIRT",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/0526/302/708/2/w/448/0526302708_2_1_1.jpg?ts=1692776632508",
    "price": "₹ 3,290.00",
    "details": "Collared polo made of compact cotton fabric. Front button fastening, long sleeves and ribbed trims."
  },
  {
    "product_name": "CONTRAST PRINT SWEATSHIRT",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/1165/316/403/2/w/448/1165316403_1_1_1.jpg?ts=1692780184065",
    "price": "₹ 3,290.00",
    "details": "Sweatshirt with a round neck and long sleeves. Contrast prints on the front and back. Ribbed trims."
  },
  {
    "product_name": "PRINTED SWEATSHIRT WITH SLOGAN",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/0679/307/403/2/w/448/0679307403_1_1_1.jpg?ts=1692188211890",
    "price": "₹ 3,290.00",
    "details": "Oversize sweatshirt with a round neck and long sleeves. Contrast slogan print on the front and back. Ribbed trims."
  },
  {
    "product_name": "THE NOTORIOUS B.I.G. © BROOKLYN MINT SWEATSHIRT",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/2160/301/802/2/w/448/2160301802_1_1_1.jpg?ts=1692198176210",
    "price": "₹ 3,990.00",
    "details": "Long sleeve sweatshirt with a round neckline. Notorious B.I.G. © Brooklyn Mint, LLC contrast slogan print on the front. Faded effect. Ribbed trims."
  },
  {
    "product_name": "CONTRAST PRINTED SWEATSHIRT",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/6224/301/712/2/w/0/6224301712_1_1_1.jpg?ts=1686133892073",
    "price": "₹ 3,290.00",
    "details": "Sweatshirt with a round neckline and long sleeves. Contrast print and embroidery on the front and back. Ribbed trims."
  },
  {
    "product_name": "CONTRAST PRINT SWEATSHIRT",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/1165/324/529/2/w/448/1165324529_1_1_1.jpg?ts=1692780184319",
    "price": "₹ 3,290.00",
    "details": "Sweatshirt with a round neckline and long sleeves. Contrast prints on the front and back. Ribbed trims."
  },
  {
    "product_name": "CONTRAST PRINT SWEATSHIRT",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/5643/302/250/2/w/448/5643302250_1_1_1.jpg?ts=1690963409656",
    "price": "₹ 2,990.00",
    "details": "Boxy fit sweatshirt with a round neck and short sleeves. Contrast prints on the front."
  },
  {
    "product_name": "PAPER PATCH SWEATSHIRT",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/6224/399/251/2/w/448/6224399251_1_1_1.jpg?ts=1692361198588",
    "price": "₹ 3,290.00",
    "details": "Loose-fitting sweatshirt with a round neck and short sleeves. Patch on the front made of kraft paper with a printed slogan. Irregular finish with contrast topstitching detail."
  },
  {
    "product_name": "SWEATSHIRT WITH PRINTED SLOGANS",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/0722/355/802/2/w/448/0722355802_1_1_1.jpg?ts=1692951281874",
    "price": "₹ 2,990.00",
    "details": "Loose-fitting sweatshirt with a round neck and short sleeves. Featuring a contrast slogan print all over the garment."
  },
  {
    "product_name": "SWEATSHIRT WITH EMBROIDERY AND SLOGANS",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/6224/297/251/2/w/448/6224297251_1_1_1.jpg?ts=1692960481437",
    "price": "₹ 2,990.00",
    "details": "Round neck sweatshirt with short sleeves. Contrast embroidery and prints on the front and back. Ribbed trims."
  },
  {
    "product_name": "PRINTED SWEATSHIRT WITH SLOGAN",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/5644/301/403/2/w/448/5644301403_1_1_1.jpg?ts=1688546809649",
    "price": "₹ 2,990.00",
    "details": "Sweatshirt with a round neck and short sleeves. Featuring a contrast print on the front."
  },
  {
    "product_name": "SWEATSHIRT WITH PRINTED SLOGANS",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/6224/342/712/2/w/448/6224342712_1_1_1.jpg?ts=1688546809912",
    "price": "₹ 2,990.00",
    "details": "Sweatshirt with a round neck and short sleeves. Contrast prints on the front and back."
  },
  {
    "product_name": "MICKEY MOUSE © DISNEY SWEATSHIRT",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/6224/345/251/2/w/448/6224345251_1_1_1.jpg?ts=1688564090905",
    "price": "₹ 3,290.00",
    "details": "Loose-fitting short sleeve sweatshirt with a round neck. Mickey Mouse © Disney prints on the front and back."
  },
  {
    "product_name": "SWEATSHIRT WITH CROCHET POCKET",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/4087/317/505/2/w/448/4087317505_1_1_1.jpg?ts=1688546807650",
    "price": "₹ 2,990.00",
    "details": "Loose-fitting sweatshirt with a round neck and short sleeves. Front patch pocket in matching crochet."
  },
  {
    "product_name": "HATTHANAN™ PRINT HOODIE",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/0761/324/712/612/w/448/0761324712_1_1_1.jpg?ts=1692609546383",
    "price": "₹ 3,990.00",
    "details": "Adjustable hoodie with long sleeves. Contrast Hatthanan™ graphic print on the back. Ribbed trims.Zara Athleticz."
  },
  {
    "product_name": "TECHNICAL TRAINING SWEATSHIRT",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/1698/302/712/2/w/448/1698302712_1_1_1.jpg?ts=1692607575495",
    "price": "₹ 3,990.00",
    "details": "Sweatshirt made of an elastic and lightweight technical fabric.- Round neck and long sleeves with ribbed cuffs. - Adjustable hem with elastic side gores. - Printed front logo detail.Zara Athleticz.View more"
  },
  {
    "product_name": "OVERSIZE HOODIE",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/0761/387/706/2/w/448/0761387706_1_1_1.jpg?ts=1691486099857",
    "price": "₹ 3,290.00",
    "details": "Oversize adjustable hoodie. Short sleeves. Front pouch pocket."
  },
  {
    "product_name": "SWEATSHIRT WITH CONTRAST TOPSTITCHING",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/2795/317/712/2/w/448/2795317712_1_1_1.jpg?ts=1692780185502",
    "price": "₹ 2,990.00",
    "details": "Loose-fitting sweatshirt with a round neck and short sleeves. Featuring contrast topstitching all over the garment."
  },
  {
    "product_name": "WASHED EFFECT HOODIE",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/0962/328/044/2/w/448/0962328044_1_1_1.jpg?ts=1688714834783",
    "price": "₹ 3,290.00",
    "details": "Cropped hoodie with long sleeves and ribbed cuffs. Faded with an irregular hem."
  },
  {
    "product_name": "HOODIE",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/0761/350/981/2/w/448/0761350981_1_1_1.jpg?ts=1691137759577",
    "price": "₹ 3,290.00",
    "details": "Hoodie made of cotton with a napped interior. Adjustable hood and long sleeves. Front pouch pocket and ribbed trims."
  },
  {
    "product_name": "CROPPED DENIM SWEATSHIRT",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/7627/302/090/2/w/448/7627302090_1_1_1.jpg?ts=1688552339271",
    "price": "₹ 3,290.00",
    "details": "Oversize fit cropped faded sweatshirt featuring a round neck, short sleeves and irregular trims."
  },
  {
    "product_name": "DENIM T-SHIRT WITH ABSTRACT PRINT",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/7627/305/426/2/w/448/7627305426_1_1_1.jpg?ts=1689319990245",
    "price": "₹ 2,990.00",
    "details": "Lightweight denim T-shirt with a round neckline and short sleeves."
  },
  {
    "product_name": "VINTAGE FADED DENIM T-SHIRT",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/7627/304/400/2/w/448/7627304400_1_1_1.jpg?ts=1689319989939",
    "price": "₹ 2,590.00",
    "details": "T-shirt made of lightweight denim. Featuring a round neckline, short sleeves and a vintage-effect fade."
  },
  {
    "product_name": "TIE-DYE PRINT SWEATSHIRT",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/0962/338/505/2/w/448/0962338505_1_1_1.jpg?ts=1692020567476",
    "price": "₹ 3,290.00",
    "details": "Round neck sweatshirt with short sleeves and irregular trims."
  },
  {
    "product_name": "TIE-DYE DENIM HOODIE",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/0840/300/251/2/w/448/0840300251_1_1_1.jpg?ts=1689335818566",
    "price": "₹ 3,290.00",
    "details": "Denim sweatshirt. Round neck and short sleeves. Ribbed trims."
  },
  {
    "product_name": "FADED LEATHER EFFECT JACKET",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/5070/330/802/2/w/448/5070330802_1_1_1.jpg?ts=1692359829209",
    "price": "₹ 7,590.00",
    "details": "Faded leather effect jacket. Lapel collar and long sleeves with adjustable zip cuffs. Hip welt pockets with zip fastening. Zip-up front."
  },
  {
    "product_name": "FAUX LEATHER JACKET",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/3427/320/800/2/w/448/3427320800_1_1_1.jpg?ts=1689335037306",
    "price": "₹ 6,990.00",
    "details": "Jacket made of faux leather fabric. Lapel collar with snap-button details. Long sleeves with zip cuffs. Front zip pockets on the chest and hip. Inside pocket. Asymmetric metal zip-up front."
  },
  {
    "product_name": "FAUX LEATHER BOMBER JACKET",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/3918/420/800/2/w/448/3918420800_1_1_1.jpg?ts=1687947015813",
    "price": "₹ 4,990.00",
    "details": "Jacket made of faux leather fabric. High neck and long sleeves. Welt pockets at the hip and interior pocket detail. Ribbed trims. Front zip fastening."
  },
  {
    "product_name": "FAUX LEATHER JACKET",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/8281/306/800/2/w/448/8281306800_2_1_1.jpg?ts=1688382311087",
    "price": "₹ 7,590.00",
    "details": "Collared jacket with long sleeves and elasticated cuffs. Welt pockets on the chest and hip. Ribbed hem. Zip-up front."
  },
  {
    "product_name": "SATIN JACKET WITH EMBROIDERED SLOGAN",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/0706/304/420/2/w/448/0706304420_2_1_1.jpg?ts=1689926679011",
    "price": "₹ 7,590.00",
    "details": "Satin varsity jacket. Jetted hip pockets and inside pocket detail. Contrast embroidery on the back. Ribbed trims. Front zip fastening."
  },
  {
    "product_name": "BOMBER JACKET WITH PATCH",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/3918/478/251/2/w/448/3918478251_1_1_1.jpg?ts=1691739358833",
    "price": "₹ 5,990.00",
    "details": "Varsity jacket made of faux suede fabric. Jetted hip pockets and inside pocket detail. Contrast embroidery and patch appliqués on the front and back. Ribbed trims. Snap-buttons down the front."
  },
  {
    "product_name": "HOODED BOMBER JACKET",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/3833/407/800/2/w/448/3833407800_1_1_1.jpg?ts=1692780182587",
    "price": "₹ 7,590.00",
    "details": "Varsity jacket with a hood in the collar. Long sleeves with elasticated cuffs. Jetted pockets at the hip and inside pocket detail. Contrast patches and embroidery on the front and back. Ribbed trims. Snap-button front."
  },
  {
    "product_name": "BOMBER JACKET WITH PATCH",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/3918/392/251/2/w/448/3918392251_1_1_1.jpg?ts=1689760696013",
    "price": "₹ 4,990.00",
    "details": "Varsity jacket made of lightweight fabric. Jetted hip pockets and inside pocket detail. Contrast patches and embroidery on the front. Ribbed trims. Snap-button front."
  },
  {
    "product_name": "SEERSUCKER JACKET WITH POCKETS",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/8281/330/250/3/w/448/8281330250_1_1_1.jpg?ts=1691508195103",
    "price": "₹ 5,990.00",
    "details": "Relaxed fit jacket featuring a high neck and long sleeves with elastic cuffs. Patch pockets with flaps at the hip. Adjustable hem with elastic details on the front. Front zip fastening."
  },
  {
    "product_name": "OVERSHIRT WITH POCKETS",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/1538/451/711/2/w/0/1538451711_1_1_1.jpg?ts=1691136024687",
    "price": "₹ 3,990.00",
    "details": "Relaxed fit overshirt made of cotton. Lapel collar and long sleeves with buttoned cuffs. Patch pockets with flaps on the chest and a side hip pocket. Zip-up front."
  },
  {
    "product_name": "TEXTURED JACKET",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/1538/452/807/2/w/448/1538452807_1_1_1.jpg?ts=1691136022014",
    "price": "₹ 5,590.00",
    "details": "Jacket with a slightly padded interior. Contrast collar. Long sleeves with buttoned cuffs. Faded effect. Double welt pockets on the chest and hip. Front zip-up fastening."
  },
  {
    "product_name": "FAUX SUEDE EMBROIDERED JACKET",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/8281/469/251/2/w/448/8281469251_1_1_1.jpg?ts=1692951282962",
    "price": "₹ 5,990.00",
    "details": "Collared varsity jacket made of faux suede. Long sleeves. Jetted hip pockets and inside pocket detail. Contrast patch and embroidery on the front and back. Ribbed trims. Snap-button front fastening."
  },
  {
    "product_name": "TECHNICAL JACKET",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/3918/390/522/2/w/448/3918390522_1_1_1.jpg?ts=1687331082982",
    "price": "₹ 5,990.00",
    "details": "Jacket made of technical fabric. Lapel collar and long sleeves with elasticated trims. Hip welt pockets and inside pocket. Adjustable elasticated hem. Snap-button fastening on the front."
  },
  {
    "product_name": "CONTRAST PRINT JACKET",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/5320/401/251/2/w/448/5320401251_1_1_1.jpg?ts=1690962645034",
    "price": "₹ 4,990.00",
    "details": "Jacket made of a lightweight cotton fabric. Lapel collar and long sleeves with elasticated cuffs. Front hip pockets. Contrast prints on the chest and back. Elasticated hem. Front snap-button fastening."
  },
  {
    "product_name": "TECHNICAL JACKET WITH ZIPS",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/8574/505/800/2/w/448/8574505800_1_1_1.jpg?ts=1692786195587",
    "price": "₹ 7,590.00",
    "details": "Jacket made of a technical fabric. High neck featuring an adjustable hood with elastic. Long sleeves featuring adjustable cuffs with hook-and-loop strap. Chest patch pockets and front zip pockets. Adjustable hem with elastic at the sides. Front zip fastening.View more"
  },
  {
    "product_name": "PUFFER TECHNICAL JACKET",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/7627/502/800/2/w/448/7627502800_1_1_1.jpg?ts=1692786214259",
    "price": "₹ 5,990.00",
    "details": "Jacket with quilted lining, made of technical fabric. High neck and long sleeves. Hip welt pockets and an inside pocket. Elastic trims. Zip-up front hidden by a snap-button placket."
  },
  {
    "product_name": "WATER-REPELLENT TRENCH COAT WITH DETACHABLE GILET",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/5854/301/710/2/w/448/5854301710_1_1_1.jpg?ts=1692778805947",
    "price": "₹ 10,990.00",
    "details": "Lightweight coat with a removable quilted gilet on the inside. - Coat made of stretch cotton fabric with a water-repellent finish. Lapel collar and long sleeves. Inside pocket detail and hip welt pockets. Back vent in the centre of the hem. Buttoned front hidden by a placket. - Puffer gilet made of technical fabric. Featuring a V-neck, welt pockets at the hip and front snap-button fastening.View more"
  },
  {
    "product_name": "100% WOOL COAT - LIMITED EDITION",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/5841/253/800/22/w/448/5841253800_1_1_1.jpg?ts=1692193863529",
    "price": "₹ 15,990.00",
    "details": "Relaxed fit coat made of wool. Peak lapel collar and long sleeves. Welt pockets at the hip. Back vent at the centre of the hem. Button-up front."
  },
  {
    "product_name": "TECHNICAL TRENCH COAT",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/3286/500/667/2/w/448/3286500667_1_1_1.jpg?ts=1690532396864",
    "price": "₹ 9,590.00",
    "details": "Trench coat made of technical fabric. Lapel collar and long sleeves. Hip welt pockets. Interior pocket detail. Central back vent at the hem. Button-up front."
  },
  {
    "product_name": "OVERSIZE TRENCH COAT - LIMITED EDITION",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/5851/368/712/33/w/448/5851368712_1_1_1.jpg?ts=1691506984289",
    "price": "₹ 13,990.00",
    "details": "Collared oversize fit trench coat made of textured cotton. Featuring long sleeves, welt pockets at the hip and an inner pocket detail. Matching fabric belt around the waist. Central back pleat and front button fastening."
  },
  {
    "product_name": "DOUBLE-BREASTED TECHNICAL TRENCH COAT",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/5854/300/710/2/w/448/5854300710_1_1_1.jpg?ts=1690986047268",
    "price": "₹ 10,990.00",
    "details": "Trench coat made of technical fabric. Notch lapel collar and long sleeves. Hip flap pockets. Interior pocket detail. Matching belt in the same fabric. Central back vent at the hem. Front double-breasted button fastening."
  },
  {
    "product_name": "GEOMETRIC JACQUARD DENIM JACKET",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/1538/320/802/2/w/448/1538320802_1_1_1.jpg?ts=1692960481669",
    "price": "₹ 5,990.00",
    "details": "Collared jacket with long sleeves and buttoned cuffs. Flap pockets on the chest and welt hip pockets. Faded effect. Button-up front."
  },
  {
    "product_name": "CROPPED DENIM JACKET",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/5520/316/700/2/w/448/5520316700_1_1_1.jpg?ts=1692025126495",
    "price": "₹ 4,990.00",
    "details": "Faded cropped-fit collared jacket with long sleeves and buttoned cuffs. Patch pockets on the front. Irregular hem. Button-up front."
  },
  {
    "product_name": "DENIM JACKET WITH IRREGULAR TRIMS",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/4365/311/406/32/w/448/4365311406_1_1_1.jpg?ts=1692187656099",
    "price": "₹ 4,990.00",
    "details": "Round neck jacket with long sleeves and buttoned cuffs. Flap patch pockets on the chest and hip side pockets. Faded effect. Irregular trims. Cropped length. Button-up front hidden by a placket."
  },
  {
    "product_name": "DENIM UTILITY GILET",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/1538/305/506/22/w/448/1538305506_1_1_1.jpg?ts=1688716825878",
    "price": "₹ 4,990.00",
    "details": "Boxy fit sleeveless gilet. V-neck. Multi-purpose front pockets. Faded effect. Zip-up front hidden by a snap-button placket."
  },
  {
    "product_name": "COLOURED ZIP-UP JACKET",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/6917/303/500/2/w/448/6917303500_1_1_1.jpg?ts=1689928835048",
    "price": "₹ 4,990.00",
    "details": "Collared jacket with long sleeves and buttoned cuffs. Patch pocket on the chest and inside pocket detail. Faded effect. Front zip fastening."
  },
  {
    "product_name": "LIGHTWEIGHT BOMBER JACKET",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/4302/407/251/2/w/448/4302407251_1_1_1.jpg?ts=1686738106261",
    "price": "₹ 3,290.00",
    "details": "Lightweight jacket made of a technical fabric. Round neck and long sleeves. Hip welt pockets. Interior pocket detail. Ribbed trims. Front zip fastening."
  },
  {
    "product_name": "FAUX SUEDE BOMBER JACKET",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/8574/434/712/2/w/448/8574434712_1_1_1.jpg?ts=1689697776491",
    "price": "₹ 4,990.00",
    "details": "Lightweight jacket made of a faux suede fabric. High neck and long sleeves. Hip welt pockets. Ribbed trims. Front zip fastening."
  },
  {
    "product_name": "FAUX SUEDE JACKET",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/6318/400/706/2/w/0/6318400706_1_1_1.jpg?ts=1689847032258",
    "price": "₹ 4,990.00",
    "details": "Jacket with a ribbed collar. Long sleeves. Front welt pockets. Elastic hem. Zip-up front."
  },
  {
    "product_name": "JACKET WITH POCKETS",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/4164/401/916/2/w/489/4164401916_1_1_1.jpg?ts=1688570564490",
    "price": "₹ 7,590.00",
    "details": "Faded regular-fit collared jacket with long sleeves and buttoned cuffs. Patch pockets with flaps at the hip. Button-up front.Origins special collection.View more"
  },
  {
    "product_name": "TECHNICAL BOMBER JACKET",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/8281/324/800/2/w/448/8281324800_1_1_1.jpg?ts=1689697778531",
    "price": "₹ 5,990.00",
    "details": "Jacket made of technical fabric. High neck and long sleeves with pocket detail. Hip flap pockets. Ribbed trims. Hem that can be adjusted at the sides with a zip. Zip-up front."
  },
  {
    "product_name": "JACKET WITH CONTRAST TOPSTITCHING",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/7505/300/413/2/w/448/7505300413_1_1_1.jpg?ts=1689756834859",
    "price": "₹ 5,990.00",
    "details": "Boxy-fit jacket. Lapel collar and long sleeves with elasticated cuffs. Patch pockets with flaps at the hip. Elasticated hem. Faded effect. Zip-up front."
  },
  {
    "product_name": "DENIM JACKET WITH CONTRAST TOPSTITCHING",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/6987/325/500/2/w/448/6987325500_1_1_1.jpg?ts=1690442673424",
    "price": "₹ 4,990.00",
    "details": "Collared jacket featuring long sleeves with buttoned cuffs. Chest patch pockets and hip welt pockets. Contrast topstitching all over the garment. Button-up front fastening."
  },
  {
    "product_name": "JACKET WITH CONTRAST TOPSTITCHING",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/6987/326/800/2/w/448/6987326800_1_1_1.jpg?ts=1690444375269",
    "price": "₹ 4,990.00",
    "details": "Collared jacket made of textured cotton. Long sleeves with buttoned cuffs. Front patch pockets. Contrast topstitching detail all over the garment. Zip-up front."
  },
  {
    "product_name": "FLORAL JACQUARD JACKET",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/7484/304/710/2/w/448/7484304710_1_1_1.jpg?ts=1692020568971",
    "price": "₹ 7,590.00",
    "details": "Relaxed-fit jacket with long sleeves and snap button cuffs. Patch pockets on the hip. Button-up front."
  },
  {
    "product_name": "DIAMOND JACQUARD JACKET",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/6861/319/330/2/w/448/6861319330_1_1_1.jpg?ts=1691151338095",
    "price": "₹ 9,590.00",
    "details": "Quilted jacket featuring a lapel collar and long sleeves with buttoned cuffs. Hip flap pockets. Adjustable hem with drawstring on the front. Button-up front."
  },
  {
    "product_name": "FLORAL JACQUARD JACKET",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/0706/507/409/2/w/448/0706507409_1_1_1.jpg?ts=1691079126304",
    "price": "₹ 7,590.00",
    "details": "Collared cropped jacket with long sleeves with snap-button cuffs. Featuring hip patch pockets with flaps and front snap-button fastening hidden by a snap-button placket."
  },
  {
    "product_name": "JACKET WITH MAO COLLAR",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/6518/300/401/2/w/448/6518300401_1_1_1.jpg?ts=1688652387532",
    "price": "₹ 5,990.00",
    "details": "Jacket made of a cotton blend fabric. High neck and long sleeves. Hip welt pockets. Ribbed trims. Zip fastening on the front."
  },
  {
    "product_name": "UTILITY JACKET WITH POCKETS",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/5520/366/251/2/w/448/5520366251_1_1_1.jpg?ts=1689926676548",
    "price": "₹ 4,990.00",
    "details": "Jacket made of lightweight cotton fabric. Adjustable high neck with drawstring. Long sleeves with snap-button cuffs. Patch pockets with flaps on the front and sleeves. Zip-up front hidden by a snap-button placket."
  },
  {
    "product_name": "TECHNICAL JACKET WITH GRAPHICS",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/6985/350/807/2/w/448/6985350807_1_1_1.jpg?ts=1691739358329",
    "price": "₹ 7,590.00",
    "details": "Jacket with a high neck and adjustable hood. Long sleeves with elastic cuffs. Hip pockets with zip fastening. Fabric lining with a mesh texture. Faded effect. Contrast prints on the front and back. Adjustable hem with elastic on the front. Zip-up front.View more"
  },
  {
    "product_name": "COLOUR BLOCK TECHNICAL JACKET",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/3918/482/798/2/w/448/3918482798_1_1_1.jpg?ts=1690962649020",
    "price": "₹ 4,990.00",
    "details": "Jacket made of a lightweight technical fabric. High neck and long sleeves with elasticated cuffs. Front hip pockets. Elasticated hem. Front zip fastening."
  },
  {
    "product_name": "TEXTURED WEAVE TECHNICAL JACKET",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/4391/403/804/2/w/448/4391403804_1_1_1.jpg?ts=1691739360747",
    "price": "₹ 5,990.00",
    "details": "Oversize-fit jacket made of technical fabric with ripstop texture, resistant to tearing. High neck and long sleeves. Fabric lining with a mesh texture. Hip welt pockets. Elasticated trims. Zip-up front."
  },
  {
    "product_name": "TECHNICAL JACKET",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/1538/301/802/2/w/448/1538301802_1_1_1.jpg?ts=1689697774391",
    "price": "₹ 4,990.00",
    "details": "Jacket with a high neck and an adjustable hood. Long cuffed sleeves with hook-and-loop straps. Zip pockets on the chest and hip. Zip-up front."
  },
  {
    "product_name": "TEXTURED COTTON GILET",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/6987/321/505/2/w/448/6987321505_1_1_1.jpg?ts=1690962648140",
    "price": "₹ 3,990.00",
    "details": "Gilet with lightly padded interior. Elastic collar. Front pouch pockets. Faded effect. Zip-up front."
  },
  {
    "product_name": "BASIC BOMBER JACKET",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/4302/410/707/2/w/448/4302410707_1_1_1.jpg?ts=1690361440688",
    "price": "₹ 3,990.00",
    "details": "Jacket with a ribbed collar and long sleeves. Hip welt pockets and an inside pocket detail. Elastic hem. Zip-up front."
  },
  {
    "product_name": "GILET WITH RUBBERISED FINISH",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/8574/440/506/2/w/448/8574440506_1_1_1.jpg?ts=1689940173090",
    "price": "₹ 3,290.00",
    "details": "Puffer gilet made of fabric with a rubberised finish. High neck. Front welt pockets. Front zip fastening."
  },
  {
    "product_name": "100% LINEN JACKET",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/1437/149/705/4/w/448/1437149705_1_1_1.jpg?ts=1690388263938",
    "price": "₹ 7,590.00",
    "details": "Jacket made of linen. Lapel collar and long sleeves with buttoned cuffs. Hip welt pockets. Elasticated hem. Button-up front."
  },
  {
    "product_name": "100% LINEN WAISTCOAT",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/7380/677/658/2/w/448/7380677658_2_1_1.jpg?ts=1688114516227",
    "price": "₹ 4,990.00",
    "details": "Linen waistcoat. V-neckline and no sleeves. Welt pockets at the waist. Button-up front."
  },
  {
    "product_name": "COTTON JACKET",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/0706/301/500/2/w/448/0706301500_1_1_1.jpg?ts=1688481988150",
    "price": "₹ 7,590.00",
    "details": "Collared jacket with long sleeves and elasticated cuffs. Patch pockets at the hip. Elasticated hem. Fastens down the front with snap buttons."
  },
  {
    "product_name": "FAUX SUEDE BOXY FIT JACKET",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/3548/304/802/2/w/448/3548304802_1_1_1.jpg?ts=1690962651631",
    "price": "₹ 4,990.00",
    "details": "Boxy fit collared jacket featuring long sleeves with buttoned cuffs. Flap pockets on the chest and welt pockets at the hip. Button-up front."
  },
  {
    "product_name": "LIGHT PADDED JACKET",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/8574/661/712/2/w/448/8574661712_1_1_1.jpg?ts=1687445760715",
    "price": "₹ 3,290.00",
    "details": "Puffer jacket with a high neck and long sleeves. Hip pockets and an inside pocket detail. Front zip fastening."
  },
  {
    "product_name": "LIGHTWEIGHT QUILTED GILET",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/4302/535/712/2/w/448/4302535712_1_1_1.jpg?ts=1686149515761",
    "price": "₹ 2,990.00",
    "details": "Gilet with a high neck. Hip welt pockets and a zip-up front."
  },
  {
    "product_name": "SATIN BOMBER JACKET - LIMITED EDITION",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/3833/303/615/2/w/448/3833303615_1_1_1.jpg?ts=1689327629512",
    "price": "₹ 7,590.00",
    "details": "Varsity jacket with a slightly padded interior. Ribbed collar and long sleeves with elastic cuffs. Hip welt pockets and interior pocket detail. Adjustable hem with elastic. Front zip fastening."
  },
  {
    "product_name": "PUFFER GILET- LIMITED EDITION",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/5320/300/712/2/w/448/5320300712_1_1_1.jpg?ts=1689577314771",
    "price": "₹ 4,990.00",
    "details": ""
  },
  {
    "product_name": "RUBBERISED JACKET - LIMITED EDITION",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/3918/310/300/2/w/448/3918310300_1_1_1.jpg?ts=1689332809480",
    "price": "₹ 8,590.00",
    "details": "Jacket made of a fabric with a rubberised finish. Lapel collar in contrast corduroy fabric. Long sleeves featuring adjustable cuffs with tabs. Patch pockets with flaps on the hip and inner pocket detail. Adjustable hem with elastic at the sides. Front zip fastening hidden by a snap-button placket.View more"
  },
  {
    "product_name": "TECHNICAL JACKET - LIMITED EDITION",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/8281/319/400/2/w/448/8281319400_1_1_1.jpg?ts=1689327624982",
    "price": "₹ 7,590.00",
    "details": "Jacket with a high neck with adjustable drawstring and long sleeves with elasticated cuffs. Patch pockets with flaps at the hip. Adjustable hem with side drawstrings. Zip-up front hidden by a snap-button placket."
  },
  {
    "product_name": "LIGHT PADDED JACKET",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/4302/520/711/2/w/448/4302520711_1_1_1.jpg?ts=1687331082060",
    "price": "₹ 3,990.00",
    "details": "Puffer jacket made of a technical fabric. High neck and long sleeves. Hip welt pockets. Elastic trims. Front zip fastening."
  },
  {
    "product_name": "BOXY FIT JACKET WITH TOPSTITCHING",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/0706/555/523/2/w/448/0706555523_1_1_1.jpg?ts=1691486099267",
    "price": "₹ 7,590.00",
    "details": "Collared boxy-fit jacket made of textured cotton. Long sleeves with buttoned cuffs. Patch pockets with flaps on the hip. Contrast topstitching detail all over the garment. Button-up front."
  },
  {
    "product_name": "BOXY FIT TECHNICAL JACKET",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/9621/640/933/2/w/448/9621640933_1_1_1.jpg?ts=1689763218025",
    "price": "₹ 5,990.00",
    "details": "Jacket made of lightweight technical fabric. High neck. Long sleeves with elasticated cuffs and adjustable tabs. Patch pockets with flaps on the hip. Zip-up front hidden by a snap-button placket."
  },
  {
    "product_name": "LYOCELL JACKET",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/5707/453/800/2/w/448/5707453800_1_1_1.jpg?ts=1689763219982",
    "price": "₹ 7,590.00",
    "details": "Jacket made of lyocell. Lapel collar and long sleeves with buttoned cuffs. Patch pockets on the hip. Button-up front."
  },
  {
    "product_name": "CROPPED BOMBER JACKET",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/0706/571/707/2/w/448/0706571707_1_1_1.jpg?ts=1691587964012",
    "price": "₹ 7,590.00",
    "details": "Jacket made of a cotton blend fabric. High neck and long sleeves. Hip welt pockets. Ribbed trims. Cropped length. Zip-up front hidden by a snap-button placket."
  },
  {
    "product_name": "REFLECTIVE EFFECT JACKET",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/1732/314/446/3/w/448/1732314446_1_1_1.jpg?ts=1693233018145",
    "price": "₹ 7,590.00",
    "details": "Jacket made of a very lightweight and reflective technical fabric.- High neck with stow-away hood on the inside.- Long sleeves with elastic cuffs.- Thermo-sealed inner seams.- Pocket with autolock zip fastening on the chest and hip pockets.- Adjustable hem with elastic at the sides.- Logo print on the front.Zara Athleticz.View more"
  },
  {
    "product_name": "TECHNICAL ANORAK WINDBREAKER",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/1732/312/700/612/w/448/1732312700_1_1_1.jpg?ts=1688385094142",
    "price": "₹ 5,990.00",
    "details": "Anorak windbreaker made of very lightweight technical fabric. - High neck with adjustable hood and autolock zip fastening at the front. - Long sleeves with elastic cuffs.- Pocket with a zip on the chest.- Adjustable hem with elastic at the sides.- Logo print on the front.Zara Athleticz.View more"
  },
  {
    "product_name": "TECHNICAL WINDBREAKER JACKET",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/1732/313/737/2/w/448/1732313737_1_1_1.jpg?ts=1688986167858",
    "price": "₹ 5,990.00",
    "details": "Jacket made of very lightweight technical fabric. - High neck with adjustable hood. - Long sleeves featuring adjustable cuffs with tabs.- Hip welt pockets.- Adjustable hem with elastic at the sides.- Logo print on the front.Zara Athleticz.View more"
  },
  {
    "product_name": "LINEN - COTTON OVERSHIRT",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/2675/478/052/2/w/448/2675478052_1_1_1.jpg?ts=1686730227679",
    "price": "₹ 5,990.00",
    "details": "Relaxed fit collared overshirt made of a linen and cotton blend fabric. Featuring long sleeves with buttoned cuffs. Hip flap pockets. Button-up front."
  },
  {
    "product_name": "HOODED TECHNICAL JACKET",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/4302/413/251/2/w/448/4302413251_1_1_1.jpg?ts=1690535018558",
    "price": "₹ 4,990.00",
    "details": "Technical fabric jacket. High neck with adjustable hood. Long sleeves. Zip pockets on the chest and hip. Lining with mesh textured fabric. Elasticated trims. Zip-up front."
  },
  {
    "product_name": "STRAIGHT FIT JEANS",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/5585/312/400/2/w/448/5585312400_1_1_1.jpg?ts=1692951282794",
    "price": "₹ 4,990.00",
    "details": "Straight-leg jeans with a five-pocket design. Faded with ripped details and a stain print on the legs. Front zip fly and top button fastening."
  },
  {
    "product_name": "GEOMETRIC JACQUARD JEANS",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/1538/322/802/2/w/448/1538322802_1_1_1.jpg?ts=1692960481484",
    "price": "₹ 4,990.00",
    "details": "Straight fit jeans. Five pockets. Faded effect. Front zip fly and button fastening."
  },
  {
    "product_name": "STRAIGHT FIT RIPPED JEANS",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/8062/306/427/2/w/448/8062306427_1_1_1.jpg?ts=1692780182445",
    "price": "₹ 3,290.00",
    "details": "Straight fit jeans. Five pockets. Faded with rips on the legs. Front zip fly and button fastening."
  },
  {
    "product_name": "CROPPED SLIM JEANS",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/8062/305/407/2/w/448/8062305407_1_1_1.jpg?ts=1692201952270",
    "price": "₹ 4,990.00",
    "details": "Cropped slim fit jeans. Five-pocket design. Faded and ripped detail on the legs. Zip fly and top button fastening."
  },
  {
    "product_name": "RELAXED-FIT RIPPED JEANS",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/8062/333/427/2/w/448/8062333427_1_1_1.jpg?ts=1692355484258",
    "price": "₹ 4,990.00",
    "details": "Relaxed-fit jeans with a five-pocket design. Faded and ripped effect on the legs. Irregular double-effect hems. Front button fly fastening."
  },
  {
    "product_name": "SLIM FIT JEANS",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/0774/330/406/2/w/448/0774330406_1_1_1.jpg?ts=1689605484740",
    "price": "₹ 2,490.00",
    "details": "Slim fit jeans. Five pockets. Faded effect. Front zip fly and button fastening."
  },
  {
    "product_name": "RELAXED FIT PLEATED JEANS",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/1538/310/802/2/w/448/1538310802_1_1_1.jpg?ts=1690535018602",
    "price": "₹ 3,990.00",
    "details": "Relaxed fit jeans. Waist with front pleats. Front pockets and rear patch pockets. Faded effect. Front zip fly and button fastening."
  },
  {
    "product_name": "CROPPED SLIM JEANS",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/8062/475/406/2/w/448/8062475406_1_1_1.jpg?ts=1689683399181",
    "price": "₹ 2,490.00",
    "details": "Cropped slim fit jeans with a five-pocket design. Faded effect. Zip fly and button fastening."
  },
  {
    "product_name": "TAPERED FIT JEANS",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/5585/325/445/2/w/448/5585325445_1_1_1.jpg?ts=1690540059037",
    "price": "₹ 3,290.00",
    "details": "Tapered fit jeans. Five pockets. Faded effect. Cropped length. Front zip fly and button fastening."
  },
  {
    "product_name": "METALLIC-EFFECT JEANS",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/5520/307/400/2/w/448/5520307400_6_1_1.jpg?ts=1692171470620",
    "price": "₹ 5,990.00",
    "details": "Straight fit jeans made of faded denim with an irregular metallic finish. Five pockets. Front zip fly and top button fastening."
  },
  {
    "product_name": "WIDE FIT JEANS",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/9794/300/716/2/w/0/9794300716_1_1_1.jpg?ts=1692188212552",
    "price": "₹ 4,990.00",
    "details": "Faded wide fit jeans. Five pockets. Front zip fly and button fastening."
  },
  {
    "product_name": "STRAIGHT FIT SPRAY JEANS",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/9794/302/716/33/w/0/9794302716_1_1_1.jpg?ts=1692688915062",
    "price": "₹ 4,990.00",
    "details": "Straight-fit jeans with a five-pocket design. Faded effect with trims in a contrast colour. Front zip fly and top button fastening."
  },
  {
    "product_name": "WIDE FIT CARGO JEANS",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/1538/316/445/32/w/448/1538316445_1_1_1.jpg?ts=1692187656109",
    "price": "₹ 4,990.00",
    "details": "Wide fit jeans. Five pockets. Patch pockets with flaps on the legs. Adjustable strap in the same fabric on the leg. Faded effect. Irregular hems. Front zip and button fastening."
  },
  {
    "product_name": "DETACHABLE CARGO JEANS",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/8062/300/445/2/w/0/8062300445_1_1_1.jpg?ts=1692025125925",
    "price": "₹ 5,990.00",
    "details": "Loose fit jeans. Adjustable waistband with side tabs. Multifunctional strap details on the front and back. Five pockets. Patch pockets with flaps on the legs. Detachable legs with invisible zip. Faded effect. Adjustable hems with zip. Front zip and button fastening.View more"
  },
  {
    "product_name": "RELAXED FIT JEANS",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/3175/311/707/2/w/448/3175311707_1_1_1.jpg?ts=1692025126252",
    "price": "₹ 4,990.00",
    "details": "Relaxed fit jeans. Five pockets. Zipped pockets on the legs. Faded effect. Front zip fly and button fastening."
  },
  {
    "product_name": "100% LINEN SHIRT",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/6359/387/250/2/w/448/6359387250_1_1_1.jpg?ts=1692778805396",
    "price": "₹ 3,990.00",
    "details": "Regular-fit shirt made of lightweight linen fabric. Spread collar and long sleeves with buttoned cuffs. Button-up front."
  },
  {
    "product_name": "VISCOSE/LINEN BLEND SHIRT",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/5912/161/802/2/w/448/5912161802_1_1_1.jpg?ts=1691680453953",
    "price": "₹ 3,290.00",
    "details": "Relaxed fit shirt in a linen and viscose blend. Featuring a lapel collar, long sleeves with buttoned cuffs and a button-up front."
  },
  {
    "product_name": "FLORAL PRINT SHIRT",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/2599/340/064/2/w/448/2599340064_1_1_1.jpg?ts=1692021899645",
    "price": "₹ 3,290.00",
    "details": "Relaxed fit shirt with a camp collar, short sleeves and a button-up front."
  },
  {
    "product_name": "VISCOSE - LINEN SHIRT",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/6525/410/800/2/w/448/6525410800_1_1_1.jpg?ts=1692801580516",
    "price": "₹ 3,290.00",
    "details": "Relaxed fit shirt made of a viscose and cotton blend. Featuring a camp collar, short sleeves, a split hem and a button-up front."
  },
  {
    "product_name": "PLEATED TROUSERS",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/6861/336/800/2/w/448/6861336800_1_1_1.jpg?ts=1692181731410",
    "price": "₹ 4,990.00",
    "details": "Straight fit trousers. Waist with front pleated details. Front pockets and rear pocket details. Turn-up hems. Front zip fly and button fastening."
  },
  {
    "product_name": "BERMUDA SHORTS WITH CONTRAST EMBROIDERY",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/3992/312/251/2/w/448/3992312251_1_1_1.jpg?ts=1691486095772",
    "price": "₹ 3,290.00",
    "details": "Bermuda shorts featuring an adjustable elasticated waistband with drawstring. Front pockets and rear patch pocket detail. Hems with contrast embroidery."
  },
  {
    "product_name": "100% LINEN TROUSERS",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/1538/302/916/2/w/448/1538302916_1_1_1.jpg?ts=1686065081362",
    "price": "₹ 3,990.00",
    "details": "Trousers made of linen fabric. Elasticated waistband. Front pockets and back welt pockets. Zip fly and top button fastening."
  },
  {
    "product_name": "COTTON - LINEN SHIRT",
    "image_url": "https://static.zara.net/photos///2023/V/0/2/p/1063/202/700/2/w/448/1063202700_1_1_1.jpg?ts=1685461210229",
    "price": "₹ 2,990.00",
    "details": "Relaxed fit shirt made of a linen blend. Stand-up collar and long sleeves with buttoned cuffs. Button-up front."
  },
  {
    "product_name": "LINEN - COTTON POLO SHIRT",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/5649/210/500/3/w/0/5649210500_1_1_1.jpg?ts=1687345065871",
    "price": "₹ 3,290.00",
    "details": "Relaxed fit collared shirt made of a linen blend. Front button fastening. Long sleeves with buttoned cuffs. Side vents at the hem."
  },
  {
    "product_name": "COTTON - LINEN SHIRT",
    "image_url": "https://static.zara.net/photos///2023/V/0/1/p/1063/307/052/2/w/448/1063307052_1_1_1.jpg?ts=1676369583211",
    "price": "₹ 2,990.00",
    "details": "Relaxed-fit shirt made of a linen blend. Button-down collar. Long sleeves with buttoned cuffs. Chest patch pocket. Button-up front."
  },
  {
    "product_name": "LINEN - COTTON BERMUDA SHORTS",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/8574/349/707/2/w/0/8574349707_1_1_1.jpg?ts=1687937159892",
    "price": "₹ 2,990.00",
    "details": "Carrot fit Bermuda shorts made of a linen and cotton blend fabric. Adjustable elasticated waistband and front pleat details. Side pockets and rear welt pocket detail."
  },
  {
    "product_name": "100% LINEN BERMUDA SHORTS",
    "image_url": "https://static.zara.net/photos///2023/V/0/2/p/1538/403/052/2/w/448/1538403052_1_1_1.jpg?ts=1678189945192",
    "price": "₹ 2,990.00",
    "details": "Bermuda shorts made of linen fabric. Front pockets and back welt pockets. Front zip fly and top button fastening."
  },
  {
    "product_name": "COTTON - LINEN T-SHIRT",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/0347/300/700/2/w/448/0347300700_1_1_1.jpg?ts=1688108944359",
    "price": "₹ 1,990.00",
    "details": "Loose-fitting T-shirt made of a linen and cotton blend fabric. Round neckline and short sleeves."
  },
  {
    "product_name": "COTTON - LINEN TROUSERS",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/6917/300/811/2/w/448/6917300811_1_1_1.jpg?ts=1688731458333",
    "price": "₹ 3,290.00",
    "details": "Regular fit trousers made of a cotton and linen blend fabric. Adjustable inner elasticated waistband. Front and back pockets."
  },
  {
    "product_name": "COTTON - LINEN SHIRT",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/3277/306/409/2/w/448/3277306409_1_1_1.jpg?ts=1685521803905",
    "price": "₹ 3,290.00",
    "details": "Relaxed fit collared shirt made of a linen and cotton blend fabric. Short sleeves. Chest patch pocket. Button-up front."
  },
  {
    "product_name": "VISCOSE/LINEN BLEND SHIRT",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/1182/034/505/2/w/448/1182034505_1_1_1.jpg?ts=1688729074072",
    "price": "₹ 3,290.00",
    "details": "Relaxed-fit shirt made of a linen and viscose blend. Camp collar and short sleeves. Back patch pocket. Side vents at the hem. Button-up front."
  },
  {
    "product_name": "VISCOSE - LINEN BERMUDA SHORTS",
    "image_url": "https://static.zara.net/photos///2023/V/0/2/p/4432/420/104/2/w/448/4432420104_1_1_1.jpg?ts=1678442204063",
    "price": "₹ 2,890.00",
    "details": "Bermuda shorts in a viscose and linen blend fabric. Elasticated adjustable waistband with drawstrings. Front pockets and rear patch pocket."
  },
  {
    "product_name": "TEXTURED OXFORD BERMUDA SHORTS",
    "image_url": "https://static.zara.net/photos///2023/V/0/2/p/7147/402/250/2/w/448/7147402250_1_1_1.jpg?ts=1677661750822",
    "price": "₹ 2,890.00",
    "details": "Bermuda shorts made of a linen and cotton blend. Featuring front pockets and rear welt pockets. Zip fly and top button fastening."
  },
  {
    "product_name": "SHIRT WITH CONTRASTING TOPSTITCHING",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/7545/357/410/2/w/448/7545357410_1_1_1.jpg?ts=1690962643886",
    "price": "₹ 3,990.00",
    "details": "Short sleeve relaxed fit shirt with a spread collar. Chest patch pocket. Contrast topstitching all over the garment. Button-up front."
  },
  {
    "product_name": "COTTON - LINEN TEXTURED SHIRT",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/6048/039/401/2/w/448/6048039401_1_1_1.jpg?ts=1690962644545",
    "price": "₹ 3,290.00",
    "details": "Relaxed fit collared shirt made of a cotton and linen blend fabric. Long sleeves with buttoned cuffs. Chest patch pocket. Button-up front."
  },
  {
    "product_name": "100% LINEN SHIRT",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/8211/320/250/2/w/448/8211320250_1_1_1.jpg?ts=1686902215022",
    "price": "₹ 3,990.00",
    "details": "Relaxed fit collared shirt made of linen fabric. Long sleeves with buttoned cuffs. Patch pocket on the chest. Button-up front."
  },
  {
    "product_name": "VISCOSE - LINEN TROUSERS",
    "image_url": "https://static.zara.net/photos///2023/V/0/2/p/4432/415/500/2/w/448/4432415500_1_1_1.jpg?ts=1678438145566",
    "price": "₹ 2,990.00",
    "details": "Trousers in a viscose and linen blend fabric. Elasticated adjustable waistband with drawstrings. Front pockets and rear patch pocket detail."
  },
  {
    "product_name": "LINEN - COTTON BLEND SHIRT",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/4365/306/800/2/w/0/4365306800_1_1_1.jpg?ts=1688714835775",
    "price": "₹ 3,290.00",
    "details": "Relaxed-fit sleeveless shirt made of a cotton and linen blend. Spread collar. Patch pockets on the chest. Irregular hem. Front snap-button fastening."
  },
  {
    "product_name": "COTTON-LINEN BERMUDA SHORTS",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/4365/300/251/2/w/448/4365300251_1_1_1.jpg?ts=1688714833709",
    "price": "₹ 3,290.00",
    "details": "Relaxed fit Bermuda shorts made of a linen and cotton blend fabric. Adjustable elasticated waistband with drawstring. Side pockets and rear patch pocket detail. Irregular hem."
  },
  {
    "product_name": "LINEN - COTTON BLEND SHIRT",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/4365/302/800/2/w/448/4365302800_1_1_1.jpg?ts=1688714835033",
    "price": "₹ 3,290.00",
    "details": "Relaxed fit shirt made of a cotton and linen blend. Spread collar and short sleeves. Patch pocket detail on the chest. Irregular trims. Button-up front."
  },
  {
    "product_name": "COTTON - LINEN TROUSERS",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/0706/414/730/2/w/448/0706414730_1_1_1.jpg?ts=1688122586506",
    "price": "₹ 3,290.00",
    "details": "Regular-fit trousers made of cotton and linen blend fabric. Elasticated waistband with adjustable drawstring. Front pockets and back patch pockets. Front zip fly and snap button."
  },
  {
    "product_name": "GEOMETRIC PRINT SHIRT",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/0794/303/086/2/w/448/0794303086_1_1_1.jpg?ts=1688110079737",
    "price": "₹ 3,290.00",
    "details": "Shirt made of a viscose and cotton blend fabric. Camp collar and short sleeves. Button-up front."
  },
  {
    "product_name": "100% LINEN WAISTCOAT",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/7380/677/658/2/w/0/7380677658_2_1_1.jpg?ts=1688114516227",
    "price": "₹ 4,990.00",
    "details": "Linen waistcoat. V-neckline and no sleeves. Welt pockets at the waist. Button-up front."
  },
  {
    "product_name": "LINEN - VISCOSE TROUSERS",
    "image_url": "https://static.zara.net/photos///2023/V/0/2/p/4302/300/800/2/w/448/4302300800_1_1_1.jpg?ts=1683714392429",
    "price": "₹ 2,990.00",
    "details": "Regular-fit trousers made of a viscose and linen blend fabric. Adjustable elasticated waistband. Front pockets and back pockets. Faded effect."
  },
  {
    "product_name": "LINEN/COTTON TROUSERS",
    "image_url": "https://static.zara.net/photos///2023/V/0/2/p/8574/347/250/2/w/448/8574347250_1_1_1.jpg?ts=1675265762444",
    "price": "₹ 3,990.00",
    "details": "Slim-fit trousers with an elasticated waistband with matching adjustable drawstrings. Front and back welt pockets. Zip fly and top button fastening."
  },
  {
    "product_name": "STRIPED COTTON - LINEN SHIRT",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/2688/305/400/2/w/448/2688305400_1_1_1.jpg?ts=1688542863076",
    "price": "₹ 3,290.00",
    "details": "Regular-fit shirt made of a cotton and linen blend. Spread collar and short sleeves. Button-up front."
  },
  {
    "product_name": "BELTED COTTON-LINEN TROUSERS",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/5777/036/807/2/w/448/5777036807_1_1_1.jpg?ts=1689923261184",
    "price": "₹ 4,990.00",
    "details": "Regular fit trousers made of a cotton and linen blend. Waist with front pleats and a belt in the same fabric. Front pockets and rear welt pockets. Front zip and button fastening."
  },
  {
    "product_name": "STRIPED LYOCELL-LINEN SHIRT",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/1437/480/450/2/w/448/1437480450_1_1_1.jpg?ts=1689932299164",
    "price": "₹ 4,990.00",
    "details": "Relaxed fit collared shirt made of a linen and lyocell blend. Front button fastening. Long sleeves with adjustable buttoned cuffs. Adjustable hem with a front drawstring."
  },
  {
    "product_name": "LINEN - LYOCELL TROUSERS",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/6096/400/707/2/w/448/6096400707_1_1_1.jpg?ts=1689923261327",
    "price": "₹ 4,990.00",
    "details": "Regular fit trousers made of a linen and lyocell blend. Front patch pockets and buttoned welt pockets at the back. Front zip and button fastening."
  },
  {
    "product_name": "100% LINEN SHIRT",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/5657/387/250/2/w/448/5657387250_1_1_1.jpg?ts=1688716938640",
    "price": "₹ 3,990.00",
    "details": "Regular fit spread collar shirt featuring long sleeves with buttoned cuffs. Button-up front."
  },
  {
    "product_name": "100% LINEN SUIT BLAZER",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/1564/100/401/202/w/489/1564100401_1_1_1.jpg?ts=1689928368171",
    "price": "₹ 11,990.00",
    "details": "Regular-fit blazer made of linen. Notched lapel collar and long sleeves with buttoned cuffs. Chest welt pocket and flap pockets on the hip. Inside pocket. Central back vent at the hem and a button-up front.Origins special collection.View more"
  },
  {
    "product_name": "100% LINEN SUIT TROUSERS",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/1564/101/401/2/w/489/1564101401_1_1_1.jpg?ts=1689605441849",
    "price": "₹ 5,990.00",
    "details": "Straight fit trousers made of linen. Front pockets and buttoned jetted pockets on the back. Front zip fly and top button fastening."
  },
  {
    "product_name": "FLORAL PRINT SUIT BLAZER - LIMITED EDITION",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/5715/029/020/2/w/448/5715029020_1_1_1.jpg?ts=1688470614812",
    "price": "₹ 13,990.00",
    "details": "Relaxed fit blazer made of a linen and cotton blend. Notched lapel collar and long sleeves with turn-up cuffs. Chest welt pocket and flap pockets on the hip. Inner pocket detail. Contrast lining. Back vent at the centre of the hem and a button-up front.View more"
  },
  {
    "product_name": "100% LINEN SUIT BLAZER",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/4470/003/251/2/w/448/4470003251_1_1_1.jpg?ts=1689605444336",
    "price": "₹ 10,990.00",
    "details": "Straight fit blazer made of linen. Notched lapel collar. Long sleeves with buttoned cuffs. Chest welt pocket and hip flap pocket detail. Inner pocket detail. Back vents at the hem and a button-up front."
  },
  {
    "product_name": "100% LINEN SUIT TROUSERS",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/4471/003/251/2/w/448/4471003251_1_1_1.jpg?ts=1689605443375",
    "price": "₹ 4,990.00",
    "details": "Regular fit trousers. Waist with front pleats. Front pockets and rear welt pockets. Front zip fly and button fastening."
  },
  {
    "product_name": "100% LINEN SUIT TROUSERS",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/4468/003/052/2/w/448/4468003052_1_1_1.jpg?ts=1689675754012",
    "price": "₹ 4,990.00",
    "details": "Regular-fit trousers. Front pockets and back welt pockets. Front zip fly and top button fastening."
  },
  {
    "product_name": "STRIPED LINEN-VISCOSE TROUSERS",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/3992/342/600/2/w/448/3992342600_1_1_1.jpg?ts=1691415873798",
    "price": "₹ 7,590.00",
    "details": "Relaxed-fit trousers with an adjustable elasticated waistband, a matching fabric belt and a back patch pocket."
  },
  {
    "product_name": "TEXTURED KNIT POLO SHIRT",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/9598/308/712/2/w/448/9598308712_1_1_1.jpg?ts=1691746949192",
    "price": "₹ 3,990.00",
    "details": "Loose-fitting knit polo shirt made of spun linen and cotton blend fabric. Featuring a collar and front button fastening. Long sleeves. Ribbed trims."
  },
  {
    "product_name": "100% LINEN PAREO",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/9198/301/712/2/w/448/9198301712_6_1_1.jpg?ts=1690451086349",
    "price": "₹ 3,290.00",
    "details": "Lightweight pareo made of linen. Featuring a contrast stripe and frayed trims.Measurements: 100 x 200 cm. / 39.3 x 78.7″"
  },
  {
    "product_name": "100% LINEN BERMUDA SHORTS",
    "image_url": "https://static.zara.net/photos///2023/V/0/1/p/8574/445/800/2/w/448/8574445800_1_1_1.jpg?ts=1679051705328",
    "price": "₹ 3,290.00",
    "details": "Bermuda shorts made of linen fabric. Adjustable elasticated waistband with interior drawstring. Front pockets and rear welt pockets."
  },
  {
    "product_name": "100% LINEN TROUSERS",
    "image_url": "https://static.zara.net/photos///2023/V/0/2/p/8574/348/052/2/w/448/8574348052_1_1_1.jpg?ts=1680076347053",
    "price": "₹ 4,990.00",
    "details": "Straight fit trousers made of linen. Waist with front pleat details. Front pockets and rear jetted pockets. Front zip fly and button fastening."
  },
  {
    "product_name": "CORDUROY OVERSHIRT",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/1063/320/802/2/w/448/1063320802_1_1_1.jpg?ts=1692951285198",
    "price": "₹ 3,990.00",
    "details": "Relaxed fit collared overshirt. Long sleeves with buttoned cuffs. Chest patch pockets. Button-up front."
  },
  {
    "product_name": "OVERSHIRT WITH POCKETS",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/0706/430/916/2/w/448/0706430916_1_1_1.jpg?ts=1690358711757",
    "price": "₹ 4,990.00",
    "details": "Regular fit collared overshirt with long sleeves with buttoned cuffs. Patch pockets with flaps on the front. Button-up front."
  },
  {
    "product_name": "DIAGONAL TEXTURE OVERSHIRT",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/3057/403/802/2/w/448/3057403802_2_1_1.jpg?ts=1691138569348",
    "price": "₹ 5,990.00",
    "details": "Collared regular fit overshirt made of diagonal textured fabric. Long sleeves with buttoned cuffs. Patch pockets with flaps on the chest and hip welt pockets. Button-up front hidden by a placket."
  },
  {
    "product_name": "OVERSHIRT WITH POCKETS",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/1538/451/711/2/w/448/1538451711_1_1_1.jpg?ts=1691136024687",
    "price": "₹ 3,990.00",
    "details": "Relaxed fit overshirt made of cotton. Lapel collar and long sleeves with buttoned cuffs. Patch pockets with flaps on the chest and a side hip pocket. Zip-up front."
  },
  {
    "product_name": "COMFORT OVERSHIRT WITH POCKETS",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/0706/429/800/12/w/0/0706429800_1_1_1.jpg?ts=1692961529587",
    "price": "₹ 3,990.00",
    "details": "Collared overshirt made of a stretchy fabric. Long sleeves with snap-button cuffs. Chest patch pockets. Front snap-button fastening."
  },
  {
    "product_name": "OVERSHIRT WITH CONTRAST TOPSTITCHING",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/7446/310/712/2/w/448/7446310712_1_1_1.jpg?ts=1690962645514",
    "price": "₹ 4,990.00",
    "details": "Collared relaxed fit overshirt made of textured cotton. Long sleeves with buttoned cuffs. Patch pockets on the chest. Contrast topstitching detail all over the garment. Button-up front."
  },
  {
    "product_name": "LINEN BLEND OVERSHIRT WITH TOPSTITCHING",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/0706/366/800/2/w/448/0706366800_1_1_1.jpg?ts=1686295515662",
    "price": "₹ 3,990.00",
    "details": "Relaxed fit collared overshirt made of a cotton and linen blend fabric. Short sleeves. Front patch pockets. Contrast topstitching all over the garment. Snap-button fastenings on the front."
  },
  {
    "product_name": "RELAXED FIT DENIM OVERSHIRT",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/5520/330/737/2/w/448/5520330737_1_1_1.jpg?ts=1692188871600",
    "price": "₹ 3,290.00",
    "details": "Faded relaxed fit collared overshirt featuring long sleeves with buttoned cuffs. Patch pockets on the chest and hidden snap-button fastening at the front."
  },
  {
    "product_name": "PAINT PRINT OVERSHIRT",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/5320/305/071/2/w/448/5320305071_1_1_1.jpg?ts=1692360154954",
    "price": "₹ 4,990.00",
    "details": "Relaxed fit collared overshirt with long sleeves and snap-button cuffs. Chest patch pockets. Side vents at the hem. Front snap-button fastening."
  },
  {
    "product_name": "TIE-DYE CHECK OVERSHIRT",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/1063/313/015/2/w/448/1063313015_1_1_1.jpg?ts=1692359830761",
    "price": "₹ 3,990.00",
    "details": "Regular-fit overshirt made of cotton fabric. Featuring a lapel collar and long sleeves with buttoned cuffs. Patch pockets on the chest. Button-up front."
  },
  {
    "product_name": "TEXTURED RUSTIC OVERSHIRT",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/6861/506/707/2/w/448/6861506707_1_1_1.jpg?ts=1691483217711",
    "price": "₹ 5,990.00",
    "details": "Collared cotton blend overshirt. Long sleeves with buttoned cuffs. Hip patch pockets. Button-up front."
  },
  {
    "product_name": "GEOMETRIC JACQUARD OVERSHIRT",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/2675/411/712/2/w/448/2675411712_2_1_1.jpg?ts=1687337219075",
    "price": "₹ 7,590.00",
    "details": "Relaxed fit overshirt made of cotton fabric. Featuring a lapel collar and long sleeves with buttoned cuffs. Welt pockets at the hip. Button-up front."
  },
  {
    "product_name": "COMFORT OVERSHIRT WITH POCKETS",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/7484/300/800/12/w/448/7484300800_1_1_1.jpg?ts=1693231709125",
    "price": "₹ 3,290.00",
    "details": "Relaxed fit overshirt made of stretchy fabric. Featuring a spread collar, short sleeves, chest patch pockets and front snap-button fastening."
  },
  {
    "product_name": "OVERSHIRT WITH CONTRAST TOPSTITCHING",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/5786/162/800/2/w/448/5786162800_1_1_1.jpg?ts=1688715758115",
    "price": "₹ 4,990.00",
    "details": "Collared relaxed fit overshirt. Long sleeves with buttoned cuffs. Chest patch pockets. Contrast topstitching all over the garment. Button-up front."
  },
  {
    "product_name": "FAUX LEATHER OVERSHIRT",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/5070/305/800/2/w/448/5070305800_1_1_1.jpg?ts=1688715757260",
    "price": "₹ 3,990.00",
    "details": "Boxy fit collared overshirt made of faux leather. Featuring short sleeves, a chest patch pockets, contrast topstitching all over the garment and a button-up front."
  },
  {
    "product_name": "CROCHET OVERSHIRT",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/2688/310/800/2/w/448/2688310800_1_1_1.jpg?ts=1692361199089",
    "price": "₹ 3,990.00",
    "details": "Regular fit overshirt made of openwork fabric. Lapel collar and short sleeves. Chest patch pocket. Button-up front."
  },
  {
    "product_name": "CROPPED FAUX LEATHER SHIRT",
    "image_url": "https://static.zara.net/photos///2023/V/0/1/p/8281/423/800/2/w/448/8281423800_1_1_1.jpg?ts=1682333401257",
    "price": "₹ 3,290.00",
    "details": "Relaxed-fit faux leather shirt. Collar and short sleeves. Chest patch pocket. Cropped length. Fastens down the front with snap buttons."
  },
  {
    "product_name": "FADED FAUX SUEDE OVERSHIRT",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/8281/331/801/2/w/448/8281331801_1_1_1.jpg?ts=1692360155212",
    "price": "₹ 3,990.00",
    "details": "Boxy-fit faux suede overshirt. Collar and short sleeves. Chest patch pocket. Cropped length. Fastens down the front with snap buttons."
  },
  {
    "product_name": "LIMITED EDITION TECHNICAL SHIRT",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/4391/300/515/2/w/448/4391300515_1_1_1.jpg?ts=1689327628240",
    "price": "₹ 4,990.00",
    "details": "Cropped collared shirt made of technical satin fabric. Long sleeves with buttoned cuffs. Patch pockets with flaps on the chest. Button-up front."
  },
  {
    "product_name": "WAXED DENIM OVERSHIRT - LIMITED EDITION",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/5520/302/400/32/w/448/5520302400_1_1_1.jpg?ts=1692187656412",
    "price": "₹ 5,990.00",
    "details": "Relaxed fit overshirt made of faded denim with a slightly waxed finish. Lapel collar and long sleeves and buttoned cuffs. Button-up front."
  },
  {
    "product_name": "OVERSIZE FIT SHIRT - LIMITED EDITION",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/5819/179/403/2/w/448/5819179403_1_1_1.jpg?ts=1689332809986",
    "price": "₹ 3,990.00",
    "details": "Oversize fit shirt made of cotton. Spread collar and long sleeves with buttoned cuffs. Pleat details on the back. Button-up front hidden by a placket."
  },
  {
    "product_name": "BOXY FIT SHIRT - LIMITED EDITION",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/5820/497/401/2/w/448/5820497401_1_1_1.jpg?ts=1689332813707",
    "price": "₹ 3,290.00",
    "details": "Boxy fit shirt made of cotton. Spread collar and short sleeves. Side vents at the hem. Button-up front hidden by a placket."
  },
  {
    "product_name": "RIPSTOP OVERSHIRT - LIMITED EDITION",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/8281/321/500/2/w/448/8281321500_1_1_1.jpg?ts=1689327629158",
    "price": "₹ 5,990.00",
    "details": "Regular fit overshirt made of textured ripstop fabric that is resistant to tearing. Lapel collar and long sleeves with buttoned cuffs. Button-up front."
  },
  {
    "product_name": "OVERSIZE FIT OVERSHIRT - LIMITED EDITION",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/5822/251/401/2/w/448/5822251401_1_1_1.jpg?ts=1689327630462",
    "price": "₹ 4,990.00",
    "details": "Oversize fit overshirt. Spread collar and long sleeves with buttoned cuffs. Pleat details on the back. Button-up front hidden by a placket."
  },
  {
    "product_name": "RELAXED FIT SHIRT - LIMITED EDITION",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/8281/322/615/2/w/448/8281322615_1_1_1.jpg?ts=1689327634008",
    "price": "₹ 4,990.00",
    "details": "Relaxed-fit collared shirt featuring long sleeves with buttoned cuffs. Chest patch pockets and a button-up front."
  },
  {
    "product_name": "VISCOSE BLEND KNIT POLO SHIRT",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/6216/307/526/2/w/448/6216307526_1_1_1.jpg?ts=1692951291643",
    "price": "₹ 2,590.00",
    "details": "Collared knit polo shirt made of a spun viscose blend. Button-up front. Short sleeves. Ribbed trims."
  },
  {
    "product_name": "STRIPED KNIT POLO SHIRT",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/3284/311/401/2/w/448/3284311401_1_1_1.jpg?ts=1692951286021",
    "price": "₹ 3,290.00",
    "details": "Knit collared polo shirt made of spun cotton fabric. Front button fastening, long sleeves and ribbed trims."
  },
  {
    "product_name": "CONTRAST KNIT POLO SHIRT",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/3003/306/700/2/w/448/3003306700_1_1_1.jpg?ts=1690360444523",
    "price": "₹ 3,290.00",
    "details": "Collared knit polo shirt. Contrast button fastening on the front. Short sleeves. Ribbed trims."
  },
  {
    "product_name": "LYOCELL - COTTON KNIT POLO SHIRT",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/5755/320/401/2/w/448/5755320401_1_1_1.jpg?ts=1690965178757",
    "price": "₹ 3,290.00",
    "details": "Collared knit polo shirt made of spun lyocell, cotton and silk blend fabric. Button-up front. Short sleeves. Ribbed trims."
  },
  {
    "product_name": "KNIT POLO SHIRT WITH ZIP",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/6771/302/800/2/w/448/6771302800_1_1_1.jpg?ts=1690975861353",
    "price": "₹ 3,290.00",
    "details": "Knit polo shirt made of spun cotton fabric. Collar with zip fastening. Short sleeves. Ribbed trims."
  },
  {
    "product_name": "KNIT POLO SHIRT WITH ZIP",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/2632/303/401/2/w/448/2632303401_1_1_1.jpg?ts=1692954332364",
    "price": "₹ 3,290.00",
    "details": "Knit polo shirt made of spun cotton fabric. Lapel collar with zip on the front. Long sleeves. Ribbed trims."
  },
  {
    "product_name": "POLO SWEATSHIRT",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/0526/302/708/2/w/448/0526302708_2_1_1.jpg?ts=1692776632508",
    "price": "₹ 3,290.00",
    "details": "Collared polo made of compact cotton fabric. Front button fastening, long sleeves and ribbed trims."
  },
  {
    "product_name": "TEXTURED CROCHET KNIT POLO SHIRT",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/1023/320/710/2/w/448/1023320710_1_1_1.jpg?ts=1692020568028",
    "price": "₹ 3,990.00",
    "details": "Knit polo shirt with an open texture. Lapel collar with front opening. Short sleeves. Ribbed trims."
  },
  {
    "product_name": "TEXTURED CROCHET KNIT POLO SHIRT",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/3003/308/712/2/w/448/3003308712_1_1_1.jpg?ts=1692021898849",
    "price": "₹ 3,990.00",
    "details": "Knit collared polo shirt with an open texture. Front button fastening. Long sleeves. Ribbed trims."
  },
  {
    "product_name": "COLOUR BLOCK KNIT POLO SHIRT WITH PATCHES",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/3166/307/712/2/w/448/3166307712_1_1_1.jpg?ts=1690358713434",
    "price": "₹ 3,990.00",
    "details": "Collared knit polo shirt in an irregular spun fabric. Button-up front. Short sleeves. Ribbed trims."
  },
  {
    "product_name": "TEXTURED POLO SHIRT",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/0526/420/633/2/w/448/0526420633_1_1_1.jpg?ts=1688481986558",
    "price": "₹ 2,290.00",
    "details": "Collared polo shirt with a button-up front and short sleeves. Split hem."
  },
  {
    "product_name": "POLO SWEATSHIRT",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/0526/330/066/2/w/448/0526330066_1_1_1.jpg?ts=1692022320087",
    "price": "₹ 3,290.00",
    "details": "Collared polo shirt with a buttoned front hidden by a placket. Long sleeves. Ribbed trims."
  },
  {
    "product_name": "PURL KNIT POLO SHIRT",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/0304/303/401/2/w/0/0304303401_1_1_1.jpg?ts=1691680453358",
    "price": "₹ 2,990.00",
    "details": "Knit loose-fitting collared polo shirt made of spun cotton fabric. Button fastening on the front. Short sleeves. Ribbed trims."
  },
  {
    "product_name": "TEXTURED KNIT POLO SHIRT",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/9598/308/712/2/w/448/9598308712_1_1_1.jpg?ts=1691746949192",
    "price": "₹ 3,990.00",
    "details": "Loose-fitting knit polo shirt made of spun linen and cotton blend fabric. Featuring a collar and front button fastening. Long sleeves. Ribbed trims."
  },
  {
    "product_name": "TEXTURED OVERSIZE KNIT POLO SHIRT",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/5755/305/700/2/w/448/5755305700_1_1_1.jpg?ts=1691742491370",
    "price": "₹ 3,990.00",
    "details": "Collared oversize knit polo shirt with a button-up front. Short sleeves. Chest patch pocket. Ribbed trims."
  },
  {
    "product_name": "COTTON AND SILK KNIT POLO SHIRT",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/0077/302/800/2/w/448/0077302800_1_1_1.jpg?ts=1690965486271",
    "price": "₹ 4,990.00",
    "details": "Knit polo shirt in a spun cotton and silk blend fabric. Lapel collar with front button fastening and long sleeves. Ribbed trims."
  },
  {
    "product_name": "WAVE JACQUARD KNIT POLO SHIRT",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/3597/307/600/2/w/448/3597307600_1_1_1.jpg?ts=1689760700157",
    "price": "₹ 3,990.00",
    "details": "Collared knit polo shirt made of spun cotton blend fabric. Buttoned placket on the front. Short sleeves. Ribbed trims."
  },
  {
    "product_name": "GEOMETRIC JACQUARD KNIT POLO SHIRT",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/1023/310/712/2/w/448/1023310712_1_1_1.jpg?ts=1689335545577",
    "price": "₹ 3,290.00",
    "details": "Collared knit polo shirt with front fastening. Short sleeves. Contrast ribbed trims."
  },
  {
    "product_name": "TEXTURED GEOMETRIC PRINT KNIT POLO SHIRT",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/3597/312/401/2/w/448/3597312401_1_1_1.jpg?ts=1690535019392",
    "price": "₹ 3,990.00",
    "details": "Knit collared polo shirt with an open texture. Front button fastening. Short sleeves. Ribbed trims."
  },
  {
    "product_name": "TEXTURED RIBBED KNIT POLO SHIRT",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/3284/308/527/2/w/448/3284308527_1_1_1.jpg?ts=1689761630190",
    "price": "₹ 3,290.00",
    "details": "Collared knit loose-fitting polo shirt in spun cotton fabric. Button-up front. Short sleeves. Ribbed trims."
  },
  {
    "product_name": "KNIT POLO SHIRT WITH ABSTRACT PRINT",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/0077/301/826/2/w/448/0077301826_1_1_1.jpg?ts=1689782772111",
    "price": "₹ 3,290.00",
    "details": "Collared knit polo shirt featuring a button-up front and short sleeves."
  },
  {
    "product_name": "ACID WASH DENIM POLO SHIRT",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/7627/314/800/2/w/448/7627314800_1_1_1.jpg?ts=1687255965332",
    "price": "₹ 3,290.00",
    "details": "Oversize collared polo shirt featuring front button fastening concealed by a placket, short sleeves and faded effect."
  },
  {
    "product_name": "POLO SHIRT WITH CONTRASTING TRIMS",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/0526/301/330/2/w/448/0526301330_1_1_1.jpg?ts=1689256343720",
    "price": "₹ 3,290.00",
    "details": "Collared polo shirt with a button-up front. Long sleeves. Ribbed trims."
  },
  {
    "product_name": "TEXTURED POLO SHIRT WITH CONTRAST DETAILS",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/1198/318/712/2/w/448/1198318712_1_1_1.jpg?ts=1692174477730",
    "price": "₹ 3,290.00",
    "details": "Collared polo shirt with a button-up front. Short sleeves. Ribbed trims."
  },
  {
    "product_name": "STRIPED TEXTURED POLO SHIRT",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/4087/323/712/2/w/448/4087323712_1_1_1.jpg?ts=1690962645802",
    "price": "₹ 2,990.00",
    "details": "Collared polo shirt with a front opening. Short sleeves. Ribbed hem."
  },
  {
    "product_name": "PHOTO PRINT SHIRT",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/5881/524/250/2/w/448/5881524250_1_1_1.jpg?ts=1692188872047",
    "price": "₹ 3,290.00",
    "details": "Relaxed-fit shirt with a collar and long sleeves with buttoned cuffs. Contrast print on the front. Button-up front."
  },
  {
    "product_name": "CONTRAST PRINT SHIRT",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/5843/524/800/2/w/448/5843524800_1_1_1.jpg?ts=1692188872499",
    "price": "₹ 3,290.00",
    "details": "Relaxed-fit collared shirt with long sleeves and buttoned cuffs. Button-up front."
  },
  {
    "product_name": "DENIM SHIRT",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/1820/320/800/2/w/448/1820320800_1_1_1.jpg?ts=1689760696023",
    "price": "₹ 2,990.00",
    "details": "Collared relaxed fit shirt made of denim. Long sleeves with buttoned cuffs. Chest patch pockets. Faded effect. Button-up front."
  },
  {
    "product_name": "CREASED-EFFECT SHIRT",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/5592/537/707/2/w/448/5592537707_1_1_1.jpg?ts=1692804019111",
    "price": "₹ 3,290.00",
    "details": "Relaxed fit shirt made of semi-sheer fabric. Camp collar and short sleeves. Split hem. Button-up front."
  },
  {
    "product_name": "FLORAL PRINT SHIRT",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/5670/112/800/2/w/448/5670112800_1_1_1.jpg?ts=1688652386451",
    "price": "₹ 3,290.00",
    "details": "Regular-fit shirt made of satin fabric. Spread collar and short sleeves. Side vents at the hem. Button-up front."
  },
  {
    "product_name": "LEAF PRINT SHIRT",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/5671/119/800/2/w/448/5671119800_1_1_1.jpg?ts=1688652390526",
    "price": "₹ 3,290.00",
    "details": "Regular fit shirt in a satiny fabric. Camp collar and short sleeves. Split hem. Button-up front."
  },
  {
    "product_name": "FLORAL PRINT SHIRT",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/5884/485/250/2/w/448/5884485250_1_1_1.jpg?ts=1689938679796",
    "price": "₹ 3,290.00",
    "details": "Relaxed-fit shirt. Lapel collar and short sleeves. Button-up front."
  },
  {
    "product_name": "FLORAL PRINT STRETCH SHIRT",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/7545/533/020/2/w/448/7545533020_1_1_1.jpg?ts=1691142187631",
    "price": "₹ 3,290.00",
    "details": "Regular fit shirt made of highly stretchy crease-resistant fabric. Camp collar and short sleeves. Split hem. Button-up front."
  },
  {
    "product_name": "BANDANA PRINT SHIRT",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/5591/579/400/2/w/448/5591579400_1_1_1.jpg?ts=1691507790178",
    "price": "₹ 3,290.00",
    "details": "Relaxed fit shirt in cotton fabric. Camp collar and short sleeves. Split hem. Button-up front."
  },
  {
    "product_name": "PALM TREE PRINT SHIRT",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/5993/597/251/2/w/448/5993597251_1_1_1.jpg?ts=1691142188704",
    "price": "₹ 3,290.00",
    "details": "Relaxed fit shirt. Camp collar and short sleeves. Button-up front."
  },
  {
    "product_name": "ABSTRACT PRINT TEXTURED SHIRT",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/6085/377/330/2/w/448/6085377330_1_1_1.jpg?ts=1691483158225",
    "price": "₹ 3,290.00",
    "details": "Relaxed fit short sleeve shirt with a camp collar. Chest patch pocket. Button-up front."
  },
  {
    "product_name": "LEAF PRINT SHIRT",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/5916/400/711/2/w/448/5916400711_1_1_1.jpg?ts=1691680455371",
    "price": "₹ 3,290.00",
    "details": "Relaxed fit shirt with a camp collar and short sleeves. Split hem and a button-up front."
  },
  {
    "product_name": "VISCOSE - LINEN SHIRT",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/4570/410/800/2/w/448/4570410800_1_1_1.jpg?ts=1688116611763",
    "price": "₹ 3,290.00",
    "details": "Relaxed fit shirt made of a viscose and cotton blend. Featuring a camp collar, short sleeves, a split hem and a button-up front."
  },
  {
    "product_name": "ABSTRACT PRINT SHIRT",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/5738/400/500/2/w/448/5738400500_1_1_1.jpg?ts=1690360445535",
    "price": "₹ 3,290.00",
    "details": "Relaxed fit shirt made of a viscose and linen blend. Camp collar and short sleeves. Chest flap pocket. Button-up front."
  },
  {
    "product_name": "VISCOSE - LINEN SHIRT",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/5679/101/400/2/w/448/5679101400_1_1_1.jpg?ts=1686233133881",
    "price": "₹ 3,290.00",
    "details": "Relaxed fit bowling shirt made of a linen and viscose blend. Featuring short sleeves and a button-up front."
  },
  {
    "product_name": "ABSTRACT PRINT SHIRT",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/7545/105/021/2/w/448/7545105021_1_1_1.jpg?ts=1691072087403",
    "price": "₹ 3,290.00",
    "details": "Relaxed fit shirt made of a modal blend fabric. Camp collar and short sleeves. Chest patch pocket. Button-up front."
  },
  {
    "product_name": "GEOMETRIC JACQUARD KNIT SHIRT",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/0794/304/620/2/w/448/0794304620_1_1_1.jpg?ts=1688556016083",
    "price": "₹ 3,290.00",
    "details": "Relaxed fit knit shirt. Camp collar and short sleeves. Button-up front."
  },
  {
    "product_name": "ABSTRACT PRINT SHIRT",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/7545/112/020/2/w/448/7545112020_1_1_1.jpg?ts=1692360154807",
    "price": "₹ 3,290.00",
    "details": "Relaxed fit shirt made of a viscose blend fabric. Camp collar and short sleeves. Chest patch pocket. Button-up front."
  },
  {
    "product_name": "GEOMETRIC PRINT SHIRT",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/7545/340/707/2/w/448/7545340707_1_1_1.jpg?ts=1689319989921",
    "price": "₹ 3,290.00",
    "details": "Relaxed fit shirt made of a viscose fabric. Camp collar and short sleeves. Button-up front."
  },
  {
    "product_name": "ABSTRACT PRINT SHIRT",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/7545/341/400/2/w/448/7545341400_1_1_1.jpg?ts=1685086116739",
    "price": "₹ 3,290.00",
    "details": "Relaxed fit shirt made of a viscose blend fabric. Camp collar. Short sleeves. Button-up front."
  },
  {
    "product_name": "SHIRT",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/3268/306/707/2/w/448/3268306707_1_1_1.jpg?ts=1692174425473",
    "price": "₹ 3,990.00",
    "details": "Relaxed fit shirt made of flowing fabric with a modal blend. Featuring a camp collar, long sleeves and buttoned cuffs.  Side vents at the hem. Button fastening at the front."
  },
  {
    "product_name": "VISCOSE/LINEN BLEND SHIRT",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/5912/161/802/2/w/448/5912161802_1_1_1.jpg?ts=1691680453953",
    "price": "₹ 3,290.00",
    "details": "Relaxed fit shirt in a linen and viscose blend. Featuring a lapel collar, long sleeves with buttoned cuffs and a button-up front."
  },
  {
    "product_name": "VISCOSE/LINEN BLEND SHIRT",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/1182/034/505/2/w/448/1182034505_1_1_1.jpg?ts=1688729074072",
    "price": "₹ 3,290.00",
    "details": "Relaxed-fit shirt made of a linen and viscose blend. Camp collar and short sleeves. Back patch pocket. Side vents at the hem. Button-up front."
  },
  {
    "product_name": "COTTON SHIRT",
    "image_url": "https://static.zara.net/photos///2023/V/0/2/p/7545/275/712/2/w/448/7545275712_1_1_1.jpg?ts=1678983432463",
    "price": "₹ 3,290.00",
    "details": "Relaxed fit collared shirt made of a cotton fabric. Short sleeves. Side vents at the hem. Button-up front."
  },
  {
    "product_name": "TEXTURED LINEN - COTTON SHIRT",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/7545/375/712/2/w/448/7545375712_1_1_1.jpg?ts=1690360447063",
    "price": "₹ 3,290.00",
    "details": "Relaxed fit shirt made of a linen and cotton blend. Featuring a lapel collar, short sleeves, a chest patch pocket, an asymmetric hem with side vents and a button-up front."
  },
  {
    "product_name": "FLORAL JACQUARD BERMUDA SHORTS",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/7484/306/710/2/w/448/7484306710_1_1_1.jpg?ts=1692021899343",
    "price": "₹ 3,990.00",
    "details": "Bermuda shorts with an elasticated waistband. Front pockets and back patch pocket detail."
  },
  {
    "product_name": "JACQUARD BERMUDA SHORTS",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/2795/312/529/2/w/448/2795312529_1_1_1.jpg?ts=1689148214471",
    "price": "₹ 2,990.00",
    "details": "Bermuda shorts with an adjustable elasticated waistband. Front pockets and back pocket detail."
  },
  {
    "product_name": "SHORT JACQUARD BERMUDA SHORTS",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/5862/304/251/2/w/448/5862304251_1_1_1.jpg?ts=1691079126778",
    "price": "₹ 3,290.00",
    "details": "Short Bermuda shorts made of a cotton blend fabric. Adjustable elasticated waistband with inner drawstring. Front hip pockets and rear patch pocket detail."
  },
  {
    "product_name": "GEOMETRIC PRINT JACQUARD BERMUDA SHORTS",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/6085/355/712/2/w/448/6085355712_1_1_1.jpg?ts=1691079127704",
    "price": "₹ 3,290.00",
    "details": "Short Bermuda shorts made of a cotton blend. Featuring an elasticated waistband with adjustable drawstring, front hip pockets and back welt pockets."
  },
  {
    "product_name": "ABSTRACT JACQUARD BERMUDA SHORTS",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/2675/306/527/2/w/448/2675306527_1_1_1.jpg?ts=1689756839360",
    "price": "₹ 3,990.00",
    "details": "Bermuda shorts made of compact fabric. Adjustable elasticated waistband with drawstring. Front pockets and rear pocket detail."
  },
  {
    "product_name": "GEOMETRIC PRINT JACQUARD BERMUDA SHORTS",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/7563/455/800/4/w/448/7563455800_1_1_1.jpg?ts=1687345452542",
    "price": "₹ 3,290.00",
    "details": "Relaxed-fit Bermuda shorts made of a viscose and cotton blend. An adjustable elasticated waistband with drawstring. Side pockets and back welt pockets."
  },
  {
    "product_name": "STRIPED TEXTURED BERMUDA SHORTS",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/2675/302/707/2/w/448/2675302707_1_1_1.jpg?ts=1689256345699",
    "price": "₹ 3,290.00",
    "details": "Short Bermuda shorts made of a cotton blend. Featuring an elasticated waistband with adjustable drawstring, side hip pockets and back pocket details."
  },
  {
    "product_name": "STRIPED CROCHET BERMUDA SHORTS",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/3992/378/064/2/w/448/3992378064_1_1_1.jpg?ts=1692779599359",
    "price": "₹ 3,990.00",
    "details": "Bermuda shorts made of an open textured fabric. Waistband with drawstrings, front pockets and back patch pocket detail."
  },
  {
    "product_name": "STRIPED BERMUDA SHORTS",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/5783/037/401/2/w/448/5783037401_6_1_1.jpg?ts=1688642265006",
    "price": "₹ 2,990.00",
    "details": "Bermuda shorts made of a cotton blend fabric. Adjustable elasticated waistband with drawstring. Front pockets and rear pocket detail."
  },
  {
    "product_name": "COMFORT BERMUDA SHORTS",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/0706/450/251/2/w/448/0706450251_1_1_1.jpg?ts=1689069380172",
    "price": "₹ 2,590.00",
    "details": "Bermuda shorts featuring an adjustable elasticated waistband with drawstrings. Front pleats. Front pockets and rear welt pockets. Turn-up hems."
  },
  {
    "product_name": "PREMIUM BERMUDA JOGGERS",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/0761/439/401/2/w/448/0761439401_1_1_1.jpg?ts=1692951282737",
    "price": "₹ 2,590.00",
    "details": "Bermuda shorts featuring an elastic waistband with adjustable drawstrings, front pockets and rear pocket detail."
  },
  {
    "product_name": "SOFT DENIM BERMUDA SHORTS",
    "image_url": "https://static.zara.net/photos///2023/V/0/2/p/1187/444/406/2/w/448/1187444406_1_1_1.jpg?ts=1679481016312",
    "price": "₹ 2,590.00",
    "details": "Slim fit Bermuda shorts. Adjustable elasticated waistband with drawstring. Five pockets. Faded effect. Turn-up hems."
  },
  {
    "product_name": "CREASED-EFFECT BERMUDA SHORTS",
    "image_url": "https://static.zara.net/photos///2023/V/0/2/p/6103/330/250/2/w/448/6103330250_1_1_1.jpg?ts=1683041313010",
    "price": "₹ 2,590.00",
    "details": "Bermuda shorts made of cotton. Adjustable elasticated waistband with drawstring. Side pockets and rear patch pocket detail."
  },
  {
    "product_name": "COTTON-LINEN BERMUDA SHORTS",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/4365/300/251/2/w/448/4365300251_1_1_1.jpg?ts=1688714833709",
    "price": "₹ 3,290.00",
    "details": "Relaxed fit Bermuda shorts made of a linen and cotton blend fabric. Adjustable elasticated waistband with drawstring. Side pockets and rear patch pocket detail. Irregular hem."
  },
  {
    "product_name": "SEERSUCKER BERMUDA SHORTS WITH CONTRAST TOPSTITCHING",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/3268/302/403/2/w/448/3268302403_1_1_1.jpg?ts=1691503022118",
    "price": "₹ 3,290.00",
    "details": "Relaxed-fit Bermuda shorts with an adjustable elasticated waistband with drawstrings. Front pockets and back patch pockets. Contrast topstitching all over the garment."
  },
  {
    "product_name": "VINTAGE DENIM BERMUDA SHORTS",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/0621/300/400/2/w/448/0621300400_1_1_1.jpg?ts=1688552338463",
    "price": "₹ 3,990.00",
    "details": "Relaxed fit Bermuda shorts. Five pockets. Vintage fade effect. Front zip fly and button fastening."
  },
  {
    "product_name": "100% LINEN BERMUDA SHORTS",
    "image_url": "https://static.zara.net/photos///2023/V/0/2/p/1538/403/052/2/w/448/1538403052_1_1_1.jpg?ts=1678189945192",
    "price": "₹ 2,990.00",
    "details": "Bermuda shorts made of linen fabric. Front pockets and back welt pockets. Front zip fly and top button fastening."
  },
  {
    "product_name": "TECHNICAL CARGO BERMUDA SHORTS",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/1538/440/403/2/w/448/1538440403_1_1_1.jpg?ts=1687966281880",
    "price": "₹ 2,990.00",
    "details": "Bermuda shorts made of a technical fabric. Adjustable elasticated waistband with drawstring. Front pockets and back welt pockets. Patch pockets with flaps on the legs. Side slits at the hem."
  },
  {
    "product_name": "COTTON CARGO BERMUDA SHORTS",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/2553/302/800/2/w/448/2553302800_1_1_1.jpg?ts=1689940496243",
    "price": "₹ 3,290.00",
    "details": "Relaxed fit Bermuda shorts made of cotton fabric. Elastic waist. Front pockets and rear patch pocket detail. Patch pocket with flap appliqué on the leg. Front zip fly and snap-button fastening."
  },
  {
    "product_name": "BASIC DENIM BERMUDA SHORTS",
    "image_url": "https://static.zara.net/photos///2023/V/0/2/p/1538/422/400/2/w/448/1538422400_1_1_1.jpg?ts=1676453815756",
    "price": "₹ 2,590.00",
    "details": "Straight fit Bermuda shorts with a five-pocket design and front zip fly and top button fastening."
  },
  {
    "product_name": "LINEN - COTTON BERMUDA SHORTS",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/8574/349/707/2/w/448/8574349707_1_1_1.jpg?ts=1687937159892",
    "price": "₹ 2,990.00",
    "details": "Carrot fit Bermuda shorts made of a linen and cotton blend fabric. Adjustable elasticated waistband and front pleat details. Side pockets and rear welt pocket detail."
  },
  {
    "product_name": "TEXTURED JOGGER BERMUDA SHORTS",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/0962/321/710/2/w/448/0962321710_1_1_1.jpg?ts=1689926675546",
    "price": "₹ 2,990.00",
    "details": "Relaxed-fit Bermuda shorts made of a textured fabric. Adjustable elasticated waistband with drawstring. Side pockets and back patch pocket detail."
  },
  {
    "product_name": "STAR PRINT BERMUDA SHORTS",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/5852/261/027/2/w/448/5852261027_1_1_1.jpg?ts=1687445757984",
    "price": "₹ 3,290.00",
    "details": "Relaxed fit Bermuda shorts made of satiny fabric. Elasticated adjustable drawstring waistband. Side pockets. Hem with contrast stripes."
  },
  {
    "product_name": "STRIPE PRINT BERMUDA SHORTS",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/6085/307/250/2/w/448/6085307250_1_1_1.jpg?ts=1689087950377",
    "price": "₹ 2,990.00",
    "details": "Relaxed-fit Bermuda shorts made of a satiny fabric. Adjustable elasticated waistband with an inner drawstring. Side pockets."
  },
  {
    "product_name": "CARPENTER BERMUDA SHORTS WITH POCKET",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/8727/325/400/2/w/448/8727325400_1_1_1.jpg?ts=1691072087552",
    "price": "₹ 2,990.00",
    "details": "Relaxed fit Bermuda shorts. Front pockets and rear patch pockets. Faded effect. Contrast topstitching all over the garment. Patch pocket appliqué and multipurpose strap on the leg. Front zip fly and button fastening.View more"
  },
  {
    "product_name": "LOOSE-FIT CARGO BERMUDA SHORTS",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/3175/407/407/2/w/448/3175407407_1_1_1.jpg?ts=1690361440953",
    "price": "₹ 3,990.00",
    "details": "Loose fit Bermuda shorts. Five-pocket design. Faded effect. Patch pockets with flaps on the legs. Front zip fly and top button fastening."
  },
  {
    "product_name": "ACID WASH CARGO BERMUDA SHORTS",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/7627/316/800/2/w/448/7627316800_1_1_1.jpg?ts=1687256307063",
    "price": "₹ 3,290.00",
    "details": "Relaxed fit Bermuda shorts. Front pockets and rear patch pockets. Patch pocket appliqués with flaps on the legs. Faded effect. Front zip fly and button fastening."
  },
  {
    "product_name": "DENIM UTILITY BERMUDA SHORTS",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/5575/376/445/2/w/448/5575376445_1_1_1.jpg?ts=1688716941073",
    "price": "₹ 4,990.00",
    "details": "Relaxed fit faded Bermuda shorts. Front pockets and rear patch pockets. Multipurpose pockets on the front and legs. Front zip fly and button fastening."
  },
  {
    "product_name": "DENIM CARGO BERMUDA SHORTS",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/8062/301/427/2/w/448/8062301427_1_1_1.jpg?ts=1685698726468",
    "price": "₹ 3,290.00",
    "details": "Faded relaxed fit Bermuda shorts. Front pockets and pockets at the rear. Patch pockets with flaps on the legs. Zip fly and top button fastening."
  },
  {
    "product_name": "100% LINEN BERMUDA SHORTS",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/4387/409/615/2/w/448/4387409615_1_1_1.jpg?ts=1689926675818",
    "price": "₹ 3,290.00",
    "details": "Relaxed fit Bermuda shorts made of linen. Elasticated waistband with front pleated details. Front pockets and rear welt pockets. Front zip fly and button fastening."
  },
  {
    "product_name": "100% LINEN BERMUDA SHORTS",
    "image_url": "https://static.zara.net/photos///2023/V/0/1/p/8574/445/800/2/w/448/8574445800_1_1_1.jpg?ts=1679051705328",
    "price": "₹ 3,290.00",
    "details": "Bermuda shorts made of linen fabric. Adjustable elasticated waistband with interior drawstring. Front pockets and rear welt pockets."
  },
  {
    "product_name": "100% LINEN BERMUDA SHORTS",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/5802/262/620/4/w/448/5802262620_1_1_1.jpg?ts=1687345178543",
    "price": "₹ 3,290.00",
    "details": "Relaxed-fit Bermuda shorts made of linen fabric. Adjustable elasticated waist with drawstring. Front pockets and back patch pockets."
  },
  {
    "product_name": "100% LINEN BERMUDA SHORTS",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/8574/364/420/5/w/448/8574364420_1_1_1.jpg?ts=1688640292067",
    "price": "₹ 3,290.00",
    "details": "Short Bermuda shorts made of linen. Elasticated waistband with inner drawstring. Side pockets."
  },
  {
    "product_name": "COMFORT BERMUDA SHORTS",
    "image_url": "https://static.zara.net/photos///2023/V/0/2/p/2553/401/710/2/w/0/2553401710_1_1_1.jpg?ts=1683201823667",
    "price": "₹ 2,990.00",
    "details": "Bermuda shorts featuring an adjustable elastic waistband with interior drawstring. Side pockets and rear pocket detail."
  },
  {
    "product_name": "TEXTURED OXFORD BERMUDA SHORTS",
    "image_url": "https://static.zara.net/photos///2023/V/0/2/p/7147/402/250/2/w/448/7147402250_1_1_1.jpg?ts=1677661750822",
    "price": "₹ 2,890.00",
    "details": "Bermuda shorts made of a linen and cotton blend. Featuring front pockets and rear welt pockets. Zip fly and top button fastening."
  },
  {
    "product_name": "VISCOSE - LINEN BERMUDA SHORTS",
    "image_url": "https://static.zara.net/photos///2023/V/0/2/p/4432/420/104/2/w/448/4432420104_1_1_1.jpg?ts=1678442204063",
    "price": "₹ 2,890.00",
    "details": "Bermuda shorts in a viscose and linen blend fabric. Elasticated adjustable waistband with drawstrings. Front pockets and rear patch pocket."
  },
  {
    "product_name": "FADED TEXTURED COTTON BERMUDA SHORTS",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/6917/312/643/2/w/448/6917312643_1_1_1.jpg?ts=1691137642911",
    "price": "₹ 3,290.00",
    "details": "Relaxed fit Bermuda shorts made of textured cotton fabric. Adjustable elasticated waistband with drawstring. Side pockets and a rear pocket detail. Hems with matching embroidered slogan detail. Faded effect."
  },
  {
    "product_name": "CARGO BERMUDA SHORTS",
    "image_url": "https://static.zara.net/photos///2023/V/0/2/p/9252/450/707/2/w/448/9252450707_1_1_1.jpg?ts=1680101319970",
    "price": "₹ 3,290.00",
    "details": "Bermuda shorts with an elasticated waistband. Front pockets and rear flap pockets. Patch pockets with flaps on the leg. Front zip fly and button fastening."
  },
  {
    "product_name": "BASIC COLOURED BERMUDAS",
    "image_url": "https://static.zara.net/photos///2023/V/0/2/p/0108/425/250/2/w/448/0108425250_1_1_1.jpg?ts=1677663417153",
    "price": "₹ 2,590.00",
    "details": "Faded Bermuda shorts made of cotton. Five pockets. Zip fly and top button fastening."
  },
  {
    "product_name": "RUSTIC COTTON BERMUDA SHORTS",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/7147/300/506/2/w/448/7147300506_1_1_1.jpg?ts=1686727298516",
    "price": "₹ 2,990.00",
    "details": "Bermuda shorts made of cotton. Adjustable elasticated waistband with drawstring. Front pockets and rear patch pocket detail."
  },
  {
    "product_name": "TEXTURED BERMUDA SHORTS",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/4840/402/409/2/w/448/4840402409_1_1_1.jpg?ts=1688658455311",
    "price": "₹ 3,290.00",
    "details": "Bermuda shorts with an adjustable elasticated waistband. Front pockets and back welt pocket detail."
  },
  {
    "product_name": "VISCOSE - LINEN BERMUDA SHORTS",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/5943/410/982/3/w/448/5943410982_1_1_1.jpg?ts=1688731678534",
    "price": "₹ 3,290.00",
    "details": "Bermuda shorts made of a viscose and linen blend fabric. Adjustable elasticated waistband with drawstring. Front pockets and rear pocket detail."
  },
  {
    "product_name": "COTTON-LINEN BERMUDA SHORTS",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/6861/312/658/2/w/448/6861312658_1_1_1.jpg?ts=1689256347668",
    "price": "₹ 3,290.00",
    "details": "Relaxed fit Bermuda shorts made of a cotton and linen blend fabric. Adjustable elasticated waistband with drawstring. Side pockets and rear jetted pockets."
  },
  {
    "product_name": "TECHNICAL BERMUDA SHORTS",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/5520/360/629/2/w/448/5520360629_2_1_1.jpg?ts=1689756834756",
    "price": "₹ 2,990.00",
    "details": "Relaxed fit Bermuda shorts made of lightweight fabric. Adjustable elastic waistband. Side pockets and rear patch pocket detail with flap."
  },
  {
    "product_name": "TEXTURED BERMUDA SHORTS WITH LABEL",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/4087/543/403/2/w/448/4087543403_1_1_1.jpg?ts=1689156203921",
    "price": "₹ 2,590.00",
    "details": "Bermuda shorts with an elasticated waistband with adjustable drawstrings. Front pockets and rear patch pocket detail. Contrast label appliqué on the hem."
  },
  {
    "product_name": "BASIC TRAINING SHORTS",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/1943/300/712/613/w/448/1943300712_1_1_1.jpg?ts=1692610027401",
    "price": "₹ 2,290.00",
    "details": "Workout shorts made of lightweight stretchy technical fabric.- Elasticated waistband with drawstrings.- Side pockets.- Security pocket on the back with a thermo-sealed zip closure.- Lining.- Inner leg length: 18 cm. / 7.0″- Side slits at the hem.- Logo print on the leg.Zara Athleticz.View more"
  },
  {
    "product_name": "2-IN-1 TRAINING SHORTS",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/1943/317/420/2/w/0/1943317420_6_1_1.jpg?ts=1690904701660",
    "price": "₹ 3,290.00",
    "details": "Training shorts made of lightweight, stretchy technical fabric. Inner mesh. Designed to practise any sport.- Elasticated waistband with inner drawstrings.- Front pockets.- Reflective effect seams.- Inner leg length: 12 cm. / 4.7″- Side slits at the hem.- Printed logo detail.Zara Athleticz.View more"
  },
  {
    "product_name": "TRAINING SHORTS",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/0765/304/641/612/w/0/0765304641_1_1_1.jpg?ts=1688385051022",
    "price": "₹ 2,990.00",
    "details": "Workout shorts made of lightweight stretchy technical fabric.- Elastic waistband with drawstrings.- Security pocket on the back with a thermo-sealed zip closure.- Lining.- Inner leg length: 7 cm. / 2.7″- Side slits at the hem.- Logo print on the leg.Zara Athleticz.View more"
  },
  {
    "product_name": "GEOMETRIC KNIT JACQUARD BERMUDA SHORTS",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/1023/311/712/2/w/448/1023311712_1_1_1.jpg?ts=1689335545689",
    "price": "₹ 3,290.00",
    "details": "Knit Bermuda shorts. Elasticated waistband with adjustable drawstring. Front pockets and back pocket detail. Contrast ribbed trims."
  },
  {
    "product_name": "TIE-DYE DENIM BERMUDA SHORTS",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/0840/301/251/2/w/448/0840301251_1_1_1.jpg?ts=1689335829894",
    "price": "₹ 3,290.00",
    "details": "Short Bermuda shorts with an adjustable elasticated waistband. Front pockets and back welt pocket detail."
  },
  {
    "product_name": "PATCHWORK JACQUARD KNIT BERMUDA SHORTS",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/2893/302/620/2/w/448/2893302620_1_1_1.jpg?ts=1689087953317",
    "price": "₹ 3,290.00",
    "details": "Knit Bermuda shorts featuring an adjustable elasticated waistband with drawstrings. Side pockets."
  },
  {
    "product_name": "GEOMETRIC KNIT JACQUARD BERMUDA SHORTS",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/0794/305/620/2/w/448/0794305620_1_1_1.jpg?ts=1688556031142",
    "price": "₹ 2,990.00",
    "details": "Relaxed-fit Bermuda shorts. Elastic waistband and front pockets."
  },
  {
    "product_name": "JOGGER BERMUDA SHORTS WITH EMBROIDERY",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/0761/307/800/2/w/448/0761307800_1_1_1.jpg?ts=1687880634928",
    "price": "₹ 2,990.00",
    "details": "Bermuda shorts with an adjustable elasticated waistband with drawstring. Side pockets and back pocket detail. Contrast embroidery on the leg.Zara Athleticz.View more"
  },
  {
    "product_name": "WIDE FIT DENIM BERMUDA SHORTS",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/3175/310/620/2/w/448/3175310620_1_1_1.jpg?ts=1691486096022",
    "price": "₹ 4,990.00",
    "details": "Wide fit Bermuda shorts. Waist with belt detail in the same fabric. Five pockets. Faded effect. Button fastening on the front."
  },
  {
    "product_name": "RIPPED DENIM BERMUDA SHORTS",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/1538/332/800/2/w/448/1538332800_1_1_1.jpg?ts=1689760695690",
    "price": "₹ 3,290.00",
    "details": "Relaxed-fit Bermuda shorts. Five-pocket design. Faded and ripped effect on the legs. Uneven hems and front button fly fastening."
  },
  {
    "product_name": "RIPPED DENIM BERMUDA SHORTS",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/5585/301/406/2/w/448/5585301406_1_1_1.jpg?ts=1687445760754",
    "price": "₹ 3,290.00",
    "details": "Faded slim fit Bermuda shorts featuring a five-pocket design and rips with inner patches on the legs. Irregular hems. Front zip fly and top button fastening."
  },
  {
    "product_name": "RELAXED FIT DENIM BERMUDA SHORTS",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/8062/304/800/2/w/448/8062304800_1_1_1.jpg?ts=1689760701177",
    "price": "₹ 3,290.00",
    "details": "Relaxed-fit Bermuda shorts. Five-pocket design. Distressed effect. Uneven hems and front button fly fastening."
  },
  {
    "product_name": "CROPPED DENIM BERMUDA SHORTS",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/4365/444/406/2/w/448/4365444406_1_1_1.jpg?ts=1687962677104",
    "price": "₹ 2,990.00",
    "details": "Faded regular-fit Bermuda shorts with rips. Featuring a five-pocket design. Side vents at the hems. Cropped length. Front zip fly and top button fastening."
  },
  {
    "product_name": "FLOWING BERMUDA SHORTS WITH PLEATS",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/5632/155/800/2/w/448/5632155800_1_1_1.jpg?ts=1689763219515",
    "price": "₹ 3,290.00",
    "details": "Relaxed fit Bermuda shorts made of a lyocell blend fabric. Elastic waist with front pleated details. Side pockets and rear welt pockets."
  },
  {
    "product_name": "MODAL BLEND BERMUDA SHORTS",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/0775/757/800/2/w/448/0775757800_1_1_1.jpg?ts=1691507788456",
    "price": "₹ 3,290.00",
    "details": "Relaxed fit Bermuda shorts made of a modal and cotton blend fabric. Adjustable elasticated waistband with drawstring. Side pockets and rear pocket detail."
  },
  {
    "product_name": "BERMUDA SHORTS WITH CONTRAST EMBROIDERY",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/3992/312/251/2/w/448/3992312251_1_1_1.jpg?ts=1691486095772",
    "price": "₹ 3,290.00",
    "details": "Bermuda shorts featuring an adjustable elasticated waistband with drawstring. Front pockets and rear patch pocket detail. Hems with contrast embroidery."
  },
  {
    "product_name": "COMFORT BERMUDA SHORTS",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/5698/540/800/2/w/448/5698540800_1_1_1.jpg?ts=1686729808285",
    "price": "₹ 3,290.00",
    "details": "Bermuda shorts featuring an elastic drawstring waistband, front pockets and rear welt pockets."
  },
  {
    "product_name": "TIE-DYE PRINT BERMUDA SHORTS",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/0962/340/505/2/w/448/0962340505_1_1_1.jpg?ts=1692020567397",
    "price": "₹ 2,990.00",
    "details": "Bermuda shorts with an adjustable drawstring on the waistband. Front pockets and back welt pocket detail. Irregular hem."
  },
  {
    "product_name": "WIDE FIT JOGGER BERMUDA SHORTS",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/0761/388/706/2/w/448/0761388706_1_1_1.jpg?ts=1691503020985",
    "price": "₹ 2,990.00",
    "details": "Wide fit Bermuda shorts. Adjustable elasticated waistband with drawstring. Side pockets and rear patch pocket."
  },
  {
    "product_name": "TEXTURED JACQUARD BERMUDA SHORTS",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/4087/324/527/2/w/448/4087324527_1_1_1.jpg?ts=1691571264183",
    "price": "₹ 2,990.00",
    "details": "Bermuda shorts featuring an adjustable elasticated waistband with drawstring. Side pockets and rear patch pocket detail."
  },
  {
    "product_name": "MATCHING CROCHET BERMUDA SHORTS",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/4087/315/505/2/w/448/4087315505_1_1_1.jpg?ts=1688546807930",
    "price": "₹ 2,990.00",
    "details": "Bermuda shorts with an adjustable drawstring waistband. Front pockets and rear pocket detail in matching crochet."
  },
  {
    "product_name": "TECHNICAL BERMUDA SHORTS",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/3918/389/522/2/w/448/3918389522_1_1_1.jpg?ts=1687359227532",
    "price": "₹ 3,990.00",
    "details": "Bermuda shorts made of technical fabric. Elasticated waistband with adjustable inner drawstring. Side pockets and back welt pockets."
  },
  {
    "product_name": "BERMUDA SHORTS WITH ZIPPED POCKETS",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/5372/303/712/2/w/448/5372303712_1_1_1.jpg?ts=1688555877711",
    "price": "₹ 2,990.00",
    "details": "Bermuda shorts with an elasticated waistband with adjustable drawstrings. Front pockets and zip fastening on the leg."
  },
  {
    "product_name": "FADED JOGGING BERMUDA SHORTS",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/0962/329/044/2/w/448/0962329044_1_1_1.jpg?ts=1688714835232",
    "price": "₹ 2,990.00",
    "details": "Faded relaxed fit Bermuda shorts. Adjustable elasticated waistband. Side pockets and back patch pocket. Uneven hem."
  },
  {
    "product_name": "TEXTURED CHINO BERMUDA SHORTS",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/9252/355/445/2/w/448/9252355445_1_1_1.jpg?ts=1688119946348",
    "price": "₹ 2,990.00",
    "details": "Regular-fit Bermuda shorts made of stretchy cotton fabric. Front pockets and back welt pocket details. Front zip fly and button fastening."
  },
  {
    "product_name": "COTTON CHINO BERMUDA SHORTS",
    "image_url": "https://static.zara.net/photos///2023/V/0/2/p/8727/306/805/2/w/448/8727306805_1_1_1.jpg?ts=1679039598845",
    "price": "₹ 2,990.00",
    "details": "Regular fit Bermuda shorts made of a cotton fabric. Front pockets and rear welt pockets. Front zip fly and button fastening."
  },
  {
    "product_name": "JOGGING BERMUDA SHORTS WITH ELASTIC WAISTBAND",
    "image_url": "https://static.zara.net/photos///2023/V/0/2/p/9252/304/500/2/w/448/9252304500_1_1_1.jpg?ts=1677055286907",
    "price": "₹ 2,590.00",
    "details": "Bermuda shorts made of textured cotton. Adjustable waist with drawstring. Front pockets and rear welt pockets."
  },
  {
    "product_name": "LOOSE FIT DENIM BERMUDA SHORTS",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/4365/400/430/2/w/448/4365400430_1_1_1.jpg?ts=1687947016312",
    "price": "₹ 2,990.00",
    "details": "Loose fit Bermuda shorts with a five pocket design, faded effect and zip fly and top button fastening."
  },
  {
    "product_name": "FLOWING BERMUDA SHORTS WITH PLEATS",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/0775/328/523/2/w/448/0775328523_1_1_1.jpg?ts=1691507788099",
    "price": "₹ 3,290.00",
    "details": "Relaxed-fit Bermuda shorts. Waist with pleats on the front. Front pockets and back welt pocket detail. Front zip fly and button fastening."
  },
  {
    "product_name": "FAUX LEATHER BERMUDA SHORTS",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/5070/306/800/2/w/448/5070306800_1_1_1.jpg?ts=1688652391705",
    "price": "₹ 3,290.00",
    "details": "Relaxed fit Bermuda shorts made of a faux leather fabric. Front pleated detail at the waist. Front pockets and welt pockets at the back. Zip fly and top button fastening."
  },
  {
    "product_name": "CARGO BERMUDA SHORTS WITH CONTRAST TOPSTITCHING",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/5780/162/800/2/w/448/5780162800_1_1_1.jpg?ts=1688720591093",
    "price": "₹ 3,290.00",
    "details": "Relaxed fit Bermuda shorts. Elasticated waistband. Front pockets and rear welt pockets. Patch pockets with flaps on the legs. Contrast topstitching all over the garment. Front zip fly and button fastening."
  },
  {
    "product_name": "STRIPED POPLIN BERMUDA SHORTS",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/3992/336/403/2/w/448/3992336403_1_1_1.jpg?ts=1691415875014",
    "price": "₹ 3,290.00",
    "details": "Cropped-length Bermuda shorts. Adjustable elasticated waistband with drawstring. Side pockets and back welt pocket detail. Split hems."
  },
  {
    "product_name": "CARGO BERMUDA SHORTS",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/5862/308/505/2/w/448/5862308505_1_1_1.jpg?ts=1691146185319",
    "price": "₹ 3,990.00",
    "details": "High-waist Bermuda shorts with side pockets and back welt pockets. Patch pockets with flaps on the legs. Front zip fly and top button fastening."
  },
  {
    "product_name": "BELTED CARGO SHORTS",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/2675/310/715/2/w/448/2675310715_1_1_1.jpg?ts=1691418601442",
    "price": "₹ 3,990.00",
    "details": "Shorts with a contrast belt. Patch pockets with flaps on the front and back. Split hems. Front zip and button fastening."
  },
  {
    "product_name": "TEXTURED CARGO BERMUDA SHORTS",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/2675/312/500/2/w/448/2675312500_1_1_1.jpg?ts=1691418602034",
    "price": "₹ 5,590.00",
    "details": "Bermuda shorts made of textured fabric. Buttoned welt pockets at the back and patch pockets with flaps on the legs. Frayed trims. Front zip and button fastening."
  },
  {
    "product_name": "CARGO JOGGER BERMUDA SHORTS",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/0722/317/401/2/w/448/0722317401_1_1_1.jpg?ts=1684858431514",
    "price": "₹ 2,990.00",
    "details": "Bermuda shorts featuring an adjustable elasticated waistband with drawstring. Front pockets and zip pockets on the back. Zip pocket on the leg."
  },
  {
    "product_name": "SEERSUCKER BERMUDA SHORTS",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/7380/307/401/13/w/448/7380307401_1_1_1.jpg?ts=1691680253622",
    "price": "₹ 3,290.00",
    "details": "Regular-fit Bermuda shorts with an elasticated waistband with adjustable drawstring. Side pockets and back welt pockets."
  },
  {
    "product_name": "JOGGER WAIST BERMUDA SHORTS",
    "image_url": null,
    "price": "₹ 3,290.00",
    "details": "Regular-fit Bermuda shorts with an adjustable waistband with inner drawstring. Front welt pockets and a back patch pocket detail."
  },
  {
    "product_name": "BERMUDA SHORTS WITH CROCHET POCKET",
    "image_url": null,
    "price": "₹ 3,290.00",
    "details": "Bermuda shorts made of a cotton and viscose blend. Featuring an adjustable elasticated waistband with drawstring, side pockets and a rear contrast crochet patch pocket."
  },
  {
    "product_name": "LINEN - VISCOSE KNIT BERMUDA SHORTS",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/9598/303/731/2/w/0/9598303731_1_1_1.jpg?ts=1688478952617",
    "price": "₹ 3,290.00",
    "details": "Loose-fitting knit Bermuda shorts made of a spun linen and viscose blend. Adjustable elasticated drawstring waistband. Front pockets and rear patch pocket. Contrast topstitching detail."
  },
  {
    "product_name": "TECHNICAL BERMUDA SHORTS - LIMITED EDITION",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/4391/304/515/13/w/448/4391304515_1_1_1.jpg?ts=1689697345028",
    "price": "₹ 4,990.00",
    "details": "Relaxed fit Bermuda shorts made of technical satin fabric. Front pockets and rear patch pockets. Front zip and snap-button fastening."
  },
  {
    "product_name": "WIDE-FIT KNIT JOGGERS",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/5755/301/800/2/w/448/5755301800_1_1_1.jpg?ts=1692951284336",
    "price": "₹ 3,290.00",
    "details": "Knit trousers with an adjustable elasticated waistband. Side pockets and rear pocket detail."
  },
  {
    "product_name": "MOCK NECK SWEATER WITH POCKET",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/5755/300/400/2/w/448/5755300400_1_1_1.jpg?ts=1692951283708",
    "price": "₹ 3,290.00",
    "details": "Loose-fitting sweater with a mock neck and long sleeves. Chest patch pocket."
  },
  {
    "product_name": "TURTLENECK SWEATER",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/0304/300/401/2/w/448/0304300401_1_1_1.jpg?ts=1689256079735",
    "price": "₹ 3,290.00",
    "details": "Long sleeve turtleneck sweater with ribbed trims."
  },
  {
    "product_name": "RIBBED COTTON SWEATER",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/3284/307/818/2/w/448/3284307818_1_1_1.jpg?ts=1692951283878",
    "price": "₹ 2,990.00",
    "details": "Sweater made of spun cotton fabric. Round neck and long sleeves. Ribbed trims."
  },
  {
    "product_name": "TEXTURED CABLE-KNIT SWEATER",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/9598/307/515/2/w/448/9598307515_1_1_1.jpg?ts=1692959058315",
    "price": "₹ 3,990.00",
    "details": "Sweater made of a spun cotton blend. Featuring a round neckline, long sleeves and ribbed trims."
  },
  {
    "product_name": "TEXTURED CROCHET SWEATER",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/3597/301/800/2/w/448/3597301800_1_1_1.jpg?ts=1691136023112",
    "price": "₹ 3,990.00",
    "details": "Sweater made of open textured fabric. Round neck and long sleeves. Ribbed trims."
  },
  {
    "product_name": "STRIPED KNIT POLO SHIRT",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/3284/311/401/2/w/448/3284311401_1_1_1.jpg?ts=1692951286021",
    "price": "₹ 3,290.00",
    "details": "Knit collared polo shirt made of spun cotton fabric. Front button fastening, long sleeves and ribbed trims."
  },
  {
    "product_name": "HIGH NECK SWEATER WITH ZIP",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/2632/332/401/2/w/448/2632332401_1_1_1.jpg?ts=1692951284103",
    "price": "₹ 3,990.00",
    "details": "Sweater made of spun cotton. High neck with front zip fastening and long sleeves. Ribbed trims."
  },
  {
    "product_name": "CONTRAST KNIT POLO SHIRT",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/3003/306/700/2/w/448/3003306700_1_1_1.jpg?ts=1690360444523",
    "price": "₹ 3,290.00",
    "details": "Collared knit polo shirt. Contrast button fastening on the front. Short sleeves. Ribbed trims."
  },
  {
    "product_name": "CONTRAST KNIT T-SHIRT",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/3003/307/712/2/w/448/3003307712_1_1_1.jpg?ts=1690360446359",
    "price": "₹ 3,290.00",
    "details": "Knit T-shirt. Round neck and short sleeves. Contrast ribbed details."
  },
  {
    "product_name": "TEXTURED CONTRAST CARDIGAN",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/9598/305/712/2/w/0/9598305712_1_1_1.jpg?ts=1691753368278",
    "price": "₹ 4,990.00",
    "details": "Cardigan made of spun cotton fabric. V-neckline and short sleeves. Button-up front."
  },
  {
    "product_name": "TEXTURED CROCHET CARDIGAN",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/9598/322/800/2/w/448/9598322800_1_1_1.jpg?ts=1692695774188",
    "price": "₹ 3,990.00",
    "details": "Cardigan made of open textured fabric. V-neck and long sleeves. Ribbed trims. Button-up front."
  },
  {
    "product_name": "GEOMETRIC PRINT JACQUARD KNIT CARDIGAN",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/3166/313/712/2/w/448/3166313712_1_1_1.jpg?ts=1691753368752",
    "price": "₹ 4,990.00",
    "details": "Collared cardigan made of spun cotton blend fabric. Featuring long sleeves and a button-up front."
  },
  {
    "product_name": "KNIT POLO SHIRT WITH ZIP",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/2632/303/401/2/w/448/2632303401_1_1_1.jpg?ts=1692954332364",
    "price": "₹ 3,290.00",
    "details": "Knit polo shirt made of spun cotton fabric. Lapel collar with zip on the front. Long sleeves. Ribbed trims."
  },
  {
    "product_name": "KNIT POLO SHIRT WITH ZIP",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/6771/302/800/2/w/448/6771302800_1_1_1.jpg?ts=1690975861353",
    "price": "₹ 3,290.00",
    "details": "Knit polo shirt made of spun cotton fabric. Collar with zip fastening. Short sleeves. Ribbed trims."
  },
  {
    "product_name": "TEXTURED KNIT POLO SHIRT",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/9598/308/712/2/w/448/9598308712_1_1_1.jpg?ts=1691746949192",
    "price": "₹ 3,990.00",
    "details": "Loose-fitting knit polo shirt made of spun linen and cotton blend fabric. Featuring a collar and front button fastening. Long sleeves. Ribbed trims."
  },
  {
    "product_name": "TEXTURED OVERSIZE KNIT POLO SHIRT",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/5755/305/700/2/w/448/5755305700_1_1_1.jpg?ts=1691742491370",
    "price": "₹ 3,990.00",
    "details": "Collared oversize knit polo shirt with a button-up front. Short sleeves. Chest patch pocket. Ribbed trims."
  },
  {
    "product_name": "TEXTURED COTTON CARDIGAN",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/2621/303/620/2/w/448/2621303620_1_1_1.jpg?ts=1692951283903",
    "price": "₹ 4,990.00",
    "details": "Collared cardigan made of spun cotton. Long sleeves and ribbed trims. Button fastening on the front."
  },
  {
    "product_name": "STRIPED JACQUARD CARDIGAN",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/3991/321/500/2/w/448/3991321500_1_1_1.jpg?ts=1692776029794",
    "price": "₹ 4,990.00",
    "details": "V-neck cardigan made of a spun cotton blend. Featuring long sleeves and ribbed trims. Button-up front."
  },
  {
    "product_name": "TEXTURED CABLE-KNIT CARDIGAN",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/1023/308/712/2/w/448/1023308712_1_1_1.jpg?ts=1690358712349",
    "price": "₹ 5,590.00",
    "details": "Cardigan with a V-neck and long sleeves. Ribbed trims. Button-up front."
  },
  {
    "product_name": "TEXTURED CROCHET CARDIGAN",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/3597/319/806/2/w/448/3597319806_1_1_1.jpg?ts=1692181731668",
    "price": "₹ 4,990.00",
    "details": "Cardigan made of open textured fabric. Round neck and long sleeves. Ribbed trims. Button-up front."
  },
  {
    "product_name": "CHECK JACQUARD CARDIGAN",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/3597/318/712/2/w/448/3597318712_1_1_1.jpg?ts=1692181730846",
    "price": "₹ 4,990.00",
    "details": "V-neck cardigan made of a spun cotton and viscose blend. Long sleeves and ribbed trims. Button-up front."
  },
  {
    "product_name": "TEXTURED OVERSIZE VEST",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/5755/315/700/2/w/448/5755315700_1_1_1.jpg?ts=1691746950089",
    "price": "₹ 3,290.00",
    "details": "Oversize knit vest. Round neck. Ribbed trims."
  },
  {
    "product_name": "BUTTONED KNIT WAISTCOAT",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/5536/307/804/2/w/448/5536307804_1_1_1.jpg?ts=1689763217641",
    "price": "₹ 2,990.00",
    "details": "V-neck knit waistcoat with a button-up front."
  },
  {
    "product_name": "BOXY FIT KNIT VEST",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/5536/308/806/2/w/448/5536308806_1_1_1.jpg?ts=1692956951350",
    "price": "₹ 3,290.00",
    "details": "Boxy fit knit vest with a V-neck."
  },
  {
    "product_name": "OPEN KNIT TOP",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/0794/311/712/2/w/448/0794311712_1_1_1.jpg?ts=1689325172221",
    "price": "₹ 3,290.00",
    "details": "Long sleeve round neck top in a textured open knit fabric."
  },
  {
    "product_name": "TEXTURED MESH SWEATER",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/3597/321/500/2/w/448/3597321500_1_1_1.jpg?ts=1692359830055",
    "price": "₹ 2,990.00",
    "details": "Sweater in open textured fabric. Round neck and long sleeves."
  },
  {
    "product_name": "VISCOSE BLEND KNIT POLO SHIRT",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/6216/307/526/2/w/448/6216307526_1_1_1.jpg?ts=1692951291643",
    "price": "₹ 2,590.00",
    "details": "Collared knit polo shirt made of a spun viscose blend. Button-up front. Short sleeves. Ribbed trims."
  },
  {
    "product_name": "KNIT COTTON POLO SHIRT",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/3003/302/251/2/w/448/3003302251_1_1_1.jpg?ts=1687421510262",
    "price": "₹ 3,290.00",
    "details": "Knit polo shirt made of spun cotton fabric. Buttoned placket on the front. Short sleeves. Ribbed trims."
  },
  {
    "product_name": "RIBBED KNIT POLO SHIRT",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/1023/307/707/2/w/448/1023307707_1_1_1.jpg?ts=1687421510611",
    "price": "₹ 3,290.00",
    "details": "Knit polo shirt made of a spun cotton blend. Round neck and short sleeves."
  },
  {
    "product_name": "KNIT T-SHIRT WITH VISCOSE",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/2621/406/700/2/w/448/2621406700_1_1_1.jpg?ts=1688108945153",
    "price": "₹ 2,590.00",
    "details": "Knit T-shirt made of a spun viscose blend. Round neck and short sleeves. Ribbed trims."
  },
  {
    "product_name": "CROCHET KNIT SHIRT",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/4087/327/500/2/w/448/4087327500_1_1_1.jpg?ts=1692361198869",
    "price": "₹ 3,990.00",
    "details": "Relaxed fit shirt made of open textured fabric. Camp collar and short sleeves. Button-up front."
  },
  {
    "product_name": "PATCHWORK JACQUARD KNIT SHIRT",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/2893/301/500/2/w/448/2893301500_1_1_1.jpg?ts=1689169842684",
    "price": "₹ 3,990.00",
    "details": "Knit shirt with a camp collar and short sleeves. Ribbed trims. Button-up front."
  },
  {
    "product_name": "ABSTRACT PRINT TULLE SHIRT",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/4805/309/800/2/w/448/4805309800_1_1_1.jpg?ts=1689335038537",
    "price": "₹ 3,290.00",
    "details": "Relaxed fit shirt made of semi-sheer fabric. Camp collar and short sleeves. Button-up front."
  },
  {
    "product_name": "TEXTURED SHIRT WITH GEOMETRIC DESIGN",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/1326/300/712/2/w/448/1326300712_1_1_1.jpg?ts=1689782771975",
    "price": "₹ 3,290.00",
    "details": "Relaxed fit shirt. Camp collar and short sleeves. Button-up front."
  },
  {
    "product_name": "GEOMETRIC JACQUARD KNIT POLO SHIRT",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/1023/310/712/2/w/448/1023310712_1_1_1.jpg?ts=1689335545577",
    "price": "₹ 3,290.00",
    "details": "Collared knit polo shirt with front fastening. Short sleeves. Contrast ribbed trims."
  },
  {
    "product_name": "WAVE JACQUARD KNIT POLO SHIRT",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/3597/307/600/2/w/448/3597307600_1_1_1.jpg?ts=1689760700157",
    "price": "₹ 3,990.00",
    "details": "Collared knit polo shirt made of spun cotton blend fabric. Buttoned placket on the front. Short sleeves. Ribbed trims."
  },
  {
    "product_name": "KNIT POLO SHIRT WITH ABSTRACT PRINT",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/0077/301/826/2/w/448/0077301826_1_1_1.jpg?ts=1689782772111",
    "price": "₹ 3,290.00",
    "details": "Collared knit polo shirt featuring a button-up front and short sleeves."
  },
  {
    "product_name": "PURL KNIT POLO SHIRT",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/0304/303/401/2/w/448/0304303401_1_1_1.jpg?ts=1691680453358",
    "price": "₹ 2,990.00",
    "details": "Knit loose-fitting collared polo shirt made of spun cotton fabric. Button fastening on the front. Short sleeves. Ribbed trims."
  },
  {
    "product_name": "TIE-DYE RIPPED KNIT T-SHIRT",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/3166/308/251/2/w/448/3166308251_1_1_1.jpg?ts=1689335547635",
    "price": "₹ 3,290.00",
    "details": "Loose-fitting knit T-shirt with round neckline, short sleeves and ripped effect."
  },
  {
    "product_name": "PRINTED KNIT T-SHIRT",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/4805/307/800/2/w/448/4805307800_1_1_1.jpg?ts=1689756840518",
    "price": "₹ 2,290.00",
    "details": "Knit T-shirt made of spun cotton fabric. Round neck and short sleeves. Contrast prints all over the garment."
  },
  {
    "product_name": "PRINTED KNIT SWEATER",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/6674/300/802/2/w/448/6674300802_6_1_1.jpg?ts=1691057348561",
    "price": "₹ 4,990.00",
    "details": "Knit sweater with a round neck and long sleeves. Contrast print all over the garment."
  },
  {
    "product_name": "PRINTED KNIT T-SHIRT",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/4805/302/800/2/w/448/4805302800_1_1_1.jpg?ts=1688546808065",
    "price": "₹ 2,290.00",
    "details": "Knit T-shirt made of a spun cotton fabric. Round neck and short sleeves. Contrast graphic print on the front."
  },
  {
    "product_name": "PRINTED KNIT T-SHIRT",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/4374/300/801/2/w/448/4374300801_1_1_1.jpg?ts=1686127144067",
    "price": "₹ 2,290.00",
    "details": "Knit T-shirt made of spun cotton fabric. Round neck and short sleeves. Contrast prints on the front."
  },
  {
    "product_name": "HIGH NECK SWEATER WITH ZIP",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/3529/301/800/22/w/448/3529301800_1_1_1.jpg?ts=1688722379253",
    "price": "₹ 3,290.00",
    "details": "Sweater made of a spun viscose blend. High neck with front zip fastening. Short sleeves and ribbed trims."
  },
  {
    "product_name": "KNIT T-SHIRT",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/3284/305/707/2/w/448/3284305707_1_1_1.jpg?ts=1686900948346",
    "price": "₹ 3,290.00",
    "details": "Knit T-shirt made of a spun cotton blend. Round neck and short sleeves."
  },
  {
    "product_name": "MUSCLE FIT KNIT T-SHIRT",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/6674/302/822/2/w/448/6674302822_1_1_1.jpg?ts=1691150050171",
    "price": "₹ 2,990.00",
    "details": "Faded knit T-shirt with a round neckline and fitted short sleeves."
  },
  {
    "product_name": "HOODED CROCHET SWEATER",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/3284/312/615/2/w/448/3284312615_1_1_1.jpg?ts=1691138919316",
    "price": "₹ 4,990.00",
    "details": "Sweater made of an open textured fabric. Collar with an adjustable hood. Long sleeves. Ribbed trims."
  },
  {
    "product_name": "TEXTURED CROCHET KNIT POLO SHIRT",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/1023/320/710/2/w/448/1023320710_1_1_1.jpg?ts=1692020568028",
    "price": "₹ 3,990.00",
    "details": "Knit polo shirt with an open texture. Lapel collar with front opening. Short sleeves. Ribbed trims."
  },
  {
    "product_name": "TEXTURED CROCHET KNIT POLO SHIRT",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/3003/308/712/2/w/448/3003308712_1_1_1.jpg?ts=1692021898849",
    "price": "₹ 3,990.00",
    "details": "Knit collared polo shirt with an open texture. Front button fastening. Long sleeves. Ribbed trims."
  },
  {
    "product_name": "COLOUR BLOCK KNIT POLO SHIRT WITH PATCHES",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/3166/307/712/2/w/448/3166307712_1_1_1.jpg?ts=1690358713434",
    "price": "₹ 3,990.00",
    "details": "Collared knit polo shirt in an irregular spun fabric. Button-up front. Short sleeves. Ribbed trims."
  },
  {
    "product_name": "COTTON AND SILK KNIT POLO SHIRT",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/0077/302/800/2/w/448/0077302800_1_1_1.jpg?ts=1690965486271",
    "price": "₹ 4,990.00",
    "details": "Knit polo shirt in a spun cotton and silk blend fabric. Lapel collar with front button fastening and long sleeves. Ribbed trims."
  },
  {
    "product_name": "KNIT OVERSIZE T-SHIRT",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/5536/306/800/2/w/448/5536306800_1_1_1.jpg?ts=1689763224776",
    "price": "₹ 2,990.00",
    "details": "Knit oversize T-shirt. Round neck and short sleeves."
  },
  {
    "product_name": "LYOCELL - COTTON KNIT POLO SHIRT",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/5755/320/401/2/w/448/5755320401_1_1_1.jpg?ts=1690965178757",
    "price": "₹ 3,290.00",
    "details": "Collared knit polo shirt made of spun lyocell, cotton and silk blend fabric. Button-up front. Short sleeves. Ribbed trims."
  },
  {
    "product_name": "STRIPED KNIT POLO SHIRT",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/6216/310/401/2/w/448/6216310401_1_1_1.jpg?ts=1692288837746",
    "price": "₹ 2,590.00",
    "details": "Collared polo shirt made of a spun viscose blend. Button-up front. Short sleeves. Ribbed trims."
  },
  {
    "product_name": "KNIT COTTON T-SHIRT",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/4231/425/707/2/w/448/4231425707_1_1_1.jpg?ts=1687445757856",
    "price": "₹ 1,990.00",
    "details": "Knit T-shirt made of spun cotton fabric. Featuring a round neckline and short sleeves."
  },
  {
    "product_name": "KNIT POLO SHIRT WITH OPENING",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/4090/300/401/2/w/448/4090300401_1_1_1.jpg?ts=1689004256286",
    "price": "₹ 3,290.00",
    "details": "Knit polo shirt made of a spun viscose blend fabric. Featuring a collar with front opening. Long sleeves."
  },
  {
    "product_name": "KNIT COTTON POLO SHIRT",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/2632/302/832/2/w/489/2632302832_1_1_1.jpg?ts=1688573249947",
    "price": "₹ 3,290.00",
    "details": "Round collar knit polo shirt in spun cotton fabric. Button fastening on the front and short sleeves. Ribbed trims.Origins special collection."
  },
  {
    "product_name": "V-NECK SWEATER - LIMITED EDITION",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/2893/304/305/2/w/448/2893304305_1_1_1.jpg?ts=1689577315368",
    "price": "₹ 3,990.00",
    "details": "Sweater made of spun cotton fabric. V-neck and long sleeves. Ribbed trims."
  },
  {
    "product_name": "VEST WITH LEATHER POCKET - LIMITED EDITION",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/5755/308/515/2/w/448/5755308515_1_1_1.jpg?ts=1689327628522",
    "price": "₹ 4,990.00",
    "details": "Sleeveless vest made of a spun cotton blend fabric. V-neck. Contrast leather patch pocket on the chest. Ribbed trims."
  },
  {
    "product_name": "KNIT VEST - LIMITED EDITION",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/5755/307/652/2/w/448/5755307652_1_1_1.jpg?ts=1689327629310",
    "price": "₹ 3,990.00",
    "details": "V-neck knit vest made of a spun cotton blend. Ribbed trims."
  },
  {
    "product_name": "CARDIGAN WITH LEATHER POCKETS - LIMITED EDITION",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/5755/304/401/2/w/448/5755304401_1_1_1.jpg?ts=1689327630963",
    "price": "₹ 5,990.00",
    "details": "Cardigan made of spun cotton. V-neck and long sleeves. Contrast leather patch pockets. Ribbed trims."
  },
  {
    "product_name": "TEXTURED KNIT T-SHIRT",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/2621/420/251/2/w/448/2621420251_1_1_1.jpg?ts=1689847577985",
    "price": "₹ 2,890.00",
    "details": "Knit T-shirt made of spun cotton fabric. Round neck and short sleeves. Ribbed trims."
  },
  {
    "product_name": "HIGH NECK KNIT T-SHIRT",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/3471/301/800/2/w/448/3471301800_1_1_1.jpg?ts=1689256085179",
    "price": "₹ 2,590.00",
    "details": "Knit high neck T-shirt with short sleeves and ribbed trims."
  },
  {
    "product_name": "KNIT POLO SHIRT WITH ZIP",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/6462/312/526/2/w/448/6462312526_1_1_1.jpg?ts=1690358712431",
    "price": "₹ 2,990.00",
    "details": "Collared knit polo shirt. Front zip fastening. Short sleeves with contrast ribbed trims."
  },
  {
    "product_name": "LINEN - VISCOSE KNIT T-SHIRT",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/9598/301/731/2/w/448/9598301731_1_1_1.jpg?ts=1688478953288",
    "price": "₹ 3,290.00",
    "details": "Loose-fitting knit T-shirt made of a spun linen and viscose blend. Round neck and short sleeves. Chest patch pocket. Contrast topstitching detail."
  },
  {
    "product_name": "LINEN - VISCOSE KNIT SHIRT",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/9598/302/731/2/w/448/9598302731_1_1_1.jpg?ts=1688478954014",
    "price": "₹ 3,990.00",
    "details": "Loose-fitting knit shirt made of a spun linen and viscose blend. Camp collar and short sleeves. Chest patch pocket. Contrast topstitching detail. Button-up front."
  },
  {
    "product_name": "LINEN - VISCOSE KNIT T-SHIRT",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/9598/304/710/2/w/448/9598304710_1_1_1.jpg?ts=1688478953918",
    "price": "₹ 3,290.00",
    "details": "Knit oversize T-shirt made of a spun linen and viscose blend. Round neck and short sleeves. Ribbed trims."
  },
  {
    "product_name": "LINEN - COTTON CARDIGAN",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/1384/301/707/2/w/448/1384301707_1_1_1.jpg?ts=1689757159014",
    "price": "₹ 4,990.00",
    "details": "Loose-fitting cardigan made of a spun viscose and linen blend. Featuring a lapel collar, long sleeves and a button-up front."
  },
  {
    "product_name": "CROCHET KNIT T-SHIRT",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/3529/300/800/12/w/448/3529300800_1_1_1.jpg?ts=1688716638364",
    "price": "₹ 3,290.00",
    "details": "Short sleeve knit T-shirt made of an open-textured fabric. Round neck and ribbed trims."
  },
  {
    "product_name": "CROCHET KNIT SHIRT",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/4938/302/800/2/w/448/4938302800_1_1_1.jpg?ts=1687874180382",
    "price": "₹ 3,990.00",
    "details": "Relaxed fit shirt made of an open-textured fabric. Camp collar and short sleeves. Ribbed trims. Button-up front."
  },
  {
    "product_name": "GEOMETRIC JACQUARD KNIT SHIRT",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/0794/304/620/2/w/448/0794304620_1_1_1.jpg?ts=1688556016083",
    "price": "₹ 3,290.00",
    "details": "Relaxed fit knit shirt. Camp collar and short sleeves. Button-up front."
  },
  {
    "product_name": "GEOMETRIC KNIT JACQUARD BERMUDA SHORTS",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/0794/305/620/2/w/448/0794305620_1_1_1.jpg?ts=1688556031142",
    "price": "₹ 2,990.00",
    "details": "Relaxed-fit Bermuda shorts. Elastic waistband and front pockets."
  },
  {
    "product_name": "PATCHWORK JACQUARD KNIT BERMUDA SHORTS",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/2893/302/620/2/w/448/2893302620_1_1_1.jpg?ts=1689087953317",
    "price": "₹ 3,290.00",
    "details": "Knit Bermuda shorts featuring an adjustable elasticated waistband with drawstrings. Side pockets."
  },
  {
    "product_name": "CROCHET TANK TOP",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/2795/313/712/2/w/448/2795313712_1_1_1.jpg?ts=1692286398339",
    "price": "₹ 2,290.00",
    "details": "Round neck tank top in a textured open knit fabric."
  },
  {
    "product_name": "CROCHET VEST",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/6771/310/712/2/w/448/6771310712_1_1_1.jpg?ts=1686230369106",
    "price": "₹ 3,290.00",
    "details": "Sleeveless knit vest made of an open-textured fabric. Round neck. Ribbed trims."
  },
  {
    "product_name": "FLORAL JACQUARD VEST",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/6771/305/507/2/w/448/6771305507_1_1_1.jpg?ts=1688544258444",
    "price": "₹ 3,290.00",
    "details": "Knit vest. Sleeveless with a round neck. Ribbed trims."
  },
  {
    "product_name": "TEXTURED KNIT VEST",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/1023/301/485/2/w/448/1023301485_1_1_1.jpg?ts=1686566193086",
    "price": "₹ 3,290.00",
    "details": "Knit sleeveless vest made of a spun cotton blend fabric. V-neck. Ribbed trims. Button-up front."
  },
  {
    "product_name": "TEXTURED KNIT VEST",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/4331/300/403/2/w/448/4331300403_1_1_1.jpg?ts=1690532395621",
    "price": "₹ 3,290.00",
    "details": "Knit V-neck vest made of spun cotton fabric. Ribbed trims."
  },
  {
    "product_name": "KNIT TANK TOP",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/3597/302/505/2/w/448/3597302505_1_1_1.jpg?ts=1690358712968",
    "price": "₹ 2,990.00",
    "details": "Sleeveless knit top. Wide round neck. Contrast ribbed trims."
  },
  {
    "product_name": "GEOMETRIC JACQUARD KNIT VEST",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/1023/309/700/2/w/448/1023309700_1_1_1.jpg?ts=1690532919189",
    "price": "₹ 3,290.00",
    "details": "Vest made of a cotton blend. V-neck. Ribbed trims."
  },
  {
    "product_name": "TEXTURED GEOMETRIC PRINT KNIT POLO SHIRT",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/3597/312/401/2/w/448/3597312401_1_1_1.jpg?ts=1690535019392",
    "price": "₹ 3,990.00",
    "details": "Knit collared polo shirt with an open texture. Front button fastening. Short sleeves. Ribbed trims."
  },
  {
    "product_name": "HEAT-REACTIVE PRINT T-SHIRT",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/3992/321/802/2/w/448/3992321802_1_1_1.jpg?ts=1692951284701",
    "price": "₹ 2,290.00",
    "details": "Loose-fitting T-shirt with a round neck and short sleeves. Featuring a front print that changes colour when exposed to heat."
  },
  {
    "product_name": "T-SHIRT WITH SUNLIGHT-REACTIVE SLOGAN",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/3992/319/982/2/w/448/3992319982_1_1_1.jpg?ts=1692951283852",
    "price": "₹ 2,290.00",
    "details": "Loose-fitting T-shirt with a round neck and short sleeves. Featuring a front slogan print that appears when exposed to sunlight."
  },
  {
    "product_name": "SWEATSHIRT WITH PRINTED SLOGANS",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/0722/355/802/2/w/448/0722355802_1_1_1.jpg?ts=1692951281874",
    "price": "₹ 2,990.00",
    "details": "Loose-fitting sweatshirt with a round neck and short sleeves. Featuring a contrast slogan print all over the garment."
  },
  {
    "product_name": "CONTRAST PRINTED T-SHIRT",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/6224/298/251/2/w/448/6224298251_1_1_1.jpg?ts=1692951283692",
    "price": "₹ 2,290.00",
    "details": "T-shirt with a round neckline and short sleeves. Contrast prints on the front and back."
  },
  {
    "product_name": "SWEATSHIRT WITH EMBROIDERY AND SLOGANS",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/6224/297/251/2/w/448/6224297251_1_1_1.jpg?ts=1692960481437",
    "price": "₹ 2,990.00",
    "details": "Round neck sweatshirt with short sleeves. Contrast embroidery and prints on the front and back. Ribbed trims."
  },
  {
    "product_name": "FADED PRINTED T-SHIRT",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/6224/389/700/2/w/448/6224389700_6_1_1.jpg?ts=1692862301874",
    "price": "₹ 2,290.00",
    "details": "Round neck T-shirt with short sleeves. Contrast print on the front. Vintage faded effect.The garment is unique thanks to its special washing process. For this reason, it may differ in colour from that of the photo.View more"
  },
  {
    "product_name": "FADED COLOURED T-SHIRT",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/6462/353/802/2/w/448/6462353802_6_1_1.jpg?ts=1692862301679",
    "price": "₹ 2,290.00",
    "details": "Loose-fitting faded T-shirt with a round neckline and short sleeves.The garment is unique thanks to its special dyeing and washing process. For this reason, it may differ in colour from that of the photo.View more"
  },
  {
    "product_name": "TIE-DYE PRINTED T-SHIRT",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/1259/350/629/2/w/448/1259350629_6_1_1.jpg?ts=1692862302411",
    "price": "₹ 2,290.00",
    "details": "Loose-fitting T-shirt with a round neckline and short sleeves. Creased effect.The garment is unique thanks to its special printing process. For this reason, it may differ in colour from that of the photo.View more"
  },
  {
    "product_name": "ACID WASH PRINT T-SHIRT",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/6224/390/519/2/w/448/6224390519_6_1_1.jpg?ts=1692862509221",
    "price": "₹ 2,290.00",
    "details": "Acid wash T-shirt with round neck and short sleeves.The garment is unique thanks to its special washing process. For this reason, it may differ in colour from that of the photo.View more"
  },
  {
    "product_name": "SLOGAN PRINT T-SHIRT",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/6224/391/807/2/w/448/6224391807_6_1_1.jpg?ts=1692718467568",
    "price": "₹ 2,290.00",
    "details": "Faded T-shirt with a round neck and short sleeves. Contrast print on the front."
  },
  {
    "product_name": "BASIC SLIM FIT T-SHIRT",
    "image_url": "https://static.zara.net/photos///2023/V/0/1/p/5584/461/250/2/w/448/5584461250_2_1_1.jpg?ts=1675790634469",
    "price": "₹ 990.00",
    "details": "Stretch cotton T-shirt featuring a round neck and short sleeves."
  },
  {
    "product_name": "SLOGAN PRINT T-SHIRT",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/1165/315/643/2/w/448/1165315643_1_1_1.jpg?ts=1692780184438",
    "price": "₹ 2,290.00",
    "details": "Loose-fitting T-shirt with a round neck and short sleeves. Contrast front print."
  },
  {
    "product_name": "WATERCOLOUR PRINT T-SHIRT",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/0495/335/251/2/w/448/0495335251_1_1_1.jpg?ts=1692786484399",
    "price": "₹ 2,290.00",
    "details": "Oversize round neck T-shirt with short sleeves. Contrast prints on the front and back."
  },
  {
    "product_name": "PREMIUM SWEATSHIRT",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/0761/438/401/2/w/448/0761438401_1_1_1.jpg?ts=1692951284259",
    "price": "₹ 2,590.00",
    "details": "Loose-fitting sweatshirt with a wide ribbed neck and short sleeves."
  },
  {
    "product_name": "RIBBED SWEATSHIRT",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/5039/501/251/2/w/448/5039501251_1_1_1.jpg?ts=1692956951377",
    "price": "₹ 2,990.00",
    "details": "Short sleeve sweatshirt with a round neck."
  },
  {
    "product_name": "TEXTURED T-SHIRT",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/3992/324/707/2/w/448/3992324707_1_1_1.jpg?ts=1690536390808",
    "price": "₹ 2,590.00",
    "details": "Round neck T-shirt with short sleeves."
  },
  {
    "product_name": "T-SHIRT WITH EMBROIDERED SLOGAN",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/6224/385/802/2/w/448/6224385802_1_1_1.jpg?ts=1692617071638",
    "price": "₹ 2,590.00",
    "details": "Loose-fitting T-shirt with a round neckline and short sleeves. Embroidered contrast slogan on the front."
  },
  {
    "product_name": "T-SHIRT WITH EMBROIDERED SLOGAN",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/3992/331/250/2/w/448/3992331250_1_1_1.jpg?ts=1691483159578",
    "price": "₹ 2,590.00",
    "details": "Wide T-shirt with a round neck and short sleeves. Featuring front matching hemstitch and embroidered slogan. Asymmetric hem with side vents."
  },
  {
    "product_name": "T-SHIRT WITH CALLIGRAPHY PRINT",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/6224/396/251/2/w/448/6224396251_1_1_1.jpg?ts=1692951288217",
    "price": "₹ 2,290.00",
    "details": "Loose-fitting round neck T-shirt with short sleeves. Contrast prints on the front and back. Contrast topstitched trims."
  },
  {
    "product_name": "SWEATSHIRT WITH CONTRAST TRIMS",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/0761/309/251/2/w/448/0761309251_1_1_1.jpg?ts=1685432803292",
    "price": "₹ 3,290.00",
    "details": "Loose-fitting sweatshirt with a round neck and short sleeves. Contrast piping details on the front and back. Ribbed trims."
  },
  {
    "product_name": "CONTRAST PRINTED T-SHIRT",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/0977/305/800/2/w/448/0977305800_1_1_1.jpg?ts=1685027872389",
    "price": "₹ 2,290.00",
    "details": "Round neck T-shirt with short sleeves. Matching textured velvet print on the front."
  },
  {
    "product_name": "CONTRAST PRINTED T-SHIRT",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/6224/386/250/3/w/448/6224386250_1_1_1.jpg?ts=1693233017533",
    "price": "₹ 2,290.00",
    "details": "Loose-fitting T-shirt made of cotton fabric. Round neck and short sleeves. Contrast reflective-effect prints on the front and back.Zara Athleticz."
  },
  {
    "product_name": "HATTHANAN™ PRINT T-SHIRT",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/0761/314/250/2/w/448/0761314250_1_1_1.jpg?ts=1691052738825",
    "price": "₹ 2,290.00",
    "details": "T-shirt made of cotton. Round neck and short sleeves. Contrast Hatthanan™ graphic print on the back.Zara Athleticz."
  },
  {
    "product_name": "T-SHIRT WITH PRINTED LOGO",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/4274/303/250/2/w/448/4274303250_6_1_1.jpg?ts=1692692960490",
    "price": "₹ 2,290.00",
    "details": "T-shirt made of a cotton fabric. Round neck and short sleeves. Contrast prints on the front and back.Zara Athleticz."
  },
  {
    "product_name": "STRIPED T-SHIRT",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/4092/304/400/2/w/448/4092304400_1_1_1.jpg?ts=1692776632277",
    "price": "₹ 2,290.00",
    "details": "Loose-fitting T-shirt with round neckline and short sleeves."
  },
  {
    "product_name": "STRIPED T-SHIRT",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/6224/355/710/2/w/448/6224355710_1_1_1.jpg?ts=1689926901097",
    "price": "₹ 2,290.00",
    "details": "Round neck T-shirt with short sleeves. Contrast embroidery on the chest."
  },
  {
    "product_name": "CONTRAST PRINTED T-SHIRT",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/1165/326/805/2/w/448/1165326805_1_1_1.jpg?ts=1693218825953",
    "price": "₹ 2,290.00",
    "details": "Round neck T-shirt with short sleeves. Contrast prints on the front and back."
  },
  {
    "product_name": "TEXTURED OTTOMAN T-SHIRT",
    "image_url": "https://static.zara.net/photos///2023/V/0/2/p/4087/480/807/2/w/448/4087480807_1_1_1.jpg?ts=1683122237773",
    "price": "₹ 2,290.00",
    "details": "Loose-fitting short sleeve T-shirt with a round neckline."
  },
  {
    "product_name": "MUSCLE FIT KNIT T-SHIRT",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/6674/302/822/2/w/448/6674302822_1_1_1.jpg?ts=1691150050171",
    "price": "₹ 2,990.00",
    "details": "Faded knit T-shirt with a round neckline and fitted short sleeves."
  },
  {
    "product_name": "SWEATSHIRT WITH CONTRAST TOPSTITCHING",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/2795/317/712/2/w/448/2795317712_1_1_1.jpg?ts=1692780185502",
    "price": "₹ 2,990.00",
    "details": "Loose-fitting sweatshirt with a round neck and short sleeves. Featuring contrast topstitching all over the garment."
  },
  {
    "product_name": "RIPPED T-SHIRT",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/3665/310/300/2/w/448/3665310300_1_1_1.jpg?ts=1692181731057",
    "price": "₹ 2,290.00",
    "details": "Loose-fitting T-shirt with a round neck and short sleeves. Faded effect. Rip details all over the garment."
  },
  {
    "product_name": "RIPPED T-SHIRT",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/3992/314/804/2/w/448/3992314804_1_1_1.jpg?ts=1688718275113",
    "price": "₹ 2,290.00",
    "details": "Loose-fitting T-shirt with a round neck and short sleeves. Rip details all over the garment."
  },
  {
    "product_name": "TIE-DYE RIPPED KNIT T-SHIRT",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/3166/308/251/2/w/448/3166308251_1_1_1.jpg?ts=1689335547635",
    "price": "₹ 3,290.00",
    "details": "Loose-fitting knit T-shirt with round neckline, short sleeves and ripped effect."
  },
  {
    "product_name": "PRINTED RIPPED T-SHIRT",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/3992/302/802/2/w/448/3992302802_1_1_1.jpg?ts=1686729906677",
    "price": "₹ 2,290.00",
    "details": "T-shirt with a round neck and short sleeves. Contrast slogan print detail on the front and back. Ripped-effect details all over the garment."
  },
  {
    "product_name": "RIPPED T-SHIRT WITH SLOGAN",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/6224/392/826/2/w/448/6224392826_1_1_1.jpg?ts=1692776874359",
    "price": "₹ 2,290.00",
    "details": "Faded T-shirt with a round neck and short sleeves. Ripped effect. Contrast print on the back."
  },
  {
    "product_name": "RIB NECK T-SHIRT",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/4087/461/527/2/w/448/4087461527_1_1_1.jpg?ts=1692951282722",
    "price": "₹ 2,290.00",
    "details": "Loose-fitting T-shirt with a wide rib neckline and short sleeves."
  },
  {
    "product_name": "KNIT T-SHIRT WITH VISCOSE",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/2621/406/700/2/w/448/2621406700_1_1_1.jpg?ts=1688108945153",
    "price": "₹ 2,590.00",
    "details": "Knit T-shirt made of a spun viscose blend. Round neck and short sleeves. Ribbed trims."
  },
  {
    "product_name": "MUSCLE FIT RIBBED T-SHIRT",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/0977/307/251/2/w/448/0977307251_1_1_1.jpg?ts=1686139354108",
    "price": "₹ 2,290.00",
    "details": "Slim fit T-shirt with a round neck and fitted short sleeves."
  },
  {
    "product_name": "RIBBED TANK TOP",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/0679/340/802/2/w/448/0679340802_6_1_1.jpg?ts=1688110917540",
    "price": "₹ 1,590.00",
    "details": "Sleeveless top with a wide round neckline."
  },
  {
    "product_name": "GRAFFITI PRINT T-SHIRT",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/6224/387/611/2/w/448/6224387611_1_1_1.jpg?ts=1692181731674",
    "price": "₹ 2,290.00",
    "details": "T-shirt with a round neckline and short sleeves. Featuring a contrast prints on the front."
  },
  {
    "product_name": "CONTRAST PRINTED T-SHIRT",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/0962/341/310/2/w/448/0962341310_1_1_1.jpg?ts=1692179833501",
    "price": "₹ 2,290.00",
    "details": "T-shirt with a round neck and short sleeves. Contrast prints on the front and back. Faded effect and ripped details all over the garment."
  },
  {
    "product_name": "SKULL PRINT T-SHIRT",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/6224/377/044/2/w/448/6224377044_1_1_1.jpg?ts=1688718276127",
    "price": "₹ 2,290.00",
    "details": "Oversize round neck sleeveless T-shirt. Contrast print on the front and back."
  },
  {
    "product_name": "PRINTED T-SHIRT",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/0962/322/615/2/w/448/0962322615_1_1_1.jpg?ts=1688718275344",
    "price": "₹ 2,290.00",
    "details": "Loose-fitting short sleeve T-shirt with a round neckline and a contrast print on the front."
  },
  {
    "product_name": "T-SHIRT WITH EMBROIDERED SLOGAN",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/3992/311/629/2/w/448/3992311629_1_1_1.jpg?ts=1689760700872",
    "price": "₹ 2,290.00",
    "details": "T-shirt with a round neckline and short sleeves. Embroidered contrast slogan on the front."
  },
  {
    "product_name": "ACID WASH T-SHIRT WITH SLOGAN",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/0722/339/833/2/w/448/0722339833_1_1_1.jpg?ts=1689782771372",
    "price": "₹ 2,290.00",
    "details": "Loose-fitting T-shirt with a round neck and short sleeves. Contrast slogan print on the front."
  },
  {
    "product_name": "SHIRT WITH CONTRAST SLOGAN",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/0495/328/688/2/w/448/0495328688_1_1_1.jpg?ts=1691072084569",
    "price": "₹ 2,290.00",
    "details": "Loose-fitting T-shirt featuring a round neck, short sleeves, a matching slogan print on the chest and a faded effect."
  },
  {
    "product_name": "T-SHIRT WITH CONTRAST SLOGANS",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/0962/318/250/2/w/448/0962318250_1_1_1.jpg?ts=1689782771648",
    "price": "₹ 2,290.00",
    "details": "Loose-fitting T-shirt with a round neck and short sleeves. Contrast slogan prints on the front."
  },
  {
    "product_name": "SILVER PRINTED T-SHIRT",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/3992/301/802/2/w/448/3992301802_1_1_1.jpg?ts=1686727297735",
    "price": "₹ 2,290.00",
    "details": "T-shirt with a round neckline and short sleeves. Contrast slogan print on the front and back."
  },
  {
    "product_name": "SLOGAN PRINT T-SHIRT",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/3992/313/802/2/w/448/3992313802_1_1_1.jpg?ts=1689171137424",
    "price": "₹ 2,290.00",
    "details": "Loose-fitting T-shirt with a round neck and short sleeves. Featuring contrast slogan prints all over the garment."
  },
  {
    "product_name": "SLOGAN PRINT T-SHIRT",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/6224/380/800/2/w/448/6224380800_1_1_1.jpg?ts=1690540908015",
    "price": "₹ 2,290.00",
    "details": "Round neck T-shirt with short sleeves. Contrast patch detail on the front. Contrast prints on the front and back."
  },
  {
    "product_name": "T-SHIRT WITH PRINTED GRAPHICS",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/0679/302/710/2/w/448/0679302710_1_1_1.jpg?ts=1688564090229",
    "price": "₹ 2,290.00",
    "details": "Loose-fitting T-shirt with a round neck and short sleeves. Contrast prints on the front and sleeve."
  },
  {
    "product_name": "PRINTED SWEATSHIRT WITH SLOGAN",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/5644/301/403/2/w/448/5644301403_1_1_1.jpg?ts=1688546809649",
    "price": "₹ 2,990.00",
    "details": "Sweatshirt with a round neck and short sleeves. Featuring a contrast print on the front."
  },
  {
    "product_name": "T-SHIRT WITH CONTRAST POCKET",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/3665/302/800/2/w/448/3665302800_1_1_1.jpg?ts=1688555875761",
    "price": "₹ 2,290.00",
    "details": "Loose-fitting T-shirt with a round neck and short sleeves. Flap patch pocket on the chest."
  },
  {
    "product_name": "SWEATSHIRT WITH PRINTED SLOGANS",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/6224/342/712/2/w/448/6224342712_1_1_1.jpg?ts=1688546809912",
    "price": "₹ 2,990.00",
    "details": "Sweatshirt with a round neck and short sleeves. Contrast prints on the front and back."
  },
  {
    "product_name": "SLOGAN PATCH T-SHIRT",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/6224/397/800/2/w/448/6224397800_1_1_1.jpg?ts=1692361199325",
    "price": "₹ 2,290.00",
    "details": "Loose-fitting T-shirt with a round neck and short sleeves. Patch with slogan printed on the chest."
  },
  {
    "product_name": "PAPER PATCH SWEATSHIRT",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/6224/399/251/2/w/448/6224399251_1_1_1.jpg?ts=1692361198588",
    "price": "₹ 3,290.00",
    "details": "Loose-fitting sweatshirt with a round neck and short sleeves. Patch on the front made of kraft paper with a printed slogan. Irregular finish with contrast topstitching detail."
  },
  {
    "product_name": "T-SHIRT WITH CONTRAST PATCH",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/4092/301/800/2/w/448/4092301800_1_1_1.jpg?ts=1688552338130",
    "price": "₹ 2,290.00",
    "details": "T-shirt with a round neck and short sleeves. Featuring a contrast patch on the front."
  },
  {
    "product_name": "T-SHIRT WITH CONTRAST PATCH",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/6224/373/800/2/w/448/6224373800_1_1_1.jpg?ts=1690962643971",
    "price": "₹ 2,290.00",
    "details": "Oversize round neck T-shirt with short sleeves. Contrast patch and prints on the front and back."
  },
  {
    "product_name": "EMBROIDERED TEXTURED T-SHIRT",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/6462/321/712/2/w/448/6462321712_1_1_1.jpg?ts=1689150682236",
    "price": "₹ 2,290.00",
    "details": "T-shirt with a round neck and short sleeves. Contrast embroidery detail on the front."
  },
  {
    "product_name": "THE NOTORIOUS B.I.G. © BROOKLYN MINT T-SHIRT",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/2160/302/800/2/w/448/2160302800_1_1_1.jpg?ts=1692200662245",
    "price": "₹ 2,590.00",
    "details": "T-shirt with a round neckline and short sleeves. Notorious B.I.G. © Brooklyn Mint, LLC contrast graphics on the front and back."
  },
  {
    "product_name": "SHIELD PRINT T-SHIRT",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/6224/379/600/2/w/448/6224379600_1_1_1.jpg?ts=1691151338083",
    "price": "₹ 2,290.00",
    "details": "Round neck T-shirt featuring short sleeves with contrast trims and a front print."
  },
  {
    "product_name": "STRIPED T-SHIRT",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/0722/337/050/2/w/448/0722337050_1_1_1.jpg?ts=1691415874594",
    "price": "₹ 2,590.00",
    "details": "Round neck T-shirt with long sleeves."
  },
  {
    "product_name": "EMBROIDERED T-SHIRT",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/6224/384/712/2/w/448/6224384712_1_1_1.jpg?ts=1691415871842",
    "price": "₹ 2,290.00",
    "details": "T-shirt with a round neckline and short sleeves. Contrast embroidery detail on the front."
  },
  {
    "product_name": "CROPPED DENIM T-SHIRT",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/8062/339/800/2/w/448/8062339800_1_1_1.jpg?ts=1689335546885",
    "price": "₹ 2,590.00",
    "details": "Boxy fit cropped T-shirt with a round neck and short sleeves. Irregular trims."
  },
  {
    "product_name": "CONTRAST DENIM T-SHIRT",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/0840/304/800/2/w/448/0840304800_1_1_1.jpg?ts=1690535016839",
    "price": "₹ 3,290.00",
    "details": "Oversize denim T-shirt. Round neckline and short sleeves."
  },
  {
    "product_name": "VINTAGE FADED DENIM T-SHIRT",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/7627/304/400/2/w/448/7627304400_1_1_1.jpg?ts=1689319989939",
    "price": "₹ 2,590.00",
    "details": "T-shirt made of lightweight denim. Featuring a round neckline, short sleeves and a vintage-effect fade."
  },
  {
    "product_name": "MICKEY MOUSE © DISNEY SWEATSHIRT",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/6224/345/251/2/w/448/6224345251_1_1_1.jpg?ts=1688564090905",
    "price": "₹ 3,290.00",
    "details": "Loose-fitting short sleeve sweatshirt with a round neck. Mickey Mouse © Disney prints on the front and back."
  },
  {
    "product_name": "BUGS BUNNY ™ LOONEY TUNES T-SHIRT",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/6224/343/251/2/w/448/6224343251_1_1_1.jpg?ts=1688564090327",
    "price": "₹ 2,290.00",
    "details": "Short sleeve T-shirt with a round neckline. Featuring Looney Tunes © Warner Bros. Entertainment Inc. prints on the front and back."
  },
  {
    "product_name": "HEAVY-WEIGHT EMBROIDERED T-SHIRT",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/1887/310/700/2/w/448/1887310700_1_1_1.jpg?ts=1689169842180",
    "price": "₹ 1,890.00",
    "details": "Round neck oversize T-shirt with short sleeves. Contrast embroidery on the chest."
  },
  {
    "product_name": "T-SHIRT WITH EMBROIDERED SLOGAN",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/0722/323/519/2/w/448/0722323519_1_1_1.jpg?ts=1689319989616",
    "price": "₹ 2,290.00",
    "details": "Loose-fitting T-shirt with a round neck and short sleeves. Embroidered slogan on the chest. Faded effect."
  },
  {
    "product_name": "BASIC MEDIUM WEIGHT T-SHIRT",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/1887/400/061/2/w/448/1887400061_1_1_1.jpg?ts=1688544257903",
    "price": "₹ 1,590.00",
    "details": "Regular fit T-shirt with a round neckline and short sleeves."
  },
  {
    "product_name": "SLOGAN PRINT T-SHIRT",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/6224/353/250/2/w/448/6224353250_1_1_1.jpg?ts=1689256345230",
    "price": "₹ 2,290.00",
    "details": "T-shirt with a round neck and short sleeves. Contrast slogan print on the print."
  },
  {
    "product_name": "CONTRAST PRINTED T-SHIRT",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/0962/324/420/2/w/448/0962324420_1_1_1.jpg?ts=1689928105270",
    "price": "₹ 2,990.00",
    "details": "Oversize T-shirt with contrast V-neck and short sleeves. Contrast prints on the front and back."
  },
  {
    "product_name": "OVERSIZE T-SHIRT WITH SLOGANS",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/0722/374/250/2/w/448/0722374250_6_1_1.jpg?ts=1689927794171",
    "price": "₹ 2,290.00",
    "details": "Oversize round neck T-shirt with sleeves falling below the elbow and contrast prints on the front and back."
  },
  {
    "product_name": "T-SHIRT WITH METALLIC FINISH",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/5644/303/707/2/w/448/5644303707_1_1_1.jpg?ts=1690540907939",
    "price": "₹ 2,290.00",
    "details": "Round neck T-shirt with short sleeves and an ombré coloured finish."
  },
  {
    "product_name": "TIE-DYE DENIM HOODIE",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/0840/300/251/2/w/448/0840300251_1_1_1.jpg?ts=1689335818566",
    "price": "₹ 3,290.00",
    "details": "Denim sweatshirt. Round neck and short sleeves. Ribbed trims."
  },
  {
    "product_name": "DENIM T-SHIRT WITH ABSTRACT PRINT",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/7627/305/426/2/w/0/7627305426_1_1_1.jpg?ts=1689319990245",
    "price": "₹ 2,990.00",
    "details": "Lightweight denim T-shirt with a round neckline and short sleeves."
  },
  {
    "product_name": "TULLE T-SHIRT WITH ABSTRACT PRINT",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/3665/301/022/2/w/448/3665301022_1_1_1.jpg?ts=1692359828074",
    "price": "₹ 2,290.00",
    "details": "T-shirt made of semi-sheer fabric. Round neck and long sleeves."
  },
  {
    "product_name": "SWEATSHIRT WITH CROCHET POCKET",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/4087/317/505/2/w/448/4087317505_1_1_1.jpg?ts=1688546807650",
    "price": "₹ 2,990.00",
    "details": "Loose-fitting sweatshirt with a round neck and short sleeves. Front patch pocket in matching crochet."
  },
  {
    "product_name": "TIE-DYE PRINT SWEATSHIRT",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/0962/338/505/2/w/448/0962338505_1_1_1.jpg?ts=1692020567476",
    "price": "₹ 3,290.00",
    "details": "Round neck sweatshirt with short sleeves and irregular trims."
  },
  {
    "product_name": "MESH TEXTURED TANK TOP",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/3665/307/800/2/w/448/3665307800_1_1_1.jpg?ts=1691746948704",
    "price": "₹ 2,590.00",
    "details": "Open-textured tank top. Round neckline. Contrast embroidered slogan on the front."
  },
  {
    "product_name": "CROPPED TANK TOP",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/6224/394/800/2/w/448/6224394800_1_1_1.jpg?ts=1692183115085",
    "price": "₹ 1,990.00",
    "details": "Oversize round neck tank top. Faded effect. Contrast prints on the front and back. Cropped length."
  },
  {
    "product_name": "FADED TANK TOP",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/0679/305/648/2/w/448/0679305648_1_1_1.jpg?ts=1692179833873",
    "price": "₹ 1,990.00",
    "details": "Sleeveless T-shirt with round neckline. Faded effect."
  },
  {
    "product_name": "TANK TOP WITH CONTRAST PRINT",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/5643/301/250/2/w/448/5643301250_1_1_1.jpg?ts=1691753699857",
    "price": "₹ 1,990.00",
    "details": "Sleeveless top with a round neckline. Contrast prints and embroidery on the front."
  },
  {
    "product_name": "TANK TOP",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/4231/307/526/2/w/448/4231307526_1_1_1.jpg?ts=1688564089840",
    "price": "₹ 1,990.00",
    "details": "Loose-fitting sleeveless T-shirt with a round neckline."
  },
  {
    "product_name": "MESH TEXTURED TANK TOP",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/3992/332/800/2/w/448/3992332800_1_1_1.jpg?ts=1692188871328",
    "price": "₹ 2,990.00",
    "details": "Double-weave tank top in open textured fabric with a wide round neck."
  },
  {
    "product_name": "BASIC LIGHTWEIGHT T-SHIRT",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/1887/440/811/3/w/448/1887440811_1_1_1.jpg?ts=1688984770367",
    "price": "₹ 990.00",
    "details": "Lightweight cotton T-shirt with a round neckline and short sleeves."
  },
  {
    "product_name": "TEXTURED T-SHIRT",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/0722/321/804/2/w/448/0722321804_1_1_1.jpg?ts=1689156202118",
    "price": "₹ 2,290.00",
    "details": "T-shirt in crepe textured fabric. Round neckline and short sleeves."
  },
  {
    "product_name": "KNIT OVERSIZE T-SHIRT",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/5536/306/800/2/w/448/5536306800_1_1_1.jpg?ts=1689763224776",
    "price": "₹ 2,990.00",
    "details": "Knit oversize T-shirt. Round neck and short sleeves."
  },
  {
    "product_name": "KNIT COTTON T-SHIRT",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/4231/425/707/2/w/448/4231425707_1_1_1.jpg?ts=1687445757856",
    "price": "₹ 1,990.00",
    "details": "Knit T-shirt made of spun cotton fabric. Featuring a round neckline and short sleeves."
  },
  {
    "product_name": "TRAINING TANK TOP",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/0765/305/426/612/w/448/0765305426_1_1_1.jpg?ts=1692608988130",
    "price": "₹ 1,990.00",
    "details": "T-shirt made of lightweight textured stretch fabric that moves in every direction.- Sleeveless with a round neck.- Printed logo detail.Zara Athleticz.View more"
  },
  {
    "product_name": "TEXTURED COMPRESSION T-SHIRT",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/1368/410/400/2/w/448/1368410400_1_1_1.jpg?ts=1684491174924",
    "price": "₹ 2,990.00",
    "details": "T-shirt made of technical fabric with high elasticity, adapting perfectly to movement. - Sleeveless with a round neck.- Combination of textures for improved breathability and wicking.Zara Athleticz.View more"
  },
  {
    "product_name": "TRAINING TANK TOP",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/0765/400/250/2/w/448/0765400250_1_1_1.jpg?ts=1689863398783",
    "price": "₹ 2,290.00",
    "details": "T-shirt made of lightweight textured stretch fabric that moves in every direction.- Sleeveless and with a round neckline. Its seams are flat, to avoid skin abrasions.- Printed logo detail.Zara Athleticz.View more"
  },
  {
    "product_name": "CONTRAST PRINTED T-SHIRT",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/1165/305/800/2/w/448/1165305800_1_1_1.jpg?ts=1690535016949",
    "price": "₹ 2,290.00",
    "details": "Oversize round neck T-shirt with short sleeves. Contrast prints on the front and back. Faded effect."
  },
  {
    "product_name": "CONTRAST PRINTED T-SHIRT",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/0977/309/250/2/w/448/0977309250_1_1_1.jpg?ts=1690535015926",
    "price": "₹ 2,290.00",
    "details": "T-shirt with a round neckline and short sleeves. Contrast embroidery prints on the front and back."
  },
  {
    "product_name": "CONTRAST PRINT SWEATSHIRT",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/5643/302/250/2/w/448/5643302250_1_1_1.jpg?ts=1690963409656",
    "price": "₹ 2,990.00",
    "details": "Boxy fit sweatshirt with a round neck and short sleeves. Contrast prints on the front."
  },
  {
    "product_name": "T-SHIRT WITH PHOTO PRINT",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/1165/307/251/2/w/448/1165307251_1_1_1.jpg?ts=1690986047090",
    "price": "₹ 2,290.00",
    "details": "T-shirt with a round neck and short sleeves. Featuring a contrast photo print on the back."
  },
  {
    "product_name": "TEXTURED T-SHIRT",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/4087/333/712/2/w/448/4087333712_1_1_1.jpg?ts=1691141197699",
    "price": "₹ 2,990.00",
    "details": "Relaxed fit T-shirt. Round neck and short sleeves."
  },
  {
    "product_name": "V-NECK T-SHIRT",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/6462/322/712/2/w/448/6462322712_1_1_1.jpg?ts=1689156204414",
    "price": "₹ 2,590.00",
    "details": "T-shirt with an open neck and short sleeves."
  },
  {
    "product_name": "TEXTURED TANK TOP",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/1198/319/250/2/w/448/1198319250_1_1_1.jpg?ts=1691571265149",
    "price": "₹ 2,290.00",
    "details": "Sleeveless T-shirt in mesh textured fabric with a wide round neck."
  },
  {
    "product_name": "RUSTIC TANK TOP",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/3992/381/706/2/w/448/3992381706_1_1_1.jpg?ts=1692627095271",
    "price": "₹ 2,290.00",
    "details": "Double trim tank top with a wide round neck."
  },
  {
    "product_name": "TEXTURED TANK TOP",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/4087/361/251/2/w/448/4087361251_2_1_1.jpg?ts=1689148216584",
    "price": "₹ 2,290.00",
    "details": "Oversize sleeveless T-shirt with a round neck and irregular trims."
  },
  {
    "product_name": "TEXTURED TANK TOP",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/3992/323/800/2/w/448/3992323800_1_1_1.jpg?ts=1690536390844",
    "price": "₹ 2,290.00",
    "details": "Round neck tank top."
  },
  {
    "product_name": "COTTON - LINEN T-SHIRT",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/0347/300/700/2/w/448/0347300700_1_1_1.jpg?ts=1688108944359",
    "price": "₹ 1,990.00",
    "details": "Loose-fitting T-shirt made of a linen and cotton blend fabric. Round neckline and short sleeves."
  },
  {
    "product_name": "BASIC HEAVY WEIGHT T-SHIRT",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/1887/411/250/2/w/448/1887411250_1_1_1.jpg?ts=1691999871977",
    "price": "₹ 1,590.00",
    "details": "Loose-fit T-shirt made of compact cotton. Round neck and short sleeves."
  },
  {
    "product_name": "HIGH NECK KNIT T-SHIRT",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/3471/301/800/2/w/448/3471301800_1_1_1.jpg?ts=1689256085179",
    "price": "₹ 2,590.00",
    "details": "Knit high neck T-shirt with short sleeves and ribbed trims."
  },
  {
    "product_name": "ACID WASH PRINT T-SHIRT",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/4442/350/826/2/w/448/4442350826_1_1_1.jpg?ts=1688108946885",
    "price": "₹ 1,990.00",
    "details": "Loose-fitting faded T-shirt with a round neckline and short sleeves."
  },
  {
    "product_name": "SLOGAN PRINT T-SHIRT",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/0495/330/707/2/w/448/0495330707_1_1_1.jpg?ts=1691575360499",
    "price": "₹ 2,290.00",
    "details": "T-shirt with a round neckline and short sleeves. Featuring a contrast slogan print on the front."
  },
  {
    "product_name": "SLOGAN PRINT T-SHIRT",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/4087/328/800/2/w/448/4087328800_1_1_1.jpg?ts=1691753369222",
    "price": "₹ 2,290.00",
    "details": "T-shirt with a round neckline and short sleeves. Printed slogan on the front and back."
  },
  {
    "product_name": "T-SHIRT WITH EMBROIDERED SLOGAN",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/6224/381/250/2/w/448/6224381250_1_1_1.jpg?ts=1691739359737",
    "price": "₹ 2,290.00",
    "details": "Loose-fitting round neck T-shirt with short sleeves. Contrast embroidery and prints on the front and back."
  },
  {
    "product_name": "TEXTURED KNIT T-SHIRT",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/2621/420/251/2/w/448/2621420251_1_1_1.jpg?ts=1689847577985",
    "price": "₹ 2,890.00",
    "details": "Knit T-shirt made of spun cotton fabric. Round neck and short sleeves. Ribbed trims."
  },
  {
    "product_name": "CROPPED T-SHIRT WITH SLOGAN",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/3992/306/251/2/w/448/3992306251_1_1_1.jpg?ts=1685958487239",
    "price": "₹ 1,890.00",
    "details": "Cropped T-shirt with a round neck and short sleeves. Contrast slogan print on the front."
  },
  {
    "product_name": "CROCHET KNIT T-SHIRT",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/4938/303/800/2/w/448/4938303800_1_1_1.jpg?ts=1687874713848",
    "price": "₹ 2,990.00",
    "details": "Short sleeve knit T-shirt made of an open-textured fabric. Round neck and ribbed trims."
  },
  {
    "product_name": "LINEN - VISCOSE KNIT T-SHIRT",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/9598/304/710/2/w/448/9598304710_1_1_1.jpg?ts=1688478953918",
    "price": "₹ 3,290.00",
    "details": "Knit oversize T-shirt made of a spun linen and viscose blend. Round neck and short sleeves. Ribbed trims."
  },
  {
    "product_name": "LINEN - VISCOSE KNIT T-SHIRT",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/9598/301/731/2/w/448/9598301731_1_1_1.jpg?ts=1688478953288",
    "price": "₹ 3,290.00",
    "details": "Loose-fitting knit T-shirt made of a spun linen and viscose blend. Round neck and short sleeves. Chest patch pocket. Contrast topstitching detail."
  },
  {
    "product_name": "COTTON KNIT T-SHIRT",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/6771/309/916/2/w/448/6771309916_1_1_1.jpg?ts=1688458557112",
    "price": "₹ 2,990.00",
    "details": "Knit T-shirt made of spun cotton fabric. Featuring a round neck, short sleeves and ribbed trims."
  },
  {
    "product_name": "TIE-DYE STRIPED T-SHIRT",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/6224/359/710/2/w/448/6224359710_1_1_1.jpg?ts=1689256347393",
    "price": "₹ 2,290.00",
    "details": "T-shirt with a round neckline and short sleeves. Featuring a contrast print on the front."
  },
  {
    "product_name": "SHORT SLEEVE HEAVY WEIGHT T-SHIRT",
    "image_url": "https://static.zara.net/photos///2023/V/0/2/p/0761/323/250/2/w/489/0761323250_6_1_1.jpg?ts=1675790430296",
    "price": "₹ 1,990.00",
    "details": "Regular-fit T-shirt in compact cotton fabric. Round neck and short sleeves.Origins special collection."
  },
  {
    "product_name": "CROCHET TANK TOP",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/2795/313/712/2/w/0/2795313712_1_1_1.jpg?ts=1692286398339",
    "price": "₹ 2,290.00",
    "details": "Round neck tank top in a textured open knit fabric."
  },
  {
    "product_name": "MESH TEXTURE T-SHIRT",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/2795/306/800/2/w/448/2795306800_1_1_1.jpg?ts=1688566357380",
    "price": "₹ 2,290.00",
    "details": "Relaxed fit T-shirt made of an open textured fabric. Round neck and short sleeves."
  },
  {
    "product_name": "WORKOUT T-SHIRT",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/5320/450/250/2/w/448/5320450250_1_1_1.jpg?ts=1688985619667",
    "price": "₹ 2,290.00",
    "details": "T-shirt made of lightweight textured stretch fabric that moves in every direction.- Round neck T-shirt with short sleeves.- Printed logo detail on the hem.Zara Athleticz.View more"
  },
  {
    "product_name": "TEXTURED TRAINING T-SHIRT",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/1943/316/832/2/w/448/1943316832_1_1_1.jpg?ts=1689863847212",
    "price": "₹ 2,590.00",
    "details": "T-shirt made of a textured technical fabric, lightweight and elastic that moves in every direction.- Round neck T-shirt with short sleeves.- Side slits at the hem.- Printed logo detail on the hem.Zara Athleticz.View more"
  },
  {
    "product_name": "COMFORT WORKOUT T-SHIRT",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/2888/402/982/2/w/448/2888402982_1_1_1.jpg?ts=1692362141492",
    "price": "₹ 1,890.00",
    "details": "T-shirt made of a lightweight and elastic fabric in every direction.- Round neck T-shirt with short sleeves.- Flat seams, more resistant and ideal for movement.- Printed logo detail.Zara Athleticz.View more"
  },
  {
    "product_name": "OVERSIZE T-SHIRT - LIMITED EDITION",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/0722/329/250/2/w/448/0722329250_1_1_1.jpg?ts=1689332813417",
    "price": "₹ 2,590.00",
    "details": "Oversize T-shirt with a round neck and short sleeves falling below the elbow."
  },
  {
    "product_name": "OVERSIZE SWEATSHIRT - LIMITED EDITION",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/0761/320/401/2/w/448/0761320401_1_1_1.jpg?ts=1689327625837",
    "price": "₹ 3,290.00",
    "details": "Oversize sweatshirt with a round neckline and short sleeves falling below the elbow."
  },
  {
    "product_name": "POPLIN T-SHIRT - LIMITED EDITION",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/5821/198/250/2/w/448/5821198250_1_1_1.jpg?ts=1689577165040",
    "price": "₹ 3,290.00",
    "details": "Oversize cotton poplin T-shirt. Round neck with ribbed trims. Short sleeves. Pleated details at the back. Asymmetric hem with side vents."
  },
  {
    "product_name": "T-SHIRT WITH POCKET - LIMITED EDITION",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/0977/311/505/2/w/448/0977311505_1_1_1.jpg?ts=1689327625835",
    "price": "₹ 2,990.00",
    "details": "Oversize T-shirt with a round neck and short sleeves. Contrast patch pocket on the chest."
  },
  {
    "product_name": "LONG SLEEVE T-SHIRT - LIMITED EDITION",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/0722/331/286/2/w/448/0722331286_1_1_1.jpg?ts=1689332810434",
    "price": "₹ 2,990.00",
    "details": "Loose-fitting round neck T-shirt with long sleeves."
  },
  {
    "product_name": "WORKOUT T-SHIRT",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/4387/404/712/2/w/448/4387404712_1_1_1.jpg?ts=1687950693431",
    "price": "₹ 2,290.00",
    "details": "T-shirt made of lightweight textured stretch fabric that moves in every direction.- Round neck T-shirt with short sleeves. - Printed logo detail on the hem.Zara Athleticz.View more"
  },
  {
    "product_name": "COMPACT COTTON T-SHIRT",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/5643/400/712/2/w/448/5643400712_1_1_1.jpg?ts=1687950693638",
    "price": "₹ 2,290.00",
    "details": "Loose-fitting T-shirt made of compact cotton. Round neckline and short sleeves. Contrast logo print on the hem.Zara Athleticz."
  },
  {
    "product_name": "TRAINING TANK TOP",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/4387/408/712/2/w/448/4387408712_1_1_1.jpg?ts=1687950693624",
    "price": "₹ 1,990.00",
    "details": "Loose-fitting T-shirt made of lightweight technical stretch fabric that moves in every direction.- Sleeveless with a round neck.- Front vents at the hem.- Logo print on the hem.Zara Athleticz.View more"
  },
  {
    "product_name": "SLOGAN PRINT T-SHIRT",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/6224/372/712/2/w/448/6224372712_1_1_1.jpg?ts=1687950692365",
    "price": "₹ 2,290.00",
    "details": "T-shirt made of cotton. Round neck and short sleeves. Contrast slogan prints on the front and back.Zara Athleticz."
  },
  {
    "product_name": "TANK TOP WITH SLOGAN",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/6224/374/701/2/w/448/6224374701_1_1_1.jpg?ts=1687950692782",
    "price": "₹ 1,990.00",
    "details": "Loose-fitting T-shirt made of cotton. Round neck and short sleeves. Contrast slogan print on the front.Zara Athleticz."
  },
  {
    "product_name": "BASIC TRAINING T-SHIRT",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/4387/401/428/2/w/448/4387401428_1_1_1.jpg?ts=1690369387056",
    "price": "₹ 1,890.00",
    "details": "T-shirt made of a technical, lightweight and stretch fabric. - Round neck and short sleeves. - Flat seams, more resistant and ideal for movement.- Printed logo detail.View more"
  },
  {
    "product_name": "CONTRAST PRINTED T-SHIRT",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/6224/339/321/2/w/448/6224339321_1_1_1.jpg?ts=1688986168006",
    "price": "₹ 2,290.00",
    "details": "Loose-fitting T-shirt made of a cotton fabric. Round neck and short sleeves. Contrast prints on the front and back.Zara Athleticz."
  },
  {
    "product_name": "TANK TOP WITH SLOGAN",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/6224/340/832/2/w/448/6224340832_1_1_1.jpg?ts=1688986167285",
    "price": "₹ 1,990.00",
    "details": "Loose-fitting tank top made of cotton. Round neck. Contrast slogan print on the front.Zara Athleticz."
  },
  {
    "product_name": "T-SHIRT WITH A PASSO STELVIO PRINT",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/1501/404/406/2/w/448/1501404406_1_1_1.jpg?ts=1684491174922",
    "price": "₹ 2,290.00",
    "details": "T-shirt made of stretchy cotton fabric. Round neck and short sleeves. Contrast graphic prints on the front and back.Zara Athleticz."
  },
  {
    "product_name": "RIBBED TANK TOP",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/0761/308/803/2/w/448/0761308803_1_1_1.jpg?ts=1687940544921",
    "price": "₹ 1,590.00",
    "details": "Sleeveless top with a wide round neck.Zara Athleticz."
  },
  {
    "product_name": "TANK TOP - LIMITED EDITION",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/6085/900/712/2/w/448/6085900712_1_1_1.jpg?ts=1688477975635",
    "price": "₹ 2,590.00",
    "details": "Sleeveless T-shirt in open textured fabric with a wide round neck."
  },
  {
    "product_name": "OVERSIZE T-SHIRT WITH TOPSTITCHING",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/3992/380/706/2/w/448/3992380706_1_1_1.jpg?ts=1691571263808",
    "price": "₹ 2,590.00",
    "details": "Oversize T-shirt with a round neck and sleeves falling below the elbow. Trims with contrast topstitching detail."
  },
  {
    "product_name": "LYOCELL - COTTON T-SHIRT",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/0722/344/832/2/w/448/0722344832_1_1_1.jpg?ts=1691486099361",
    "price": "₹ 2,590.00",
    "details": "T-shirt made of a lyocell and cotton blend. Featuring a round neck and short sleeves."
  },
  {
    "product_name": "BOXY FIT T-SHIRT",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/5644/310/800/2/w/448/5644310800_1_1_1.jpg?ts=1691142187387",
    "price": "₹ 2,290.00",
    "details": "Boxy fit T-shirt with a round neck, short sleeves and side vents at the hem."
  },
  {
    "product_name": "TERRY TANK TOP",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/1198/311/406/2/w/448/1198311406_1_1_1.jpg?ts=1689756837363",
    "price": "₹ 1,990.00",
    "details": "Loose-fitting round neck tank top made of a cotton blend fabric."
  },
  {
    "product_name": "TERRY SWEATSHIRT",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/2795/307/615/2/w/448/2795307615_1_1_1.jpg?ts=1689763222608",
    "price": "₹ 2,990.00",
    "details": "Loose-fitting sweatshirt made of a cotton blend fabric. Round neckline and short sleeves."
  },
  {
    "product_name": "WIDE-FIT KNIT JOGGERS",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/5755/301/800/2/w/448/5755301800_1_1_1.jpg?ts=1692951284336",
    "price": "₹ 3,290.00",
    "details": "Knit trousers with an adjustable elasticated waistband. Side pockets and rear pocket detail."
  },
  {
    "product_name": "RIBBED JOGGERS",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/5039/503/800/2/w/0/5039503800_1_1_1.jpg?ts=1692956953130",
    "price": "₹ 3,290.00",
    "details": "Trousers featuring an adjustable elasticated waistband with drawstring. Front pockets and rear pocket detail."
  },
  {
    "product_name": "SLIM FIT CARGO TROUSERS",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/9252/300/800/2/w/448/9252300800_1_1_1.jpg?ts=1691144900170",
    "price": "₹ 3,990.00",
    "details": "Slim fit trousers. Front pockets and rear pocket details. Patch pockets with flaps on the legs. Front zip fly and button fastening."
  },
  {
    "product_name": "STRAIGHT FIT CARGO TROUSERS",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/6917/306/818/2/w/448/6917306818_2_1_1.jpg?ts=1691079127613",
    "price": "₹ 3,990.00",
    "details": "Straight fit trousers. Front pockets and back flap pockets. Patch pockets with flaps on the legs. Adjustable hems with tab. Front zip fly and button fastening."
  },
  {
    "product_name": "PLEATED TROUSERS",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/6332/616/807/2/w/448/6332616807_1_1_1.jpg?ts=1692959379367",
    "price": "₹ 4,990.00",
    "details": "Relaxed fit trousers. Waistband with front pleated details. Front pockets and rear welt pockets. Front zip fly and button fastening."
  },
  {
    "product_name": "PLEATED TROUSERS WITH BELT",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/0706/605/800/2/w/448/0706605800_1_1_1.jpg?ts=1689763216484",
    "price": "₹ 4,990.00",
    "details": "Relaxed fit trousers featuring a waist with front pleats and a belt in the same fabric. Front pockets and rear welt pockets. Front zip and button fastening."
  },
  {
    "product_name": "COMFORT FIT JOGGER WAIST TROUSERS",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/2553/310/916/2/w/448/2553310916_1_1_1.jpg?ts=1692776030192",
    "price": "₹ 3,290.00",
    "details": "Trousers made of stretchy fabric. Adjustable inner elasticated waistband. Front and back pockets."
  },
  {
    "product_name": "RELAXED-FIT TROUSERS WITH PLEATS",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/6861/313/800/2/w/448/6861313800_1_1_1.jpg?ts=1692776632816",
    "price": "₹ 3,990.00",
    "details": "Relaxed-fit trousers. Waistband with front pleated details. Front pockets and rear pockets with buttoned flaps. Front zip fly and button fastening."
  },
  {
    "product_name": "PLEATED TROUSERS",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/6861/336/800/2/w/448/6861336800_1_1_1.jpg?ts=1692181731410",
    "price": "₹ 4,990.00",
    "details": "Straight fit trousers. Waist with front pleated details. Front pockets and rear pocket details. Turn-up hems. Front zip fly and button fastening."
  },
  {
    "product_name": "100% WOOL SUIT TROUSERS - LIMITED EDITION",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/5830/542/800/2/w/448/5830542800_1_1_1.jpg?ts=1689334797751",
    "price": "₹ 5,990.00",
    "details": "Relaxed fit trousers with an elasticated waistband with front pleated details. Front pockets and rear jetted pockets. Hidden metal hook and zip fly front fastening."
  },
  {
    "product_name": "100% WOOL SUIT TROUSERS",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/5956/218/800/2/w/448/5956218800_1_1_1.jpg?ts=1691507789721",
    "price": "₹ 5,990.00",
    "details": "Slim-fit trousers made of Italian wool fabric. Front pockets and back welt pockets with buttons. Hidden metal hook and zip fly fastening at the front."
  },
  {
    "product_name": "100% WOOL SUIT TROUSERS",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/5956/544/706/2/w/448/5956544706_1_1_1.jpg?ts=1692785577934",
    "price": "₹ 5,990.00",
    "details": "Slim fit trousers made of Italian wool fabric. Front pockets and rear welt pockets. Front zip fly and crossover button fastening."
  },
  {
    "product_name": "TECHNICAL TRAINING TROUSERS",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/1698/303/800/3/w/448/1698303800_1_1_1.jpg?ts=1693233016475",
    "price": "₹ 3,290.00",
    "details": "Trousers made of lightweight and stretchy technical fabric.- Elastic waistband with drawstrings. - Front pockets with autolock zip fastening. - Hem with elasticated cuffs. - Printed logo detail.Zara Athleticz.View more"
  },
  {
    "product_name": "JOGGER WAIST COTTON TROUSERS",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/0761/335/800/3/w/448/0761335800_1_1_1.jpg?ts=1693233016350",
    "price": "₹ 3,290.00",
    "details": "Trousers made of compact cotton fabric. Adjustable elastic waistband with drawstring. Side welt pockets with zip closures. Cuffed hems.Zara Athleticz.View more"
  },
  {
    "product_name": "RELAXED-FIT SUIT",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/0706/577/706/2/w/0/0706577706_1_1_1.jpg?ts=1689670151064",
    "price": "₹ 4,990.00",
    "details": "Relaxed fit trousers. Front pockets and rear welt pockets. Front zip fly and button fastening."
  },
  {
    "product_name": "SUIT TROUSERS WITH IRREGULAR TRIMS",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/5826/507/800/2/w/448/5826507800_1_1_1.jpg?ts=1689675754638",
    "price": "₹ 3,990.00",
    "details": "Oversize fit trousers. Adjustable elasticated waistband with drawstring. Front pleated details. Side pockets and rear welt pockets. Front zip fly and button fastening."
  },
  {
    "product_name": "STRAIGHT FIT SUIT TROUSERS",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/5624/086/819/2/w/448/5624086819_1_1_1.jpg?ts=1689695238840",
    "price": "₹ 4,990.00",
    "details": "Straight-fit trousers with front pockets and back welt pockets. Front zip fly and button fastening."
  },
  {
    "product_name": "RELAXED FIT CARGO TROUSERS",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/6335/564/800/2/w/448/6335564800_1_1_1.jpg?ts=1692956954188",
    "price": "₹ 4,990.00",
    "details": "Relaxed fit trousers with an elasticated waistband with adjustable drawstring. Side pockets and rear welt pockets. Patch pockets on the legs."
  },
  {
    "product_name": "TEXTURED COMFORT TROUSERS",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/6861/251/757/2/w/448/6861251757_1_1_1.jpg?ts=1692962622507",
    "price": "₹ 2,990.00",
    "details": "Slim-fit trousers made of two-way stretchy fabric. Front pockets and rear welt pockets with button detail. Front zip fly and top button fastening."
  },
  {
    "product_name": "FADED JOGGERS WITH RIPS",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/6462/352/605/2/w/448/6462352605_1_1_1.jpg?ts=1692951284198",
    "price": "₹ 3,990.00",
    "details": "Wide-fit trousers. Elastic drawstring waistband. Front pockets and rear patch pocket. Ripped-effect trims. Front vent at the hems."
  },
  {
    "product_name": "TECHNICAL PARACHUTE TROUSERS",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/5070/307/803/2/w/448/5070307803_1_1_1.jpg?ts=1691072083790",
    "price": "₹ 3,290.00",
    "details": "Relaxed fit trousers made of technical fabric. Adjustable elasticated waistband with inside drawstring and elastic on the sides. Front pockets and back welt pockets."
  },
  {
    "product_name": "WIDE FIT JOGGER WAIST TROUSERS",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/0761/389/706/2/w/448/0761389706_1_1_1.jpg?ts=1691486099804",
    "price": "₹ 3,290.00",
    "details": "Wide fit trousers made of cotton fabric. Adjustable elasticated waistband with drawstring. Side pockets and rear patch pocket detail."
  },
  {
    "product_name": "SLIM FIT SUIT TROUSERS",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/1564/711/800/2/w/448/1564711800_1_1_1.jpg?ts=1689605444912",
    "price": "₹ 2,990.00",
    "details": "Slim fit trousers with front pockets, rear welt pockets and zip fly and top button fastening."
  },
  {
    "product_name": "SLIM FIT SUIT TROUSERS",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/6861/371/420/2/w/448/6861371420_1_1_1.jpg?ts=1692963777200",
    "price": "₹ 4,990.00",
    "details": "Slim fit trousers featuring front pockets, rear buttoned jetted pockets and zip fly and top button fastening."
  },
  {
    "product_name": "SLIM FIT SUIT TROUSERS",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/1564/351/708/2/w/448/1564351708_1_1_1.jpg?ts=1689605443936",
    "price": "₹ 4,990.00",
    "details": "Slim fit trousers featuring front pockets, rear jetted pockets and zip fly and top button fastening."
  },
  {
    "product_name": "CARGO TROUSERS",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/0108/421/709/2/w/448/0108421709_1_1_1.jpg?ts=1690442728649",
    "price": "₹ 2,990.00",
    "details": "Relaxed fit trousers with an elasticated waistband and adjustable drawstring. Front pockets and rear welt pockets. Patch pockets with flaps on the legs. Cuffed elasticated hems."
  },
  {
    "product_name": "SOFT CARGO TROUSERS",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/5862/331/505/2/w/448/5862331505_1_1_1.jpg?ts=1690543155741",
    "price": "₹ 3,990.00",
    "details": "Slim fit trousers with an elasticated waistband and adjustable drawstring. Front pockets and rear welt pocket. Patch pockets with flaps on the front of the legs. Cuffed elasticated hems."
  },
  {
    "product_name": "RELAXED FIT CARGO TROUSERS",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/0108/310/800/2/w/448/0108310800_1_1_1.jpg?ts=1692351040339",
    "price": "₹ 3,990.00",
    "details": "Relaxed-fit trousers. Front pockets and rear welt pockets. Patch pockets with flaps on the legs. Front zip fly and top button fastening."
  },
  {
    "product_name": "100% LINEN TROUSERS",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/1538/302/916/2/w/448/1538302916_1_1_1.jpg?ts=1686065081362",
    "price": "₹ 3,990.00",
    "details": "Trousers made of linen fabric. Elasticated waistband. Front pockets and back welt pockets. Zip fly and top button fastening."
  },
  {
    "product_name": "100% LINEN SUIT TROUSERS",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/4468/003/052/2/w/448/4468003052_1_1_1.jpg?ts=1689675754012",
    "price": "₹ 4,990.00",
    "details": "Regular-fit trousers. Front pockets and back welt pockets. Front zip fly and top button fastening."
  },
  {
    "product_name": "100% LINEN SUIT TROUSERS",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/4471/003/251/2/w/448/4471003251_1_1_1.jpg?ts=1689605443375",
    "price": "₹ 4,990.00",
    "details": "Regular fit trousers. Waist with front pleats. Front pockets and rear welt pockets. Front zip fly and button fastening."
  },
  {
    "product_name": "100% LINEN SUIT TROUSERS",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/1564/101/401/2/w/489/1564101401_1_1_1.jpg?ts=1689605441849",
    "price": "₹ 5,990.00",
    "details": "Straight fit trousers made of linen. Front pockets and buttoned jetted pockets on the back. Front zip fly and top button fastening."
  },
  {
    "product_name": "EASY CARE JOGGER WAIST TROUSERS",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/0706/540/800/2/w/448/0706540800_1_1_1.jpg?ts=1688053933028",
    "price": "₹ 2,590.00",
    "details": "Trousers featuring an adjustable elasticated waistband with drawstrings. Side pockets and rear welt pockets. Turn-up hems."
  },
  {
    "product_name": "BASIC JOGGERS",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/0761/352/712/2/w/448/0761352712_1_1_1.jpg?ts=1690965179879",
    "price": "₹ 2,590.00",
    "details": "Trousers with an adjustable drawstring waistband. Front pockets and back patch pocket. Cuffed elastic hems."
  },
  {
    "product_name": "SLIM FIT COMFORT TROUSERS",
    "image_url": "https://static.zara.net/photos///2022/I/0/1/p/6861/450/802/12/w/448/6861450802_1_1_1.jpg?ts=1653044325580",
    "price": "₹ 2,790.00",
    "details": "Trousers made of high-stretch fabric. Featuring an elastic waistband, front pockets, rear welt pockets and zip fly and top button fastening."
  },
  {
    "product_name": "SEERSUCKER TROUSERS WITH PLEATS",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/6861/326/526/2/w/448/6861326526_1_1_1.jpg?ts=1691585940055",
    "price": "₹ 3,990.00",
    "details": "Relaxed-fit trousers featuring front pleats at the waist. Front pockets and rear welt pocket details. Hidden metal hook and zip fly fastening on the front."
  },
  {
    "product_name": "SEERSUCKER CARGO TROUSERS",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/6416/320/250/2/w/448/6416320250_1_1_1.jpg?ts=1691508194232",
    "price": "₹ 4,990.00",
    "details": "Straight fit trousers. Elastic waistband. Front pockets and buttoned jetted pockets on the back. Patch pockets with flaps on the legs. Adjustable hem with elastic side gores."
  },
  {
    "product_name": "SEERSUCKER TROUSERS WITH CONTRAST TOPSTITCHING",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/6861/334/401/2/w/448/6861334401_1_1_1.jpg?ts=1691508195318",
    "price": "₹ 3,990.00",
    "details": "Relaxed fit trousers. Adjustable elastic waistband with interior drawstring. Side pockets and rear patch pocket detail. Contrast topstitching all over the garment."
  },
  {
    "product_name": "WIDE FIT TROUSERS",
    "image_url": "https://static.zara.net/photos///2023/V/0/2/p/4055/120/800/2/w/448/4055120800_1_1_1.jpg?ts=1678099887450",
    "price": "₹ 2,990.00",
    "details": "Wide fit trousers featuring an elastic waistband with front pleats, front pockets and rear welt pocket details. Zip fly and top button fastening on the front."
  },
  {
    "product_name": "WIDE FIT TROUSERS",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/6861/310/712/32/w/448/6861310712_1_1_1.jpg?ts=1686846698808",
    "price": "₹ 3,990.00",
    "details": "Wide fit trousers made of a cotton blend. Adjustable elasticated waistband with front pleats. Side pockets and rear patch pocket. Pleated details on the knees."
  },
  {
    "product_name": "RELAXED FIT CARGO TROUSERS",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/5520/310/505/2/w/448/5520310505_1_1_1.jpg?ts=1690381578673",
    "price": "₹ 4,990.00",
    "details": "Faded relaxed fit trousers with an elasticated waistband with adjustable drawstring. Front and rear pockets. Patch pockets with flaps on the legs."
  },
  {
    "product_name": "TROUSERS WITH UTILITY POCKETS",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/6987/313/800/2/w/448/6987313800_1_1_1.jpg?ts=1690444374925",
    "price": "₹ 4,990.00",
    "details": "Relaxed fit trousers. Front pockets and rear patch pockets. Multifunctional leg pockets. Adjustable elasticated hems. Front zip fly and button fastening."
  },
  {
    "product_name": "CARGO TROUSERS WITH CONTRAST TOPSTITCHING",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/2553/311/520/2/w/448/2553311520_1_1_1.jpg?ts=1692359831344",
    "price": "₹ 4,990.00",
    "details": "Relaxed fit trousers made of technical fabric. Elasticated waistband. Front pockets and patch pockets at the back. Patch pockets with flaps on the legs. Contrast topstitching all over the garment. Adjustable elasticated hems. Zip fly and hidden snap-button fastening at the front.View more"
  },
  {
    "product_name": "UTILITY CARGO TROUSERS",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/6987/312/922/2/w/448/6987312922_1_1_1.jpg?ts=1691150973212",
    "price": "₹ 4,990.00",
    "details": "Relaxed fit trousers. Front welt pockets and rear pockets. Multifunctional leg pockets. Contrast topstitching detail all over the garment. Front zip fly and button fastening."
  },
  {
    "product_name": "TROUSERS WITH UTILITY POCKETS",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/5575/375/500/2/w/448/5575375500_1_1_1.jpg?ts=1688552338125",
    "price": "₹ 5,990.00",
    "details": "Relaxed fit trousers. Front pockets and rear patch pockets. Multifunctional leg pockets. Adjustable hems with tabs. Front zip fly and button fastening."
  },
  {
    "product_name": "COMFORT FIT JOGGER WAIST TROUSERS",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/5805/623/706/12/w/448/5805623706_1_1_1.jpg?ts=1688716638591",
    "price": "₹ 3,290.00",
    "details": "Regular-fit trousers made of stretch fabric. Elasticated waistband with adjustable drawstring. Side pockets and back welt pocket detail."
  },
  {
    "product_name": "CONTRAST PARACHUTE TROUSERS",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/4164/300/700/2/w/448/4164300700_1_1_1.jpg?ts=1687331172152",
    "price": "₹ 4,990.00",
    "details": "Faded trousers featuring an inner adjustable elasticated waistband. Front pockets and rear patch pockets with flaps. Patch pocket appliqués with flaps on the legs. Adjustable hems with elastic at the sides."
  },
  {
    "product_name": "CARGO PARACHUTE TROUSERS",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/5862/345/818/2/w/448/5862345818_1_1_1.jpg?ts=1691739360450",
    "price": "₹ 4,990.00",
    "details": "Relaxed fit trousers made of textured ripstop fabric that is resistant to tearing. Elastic waistband. Front pockets and rear welt pocket detail. Patch pockets with flaps on the legs. Adjustable hems with elastic on the sides. Front zip fly and button fastening.View more"
  },
  {
    "product_name": "POPLIN PARACHUTE TROUSERS",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/5862/302/821/2/w/448/5862302821_1_1_1.jpg?ts=1691741037888",
    "price": "₹ 3,990.00",
    "details": "Relaxed fit trousers made of cotton poplin. Adjustable elastic waistband. Front pockets and rear patch pockets. Patch pockets on the legs. Adjustable hems with elastic at the sides."
  },
  {
    "product_name": "PARACHUTE CARGO TROUSERS",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/6917/360/800/2/w/448/6917360800_1_1_1.jpg?ts=1687354907376",
    "price": "₹ 3,290.00",
    "details": "Trousers featuring an adjustable elasticated waistband. Front pockets and rear welt pockets. Patch pocket appliqués with flaps on the legs. Pleated knees. Adjustable hems with elastic at the sides."
  },
  {
    "product_name": "LINEN/COTTON TROUSERS",
    "image_url": "https://static.zara.net/photos///2023/V/0/2/p/4432/450/052/2/w/448/4432450052_1_1_1.jpg?ts=1674579479138",
    "price": "₹ 2,990.00",
    "details": "Trousers made of a cotton and linen blend. Elasticated waistband with adjustable drawstring. Front pockets and back welt pockets."
  },
  {
    "product_name": "COTTON-LINEN TROUSERS",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/6861/485/805/12/w/448/6861485805_1_1_1.jpg?ts=1689074007462",
    "price": "₹ 4,990.00",
    "details": "Regular-fit trousers made of cotton and linen blend fabric. Waistband with front pleats. Front pockets and rear pocket details. Front zip fly and top button fastening."
  },
  {
    "product_name": "TEXTURED SUIT TROUSERS",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/0706/361/401/2/w/448/0706361401_1_1_1.jpg?ts=1689681526888",
    "price": "₹ 4,990.00",
    "details": "Straight fit trousers with front pockets and rear jetted pockets with buttons. Front zip fly and button fastening."
  },
  {
    "product_name": "TEXTURED SUIT TROUSERS",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/5725/510/802/2/w/448/5725510802_1_1_1.jpg?ts=1689675754028",
    "price": "₹ 4,990.00",
    "details": "Straight fit trousers featuring front pockets, rear buttoned jetted pockets and zip fly and top button fastening."
  },
  {
    "product_name": "TEXTURED SUIT TROUSERS",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/4585/898/403/2/w/448/4585898403_1_1_1.jpg?ts=1689681528339",
    "price": "₹ 4,990.00",
    "details": "Straight fit trousers featuring front pockets and buttoned welt pockets at the back. Front zip and top button fastening."
  },
  {
    "product_name": "SUIT TROUSERS",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/5735/524/431/2/w/448/5735524431_1_1_1.jpg?ts=1689605447689",
    "price": "₹ 4,990.00",
    "details": "Straight-fit trousers with front pockets and back double-welt pockets. Front zip fly and button fastening."
  },
  {
    "product_name": "SUIT TROUSERS",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/5624/243/500/2/w/448/5624243500_1_1_1.jpg?ts=1690883303116",
    "price": "₹ 4,990.00",
    "details": "Straight fit trousers with front pockets and rear welt pockets. Front zip fly and button fastening."
  },
  {
    "product_name": "CARGO TROUSERS WITH CONTRAST TOPSTITCHING",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/6987/310/500/2/w/448/6987310500_1_1_1.jpg?ts=1690384000464",
    "price": "₹ 3,290.00",
    "details": "Straight fit trousers featuring front pockets, rear patch pockets, patch pockets with flaps on the legs, contrast topstitching all over the garment and front zip fly and top button fastening."
  },
  {
    "product_name": "CARGO TROUSERS WITH CONTRAST TOPSTITCHING",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/5520/374/405/2/w/448/5520374405_1_1_1.jpg?ts=1689926679250",
    "price": "₹ 3,990.00",
    "details": "Straight-fit trousers. Front pockets and back welt pocket detail. Patch pocket appliqués with flaps on the legs. Faded effect. Front zip fly and button fastening."
  },
  {
    "product_name": "CARGO TROUSERS WITH CONTRAST TOPSTITCHING",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/6917/320/505/2/w/448/6917320505_1_1_1.jpg?ts=1689760702006",
    "price": "₹ 4,990.00",
    "details": "Relaxed-fit trousers made of rip stop textured fabric, resistant to tearing. Front pockets and back patch pockets. Faded effect. Patch pockets with flaps on the legs. Contrast topstitching all over the garment. Front zip and button fastening.View more"
  },
  {
    "product_name": "TEXTURED SUIT TROUSERS",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/4026/227/800/2/w/448/4026227800_1_1_1.jpg?ts=1689681787247",
    "price": "₹ 2,990.00",
    "details": "Slim-fit trousers with front pockets and back welt pockets. Turn-up hems. Zip fly and top button fastening."
  },
  {
    "product_name": "LINEN - VISCOSE TROUSERS",
    "image_url": "https://static.zara.net/photos///2023/V/0/2/p/4302/300/800/2/w/448/4302300800_1_1_1.jpg?ts=1683714392429",
    "price": "₹ 2,990.00",
    "details": "Regular-fit trousers made of a viscose and linen blend fabric. Adjustable elasticated waistband. Front pockets and back pockets. Faded effect."
  },
  {
    "product_name": "TEXTURED RELAXED FIT TROUSERS",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/4087/337/712/2/w/448/4087337712_1_1_1.jpg?ts=1691141197401",
    "price": "₹ 3,290.00",
    "details": "Relaxed fit trousers. Adjustable elasticated waistband with drawstring. Side pockets and rear patch pocket detail."
  },
  {
    "product_name": "GEOMETRIC JACQUARD TROUSERS",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/5644/306/100/2/w/448/5644306100_1_1_1.jpg?ts=1691580145860",
    "price": "₹ 3,290.00",
    "details": "Trousers featuring an adjustable elasticated waistband with drawstring. Side pockets and rear patch pocket detail."
  },
  {
    "product_name": "JOGGER WAIST TROUSERS",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/6861/304/520/2/w/448/6861304520_1_1_1.jpg?ts=1688544256229",
    "price": "₹ 4,990.00",
    "details": "Relaxed fit trousers made of cotton fabric. Adjustable elasticated waistband with drawstring. Front pockets and back patch pocket detail."
  },
  {
    "product_name": "PARACHUTE CARGO TROUSERS",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/8281/428/727/2/w/448/8281428727_6_1_1.jpg?ts=1686565058742",
    "price": "₹ 4,990.00",
    "details": "Trousers featuring an adjustable elasticated waistband with a matching belt. Front pockets and a rear welt pocket. Patch pocket appliqués on the leg. Pleated knees. Adjustable hems with elastic at the sides."
  },
  {
    "product_name": "PLEATED SEERSUCKER TROUSERS",
    "image_url": "https://static.zara.net/photos///2023/V/0/2/p/7380/303/800/2/w/448/7380303800_1_1_1.jpg?ts=1679054156788",
    "price": "₹ 3,290.00",
    "details": "Regular-fit trousers with an elasticated adjustable waistband with front pleats. Side pockets and back welt pockets."
  },
  {
    "product_name": "LINEN/COTTON TROUSERS",
    "image_url": "https://static.zara.net/photos///2023/V/0/2/p/8574/347/250/2/w/0/8574347250_1_1_1.jpg?ts=1675265762444",
    "price": "₹ 3,990.00",
    "details": "Slim-fit trousers with an elasticated waistband with matching adjustable drawstrings. Front and back welt pockets. Zip fly and top button fastening."
  },
  {
    "product_name": "COTTON - LINEN TROUSERS",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/5797/592/505/2/w/448/5797592505_1_1_1.jpg?ts=1688369859660",
    "price": "₹ 3,990.00",
    "details": "Trousers made of a cotton and linen blend. Adjustable elasticated waistband with pleated detail on the front. Front pockets and back welt pockets. Zip fly and top button fastening."
  },
  {
    "product_name": "COTTON - LINEN TROUSERS",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/0706/414/730/2/w/0/0706414730_1_1_1.jpg?ts=1688122586506",
    "price": "₹ 3,290.00",
    "details": "Regular-fit trousers made of cotton and linen blend fabric. Elasticated waistband with adjustable drawstring. Front pockets and back patch pockets. Front zip fly and snap button."
  },
  {
    "product_name": "JOGGER WAIST TROUSERS",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/0706/532/500/2/w/448/0706532500_1_1_1.jpg?ts=1691586338897",
    "price": "₹ 4,990.00",
    "details": "Relaxed-fit trousers made of cotton fabric. Adjustable elasticated waistband with drawstring. Front pockets and back patch pockets."
  },
  {
    "product_name": "MODAL BLEND TROUSERS",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/0706/447/807/2/w/448/0706447807_1_1_1.jpg?ts=1689763220663",
    "price": "₹ 3,990.00",
    "details": "Regular-fit trousers made of a modal blend fabric. Featuring an adjustable elasticated waistband with drawstring. Side pockets and rear pocket details."
  },
  {
    "product_name": "JACQUARD TEXTURED TROUSERS",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/4087/365/706/2/w/448/4087365706_1_1_1.jpg?ts=1690810061998",
    "price": "₹ 3,290.00",
    "details": "Relaxed fit trousers with an adjustable elasticated waistband. Front pockets and rear pocket detail."
  },
  {
    "product_name": "VERTICAL TEXTURED TROUSERS",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/5039/301/804/2/w/448/5039301804_1_1_1.jpg?ts=1687337706600",
    "price": "₹ 3,290.00",
    "details": "Relaxed fit trousers with an adjustable elasticated drawstring waistband. Front pockets and rear patch pocket."
  },
  {
    "product_name": "LYOCELL JOGGER WAIST TROUSERS",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/4432/460/518/2/w/448/4432460518_1_1_1.jpg?ts=1690381091228",
    "price": "₹ 3,290.00",
    "details": "Regular fit trousers made of lyocell. Featuring an adjustable elasticated drawstring waistband, front pockets and rear buttoned welt pockets. Front zip fly and top button fastening."
  },
  {
    "product_name": "WIDE FIT TEXTURED TROUSERS",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/3992/326/707/2/w/448/3992326707_2_4_1.jpg?ts=1690538952111",
    "price": "₹ 3,290.00",
    "details": "Wide fit trousers featuring an elasticated waistband with adjustable drawstring, front pockets and a patch pocket detail."
  },
  {
    "product_name": "COTTON - LINEN TROUSERS",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/6917/300/811/2/w/448/6917300811_1_1_1.jpg?ts=1688731458333",
    "price": "₹ 3,290.00",
    "details": "Regular fit trousers made of a cotton and linen blend fabric. Adjustable inner elasticated waistband. Front and back pockets."
  },
  {
    "product_name": "VISCOSE - LINEN TROUSERS",
    "image_url": "https://static.zara.net/photos///2023/V/0/2/p/4432/415/500/2/w/448/4432415500_1_1_1.jpg?ts=1678438145566",
    "price": "₹ 2,990.00",
    "details": "Trousers in a viscose and linen blend fabric. Elasticated adjustable waistband with drawstrings. Front pockets and rear patch pocket detail."
  },
  {
    "product_name": "LINEN-EFFECT TROUSERS",
    "image_url": "https://static.zara.net/photos///2023/V/0/1/p/7147/403/251/2/w/448/7147403251_1_1_1.jpg?ts=1678295617859",
    "price": "₹ 3,990.00",
    "details": "Relaxed-fit trousers. Elasticated waistband with adjustable drawstring. Front pockets and back welt pockets."
  },
  {
    "product_name": "LINEN/COTTON TROUSERS",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/7147/302/052/2/w/448/7147302052_2_1_1.jpg?ts=1691503022604",
    "price": "₹ 3,290.00",
    "details": "Regular fit trousers made of a linen and cotton blend fabric. Elasticated waistband with adjustable drawstring. Front pockets and rear pockets."
  },
  {
    "product_name": "LEAF MOTIF JACQUARD TROUSERS",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/2553/300/711/2/w/448/2553300711_1_1_1.jpg?ts=1688720590938",
    "price": "₹ 3,990.00",
    "details": "Regular-fit trousers featuring an adjustable elasticated waistband with drawstring. Front pockets and rear welt pockets."
  },
  {
    "product_name": "FLOWING TROUSERS",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/3268/304/707/2/w/448/3268304707_1_1_1.jpg?ts=1692174478184",
    "price": "₹ 3,990.00",
    "details": "Relaxed fit trousers made of a modal blend fabric. Featuring an adjustable elasticated waistband with drawstring. Front pockets and rear welt pockets."
  },
  {
    "product_name": "TEXTURED RUSTIC TROUSERS WITH PLEATS",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/6861/321/707/2/w/448/6861321707_1_1_1.jpg?ts=1691483219249",
    "price": "₹ 4,990.00",
    "details": "Trousers made of a cotton blend. Waist with front pleats. Front pockets and back welt pockets with buttons. Front zip fly and top button fastening."
  },
  {
    "product_name": "LINEN - LYOCELL TROUSERS",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/6096/400/707/2/w/448/6096400707_1_1_1.jpg?ts=1689923261327",
    "price": "₹ 4,990.00",
    "details": "Regular fit trousers made of a linen and lyocell blend. Front patch pockets and buttoned welt pockets at the back. Front zip and button fastening."
  },
  {
    "product_name": "BELTED COTTON-LINEN TROUSERS",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/5777/036/807/2/w/448/5777036807_1_1_1.jpg?ts=1689923261184",
    "price": "₹ 4,990.00",
    "details": "Regular fit trousers made of a cotton and linen blend. Waist with front pleats and a belt in the same fabric. Front pockets and rear welt pockets. Front zip and button fastening."
  },
  {
    "product_name": "TEXTURED COTTON - LINEN TROUSERS",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/7484/301/711/2/w/448/7484301711_1_1_1.jpg?ts=1690360446678",
    "price": "₹ 3,990.00",
    "details": "Regular-fit trousers made of cotton and linen blend. Front pockets and back patch pockets with flaps. Front zip fly and top button fastening."
  },
  {
    "product_name": "100% LINEN PLEATED TROUSERS",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/4164/100/711/2/w/489/4164100711_1_1_1.jpg?ts=1688574157811",
    "price": "₹ 5,990.00",
    "details": "Regular fit trousers made of a linen fabric. waistband with front pleated details. Front pockets and rear jetted pockets. Front zip fly and button fastening.Origins special collection.View more"
  },
  {
    "product_name": "LINEN BLEND PARACHUTE TROUSERS",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/6416/314/251/2/w/448/6416314251_1_1_1.jpg?ts=1687337221550",
    "price": "₹ 4,990.00",
    "details": "Trousers made of a linen blend. Adjustable elasticated waistband with an inner elastic drawstring. Front pockets and back patch pockets with flaps. Patch pockets on the legs. Pleated knees. Adjustable hems with elastic drawstring on the sides.View more"
  },
  {
    "product_name": "FADED PARACHUTE TROUSERS",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/2553/307/065/2/w/448/2553307065_1_1_1.jpg?ts=1691072083257",
    "price": "₹ 4,990.00",
    "details": "Relaxed fit faded trousers made of cotton. Adjustable elasticated waistband. Front pockets and rear patch pocket with a flap. Front zip fly and snap-button fastening."
  },
  {
    "product_name": "PARACHUTE TROUSERS",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/5862/360/800/2/w/448/5862360800_1_1_1.jpg?ts=1687354907023",
    "price": "₹ 3,290.00",
    "details": "Trousers with an adjustable elasticated waistband. Front pockets and back patch pockets. Pleats on the knees. Adjustable hem with elastic on the sides."
  },
  {
    "product_name": "ACID WASH PARACHUTE TROUSERS",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/4164/329/515/2/w/448/4164329515_1_1_1.jpg?ts=1687331083577",
    "price": "₹ 3,990.00",
    "details": "Faded trousers featuring an inner adjustable elasticated waistband. Side pockets and rear patch pockets with flaps. Pleated knees. Adjustable hems with elastic at the sides."
  },
  {
    "product_name": "STRIPED TEXTURED TROUSERS",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/4840/401/804/2/w/448/4840401804_1_1_1.jpg?ts=1689756834684",
    "price": "₹ 3,990.00",
    "details": "Regular-fit trousers made of a cotton blend. Adjustable elasticated waistband with drawstring. Front pockets and back welt pockets."
  },
  {
    "product_name": "STRIPED JOGGER WAIST TROUSERS",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/2675/409/104/2/w/448/2675409104_1_1_1.jpg?ts=1688713594510",
    "price": "₹ 3,990.00",
    "details": "Regular-fit trousers made of cotton fabric. Adjustable elasticated waistband with drawstring. Front pockets and rear welt pockets."
  },
  {
    "product_name": "STRIPED TEXTURED TROUSERS",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/6917/402/712/2/w/448/6917402712_1_1_1.jpg?ts=1687856106736",
    "price": "₹ 3,990.00",
    "details": "Trousers made of a linen and cotton blend. Front pockets and back welt pockets. Zip fly and top button fastening."
  },
  {
    "product_name": "100% LINEN TROUSERS",
    "image_url": "https://static.zara.net/photos///2023/V/0/2/p/8574/348/052/2/w/448/8574348052_1_1_1.jpg?ts=1680076347053",
    "price": "₹ 4,990.00",
    "details": "Straight fit trousers made of linen. Waist with front pleat details. Front pockets and rear jetted pockets. Front zip fly and button fastening."
  },
  {
    "product_name": "JUMPSUIT - LIMITED EDITION",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/5827/249/700/2/w/448/5827249700_1_1_1.jpg?ts=1689327624756",
    "price": "₹ 11,990.00",
    "details": "Oversize fit jumpsuit. Lapel collar and long sleeves with buttoned cuffs. Chest patch pockets. Elastic waistband. Front pockets and rear flap pockets. Pleats on the knee. Adjustable elastic hem."
  },
  {
    "product_name": "PARACHUTE TROUSERS - LIMITED EDITION",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/5829/252/706/2/w/448/5829252706_1_1_1.jpg?ts=1689327624477",
    "price": "₹ 5,990.00",
    "details": "Trousers featuring an elasticated waistband with inner adjustable drawstring. Front pockets and rear pockets with flaps. Flap pocket on the leg. Pleated knees. Adjustable elastic hem."
  },
  {
    "product_name": "PARACHUTE TROUSERS - LIMITED EDITION",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/5320/302/712/2/w/448/5320302712_1_1_1.jpg?ts=1689327626468",
    "price": "₹ 4,990.00",
    "details": "Trousers made of technical fabric. Adjustable elasticated drawstring waistband. Front patch pockets and rear flap pockets. Pleated details on the knees. Adjustable drawstring hem. Front zip and button fastening."
  },
  {
    "product_name": "RELAXED FIT TROUSERS - LIMITED EDITION",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/5842/251/401/2/w/448/5842251401_2_1_1.jpg?ts=1689327629721",
    "price": "₹ 4,990.00",
    "details": "Relaxed fit trousers with an elasticated waistband with front pleated details. Front pockets and rear welt pocket details. Hidden metal hook and zip fly front fastening."
  },
  {
    "product_name": "STRAIGHT-FIT FADED TROUSERS",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/1538/309/807/2/w/448/1538309807_1_1_1.jpg?ts=1691746948648",
    "price": "₹ 3,290.00",
    "details": "Straight-fit trousers made of a textured cotton fabric. Front pockets and back patch pockets. Faded effect. Front zip fly and button fastening."
  },
  {
    "product_name": "CARPENTER TROUSERS WITH POCKET",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/1538/427/612/2/w/448/1538427612_1_1_1.jpg?ts=1689760695469",
    "price": "₹ 3,990.00",
    "details": "Straight-fit trousers made of cotton. Front pockets and back patch pockets. Faded effect. Patch pocket appliqué and multifunctional strap on the leg. Contrast topstitching all over the garment. Front zip fly and button fastening.View more"
  },
  {
    "product_name": "TROUSERS WITH FRONT SEAM DETAIL",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/6861/545/710/2/w/448/6861545710_1_1_1.jpg?ts=1691566143603",
    "price": "₹ 4,990.00",
    "details": "Straight-fit trousers. Elasticated waistband. Front pockets and back patch pocket. Seam detail on the front of the legs. Front zip fly and button fastening."
  },
  {
    "product_name": "TEXTURED TROUSERS WITH SEAMS",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/5320/303/800/2/w/448/5320303800_1_1_1.jpg?ts=1692359829447",
    "price": "₹ 3,990.00",
    "details": "Wide-fit trousers made of textured stretch fabric. Front pockets and rear welt pockets. Front seams on the leg. Adjustable hems with zip. Front zip and button fastening."
  },
  {
    "product_name": "PARACHUTE TROUSERS WITH CONTRAST TOPSTITCHING",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/0706/604/800/2/w/448/0706604800_1_1_1.jpg?ts=1688715757226",
    "price": "₹ 4,990.00",
    "details": "Relaxed fit trousers. Adjustable elasticated waistband. Side pockets and rear patch pocket details. Contrast topstitching all over the garment. Adjustable hem with elastic side gores."
  },
  {
    "product_name": "TROUSERS WITH CONTRAST TOPSTITCHING",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/5781/162/800/2/w/448/5781162800_1_1_1.jpg?ts=1688725313193",
    "price": "₹ 4,990.00",
    "details": "Wide fit trousers. Side pockets and rear welt pockets. Contrast topstitching all over the garment. Front zip fly and button fastening."
  },
  {
    "product_name": "TROUSERS WITH CONTRAST PIPING",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/6861/311/800/2/w/448/6861311800_1_1_1.jpg?ts=1689926675416",
    "price": "₹ 3,990.00",
    "details": "Straight fit trousers. Elasticated waistband with adjustable drawstring and front pleats. Side pockets and rear welt pockets. Contrast piping on the legs."
  },
  {
    "product_name": "TROUSERS WITH DOUBLE WAIST",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/8281/323/800/2/w/448/8281323800_1_1_1.jpg?ts=1689926676959",
    "price": "₹ 4,990.00",
    "details": "Wide fit trousers featuring an elastic double waistband, front pleats, front pockets and back pocket details."
  },
  {
    "product_name": "JOGGER WAIST TROUSERS",
    "image_url": "https://static.zara.net/photos///2023/V/0/2/p/1538/450/806/2/w/448/1538450806_1_1_1.jpg?ts=1678983365854",
    "price": "₹ 2,590.00",
    "details": "Relaxed fit trousers. Adjustable elastic waistband with interior drawstring. Front pockets and rear welt pockets. Front zip fly and button fastening. Elastic cuffed hems."
  },
  {
    "product_name": "TEXTURED JOGGER WAIST TROUSERS",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/8574/341/250/2/w/448/8574341250_1_1_1.jpg?ts=1688117601753",
    "price": "₹ 3,290.00",
    "details": "Trousers made of a cotton blend. Elasticated waistband with adjustable drawstrings. Pleated detail at the front of the waist. Front pockets and back pockets. Front zip fly and button fastening."
  },
  {
    "product_name": "COTTON POPLIN TROUSERS",
    "image_url": "https://static.zara.net/photos///2023/I/0/1/p/1063/314/505/2/w/448/1063314505_1_1_1.jpg?ts=1691138283378",
    "price": "₹ 3,990.00",
    "details": "Straight fit trousers made of cotton poplin. Adjustable waist with strap. Front pockets and rear welt pockets."
  },
  {
    "product_name": "COTTON POPLIN TROUSERS",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/6416/316/707/2/w/448/6416316707_1_1_1.jpg?ts=1689256347867",
    "price": "₹ 4,990.00",
    "details": "Straight fit trousers made of cotton poplin. Adjustable waist with a belt in the same fabric and front pleats. Front pockets and patch pockets at the back. Faded effect. Front zip fly and hidden metal hook fastening."
  },
  {
    "product_name": "CHECK SUIT TROUSERS",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/5735/521/707/2/w/448/5735521707_1_1_1.jpg?ts=1689605448931",
    "price": "₹ 4,990.00",
    "details": "Straight fit trousers with front pockets and rear jetted pockets. Front zip fly and button fastening."
  },
  {
    "product_name": "CHECK SUIT TROUSERS",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/1564/381/401/2/w/448/1564381401_1_1_1.jpg?ts=1692353127320",
    "price": "₹ 4,990.00",
    "details": "Straight-fit trousers. Front pockets and rear welt pockets with button detail. Front zip fly and top button fastening."
  },
  {
    "product_name": "RELAXED-FIT STRIPED TROUSERS",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/3991/308/044/2/w/448/3991308044_6_1_1.jpg?ts=1690815453192",
    "price": "₹ 4,990.00",
    "details": "Five-pocket relaxed-fit trousers with front zip fly and top button fastening."
  },
  {
    "product_name": "STRIPED POPLIN TROUSERS",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/3992/340/300/2/w/448/3992340300_1_1_1.jpg?ts=1691146185628",
    "price": "₹ 5,590.00",
    "details": "Relaxed-fit trousers with an elasticated waistband and adjustable drawstring. Patch pocket on the back."
  },
  {
    "product_name": "STRIPED LINEN-VISCOSE TROUSERS",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/3992/342/600/2/w/448/3992342600_1_1_1.jpg?ts=1691415873798",
    "price": "₹ 7,590.00",
    "details": "Relaxed-fit trousers with an adjustable elasticated waistband, a matching fabric belt and a back patch pocket."
  },
  {
    "product_name": "FRAYED TROUSERS",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/2675/314/712/2/w/448/2675314712_1_1_1.jpg?ts=1691418601750",
    "price": "₹ 7,590.00",
    "details": "Trousers made of a cotton blend. Elasticated waistband with adjustable drawstrings. Side pockets at the hip and back jetted pockets. Contrast frayed hems."
  },
  {
    "product_name": "TROUSERS WITH CONTRAST EMBROIDERY",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/0881/316/251/2/w/448/0881316251_1_1_1.jpg?ts=1691419636390",
    "price": "₹ 4,990.00",
    "details": "Trousers made of cotton. Adjustable elasticated waistband with drawstring. Side pockets at the hip and back pockets. Contrast embroidery on the legs."
  },
  {
    "product_name": "WIDE FIT TROUSERS - LIMITED EDITION",
    "image_url": "https://static.zara.net/photos///2023/I/0/2/p/5711/022/401/2/w/448/5711022401_1_1_1.jpg?ts=1688463998810",
    "price": "₹ 8,590.00",
    "details": "Wide fit trousers made of ramie. Adjustable drawstring waistband. Front pleats. Front pockets and rear welt pocket details. Hidden metal hook and zip fly front fastening."
  }
];

module.exports = productsmen;
