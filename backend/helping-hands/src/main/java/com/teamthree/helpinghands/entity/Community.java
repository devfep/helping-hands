package com.teamthree.helpinghands.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.*;

import java.util.List;

@Entity
@Setter
@Getter
@ToString
@AllArgsConstructor
@NoArgsConstructor
@Builder
@Table(name="community")
public class Community {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @JsonIgnore
    @Column(name="community_id")
    private long community_id;
    @Column(name="name")
    private String name;
    @Column(name="location")
    private String location;
    @Column(name="food")
    private Boolean food;

    @OneToMany(mappedBy = "community")
    private List<User> users;
}
