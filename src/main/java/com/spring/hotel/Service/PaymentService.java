package com.spring.hotel.Service;

import java.util.List;

import com.spring.hotel.Entity.Payment;

public interface PaymentService {
	Payment createPayment(Payment payment);
	Payment getPaymentById(int id);
	Payment updatePayment(Payment payment);
	List<Payment> getAllPayment();
	

}
