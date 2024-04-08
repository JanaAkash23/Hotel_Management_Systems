package com.spring.hotel.ServiceImpl;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.spring.hotel.Entity.Room;
import com.spring.hotel.Repository.RoomRepo;
import com.spring.hotel.Service.RoomService;

@Service
public class RoomServiceImpl implements RoomService {
	@Autowired
	RoomRepo roomRepo;

	@Override
	public Room createRoom(Room room) {
		Room r = roomRepo.save(room);
		return r;
	}

	@Override
	public Room getRoomById(int id) {
		Optional<Room> r = roomRepo.findById((long) id);
		if(r.isPresent()) {
			return r.get();
		}
		return null;
	}

	@Override
	public Room updateRoomById(Room room) {
		Room existingRoom = roomRepo.findById(room.getId()).get();
		existingRoom.setRoomType(room.getRoomType());
		existingRoom.setPricePerNight(room.getPricePerNight());
		existingRoom.setAvailable(room.isAvailable());
		existingRoom.setRoomNumber(room.getRoomNumber());
		Room updateRoom = roomRepo.save(existingRoom);
		
		return updateRoom;
	}

	@Override
	public void deleteRoom(int id) {
		roomRepo.deleteById((long) id);
	
		
	}

	
	

}
