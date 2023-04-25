package com.example.hypestore.service;

import com.example.hypestore.model.Item;
import com.example.hypestore.model.User;
import org.springframework.web.multipart.MultipartFile;
import java.util.List;
import java.util.Optional;

public interface UserService {
    List<User> getAllUsers();
    void deleteUserById(int id);
    User getCurrentUser();
    List<Item> getItemsForCurrentUser();
    Optional<User> getCurrentUser(String userName);
    String changePassword(String oldPassword, String newPassword);
    User changePnumber(String pNumber);
    User changeDescription(String description);
    void addFavItem(int id);
    List<Item> getFavItem();
    void removeFavItem(int id);
    void reserveItem(int id);
    List<Item> getReservedItems();
    void removeReservedItem(int id);
    void rateUser(int id, double rating);
    void profileImage(MultipartFile image);
    byte[] getProfileImage(String filename) throws Exception;
    void addInstagram(String instagram);
    void addFacebook(String facebook);
}
