package com.example.hypestore.repository;

import com.example.hypestore.model.Comment;
import org.springframework.data.jpa.repository.JpaRepository;


public interface CommentRepository extends JpaRepository<Comment, Integer> {
}
