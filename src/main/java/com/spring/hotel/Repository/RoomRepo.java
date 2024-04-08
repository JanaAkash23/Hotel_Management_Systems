package com.spring.hotel.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.spring.hotel.Entity.Room;

@Repository

public interface RoomRepo extends JpaRepository<Room, Long> {

}
