package com.spring.hotel.Entity;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import jakarta.validation.constraints.NotBlank;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@NoArgsConstructor
@AllArgsConstructor
@Data
public class Room {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)

	private long id;
	@NotBlank(message = "Room Number cannot be blank.")
	private String roomNumber;
	@NotBlank(message = "Room Type cannot be blank.")
	private String roomType;
	//@NotBlank(message = "Price of the room cannot be blank.")
	private double pricePerNight;
	//@NotBlank(message = "This field cannot be blank.")
	private boolean available;
	
	@ManyToOne(cascade = CascadeType.ALL)
	@JoinColumn(name = "bookingId", referencedColumnName = "id")
	@JsonIgnoreProperties("rooms")
	@JsonBackReference
	private Booking booking;
	
	public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
	}
	public String getRoomNumber() {
		return roomNumber;
	}
	public void setRoomNumber(String roomNumber) {
		this.roomNumber = roomNumber;
	}
	public String getRoomType() {
		return roomType;
	}
	public void setRoomType(String roomType) {
		this.roomType = roomType;
	}
	public double getPricePerNight() {
		return pricePerNight;
	}
	public void setPricePerNight(double pricePerNight) {
		this.pricePerNight = pricePerNight;
	}
	public boolean isAvailable() {
		return available;
	}
	public void setAvailable(boolean available) {
		this.available = available;
	}
	public Room(long id, String roomNumber, String roomType, double pricePerNight, boolean available) {
		super();
		this.id = id;
		this.roomNumber = roomNumber;
		this.roomType = roomType;
		this.pricePerNight = pricePerNight;
		this.available = available;
	}
	public Room() {
		super();
		// TODO Auto-generated constructor stub
	}
	@Override
	public String toString() {
		return "Room [id=" + id + ", roomNumber=" + roomNumber + ", roomType=" + roomType + ", pricePerNight="
				+ pricePerNight + ", available=" + available + "]";
	}
	
	


}
