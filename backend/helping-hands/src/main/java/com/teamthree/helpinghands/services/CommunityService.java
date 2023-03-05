package com.teamthree.helpinghands.services;

import com.teamthree.helpinghands.entity.Community;
import com.teamthree.helpinghands.repository.CommunityRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CommunityService {
    private CommunityRepository communityRepository;

    public CommunityService(CommunityRepository communityRepository) {
        this.communityRepository = communityRepository;
    }

    public List<Community> getCommunities(){
        return communityRepository.findAll();
    }

    public Community getCommunityById(long communityId){
        return communityRepository.findById(communityId).orElseThrow();
    }

}
