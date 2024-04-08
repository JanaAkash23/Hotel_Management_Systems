package com.spring.hotel.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.spring.hotel.Entity.Booking;
import com.spring.hotel.Service.BookingService;

import jakarta.validation.Valid;

@RestController

public class BookingController {
	@Autowired
	BookingService bookingService;
	
	
	@PostMapping("/hotel/booking")
	public Booking saveBooking(@Valid @RequestBody Booking booking) {
		return bookingService.createBooking(booking);
		
	}
	@GetMapping("/hotel/booking/{id}")
	public Booking getBookingById(@PathVariable("id")int id) {
		return bookingService.getBookingById(id);
	}
	
	@PutMapping("/hotel/booking/update/{id}")
	public Booking updateBooking(@PathVariable("id") int id,@RequestBody Booking booking) {
		booking.setId(id);
		Booking updateBooking = bookingService.updateBooking(booking);
		return updateBooking;
	}
	@DeleteMapping("/booking/{id}")
	public void deleteBooking(@PathVariable int id) {
		bookingService.deleteBooking(id);
		System.out.println("Data deleted succesfully");
	}
	

}
