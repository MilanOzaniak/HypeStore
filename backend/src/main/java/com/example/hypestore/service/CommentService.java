package com.example.hypestore.service;

public interface CommentService {
    void writeComment(int id, String comment);
    void deleteComment(int id);
    void reportComment(int id);
}
