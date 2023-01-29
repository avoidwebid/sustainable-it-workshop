import { useZxing } from "react-zxing";
import {useEffect, useState} from "react";
import {fetchProduct} from "../api/food-api";
import {OpenFoodproduct} from "../model/food-model";
import Product from "../components/product";

export function UniversalShaker() {
  const [barcode, setBarcode] = useState('');
  const [product, setProduct] = useState<OpenFoodproduct | null>(null);
  const { ref } = useZxing({
    onResult(result) {
      setBarcode(result.getText());
    },
  });

  useEffect( () => {
    if (barcode) {
      fetchProduct(barcode)
        .then(p => setProduct(p))
        .catch(e => {console.error('Error fetching product', e)});
    }
  }, [barcode])

  return (
    <>
      <video ref={ref}  width="300"/>
      <p>
        <span>{barcode}</span>
        { product && <Product product={product}/>}
      </p>
    </>
  );
}

export default UniversalShaker
