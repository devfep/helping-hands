package com.teamthree.helpinghands.services;


import com.teamthree.helpinghands.dtos.UserDto;
import com.teamthree.helpinghands.dtos.UserLoginDto;

public interface AuthService {
    String login(UserLoginDto useroginDto);

    String register(UserDto registrationDto);
}