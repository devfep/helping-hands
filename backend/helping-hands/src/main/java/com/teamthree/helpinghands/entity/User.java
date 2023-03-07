package com.teamthree.helpinghands.entity;

import jakarta.persistence.*;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Pattern;
import jakarta.validation.constraints.Size;
import lombok.*;

@Entity
@Table(name="users")
@Setter
@Getter
@ToString
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class User extends BaseEntity{

    @Id
    @GeneratedValue(strategy= GenerationType.AUTO)
    @Column(name = "user_id")
    private long userId;

    @Size(min=4, message = "Name must be at least 4 characters long")
    @NotBlank(message = "Name cannot be blank")
    private String username;

    @Size(min=5, message="Password must be at least 5 characters long")
    @NotBlank(message="Password must not be blank")
    private String password;

    @Size(min=4, message = "Name must be at least 4 characters long")
    @NotBlank(message = "Name cannot be blank")
    private String name;

    @NotBlank
    @Email(message = "Please provide a valid email address")
    private String email;

    @Column(columnDefinition = "boolean default false")
    private boolean hasAdvocate;

    @Pattern(regexp="$|[0-9]{5}", message="Zipcode has to be 5 digits")
    private String zipCode;

    @Pattern(regexp="(^$|[0-9]{10})",message = "Mobile number must be 10 digits")
//    @NotBlank(message="Phone number cannot be blank")
    private String phoneNumber;

    @Column(columnDefinition = "boolean default true")
    private boolean hasFood;

    @ManyToOne
    @JoinColumn(name = "community_id")
    private Community community;





}