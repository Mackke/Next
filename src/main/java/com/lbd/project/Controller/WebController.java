package com.lbd.project.Controller;

import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

@RestController
public class WebController {

        @GetMapping("/greeting")
        public String greeting(@RequestParam(name="name", required=false, defaultValue="World") String name, Model model) {
            model.addAttribute("name", name);
            return "greeting";
        }

        @GetMapping("/index")
        public String test() {
            return "index";
        }
}
