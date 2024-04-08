package com.spring.hotel.ServiceImpl;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.spring.hotel.Entity.Booking;
import com.spring.hotel.Repository.BookingRepo;
import com.spring.hotel.Service.BookingService;
@Service

public class BookingServiceImpl implements BookingService {
	@Autowired
	BookingRepo bookingRepo;

	@Override
	public Booking createBooking(Booking booking) {
		Booking b = bookingRepo.save(booking);
		
		return b;
	}

	@Override
	public Booking getBookingById(int id) {
		Optional<Booking> b = bookingRepo.findById((long) id);
		if(b.isPresent()) {
			return b.get();
		}
		return null;
	}
	
	public Booking updateBooking(Booking booking) {
		Booking existingBooking = bookingRepo.findById(booking.getId()).get();
		existingBooking.setCheckInDate(booking.getCheckInDate());
		existingBooking.setCeheckOutDate(booking.getCeheckOutDate());
		Booking updateBooking = bookingRepo.save(existingBooking);
		return updateBooking;
	}

	@Override
	public void deleteBooking(int id) {
		bookingRepo.deleteById((long) id);
		
		
	}

}
