package com.lbd.project.repository;

import org.springframework.beans.factory.annotation.Autowired;

import javax.sql.DataSource;

public class userRepository {

    @Autowired
    DataSource dataSource;
}
