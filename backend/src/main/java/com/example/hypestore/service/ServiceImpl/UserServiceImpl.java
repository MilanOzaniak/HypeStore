package com.example.hypestore.service.ServiceImpl;

import com.example.hypestore.model.Comment;
import com.example.hypestore.model.Item;
import com.example.hypestore.model.User;
import com.example.hypestore.repository.ItemRepository;
import com.example.hypestore.repository.UserRepository;
import com.example.hypestore.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UserServiceImpl implements UserService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Autowired
    private ItemRepository itemRepository;

    @Override
    public List<User> getAllUsers() {
        return userRepository.findAll();
    }

    @Override
    public Optional<User> getCurrentUser(String userName){
        return userRepository.findByUserName(userName);
    }

    @Override
    public void deleteUserById(int id)
    {
        userRepository.deleteById(id);
    }

    @Override
    public User getCurrentUser() {
        String username = SecurityContextHolder.getContext().getAuthentication().getName();
        return userRepository.findByUserName(username).get();
    }

    @Override
    public List<Item> getItemsForCurrentUser() {
        return userRepository.findByUserName(getCurrentUser().getUserName()).get().getItems();
    }

    @Override
    public String changePassword(String oldPassword, String newPassword) {
        User user = userRepository.findByUserName(getCurrentUser().getUserName()).get();
        if (passwordEncoder.matches(oldPassword, user.getPassword())) {
            user.setPassword(passwordEncoder.encode(newPassword));
            userRepository.save(user);
            return "success";
        }
        return "failed";
    }

    @Override
    public User changePnumber(String pNumber){
        User user = userRepository.findByUserName(getCurrentUser().getUserName()).get();
        user.setPnumber(pNumber);
        return userRepository.save(user);

    }

    @Override
    public User changeDescription(String description){
        User user = userRepository.findByUserName(getCurrentUser().getUserName()).get();
        user.setDescription(description);
        return userRepository.save(user);

    }

    @Override
    public void addFavItem(int id){
        User user = getCurrentUser();
        Item item = itemRepository.findById(id).get();
        List<Item> items = user.getFavItems();
        items.add(item);
        user.setFavItems(items);
        userRepository.save(user);
    }

    @Override
    public List<Item> getFavItem(){
        User user = getCurrentUser();
        return user.getFavItems();
    }

    @Override
    public void removeFavItem(int id){
        User user = getCurrentUser();
        Item item = itemRepository.findById(id).get();
        user.getFavItems().remove(item);
        userRepository.save(user);

    }

    @Override
    public void reserveItem(int id){
        User user = getCurrentUser();
        Item item = itemRepository.findById(id).get();
        List<Item> items = user.getReservedItems();
        items.add(item);
        user.setReservedItems(items);
        item.setIsReserved(true);
        itemRepository.save(item);
        userRepository.save(user);
    }

    @Override
    public List<Item> getReservedItems(){
        User user = getCurrentUser();
        return user.getReservedItems();
    }

    @Override
    public void removeReservedItem(int id){
        User user = getCurrentUser();
        Item item = itemRepository.findById(id).get();
        user.getFavItems().remove(item);
        item.setIsReserved(false);
        userRepository.save(user);
        itemRepository.save(item);

    }


}
