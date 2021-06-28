package com.akhil.demo.repo;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.akhil.demo.model.taskmodel;

@Repository
public interface taskrepo extends MongoRepository <taskmodel,String> {

}
