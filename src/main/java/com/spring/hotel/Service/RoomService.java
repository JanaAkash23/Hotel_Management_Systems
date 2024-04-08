package com.spring.hotel.Service;

import com.spring.hotel.Entity.Room;

public interface RoomService {
	Room createRoom(Room room);
	Room getRoomById(int id);
	Room updateRoomById(Room room);
	void deleteRoom(int id);
	
	

}
