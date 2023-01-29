package org.digital4better.carbonshakerapi.resources;

import org.springframework.cache.annotation.Cacheable;
import org.springframework.web.bind.annotation.*;
import pl.coderion.model.Product;
import pl.coderion.model.ProductResponse;
import pl.coderion.service.OpenFoodFactsWrapper;
import pl.coderion.service.impl.OpenFoodFactsWrapperImpl;

import java.util.Map;


@RestController
public class ProductResources {

  @CrossOrigin
  @GetMapping("/product/{code}")
  @ResponseBody
  @Cacheable("product")
  public ProductBody product(@PathVariable String code) {
    OpenFoodFactsWrapper wrapper = new OpenFoodFactsWrapperImpl();
    ProductResponse productResponse = wrapper.fetchProductByCode(code);
    Product product = productResponse.getProduct();
    var body = new ProductBody();
    body.categories = product.getCategories();
    body.ecoscore_data = (Map<String, Object>) product.getOther().get("ecoscore_data");
    body.product_name = product.getProductName();
    body.image_url = product.getImageUrl();
    return body;
  }
}
