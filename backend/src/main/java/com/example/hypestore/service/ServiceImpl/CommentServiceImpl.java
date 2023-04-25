package com.example.hypestore.service.ServiceImpl;

import com.example.hypestore.model.Comment;
import com.example.hypestore.model.User;
import com.example.hypestore.repository.CommentRepository;
import com.example.hypestore.repository.UserRepository;
import com.example.hypestore.service.UserService;
import com.example.hypestore.service.CommentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.List;

@Service
public class CommentServiceImpl implements CommentService {
    @Autowired
    UserRepository userRepository;
    @Autowired
    CommentRepository commentRepository;
    @Autowired
    UserService userService;
    @Override
    public void writeComment(int id, String comment){
        User user = userRepository.findById(id).get();
        Comment coment1 = new Comment();
        coment1.setUser(user);
        coment1.setOwnerName(userService.getCurrentUser().getUserName());
        coment1.setComment(comment);
        coment1.setDate(LocalDate.now());
        coment1.setProfilePic(user.getProfileImage());
        List<Comment> comments = user.getComments();
        comments.add(coment1);
        user.setComments(comments);
        commentRepository.save(coment1);
    }

    @Override
    public void deleteComment(int id){
        Comment comment = commentRepository.findById(id).get();
        commentRepository.delete(comment);

    }

    @Override
    public void reportComment(int id){
        Comment comment = commentRepository.findById(id).get();
        comment.setIsReported(true);
        commentRepository.save(comment);
    }
}
