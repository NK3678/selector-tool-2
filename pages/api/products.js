// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  if (req.method == "GET") {
    let products = [
      {
        id: 1,
        name: "DS8108",
        note: "",
        imageURL:"https://www.zebra.com/content/dam/zebra_dam/global/zcom-web-production/web-production-photography/product-cards/model/ds8108-3x2-3600.jpg.imgw.3600.3600.jpg",
        productPage:
          "https://www.zebra.com/us/en/products/scanners/general-purpose-scanners/handheld/ds8100-series.html",
        specSheetURL:
          "https://www.zebra.com/content/dam/zebra_new_ia/en-us/solutions-verticals/product/barcode-scanners/Handheld Scanners/zebra-ds8100-series/spec-sheets/ds8100-specification-sheet-en-us.pdf",
        level: [
          { levelId: 1, categoryId: "1,5" },
          { levelId: 2, categoryId: "1,3,4" },
          { levelId: 3, categoryId: "1,4" },
          { levelId: 4, categoryId: "1,2" },
          { levelId: 5, categoryId: "1,2" },
          { levelId: 6, categoryId: "1,2" },
          { levelId: 7, categoryId: "1,2,3,4" },
        ],
      },
      {
        id: 2,
        name: "DS8178",
        note: "",
        imageURL:"https://www.zebra.com/content/dam/zebra_dam/global/zcom-web-production/web-production-photography/product-cards/model/ds8178-3x2-3600.jpg.imgw.3600.3600.jpg",
        productPage:
          "https://www.zebra.com/us/en/products/scanners/general-purpose-handheld-scanners/ds8100-series.html",
        specSheetURL:
          "https://www.zebra.com/content/dam/zebra_new_ia/en-us/solutions-verticals/product/barcode-scanners/Handheld%20Scanners/zebra-ds8100-series/spec-sheets/ds8100-spec-sheet-en-us.pdf",
        level: [
          { levelId: 1, categoryId: "1,4,5" },
          { levelId: 2, categoryId: "1,3,4,5,6,15,17,19,20" },
          { levelId: 3, categoryId: "1,2,4,6,7,20,21,23,24,25" },
          { levelId: 4, categoryId: "1,2,3" },
          { levelId: 5, categoryId: "1,3" },
          { levelId: 6, categoryId: "1,2" },
          { levelId: 7, categoryId: "1,2,3,4,12" },
        ],
      },
      {
        id: 3,
        name: "DS2208",
        note: "",
        imageURL:"https://www.zebra.com/content/dam/zebra_dam/global/zcom-web-production/web-production-photography/product-cards/model/ds2208-3x2-3600.jpg.imgw.3600.3600.jpg",
        productPage:
          "https://www.zebra.com/us/en/products/scanners/general-purpose-scanners/handheld/ds2200-series.html",
        specSheetURL:
          "https://www.zebra.com/content/dam/zebra_new_ia/en-us/solutions-verticals/product/barcode-scanners/Handheld%20Scanners/zebra-ds2200-series/spec-sheets/ds2200-specification-sheet-en-us.pdf",
        level: [
          { levelId: 1, categoryId: "1,5" },
          { levelId: 2, categoryId: "1,2,3,4,18" },
          { levelId: 3, categoryId: "1,4,7,23,24" },
          { levelId: 4, categoryId: "1,2" },
          { levelId: 5, categoryId: "1,2" },
          { levelId: 6, categoryId: "1,2" },
          { levelId: 7, categoryId: "1,12" },
        ],
      },
      {
        id: 4,
        name: "DS2278",
        note: "This product becomes handsfree when used with the Presentation Cradle",
        imageURL:"https://www.zebra.com/content/dam/zebra_dam/global/zcom-web-production/web-production-photography/product-cards/model/ds2278-3x2-3600.jpg.imgw.3600.3600.jpg",
        productPage:
          "https://www.zebra.com/us/en/products/scanners/general-purpose-scanners/handheld/ds2200-series.html",
        specSheetURL:
          "https://www.zebra.com/content/dam/zebra_new_ia/en-us/solutions-verticals/product/barcode-scanners/Handheld%20Scanners/zebra-ds2200-series/spec-sheets/ds2200-specification-sheet-en-us.pdf",
        level: [
          { levelId: 1, categoryId: "1,4,5" },
          { levelId: 2, categoryId: "1,2,3,4,5,6,15,17,19,20" },
          { levelId: 3, categoryId: "1,4,7,20,21,23,24,25" },
          { levelId: 4, categoryId: "1,2,3" },
          { levelId: 5, categoryId: "1,2" },
          { levelId: 6, categoryId: "1,3" },
          { levelId: 7, categoryId: "1,12" },
        ],
      },
      {
        id: 5,
        name: "DS3608-HD",
        note: "",
        imageURL:"https://img.en25.com/EloquaImages/clients/ZebraTechnologiesCorp/%7B43e3c53a-5000-4eb1-8f0a-dac8819cdd8e%7D_DS3608-HD.png",
        productPage:
          "https://www.zebra.com/ap/en/products/scanners/ultra-rugged-scanners/ds36x8-hd.html",
        specSheetURL:
          "https://www.zebra.com/content/dam/zebra_new_ia/en-us/solutions-verticals/product/barcode-scanners/ultra-rugged-scanners/3600-series-ultra-rugged-industrial-scanners/ds36x8-hd-ultra-rugged-high-density/spec-sheet/ds36x8-hd-specification-sheet-en-us.pdf",
        level: [
          { levelId: 1, categoryId: "2,4" },
          { levelId: 2, categoryId: "7,8,14,16" },
          { levelId: 3, categoryId: "8,11,12,19" },
          { levelId: 4, categoryId: "1,2" },
          { levelId: 5, categoryId: "1,2" },
          { levelId: 6, categoryId: "1,2" },
          { levelId: 7, categoryId: "1,3,12,13,15,16" },
        ],
      },
      {
        id: 6,
        name: "DS9908-HD",
        note: "",
        imageURL:"https://img.en25.com/EloquaImages/clients/ZebraTechnologiesCorp/%7Ba83c5f78-a4c2-435e-88b3-4858a3d34352%7D_DS9908-HD.png",
        productPage:
          "https://www.zebra.com/us/en/products/scanners/general-purpose-hands-free-scanners/ds9900-series.html",
        specSheetURL:
          "https://www.zebra.com/us/en/products/spec-sheets/scanners/general-purpose-scanners/ds9908hd-ds9908hd-r.html",
        level: [
          { levelId: 1, categoryId: "3" },
          { levelId: 2, categoryId: "5,11" },
          { levelId: 3, categoryId: "13,15,16,17" },
          { levelId: 4, categoryId: "1,2,3" },
          { levelId: 5, categoryId: "1,2,4" },
          { levelId: 6, categoryId: "1,2" },
          { levelId: 7, categoryId: "1,3,4,12,13,22" },
        ],
      },
    ];
    res.status(200).json(products);
  }
}
