import {OpenFoodproduct, OpenFoodResponse} from "../model/food-model";

export async function fetchProductAPI(barcode: string) {
  const response = await fetch(`https://world.openfoodfacts.org/api/v0/product/${barcode}.json`);
  const data:OpenFoodResponse = await response.json();
  return data.product;
}

export async function fetchProduct(barcode: string) {
  const response = await fetch(`http://localhost:8080/product/${barcode}`);
  const data:OpenFoodproduct = await response.json();
  return data;
}
