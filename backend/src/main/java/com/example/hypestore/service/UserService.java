package com.example.hypestore.service;

import com.example.hypestore.model.Item;
import com.example.hypestore.model.User;

import java.util.List;
import java.util.Optional;

public interface UserService {
    List<User> getAllUsers();
    void deleteUserById(int id);
    User getCurrentUser();
    List<Item> getItemsForCurrentUser();
    Optional<User> getCurrentUser(String userName);
}
