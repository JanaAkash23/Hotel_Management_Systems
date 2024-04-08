package com.spring.hotel.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.spring.hotel.Entity.Room;
import com.spring.hotel.Service.RoomService;

import jakarta.validation.Valid;

@RestController
public class RoomController {
	@Autowired
	RoomService roomService;
	
	
	@PostMapping("/hotel/room")
	public Room saveRoom(@Valid @RequestBody Room room) {
		return roomService.createRoom(room);
	}
	@GetMapping("/hotel/room/{id}")
	public Room getRoomById(@PathVariable("id")int id) {
		return roomService.getRoomById(id);
	}
	
	@PutMapping("hotel/room/update/{id}")
	public Room updateRoomById(@PathVariable("id")int id ,@RequestBody Room room) {
		room.setId(id);
		Room updateRoom = roomService.updateRoomById(room);
		return updateRoom;
	}
	
	@DeleteMapping("/room/{id}")
	public void deleteRoom(@PathVariable int id) {
		roomService.deleteRoom(id);
		System.out.println("data deleted succesfully.");
	}

}
