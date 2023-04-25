package com.example.hypestore.controller;

import com.example.hypestore.model.Item;
import com.example.hypestore.model.ItemBasicInfo;
import com.example.hypestore.service.ItemService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import java.io.IOException;
import java.util.List;
import java.util.Optional;
import org.springframework.http.ResponseEntity;

@RequestMapping("/item")
@RestController
//@CrossOrigin(origins = "https://milanozaniak.github.io/")
//@CrossOrigin(origins = "http://localhost:3000")
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

    @PostMapping("/del")
    public void deleteItem(@RequestParam("id") Integer id) throws Exception {
        itemService.deleteItemById(id);
    }

    @PostMapping("/changeItem/{id}")
    public Item changeCurrentItem(@RequestBody ItemBasicInfo itemBasicInfo){
        return itemService.changeCurrentitem(itemBasicInfo);
    }


    //filter

    //all
    @GetMapping("/getAll")
    public List<Item> listOfItems(){
        return itemService.getAllItems();
    }
    //shoes
    @GetMapping("/getAllShoes")
    public List<Item> getAllShoes(){
        return itemService.getAllShoes();
    }
    //clothing
    @GetMapping("/getAllClothing")
    public List<Item> getAllClothing(){
        return itemService.getAllClothing();
    }
    //accessories
    @GetMapping("/getAllAccessories")
    public List<Item> getAllAccessories(){
        return itemService.getAllAccessories();
    }


    //PRICE
    @GetMapping("/getShoesByPriceAsc")
    public List<Item> getShoesByPriceAsc(){
        return itemService.getShoesByPriceAsc();
    }

    @GetMapping("/getShoesByPriceDesc")
    public List<Item> getShoesByPriceDesc(){
        return itemService.getShoesByPriceDesc();
    }

    @GetMapping("/getClothingByPriceAsc")
    public List<Item> getClothingByPriceAsc(){
        return itemService.getClothingByPriceAsc();
    }

    @GetMapping("/getClothingByPriceDesc")
    public List<Item> getClothingByPriceDesc(){
        return itemService.getClothingByPriceDesc();
    }

    @GetMapping("/getAccessoriesByPriceDesc")
    public List<Item> getAccessoriesByPriceDesc(){
        return itemService.getAccessoriesByPriceDesc();
    }

    @GetMapping("/getAccessoriesByPriceAsc")
    public List<Item> getAccessoriesByPriceAsc(){
        return itemService.getAccessoriesByPriceAsc();
    }
    //PRICE


    //SIZE
    @GetMapping("/getShoesBySize/{size}")
    public List<Item> getShoesBySizeAsc(@PathVariable String size){
        return itemService.getShoesBySize(size);
    }


    @GetMapping("/getClothingBySize/{size}")
    public List<Item> getClothingBySize(@PathVariable String size){
        return itemService.getClothingBySize(size);
    }


    @GetMapping("/getAccessoriesBySize/{size}")
    public List<Item> getAccessoriesBySize(@PathVariable String size){
        return itemService.getAccessoriesBySize(size);
    }
    //SIZE


    //LOCATION
    @GetMapping("/getShoesByLocation/{location}")
    public List<Item> getShoesByLocation(@PathVariable String location){
        return itemService.getShoesByLocation(location);
    }

    @GetMapping("/getClothingByLocation/{location}")
    public List<Item> getClothingByLocation(@PathVariable String location){
        return itemService.getClothingByLocation(location);
    }

    @GetMapping("/getAccessoriesByLocation/{location}")
    public List<Item> getAccessoriesByLocation(@PathVariable String location){
        return itemService.getAccessoriesByLocation(location);
    }

    @GetMapping("/getShoesByGender/{gender}")
    public List<Item> getShoesByGender(@PathVariable String gender){
        return itemService.getShoesByGender(gender);
    }

    @GetMapping("/getClothingByGender/{gender}")
    public List<Item> getClothingByGender(@PathVariable String gender){
        return itemService.getClothingByGender(gender);
    }

    @GetMapping("/getAccessoriesByGender/{gender}")
    public List<Item> getAccessoriesByGender(@PathVariable String gender){
        return itemService.getAccessoriesByGender(gender);
    }


    @GetMapping("/getOldestShoes")
    public List<Item> getOldestShoes(){
        return itemService.getOldestShoes();
    }

    @GetMapping("/getOldestClothing")
    public List<Item> getOldestClothing(){
        return itemService.getOldestClothing();
    }

    @GetMapping("/getOldestAccessories")
    public List<Item> getOldestAccessories(){
        return itemService.getOldestAccessories();
    }

    //
}
