package com.example.hypestore.repository;

import com.example.hypestore.model.Item;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;


@Repository
public interface ItemRepository extends JpaRepository<Item, Integer> {
    List<Item> findByCategoryEqualsOrderByIdDesc(String category);
    List<Item> findByCategoryEqualsOrderByIdAsc(String category);
    List<Item> findByCategoryOrderByPriceAsc(String category);
    List<Item> findByCategoryOrderByPriceDesc(String category);
    List<Item> findByCategoryAndSizeOrderBySize(String category, String size);
    List<Item> findByCategoryAndLocationOrderByLocation(String category, String location);
    List<Item> findByCategoryAndGenderOrderByGender(String category, String gender);


    Optional<Item> findById(int id);
}
