interface PokemonApiResponse {
  data?: PokemonSet[];
  page?: number;
  pageSize?: number;
  count?: number;
  totalCount?: number;
}

interface PokemonSet {
  id?: string;
  name?: string;
  series?: string;
  printedTotal?: number;
  total?: number;
  legalities?: Legalities;
  ptcgoCode?: string;
  releaseDate?: string;
  updatedAt?: string;
  images?: Images;
}

interface Images {
  symbol?: string;
  logo?: string;
}

interface Legalities {
  unlimited?: string;
  expanded?: string;
  standard?: string;
}

interface PokemonCardApiResponse {
  data?: Pokemon[];
  page?: number;
  pageSize?: number;
  count?: number;
  totalCount?: number;
}

interface Pokemon {
  id?: string;
  name?: string;
  supertype?: string;
  subtypes?: string[];
  hp?: string;
  types?: string[];
  evolvesTo?: string[];
  rules?: string[];
  attacks?: Attack[];
  weaknesses?: Weakness[];
  retreatCost?: string[];
  convertedRetreatCost?: number;
  set?: Set;
  number?: string;
  artist?: string;
  rarity?: string;
  nationalPokedexNumbers?: number[];
  legalities?: Legalities;
  images?: Images2;
  tcgplayer?: Tcgplayer;
}

interface Tcgplayer {
  url?: string;
  updatedAt?: string;
  prices?: Prices;
}

interface Prices {
  holofoil?: Holofoil;
}

interface Holofoil {
  low?: number;
  mid?: number;
  high?: number;
  market?: number;
  directLow?: number;
}

interface Images2 {
  small?: string;
  large?: string;
}

interface Set {
  id?: string;
  name?: string;
  series?: string;
  printedTotal?: number;
  total?: number;
  legalities?: Legalities;
  ptcgoCode?: string;
  releaseDate?: string;
  updatedAt?: string;
  images?: Images;
}

interface Images {
  symbol?: string;
  logo?: string;
}

interface Legalities {
  unlimited?: string;
  expanded?: string;
}

interface Weakness {
  type?: string;
  value?: string;
}

interface Attack {
  name?: string;
  cost?: string[];
  convertedEnergyCost?: number;
  damage?: string;
  text?: string;
}
interface CartCard {
  name: string;
  qty: number;
  price: number;
  img: string;
  totalCard: number;
}
