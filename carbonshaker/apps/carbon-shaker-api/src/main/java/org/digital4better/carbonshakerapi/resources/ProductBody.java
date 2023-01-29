package org.digital4better.carbonshakerapi.resources;

import java.util.Map;

public class ProductBody {
  String product_name;
  String categories;
  Map<String, Object> ecoscore_data;
  String image_url;

  public String getProduct_name() {
    return product_name;
  }

  public String getCategories() {
    return categories;
  }

  public Map<String, Object> getEcoscore_data() {
    return ecoscore_data;
  }

  public String getImage_url() {
    return image_url;
  }
}
