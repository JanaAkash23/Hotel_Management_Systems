package com.spring.hotel.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.spring.hotel.Entity.Payment;
import com.spring.hotel.Service.PaymentService;

import jakarta.validation.Valid;

@RestController
public class PaymentController {
	@Autowired
	PaymentService paymentService;
	
	
	@PostMapping("/hotel/payment")
	public Payment createPayment(@Valid @RequestBody Payment payment) {
		return paymentService.createPayment(payment);
		
	}
	
	@GetMapping("/hotel/payment/{id}")
	public Payment getPaymentById(@PathVariable("id")int id) {
		return paymentService.getPaymentById(id);
		
	}
	
	@PutMapping("/hotel/payment/update/{id}")
	public Payment updatePayment(@PathVariable("id")long id, @RequestBody Payment payment) {
		payment.setId(id);
		Payment updatePayment = paymentService.updatePayment(payment);
		return updatePayment;
	}
	
	@GetMapping("/hotel/allpayment")
	public List<Payment> getAllPayment(){
		List<Payment> payment = paymentService.getAllPayment();
		return payment;
	}

}
