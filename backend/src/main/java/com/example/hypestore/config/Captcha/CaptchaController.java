package com.example.hypestore.config.Captcha;

import com.google.gson.Gson;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.client.RestTemplate;

@Controller
public class CaptchaController {
    private final String CAPTCHA_SECRET = "6LdtKHElAAAAAJuvLG8mwAijwcptJcmQH7rSx1Yi";

    @PostMapping("/verify-captcha")
    public ResponseEntity<String> verifyCaptcha(@RequestBody String token) {
        RestTemplate restTemplate = new RestTemplate();
        String url = "https://www.google.com/recaptcha/api/siteverify";
        String params = "?secret=" + CAPTCHA_SECRET + "&response=" + token;

        ResponseEntity<String> response = restTemplate.postForEntity(url + params, null, String.class);

        Gson gson = new Gson();
        CaptchaResponse captchaResponse = gson.fromJson(response.getBody(), CaptchaResponse.class);

        if (captchaResponse.isSuccess()) {
            return ResponseEntity.ok().build();
        } else {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).build();
        }
    }
}
