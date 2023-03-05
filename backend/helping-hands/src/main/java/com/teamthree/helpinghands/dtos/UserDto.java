package com.teamthree.helpinghands.dtos;

import lombok.Data;

@Data
public class UserDto {
    private  String name;
    private String username;
    private String email;
    private String password;
    private String zipcode;
    private String phoneNumber;
    private boolean isAdvocate;


}
