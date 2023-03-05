package com.teamthree.helpinghands.dtos;

import lombok.*;

@Getter
@Setter
@ToString
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class UserRestDto {
    private String accessToken;
    private String tokenType;
    private int expiresIn;
    private Long id;
    private String email;
    private String username;
    private String name;
}
