package com.spring.hotel.Service;

import java.util.List;

import com.spring.hotel.Entity.User;

public interface UserService {
	User createUser(User user);
	User getUserById (int id);
	User updateUserById(User user);
	List<User> getAllUser();
	void deleteUser(int id);
	
	boolean login(String username, String password);
	

}
