const Payment = require("../models/Payment");


// processController.js
// processController.js
exports.Paymentt = async (req, res) => {
  const { roomType, reservationDate, duration, paymentMethod, bankType } = req.body;

  console.log('Received payload:', req.body);

  try {
    const payment = await Payment.create({
      room_type: roomType,
      reservation_date: reservationDate,
      duration: duration,
      payment_method: paymentMethod,
      bank_type: bankType,
    });

    // Kirim respons sukses
    res.status(200).json({ success: true, message: "Payment successful", payment });
  } catch (error) {
    console.error("Payment error:", error);
    // Kirim respons error
    res.status(500).json({ success: false, error: "Payment failed" });
  }
};
