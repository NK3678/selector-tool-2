export default function handler(req, res) {
  if (req.method == "GET") {
    let industries = [
      {
        id:1,
        name: 'In which industry do you work?', data: [
          { id: 1, name: "Retail", parentId: "0", moreInfo:''},
          { id: 2, name: "Manufacturing & Warehouse", parentId: "0", moreInfo:'' },
          { id: 3, name: "Healthcare", parentId: "0", moreInfo:'' },
          { id: 4, name: "Transportation & Logistics", parentId: "0", moreInfo:'' },
          { id: 5, name: "Hospitatlity & Others", parentId: "0", moreInfo:'' },
        ],
        multi: false,
        showResult: false,
        label:"Industry",
      },
      {
        id:2,
        name: 'Where do you work?', data: [
          { id: 1, name: "Small Store", parentId: "1", moreInfo:'Mom and Pop shop / Boutique' },
          { id: 2, name: "Convenience store", parentId: "1", moreInfo:'' },
          { id: 3, name: "Department store", parentId: "1", moreInfo:'' },
          { id: 4, name: "Big Box store", parentId: "1", moreInfo:'' },
          { id: 5, name: "Pharmacy", parentId: "1", moreInfo:'' },
          { id: 6, name: "Grocery", parentId: "1", moreInfo:'' },
          { id: 7, name: "Warehouse", parentId: "2,4", moreInfo:'' },
          { id: 8, name: "Factory Floor", parentId: "2", moreInfo:'' },
          { id: 9, name: "Hospital", parentId: "3", moreInfo:'' },
          { id: 10, name: "Pharmacy", parentId: "3", moreInfo:'' },
          { id: 11, name: "Lab", parentId: "3", moreInfo:'' },
          { id: 12, name: "Specialist Physician & General Physician", parentId: "3", moreInfo:'' },
          { id: 14, name: "Fleet & Deliver", parentId: "4" , moreInfo:''},
          { id: 15, name: "Transportation for Travel", parentId: "4", moreInfo:'Airport, bus, rail, maritime, car' },
          { id: 16, name: "Freight", parentId: "4" , moreInfo:''},
          { id: 17, name: "Restaurant/Quick Serve", parentId: "5" , moreInfo:''},
          { id: 18, name: "Hotel/Resort", parentId: "5" , moreInfo:''},
          { id: 19, name: "Casino", parentId: "5", moreInfo:'' },
          { id: 20, name: "Entertainment", parentId: "5" , moreInfo:''},
        ],
        multi: false,
        showResult: false,
        label:"Environment",
      },
      {
        id:3,
        name: 'How will you use your data capture solution?', data: [
          { id: 1, name: "POS", parentId: "1,5", moreInfo:'' },
          { id: 2, name: "Inventory Mgmt. / Backroom", parentId: "1", moreInfo:'' },
          { id: 3, name: "Self Checkout", parentId: "1", moreInfo:'' },
          { id: 4, name: "Loyalty Applications / Coupons", parentId: "1", moreInfo:'' },
          { id: 5, name: "Self-serve scanning", parentId: "1,5" , moreInfo:'Price check, in-aisle loyalty, couponing'},
          { id: 6, name: "Age Verification / Compliance / Returns", parentId: "1", moreInfo:'' },
          { id: 7, name: "Shipping & Receiving", parentId: "2,4", moreInfo:'' },
          { id: 8, name: "Work-in-Progress (WIP)", parentId: "2", moreInfo:'' },
          { id: 9, name: "Putaway / Pick and Pack", parentId: "2,4" , moreInfo:''},
          { id: 10, name: "Product and Component Tracking", parentId: "2", moreInfo:'' },
          { id: 11, name: "Quality control and Error-Proofing", parentId: "2" , moreInfo:''},
          { id: 12, name: "Production Line", parentId: "2" , moreInfo:''},
          { id: 13, name: "Patient Admission / Identification", parentId: "3" , moreInfo:''},
          { id: 14, name: "Medication Administration", parentId: "3", moreInfo:'' },
          { id: 15, name: "Specimen Collection / Labeling / Tracking", parentId: "3", moreInfo:'' },
          { id: 16, name: "Pharmacy Medication Tracking", parentId: "3" , moreInfo:''},
          { id: 17, name: "Electronic Healthcare Record Access", parentId: "3", moreInfo:'' },
          { id: 18, name: "Mobile Phlebotomy Cart Based", parentId: "3", moreInfo:'' },
          { id: 19, name: "Product Tracking", parentId: "4", moreInfo:'' },
          { id: 20, name: "Ticketing", parentId: "4,5", moreInfo:'Airports, train and bus terminals' },
          { id: 21, name: "Postal", parentId: "4" , moreInfo:''},
          { id: 22, name: "Transportation cross dock", parentId: "4" , moreInfo:''},
          { id: 23, name: "Check-in / Administration", parentId: "5" , moreInfo:''},
          { id: 24, name: "Loyalty cards", parentId: "5" , moreInfo:''},
          { id: 25, name: "Lottery and gaming", parentId: "5" , moreInfo:''},
        ],
        multi: true,
        showResult: false,
        label:"Application",
      },
      {
        id:4,
        name: 'Select a type of device.', data: [
          { id: 1, name: "I Don’t Know", parentId: "1,2,3,4,5" , moreInfo:''},
          { id: 2, name: "Handheld", parentId: "1,2,3,4,5" , moreInfo:''},
          { id: 3, name: "Handsfree / On Counter", parentId: "1,2,3,4,5", moreInfo:'' },
          { id: 4, name: "Companion", parentId: "1,2,3,4,5", moreInfo:'' },
          { id: 5, name: "In Counter", parentId: "1,2,3,4,5" , moreInfo:''},
          { id: 6, name: "Fixed Mount", parentId: "1,2,3,4,5" , moreInfo:''},
        ],
        multi: false,
        showResult: false,
        label:"Type of Device",
      },
      {
        id:5,
        name: 'Tell us what type of data you need to read?', data: [
          { id: 1, name: "I Don’t Know", parentId: "1,2,3,4,5", moreInfo:'' },
          { id: 2, name: "1D & 2D", parentId: "1,2,3,4,5", moreInfo:'' },
          { id: 3, name: "1D only", parentId: "1,2,3,4,5", moreInfo:'' },
          { id: 4, name: "RFID / 1D / 2D", parentId: "1,2,3,4,5", moreInfo:'' },
        ],
        multi: false,
        showResult: false,
        label:"Type of Data",
      },
      {
        id:6,
        name: 'Do you need a mobile or a fixed device?', data: [
          { id: 1, name: "I Don’t Know", parentId: "1,2,3,4,5", moreInfo:'' },
          { id: 2, name: "Corded", parentId: "1,2,3,4,5" , moreInfo:''},
          { id: 3, name: "Cordless", parentId: "1,2,3,4,5", moreInfo:'' }
        ],
        multi: false,
        showResult: false,
        label:"Mobile or Fixed",
      },
      {
        id:7,
        name: 'What other features would prove helpful?', data: [
          { id: 1, name: "I Don’t Know", parentId: "1,2,3,4,5", moreInfo:'' },
          { id: 2, name: "Integrated support for Digimarc", parentId: "1", moreInfo:'' },
          { id: 3, name: "Small high density barcodes", parentId: "1", moreInfo:'' },
          { id: 4, name: "Intelligent Document Capture", parentId: "1,2,4", moreInfo:'' },
          { id: 5, name: "RFID", parentId: "1,3", moreInfo:'' },
          { id: 6, name: "Touch screen", parentId: "1,5", moreInfo:'' },
          { id: 7, name: "PowerCap", parentId: "1,3", moreInfo:'' },
          { id: 8, name: "Label Parse+", parentId: "1,2,4", moreInfo:'' },
          { id: 9, name: "Virtual Tether", parentId: "1,3", moreInfo:'' },
          { id: 10, name: "Keyboard and Display", parentId: "1,2,4", moreInfo:'' },
          { id: 11, name: "Color Camera", parentId: "1", moreInfo:'' },
          { id: 12, name: "Reads mobile barcodes", parentId: "1,4,5", moreInfo:'' },
          { id: 13, name: "High density", parentId: "2,4", moreInfo:'' },
          { id: 14, name: "Direct Part Marks", parentId: "2", moreInfo:'' },
          { id: 15, name: "Connection to Industrial Ethernet Network", parentId: "2", moreInfo:'' },
          { id: 16, name: "Ultra rugged", parentId: "2,4", moreInfo:'' },
          { id: 17, name: "Extended range", parentId: "2,4", moreInfo:'' },
          { id: 18, name: "Day and night modes", parentId: "3" , moreInfo:''},
          { id: 19, name: "Disinfectant Ready", parentId: "3", moreInfo:'' },
          { id: 21, name: "Pocketable Form Factor", parentId: "3", moreInfo:'' },
          { id: 22, name: "UDI Scan+", parentId: "3", moreInfo:'' },
          { id: 23, name: "Blood Bag Parse+", parentId: "3", moreInfo:'' },
          { id: 24, name: "Lamp Mode", parentId: "3", moreInfo:'' },
          { id: 25, name: "Tiny Footprint", parentId: "4,5", moreInfo:'' },
          { id: 26, name: "Integrated Kiosk", parentId: "5", moreInfo:'' },

        ],
        multi: true,
        showResult: true,
        label:"Add Features",
      }
    ];
    res.status(200).json({ industries });
  }
}
