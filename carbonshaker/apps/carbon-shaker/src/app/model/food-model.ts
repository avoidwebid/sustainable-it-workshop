export type OpenFoodResponse = {
  code: string;
  product: OpenFoodproduct;
}

export type OpenFoodproduct = {
  product_name: string;
  categories: string;
  ecoscore_data: EcoscoreData
  image_url: string;
}

export type EcoscoreData = {
  agribalyse : {co2_total: number, score: number};
  score: number
}
