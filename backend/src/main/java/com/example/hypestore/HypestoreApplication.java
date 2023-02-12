package com.example.hypestore;

import com.example.hypestore.repository.UserRepository;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@SpringBootApplication
@EnableJpaRepositories(basePackageClasses = UserRepository.class)
public class HypestoreApplication {

	public static void main(String[] args) {
		SpringApplication.run(HypestoreApplication.class, args);
	}


}
