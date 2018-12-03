package com.lbd.project.Controller;

import com.lbd.project.model.Users;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

import java.util.List;

@Controller
public class memberController {

    

  /*  @Autowired
    private userRepository userRep;
*/

    @GetMapping
    public List<Users> getAllUsers(){
        return null;
    }
}
