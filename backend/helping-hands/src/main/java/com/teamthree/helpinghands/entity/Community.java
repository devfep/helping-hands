package com.teamthree.helpinghands.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;

@Entity

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

    public Community() {
    }

    public Community(long community_id, String name, String location, Boolean food) {
        this.community_id = community_id;
        this.name = name;
        this.location = location;
        this.food = food;
    }

    public Community(String name, String location, Boolean food) {
        this.name = name;
        this.location = location;
        this.food = food;
    }

    public long getCommunity_id() {
        return community_id;
    }

    public void setCommunity_id(long community_id) {
        this.community_id = community_id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getLocation() {
        return location;
    }

    public void setLocation(String location) {
        this.location = location;
    }

    public Boolean getFood() {
        return food;
    }

    public void setFood(Boolean food) {
        this.food = food;
    }
}
