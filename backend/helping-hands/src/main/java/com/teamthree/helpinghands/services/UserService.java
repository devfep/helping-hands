package com.teamthree.helpinghands.services;

import com.teamthree.helpinghands.dtos.UserDto;

import com.teamthree.helpinghands.dtos.UserLoginDto;

import com.teamthree.helpinghands.entity.User;
import org.springframework.http.ResponseEntity;


public interface UserService {

    ResponseEntity<?> createNewUser(UserDto userDto);

    ResponseEntity<?> loginUser(UserLoginDto userLoginDto);


}

