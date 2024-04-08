package com.spring.hotel.ServiceImpl;


import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Conditional;
import org.springframework.stereotype.Service;

import com.spring.hotel.Entity.User;
import com.spring.hotel.Repository.UserRepo;
import com.spring.hotel.Service.UserService;

@Service
public class UserServiceImpl implements UserService {
	@Autowired
	UserRepo userRepo;

	@Override
	public User createUser(User user) {
		User u = userRepo.save(user);
		return u;
	}

	@Override
	public User getUserById(int id) {
		Optional<User> u = userRepo.findById((long) id);
		if(u.isPresent()) {
			return u.get();
		}
		
		return null;
	}

	@Override
	public User updateUserById(User user) {
		User existingUser = userRepo.findById(user.getId()).get();
		existingUser.setUsername(user.getUsername());
		existingUser.setPassword(user.getPassword());
		existingUser.setRole(user.getRole());
		User updateUser = userRepo.save(existingUser);
		return updateUser;
	}

	@Override
	public List<User> getAllUser() {
		
		return userRepo.findAll();
	}

	@Override
	public void deleteUser(int id) {
		userRepo.deleteById((long) id);
		
	}
	
	@Override
	public boolean login(String username, String password) {
		User user = userRepo.findByUsername(username);
        return user != null && user.getPassword().equals(password);
	}

	

}
