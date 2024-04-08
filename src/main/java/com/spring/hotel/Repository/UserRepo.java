package com.spring.hotel.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.spring.hotel.Entity.User;

@Repository

public interface UserRepo extends JpaRepository<User, Long>{
	User findByUsername(String username);
}
