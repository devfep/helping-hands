package com.teamthree.helpinghands.services.Impl;

import com.teamthree.helpinghands.config.TokenProvider;
import com.teamthree.helpinghands.dtos.UserDto;
import com.teamthree.helpinghands.dtos.UserLoginDto;
import com.teamthree.helpinghands.entity.User;
import com.teamthree.helpinghands.exception.ApiException;
import com.teamthree.helpinghands.repository.UserRepository;
import com.teamthree.helpinghands.services.AuthService;
import org.springframework.http.HttpStatus;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class AuthServiceImpl implements AuthService {

    private AuthenticationManager authenticationManager;
    private UserRepository userRepository;
    private PasswordEncoder passwordEncoder;
    private TokenProvider tokenProvider;


    public AuthServiceImpl(AuthenticationManager authenticationManager,
                           UserRepository userRepository,
                           PasswordEncoder passwordEncoder,
                           TokenProvider tokenProvider) {
        this.authenticationManager = authenticationManager;
        this.userRepository = userRepository;
        this.passwordEncoder = passwordEncoder;
        this.tokenProvider = tokenProvider;
    }

    @Override
    public String login(UserLoginDto loginDto) {

        Authentication authentication = authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(
                loginDto.getEmail(), loginDto.getPassword()));

        SecurityContextHolder.getContext().setAuthentication(authentication);

        String token = tokenProvider.generateToken(authentication);

        return token;
    }

    @Override
    public String register(UserDto registrationDto) {


        if(userRepository.existsByEmail(registrationDto.getEmail())){
            throw new ApiException(HttpStatus.BAD_REQUEST, "Username is already taken");
        }

        if(userRepository.existsByEmail(registrationDto.getEmail())){
            throw new ApiException(HttpStatus.BAD_REQUEST, "Email is already exists!.");
        }

        User user = new User();
        user.setName(registrationDto.getName());
        user.setUsername(registrationDto.getUsername());
        user.setEmail(registrationDto.getEmail());
        user.setPassword(passwordEncoder.encode(registrationDto.getPassword()));
        //add other fields
      //is advocate bool

        userRepository.save(user);

        return "User registered successfully!.";
    }
}
