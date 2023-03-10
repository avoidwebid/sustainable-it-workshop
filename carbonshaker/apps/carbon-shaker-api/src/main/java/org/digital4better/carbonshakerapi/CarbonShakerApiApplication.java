package org.digital4better.carbonshakerapi;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.RestController;

@SpringBootApplication
@RestController
public class CarbonShakerApiApplication {
	public static void main(String[] args) {
		SpringApplication.run(CarbonShakerApiApplication.class, args);
	}
}
