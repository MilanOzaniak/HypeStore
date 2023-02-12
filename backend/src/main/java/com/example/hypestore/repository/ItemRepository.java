package com.example.hypestore.repository;

import com.example.hypestore.model.Item;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;


@Repository
public interface ItemRepository extends JpaRepository<Item, Integer> {
    List<Item> findByCategoryEqualsOrderByIdDesc(String category);
    Optional<Item> findById(int id);
}
