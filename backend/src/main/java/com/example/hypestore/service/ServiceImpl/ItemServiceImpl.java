package com.example.hypestore.service.ServiceImpl;

import com.example.hypestore.model.Item;
import com.example.hypestore.model.ItemBasicInfo;
import com.example.hypestore.model.User;
import com.example.hypestore.repository.ItemRepository;
import com.example.hypestore.repository.UserRepository;
import com.example.hypestore.service.ItemService;
import com.example.hypestore.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.Optional;

@Service
public class ItemServiceImpl implements ItemService {

    String fileName;

    @Autowired
    private ItemRepository itemRepository;
    @Autowired
    private UserService userService;
    @Autowired
    private UserRepository userRepository;

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
    public ResponseEntity<String> uploadFiles(MultipartFile[] files){
        String message = "";
        try {
            List<String> fileNames = new ArrayList<>();

            Arrays.stream(files).forEach(file -> {
                uploadImage(file);
                fileNames.add(file.getOriginalFilename());
            });

            message = "Uploaded the files successfully: " + fileNames;
            return ResponseEntity.status(HttpStatus.OK).body(message);
        } catch (Exception e) {
            message = "Fail to upload files!";
            return ResponseEntity.status(HttpStatus.EXPECTATION_FAILED).body(message);
        }

    }

    @Override
    public byte[] getFile(String imageName) throws Exception {
        try {
            return Files.readAllBytes(Paths.get(System.getProperty("user.dir") + "/files/images/", imageName));
        } catch (IOException e) {
            throw new Exception("Could not read the file. Error: " + e.getMessage());
        }
    }

    @Override
    public byte[] getAllFiles(int id) throws IOException {
        Item item = itemRepository.findById(id).get();
        byte[] bytes = {};
            for (int i = 0; i < item.getImageNames().size(); i++) {
                bytes = Files.readAllBytes(Paths.get(System.getProperty("user.dir") + "/files/images/", item.getImageNames().get(i)));
            }
            return bytes;
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

    @Override
    public void deleteItemById(int id) throws Exception {
        Item item = itemRepository.findById(id).get();
        for(int i = 0; i < item.getImageNames().size(); i++){
            Files.delete(Paths.get(System.getProperty("user.dir") + "/files/images/", item.getImageNames().get(i)));
        }
        itemRepository.deleteById(id);

    }


}
