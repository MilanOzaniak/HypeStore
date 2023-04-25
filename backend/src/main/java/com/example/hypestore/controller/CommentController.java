package com.example.hypestore.controller;

import com.example.hypestore.service.CommentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RequestMapping("/comment")
@RestController
//@CrossOrigin(origins = "https://milanozaniak.github.io/")
//@CrossOrigin(origins = "http://localhost:3000")
public class CommentController {

    @Autowired
    CommentService commentService;

    @PostMapping("/writeComment")
    public String writeComment(@RequestParam("id") int id, @RequestParam("comment") String comment){
        commentService.writeComment(id, comment);
        return comment;
    }

    @PostMapping("/deleteComment")
    public String deleteComment(@RequestParam("id") int id){
        commentService.deleteComment(id);
        return "deleted comment";
    }

    @PostMapping("/reportComment/{id}")
    public @ResponseBody String reportComment(@PathVariable int id){
        commentService.reportComment(id);
        return "reported comment";
    }

}
