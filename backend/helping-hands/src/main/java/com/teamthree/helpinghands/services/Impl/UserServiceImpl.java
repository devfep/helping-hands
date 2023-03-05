package com.teamthree.helpinghands.services.Impl;

import com.teamthree.helpinghands.config.TokenProvider;
import com.teamthree.helpinghands.dtos.UserDto;
import com.teamthree.helpinghands.dtos.UserLoginDto;
import com.teamthree.helpinghands.dtos.UserRestDto;
import com.teamthree.helpinghands.entity.User;
import com.teamthree.helpinghands.repository.UserRepository;
import com.teamthree.helpinghands.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;


@Service
public class UserServiceImpl implements UserService {
    @Autowired
    private UserRepository userRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Autowired
    private AuthenticationManager authenticationManager;

    @Autowired
    private TokenProvider tokenProvider;

    @Override
    public ResponseEntity<?> createNewUser(UserDto registrationDto) {

        if (userRepository.existsByEmail(registrationDto.getEmail())) {
            return new ResponseEntity<>("There's an account with us with this email address. Please sign in or reset your password", HttpStatus.BAD_REQUEST);
        }

        User user = new User();
        user.setName(registrationDto.getName());
        user.setUsername(registrationDto.getUsername());
        user.setEmail(registrationDto.getEmail());
        user.setPassword(passwordEncoder.encode(registrationDto.getPassword()));
        user.setZipCode(registrationDto.getZipcode());
        user.setHasAdvocate(registrationDto.isAdvocate());
        user.setPhoneNumber(registrationDto.getPhoneNumber());

        userRepository.save(user);

        return new ResponseEntity<>("User registered successfully", HttpStatus.CREATED);
    }

    @Override
    public ResponseEntity<?> loginUser(UserLoginDto userLoginDto) {
        Authentication authentication = authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(
                userLoginDto.getEmail(), userLoginDto.getPassword()));

        SecurityContextHolder.getContext().setAuthentication(authentication);

        if (userRepository.existsByEmail(userLoginDto.getEmail())) {
            Long userId = userRepository.findByEmail(userLoginDto.getEmail()).get().getUserId();
            String username = userRepository.findById(userId).get().getUsername();
            String email = userRepository.findById(userId).get().getEmail();
            String name = userRepository.findById(userId).get().getName();
            String generatedToken = tokenProvider.generateToken(authentication);

            UserRestDto userRest = UserRestDto.builder()
                    .id(userId)
                    .username(username)
                    .email(email)
                    .name(name)
                    .accessToken(generatedToken)
                    .tokenType("Bearer")
                    .expiresIn(86400)
                    .build();

            return new ResponseEntity<>(userRest, HttpStatus.OK);
        }
        return new ResponseEntity<>("Invalid credentials", HttpStatus.BAD_REQUEST);
    }

}