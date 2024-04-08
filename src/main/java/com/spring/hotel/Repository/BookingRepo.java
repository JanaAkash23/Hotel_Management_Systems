package com.spring.hotel.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.spring.hotel.Entity.Booking;

@Repository
public interface BookingRepo extends JpaRepository<Booking, Long> {

}
