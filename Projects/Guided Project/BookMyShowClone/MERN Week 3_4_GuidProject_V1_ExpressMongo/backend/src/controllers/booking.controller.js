const bookingService


exports.createBooking = async (req,res,next) => {
    try{
        const booking = await bookingService.createBooking(
            req.user._id,
            req.body
        );
        res.status(201).json({
            success:true,
            meassage:"Booking confirmed.",
            data:booking,
        });
    }
    catch(error){
        next(error);
    }
};

// Get bookings
exports.getMyBookings = async (req,res,next) => {
    try{
        const bookings = await bookingsService.getUserBookings(req.user._id);
        req.user._id,
            req.body
        
        res.status(201).json({
            success:true,
            meassage:"Booking confirmed.",
            data:booking,
        });

    }
    catch(error){
        next(error);
    }
}