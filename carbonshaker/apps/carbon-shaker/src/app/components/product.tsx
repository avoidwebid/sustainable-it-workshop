import {OpenFoodproduct} from "../model/food-model";

type ProductPros = {
  product: OpenFoodproduct;
}

export function Product({product}: ProductPros) {
  return (
    <>
      <div>
        Produit : {product.product_name}
      </div>
      <div>
        Description: {product.categories}
      </div>
      <div>
        <img src={product.image_url}/>
      </div>
      <div>
        Ecoscore: {product.ecoscore_data.score} / 100
      </div>
      <div>
        KgCO2: {product.ecoscore_data.agribalyse.co2_total}
      </div>
    </>
  )
}

export default Product
