package com.example.hypestore.service;

import com.example.hypestore.model.Item;
import com.example.hypestore.model.User;
import com.example.hypestore.repository.UserRepository;
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
}
