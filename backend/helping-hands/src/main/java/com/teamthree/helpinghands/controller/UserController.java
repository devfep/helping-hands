package com.teamthree.helpinghands.controller;

import com.teamthree.helpinghands.dtos.UserDto;

import com.teamthree.helpinghands.dtos.UserLoginDto;

import com.teamthree.helpinghands.services.UserService;

import org.springframework.http.ResponseEntity;

import org.springframework.web.bind.annotation.CrossOrigin;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin("*")
public class UserController {

    private UserService userService;

    public UserController(UserService userService) {
        this.userService = userService;
    }


    @PostMapping("/register")
    public ResponseEntity<?> registerUser(@RequestBody UserDto registrationDto){
        return userService.createNewUser(registrationDto);
    }

    @PostMapping("/login")
    public ResponseEntity<?> loginUser(@RequestBody UserLoginDto userLoginDto){
        return userService.loginUser(userLoginDto);
    }


}