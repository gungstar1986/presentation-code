export interface BeerInterface {
  id: number;
  name: string;
  tagline: string;
  first_brewed: string;
  description: string;
  image_url: string;
  abv: number;
  ibu: number;
  target_fg: number;
  target_og: number;
  ebc: number;
  srm: number;
  ph: number;
  attenuation_level: number;
  volume: Volume;
  boil_volume: BoilVolume;
  method: Method;
  ingredients: Ingredients;
  food_pairing: string[];
  brewers_tips: string;
  contributed_by: string;
}

export interface Volume {
  value: number;
  unit: string;
}

export interface BoilVolume {
  value: number;
  unit: string;
}

export interface Method {
  mash_temp: MashTemp[];
  fermentation: Fermentation;
  twist?: string | null;
}

export interface MashTemp {
  temp: {
    value: number;
    unit: string;
  };
  duration: number;
}

export interface Fermentation {
  temp: {
    value: number;
    unit: string;
  };
}

export interface Ingredients {
  malt: Malt[];
  hops: Hops[];
  yeast: string;
}

export interface Malt {
  name: string;
  amount: {
    value: number;
    unit: string;
  };
}

export interface Hops {
  name: string;
  amount: {
    value: number;
    unit: string;
  };
  add: string;
  attribute: string;
}

export interface Query {
  page: number;
  per_page: number;
}

export interface Paginate {
  prev: number;
  curr: number;
  next: number;
  per_page: number;
}
