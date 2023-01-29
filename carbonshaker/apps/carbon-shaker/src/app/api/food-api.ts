import {OpenFoodproduct, OpenFoodResponse} from "../model/food-model";

export async function fetchProduct(barcode: string) {
  const response = await fetch(`https://world.openfoodfacts.org/api/v0/product/${barcode}.json`);
  const data:OpenFoodResponse = await response.json();
  return data.product;
}
