package com.spring.hotel.Controller;

import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.spring.hotel.Entity.User;
import com.spring.hotel.Service.UserService;

import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import jakarta.servlet.ServletException;
import jakarta.validation.Valid;

@RestController
public class UserController {
	@Autowired
	UserService userService;
	
	@PostMapping("/hotel/user")
	public User saveUser(@Valid @RequestBody User user) {
		return userService.createUser(user);
		
	}
	@GetMapping("/hotel/user/{id}")
	public User getUserById(@PathVariable("id")int id) {
		return userService.getUserById(id);
	}
	@PutMapping("/hotel/user/update/{id}")
	public User updateUser(@PathVariable("id")int id,@RequestBody User user) {
		user.setId(id);
		User updateUser = userService.updateUserById(user);
		return updateUser;
	}
	@GetMapping("/hotel/getAllData")
	
	public List<User> getAllUser(){
		List<User> user = userService.getAllUser();
		return user;
		
	}
	@DeleteMapping("/user/{id}")
	
	public void deleteUser(@PathVariable int id) {
		userService.deleteUser(id);
		System.out.println("Data deleted succesfully.");
	}
	
	@PostMapping("/login")
    public ResponseEntity<String> login(@RequestBody User user) {
        try {
            if (userService.login(user.getUsername(), user.getPassword())) {
                return ResponseEntity.ok("Login successful");
            } else {
                return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid username or password");
            }
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("An error occurred during login");
        }
    }
	

}
