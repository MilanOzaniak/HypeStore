package com.example.hypestore.model;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class ItemBasicInfo {
    private int id;
    private String title;
    private int price;
    private String size;
    private String category;
    private String description;
}
