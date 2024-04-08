package com.spring.hotel.Entity;

import java.time.LocalDate;
import java.util.List;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonManagedReference;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;

import jakarta.persistence.OneToMany;
import jakarta.persistence.OneToOne;
import jakarta.validation.constraints.NotBlank;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
@Entity
@AllArgsConstructor
@NoArgsConstructor
@Data


public class Booking {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;
	
	//one user can have one booking

@OneToOne(fetch = FetchType.EAGER, cascade = CascadeType.ALL)
@JoinColumn(name="userId", referencedColumnName = "id")
@JsonManagedReference
	private User user;
	
	//One Booking cane have many rooms Booking.
	@OneToMany(mappedBy = "booking", cascade = CascadeType.ALL)
	@JsonIgnoreProperties("booking")
	@JsonManagedReference
	private List<Room> rooms;
	//@NotBlank(message = "This field cannot be blank.")
	private LocalDate checkInDate;
	//@NotBlank(message = "This field cannot be blank.")
	private LocalDate ceheckOutDate;
	
	@OneToOne(fetch = FetchType.EAGER, cascade = CascadeType.ALL)
	@JoinColumn(name="paymentId", referencedColumnName = "id")
	@JsonManagedReference
	private Payment payment;

	
	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}

	public List<Room> getRooms() {
		return rooms;
	}

	public void setRooms(List<Room> rooms) {
		this.rooms = rooms;
	}

	public LocalDate getCheckInDate() {
		return checkInDate;
	}

	public void setCheckInDate(LocalDate checkInDate) {
		this.checkInDate = checkInDate;
	}

	public LocalDate getCeheckOutDate() {
		return ceheckOutDate;
	}

	public void setCeheckOutDate(LocalDate ceheckOutDate) {
		this.ceheckOutDate = ceheckOutDate;
	}

	public Payment getPayment() {
		return payment;
	}

	public void setPayment(Payment payment) {
		this.payment = payment;
	}

	public Booking(long id, User user, List<Room> rooms, LocalDate checkInDate, LocalDate ceheckOutDate,
			Payment payment) {
		super();
		this.id = id;
		this.user = user;
		this.rooms = rooms;
		this.checkInDate = checkInDate;
		this.ceheckOutDate = ceheckOutDate;
		this.payment = payment;
	}

	public Booking() {
		super();
		// TODO Auto-generated constructor stub
	}

	@Override
	public String toString() {
		return "Booking [id=" + id + ", user=" + user + ", rooms=" + rooms + ", checkInDate=" + checkInDate
				+ ", ceheckOutDate=" + ceheckOutDate + ", payment=" + payment + "]";
	}

	
	
	
	

}
