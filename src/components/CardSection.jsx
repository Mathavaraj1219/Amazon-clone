import Card from "./Card";

function CardSection() {
  const homeItems = [
  {
    name: "Cushion covers, bedsheets & more",
    image:
      "https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/2024/Gateway/BTFGW/PCQC/New/1x/final/186x116_Home_furnishings_2._SY116_CB555624324_.jpg",
  },
  {
    name: "Figurines, vases & more",
    image:
      "https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/2024/Gateway/BTFGW/PCQC/New/1x/final/186x116_Home_decor_1._SY116_CB555624324_.jpg",
  },
  {
    name: "Home Storage",
    image:
      "https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/2024/Gateway/BTFGW/PCQC/New/1x/final/186x116_Home_storage_1._SY116_CB555624324_.jpg",
  },
  {
    name: "Lighting Solutions",
    image:
      "https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/2024/Gateway/BTFGW/PCQC/New/1x/final/186x116_Home_lighting_2._SY116_CB555624324_.jpg",
  },
];

const applianceItems = [
  {
    name: "Air conditioners",
    image:
      "https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/Appliances-QC-PC-186x116--B08RDL6H79._SY116_CB667322346_.jpg",  
},
  {
    name: "Refrigerators",
    image:
      "https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/Appliances-QC-PC-186x116--B08345R1ZW._SY116_CB667322346_.jpg",
  },
  {
    name: "Microwaves",
    image:
      "https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/Appliances-QC-PC-186x116--B07G5J5FYP._SY116_CB667322346_.jpg",
  },
  {
    name: "Washing machines",
    image:
      "https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/186x116---wm._SY116_CB667322346_.jpg",
  },
];

const bulkOrder = [
  {
    name: "Upto 45% off | Laptops",
    image:
      "https://images-eu.ssl-images-amazon.com/images/G/31/AmazonBusiness/img25/nov/bau/ain/gw/Laptops_186_116_10._SY116_CB777673831_.jpg",
  },
  { 
    name: "Upto 45% off | Kitchen appliances",
    image:
      "https://images-eu.ssl-images-amazon.com/images/G/31/AmazonBusiness/img25/nov/bau/ain/gw/KitchenAppliances_186_116_10._SY116_CB777673831_.jpg",
  },
  {
    name: "Min. 50% off | Office furniture",
    image:
      "https://images-eu.ssl-images-amazon.com/images/G/31/AmazonBusiness/img25/nov/bau/ain/gw/OfficeChairs_186_116_10._SY116_CB777673831_.jpg",
  },
  {
    name: "Min. 50% off | Baby safety essentials",
    image:
      "https://images-eu.ssl-images-amazon.com/images/G/31/PB/GW/PC/PC_QC_372x232_Life-Style_4_1x._SY116_CB788857785_.jpg",
  }
];

const homeEssentials = [
  {
    name: "Cleaning supplies",     
    image:
      "https://images-eu.ssl-images-amazon.com/images/G/31/img18/HomeImprovement/harsmisc/2025/March/Wipes_low_res_V1._SY116_CB549138744_.jpg",
  },
  {
    name: "Bathroom accessories",
    image:
      "https://images-eu.ssl-images-amazon.com/images/G/31/img18/HomeImprovement/harsmisc/2025/March/Shower_heads_low_res_V1._SY116_CB549138744_.jpg",
  },
  {
    name: "Home tools",     
    image:
      "https://images-eu.ssl-images-amazon.com/images/G/31/img18/HomeImprovement/harsmisc/2025/March/Tools_low_res_V1._SY116_CB549138744_.jpg",
  },
  {
    name: "Wallpapers",
    image:
      "https://images-eu.ssl-images-amazon.com/images/G/31/img18/HomeImprovement/harsmisc/2025/March/Wallpapers_low_res_V1._SY116_CB549138744_.jpg",  
  },
];

const amazonBrands = [
  {
    name:"Starting ₹199 | Bedsheets",
    image: "https://images-eu.ssl-images-amazon.com/images/G/31/img23/PB/March/Bikram/PC_QC_HOME_SIZE_186_2._SY116_CB567468236_.jpg",
  },
  {
    name:"Starting ₹199 | Curtains",
    image: "https://images-eu.ssl-images-amazon.com/images/G/31/img23/PB/March/Bikram/PC_QC_HOME_SIZE_186_3._SY116_CB567468236_.jpg",
  },
  {
    name:"Minimum 40% off | Ironing board & more",
    image: "https://images-eu.ssl-images-amazon.com/images/G/31/img23/PB/March/Bikram/PC_QC_HOME_SIZE_186_4._SY116_CB567468236_.jpg",
  },
  {
    name:"Up to 60% off | Home decor",
    image: "https://images-eu.ssl-images-amazon.com/images/G/31/img23/PB/March/Bikram/PC_QC_HOME_SIZE_186_1._SY116_CB567468236_.jpg",
  },
];

const automotive = [
  {
    name:"Cleaning Accessories",
    image: "https://images-eu.ssl-images-amazon.com/images/G/31/img17/Auto/2020/GW/PCQC/Glasscare1X._SY116_CB410830553_.jpg",
  },
  {
    name:"Tyre & rim care",
    image: "https://images-eu.ssl-images-amazon.com/images/G/31/img17/Auto/2020/GW/PCQC/Rim_tyrecare1x._SY116_CB410830552_.jpg",
  },
  {
    name:"Helmets",
    image: "https://images-eu.ssl-images-amazon.com/images/G/31/img17/Auto/2020/GW/PCQC/Vega_helmet_186x116._SY116_CB405090404_.jpg",
  },
  {
    name:"Vaccum Cleaner",
    image: "https://images-eu.ssl-images-amazon.com/images/G/31/img17/Auto/2020/GW/PCQC/Vaccum1x._SY116_CB410830552_.jpg",
  },
];

  return (
    <div className="max-w-7xl mx-auto px-6 -mt-72 mb-8 relative z-10">
      <div className="grid grid-cols-3 gap-6">
        <Card title="Revamp your home in style" items={homeItems} />
        <Card title="Bulk order discounts + Up to 18% GST savings" items={bulkOrder} />
        <Card title="Appliances for your home | Up to 55% off" items={applianceItems} />
        <Card title="Starting ₹49 | Deals on home essentials" items={homeEssentials} />
        <Card title="Starting ₹199 | Amazon Brands & more" items={amazonBrands} />
        <Card title="Automotive Essentials | Up to 60% off" items={automotive} />
      </div>
    </div>
  );
}

export default CardSection;
