package com.example.hypestore.controller;

import com.example.hypestore.model.Item;
import com.example.hypestore.model.User;
import com.example.hypestore.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/user")
@CrossOrigin
public class UserController {

    @Autowired
    private UserService userService;


    @GetMapping("/getAll")
    public List<User> getAllUsers(){
        return userService.getAllUsers();
    }

    @GetMapping("/getUser/{userName}")
    public Optional<User> getCurrentUser(@PathVariable String userName){
        return userService.getCurrentUser(userName);
    }

    @GetMapping("/del/{id}")
    public String deleteUser(@PathVariable("id") int id)
    {

        userService.deleteUserById(id);
        return "User was deleted";
    }

    @GetMapping("/getItems")
    public List<Item> getItems(){
        return userService.getItemsForCurrentUser();
    }

    @GetMapping("/get")
    public String getUser(){
        return userService.getCurrentUser().toString() + userService.getItemsForCurrentUser();
    }



}
