package org.digital4better.carbonshakerapi;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cache.annotation.EnableCaching;
import org.springframework.web.bind.annotation.RestController;

@SpringBootApplication
@RestController
@EnableCaching
public class CarbonShakerApiApplication {
	public static void main(String[] args) {
		SpringApplication.run(CarbonShakerApiApplication.class, args);
	}
}
