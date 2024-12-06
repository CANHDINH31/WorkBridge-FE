export interface ItemCategory {
  label: string;
  value: string;
}

export const TYPE = [
  {
    label: 'Seller',
    value: 'seller',
  },
  {
    label: 'Buyer',
    value: 'buyer',
  },
  {
    label: 'Broker',
    value: 'broker',
  },
  {
    label: 'Other',
    value: 'other',
  },
];

export const ROLE = [
  {
    label: 'Seller',
    value: 'seller',
  },
  {
    label: 'Buyer',
    value: 'buyer',
  },
  {
    label: 'Broker',
    value: 'broker',
  },
];

export const SHIPPING_PAID_BY = [
  {
    label: 'Buyer',
    value: 'buyer',
  },
  {
    label: 'Seller',
    value: 'seller',
  },
];

export const CURRENCY = [
  {
    label: 'USD',
    value: 'usd',
  },
  {
    label: 'VND',
    value: 'vnd',
  },
];

export const DISCLOSURE = [
  {
    label: 'Confidential',
    value: 'confidential',
  },
  {
    label: 'Transparent to Buyer Only',
    value: 'buyer',
  },
  {
    label: 'Transparent to Seller Only',
    value: 'seller',
  },
  {
    label: 'Transparent to Buyer and Seller',
    value: 'buyer_and_seller',
  },
];

export const GENDER = [
  { label: 'Female', value: 'female' },
  { label: 'Male', value: 'male' },
  { label: 'Other', value: 'other' },
];

export const ITEM_CATEGORY_TYPE_1 = [
  { label: 'Domain', value: 'domain' },
  { label: 'Website', value: 'website' },
];

export const ITEM_CATEGORY_TYPE_2 = [
  {
    label: 'Cars & Trucks',
    value: 'cars_and_trucks',
  },
  { label: 'Boats', value: 'boats' },
  { label: 'Motorcycles', value: 'motorcycles' },
  { label: 'Airplanes', value: 'airplanes' },
  { label: 'Other Motor Vehicles', value: 'other_moto_vehicles' },
];

export const ITEM_CATEGORY_TYPE_3 = [
  {
    label: 'Antiques & Collectibles',
    value: 'antiques_and_collecibles',
  },
  {
    label: 'Appliances',
    value: 'appliances',
  },
  {
    label: 'Arts & Crafts',
    value: 'arts_and_crafts',
  },
  { label: 'Automotive or Industrial Parts', value: 'automotiv_or_industrial_parts' },
  { label: 'Beauty & Health', value: 'beauty_and_health' },
  { label: 'Books & Magazines', value: 'books_and_magazines' },
  { label: 'Clothing & Accessories', value: 'clothing_and_accessories' },
  { label: 'Computer Hardware & Software', value: 'computer_hardware_and_software' },
  { label: 'Cosmetic Injectables', value: 'cosmetic_injectables' },
  { label: 'Electronics', value: 'electronics' },
  { label: 'Food', value: 'food' },
  { label: 'Furniture', value: 'furniture' },
  { label: 'Heavy Equipment & Machinery', value: 'heavy_quipment_and_machinery' },
  { label: 'Intellectual Property', value: 'intellectual_and_property' },
  { label: 'Ip Addresses', value: 'ip_addresses' },
  { label: 'Jewellery & Watches', value: 'jewellery_and_watches' },
  { label: 'Mobile Apps', value: 'mobile_apps' },
  { label: 'Movies & Music', value: 'movies_and_music' },
  { label: 'Pets & Livestock', value: 'pets_and_livestock' },
  { label: 'Services', value: 'services' },
  { label: 'Social Media Accounts', value: 'social_media_accounts' },
  { label: 'Sports & Recreation', value: 'sports_and_recreation' },
  { label: 'Tickets & Events', value: 'tickets_and_events' },
  { label: 'Tools & Hardware', value: 'tools_and_hardware' },
  { label: 'Toys & Hobbies', value: 'toys_and_hobbies' },
  { label: 'Video Games & Consoles', value: 'video_game_and_consoles' },
];

export const ITEM_CATEGORY = ITEM_CATEGORY_TYPE_1.concat(ITEM_CATEGORY_TYPE_2).concat(ITEM_CATEGORY_TYPE_3);

export const SHIPPING_METHOD = [
  { label: 'Standard Shipping', value: 'standard_shipping' },
  { label: 'Cargo Shipping', value: 'cargo_shipping' },
  { label: 'No Shipping', value: 'no_shipping' },
];

export const WORKBRIDGE_FEE = 50.0;

export const WB_FEE = [
  { value: 'buyer', label: 'Buyer' },
  { value: 'seller', label: 'Seller' },
  { value: 'fair', label: '50% Buyer / 50% Seller' },
];
