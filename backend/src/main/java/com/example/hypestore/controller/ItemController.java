package com.example.hypestore.controller;

import com.example.hypestore.model.Item;
import com.example.hypestore.service.ItemService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.util.List;
import java.util.Optional;

@RequestMapping("/item")
@RestController
@CrossOrigin
public class ItemController {

    @Autowired
    private ItemService itemService;

    @PostMapping("/create")
    public Item createItem(@RequestBody Item item){
        return itemService.createItem(item);
    }

    @PostMapping("/uploadImage")
    @ResponseBody
    public String uploadImage(@RequestParam("image")MultipartFile image) throws IOException{
        itemService.uploadItem(image);
        return "saved";
    }

    @GetMapping(value = "/getImage/{imageName:.+}", produces = MediaType.APPLICATION_OCTET_STREAM_VALUE)
    public @ResponseBody byte[] getFile(@PathVariable String imageName) throws Exception {
        try {
            return Files.readAllBytes(Paths.get(System.getProperty("user.dir") + "/files/images/", imageName));
        } catch (IOException e) {
            throw new Exception("Could not read the file. Error: " + e.getMessage());
        }
    }

    @GetMapping("/getItem/{id}")
    public Optional<Item> getCurrentItem(@PathVariable Integer id){
        return itemService.getCurrentItem(id);
    }

    @GetMapping("/del/{id}")
    public void deleteItem(@PathVariable Integer id){
        itemService.deleteItemById(id);
    }

    //filter
    @GetMapping("/getAll")
    public List<Item> listOfItems(){
        return itemService.getAllItems();
    }

    @GetMapping("/getAllShoes")
    public List<Item> getAllShoes(){
        return itemService.getAllShoes();
    }

    @GetMapping("/getAllClothing")
    public List<Item> getAllClothing(){
        return itemService.getAllClothing();
    }

    @GetMapping("/getAllAccessories")
    public List<Item> getAllAccessories(){
        return itemService.getAllAccessories();
    }
    //
}
