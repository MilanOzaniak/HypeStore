package com.example.hypestore.controller;

import com.example.hypestore.model.Item;
import com.example.hypestore.model.ItemBasicInfo;
import com.example.hypestore.service.ItemService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.Optional;
import org.springframework.http.ResponseEntity;

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
        itemService.uploadImage(image);
        return "saved";
    }

    @GetMapping(value = "/getImage/{imageName:.+}", produces = MediaType.APPLICATION_OCTET_STREAM_VALUE)
    public @ResponseBody byte[] getFile(@PathVariable String imageName) throws Exception {
        return itemService.getFile(imageName);
    }

    @GetMapping(value = "/getImages/{id}", produces = MediaType.APPLICATION_OCTET_STREAM_VALUE)
    public @ResponseBody byte[] getFile(@PathVariable int id) throws Exception {
        return itemService.getAllFiles(id);
    }


    @PostMapping("/upload")
    public ResponseEntity<String> uploadFiles(@RequestParam("images") MultipartFile[] files) {
        return itemService.uploadFiles(files);
    }

    @GetMapping("/getItem/{id}")
    public Optional<Item> getCurrentItem(@PathVariable Integer id){
        return itemService.getCurrentItem(id);
    }

    @GetMapping("/del/{id}")
    public void deleteItem(@PathVariable Integer id) throws Exception {
        itemService.deleteItemById(id);
    }

    @PostMapping("/changeItem/{id}")
    public Item changeCurrentItem(@RequestBody ItemBasicInfo itemBasicInfo){
        return itemService.changeCurrentitem(itemBasicInfo);
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
