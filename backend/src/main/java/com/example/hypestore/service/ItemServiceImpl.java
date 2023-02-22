package com.example.hypestore.service;

import com.example.hypestore.model.Item;
import com.example.hypestore.model.ItemBasicInfo;
import com.example.hypestore.repository.ItemRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;
import com.example.hypestore.model.ItemBasicInfo;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

@Service
public class ItemServiceImpl implements ItemService {

    String fileName;

    @Autowired
    private ItemRepository itemRepository;
    @Autowired
    private UserService userService;

    public static String uploadDirectory = System.getProperty("user.dir") + "/files/images";

    @Override
    public void uploadImage(MultipartFile image){
        fileName = image.getOriginalFilename();
        Path fileNameAndPath = Paths.get(uploadDirectory,fileName);
        try {
            Files.write(fileNameAndPath, image.getBytes());
        } catch (IOException e) {
            e.printStackTrace();
        }
    }

    @Override
    public Item createItem(Item item) {
        item.setUser(userService.getCurrentUser());
        item.setUserName(userService.getCurrentUser().getUserName());
        item.setDate(LocalDate.now());
        return itemRepository.save(item);
    }

    @Override
    public Optional<Item> getCurrentItem(int id){
        return itemRepository.findById(id);
    }

    @Override
    public Item changeCurrentitem(ItemBasicInfo itemBasicInfo){
        Item item1 = itemRepository.findById(itemBasicInfo.getId()).get();
        item1.setTitle(itemBasicInfo.getTitle());
        item1.setPrice(itemBasicInfo.getPrice());
        item1.setSize(itemBasicInfo.getSize());
        item1.setCategory(itemBasicInfo.getCategory());
        item1.setDescription(itemBasicInfo.getDescription());
        itemRepository.save(item1);
        return item1;
    }

    //filter
    @Override
    public List<Item> getAllItems() {
        return itemRepository.findAll(Sort.by(Sort.Direction.DESC, "id"));
    }

    @Override
    public List<Item> getAllShoes() {
        return itemRepository.findByCategoryEqualsOrderByIdDesc("Shoes");
    }

    @Override
    public List<Item> getAllClothing() {
        return itemRepository.findByCategoryEqualsOrderByIdDesc("Clothing");
    }

    @Override
    public List<Item> getAllAccessories() {
        return itemRepository.findByCategoryEqualsOrderByIdDesc("Accessories");
    }

    //

    @Override
    public void deleteItemById(int id) {
        itemRepository.deleteById(id);
    }
}
