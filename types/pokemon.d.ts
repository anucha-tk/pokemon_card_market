interface PokemonApiResponse {
  data: PokemonSet[];
  page: number;
  pageSize: number;
  count: number;
  totalCount: number;
}

interface PokemonSet {
  id: string;
  name: string;
  series: string;
  printedTotal: number;
  total: number;
  legalities: Legalities;
  ptcgoCode?: string;
  releaseDate: string;
  updatedAt: string;
  images: Images;
}

interface Images {
  symbol: string;
  logo: string;
}

interface Legalities {
  unlimited: string;
  expanded?: string;
  standard?: string;
}
