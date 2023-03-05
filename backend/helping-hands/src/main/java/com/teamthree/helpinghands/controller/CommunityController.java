package com.teamthree.helpinghands.controller;

import com.teamthree.helpinghands.entity.Community;
import com.teamthree.helpinghands.services.CommunityService;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@CrossOrigin
public class CommunityController {

    CommunityService communityService;

    public CommunityController(CommunityService communityService) {
        this.communityService = communityService;
    }

    @GetMapping("/community")
    public List<Community> getAllCommunity() {
        return communityService.getCommunities();
    }


}
