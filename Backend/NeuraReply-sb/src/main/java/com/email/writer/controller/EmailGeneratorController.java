package com.email.writer.controller;

import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/email")
@AllArgsConstructor
@CrossOrigin(origins = "*") // used to allow cross-origin requests to Spring Boot backend 5064 from different domains like 5173

public class EmailGeneratorController {
    private final EmailGeneratorService emailGeneratorService;
    @PostMapping("/generate")
    public ResponseEntity<String> generateEmail(@RequestBody EmailRequest emailRequest) {
        String response = emailGeneratorService.generateEmailReply(emailRequest);
        return ResponseEntity.ok(response);
    }

}
