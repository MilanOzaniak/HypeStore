package com.example.hypestore.service;

import com.example.hypestore.model.Item;
import com.example.hypestore.model.ItemBasicInfo;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;
import java.util.Optional;

public interface ItemService {
    Item createItem(Item item);
    void uploadImage(MultipartFile file) throws IOException;
    List<Item> getAllItems();
    void deleteItemById(int id);
    List<Item> getAllShoes();
    List<Item> getAllClothing();
    List<Item> getAllAccessories();
    Optional<Item> getCurrentItem(int id);
    Item changeCurrentitem(ItemBasicInfo itemBasicInfo);
}
