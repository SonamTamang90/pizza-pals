import React, { useState } from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "../components/ui/breadcrumb";
import { Button } from "../components/ui/button";
import { Calendar } from "../components/ui/calendar";
import { Input } from "../components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../components/ui/select";
import { motion, AnimatePresence } from "framer-motion";
import { format } from "date-fns";
import {
  Calendar as CalendarIcon,
  Users,
  Clock,
  ChevronRight,
  ChevronLeft,
} from "lucide-react";

const BookingPage = () => {
  const [step, setStep] = useState(1);
  const [booking, setBooking] = useState({
    date: new Date(),
    guests: "",
    time: "",
    name: "",
    email: "",
    phone: "",
    specialRequests: "",
  });

  const steps = [
    { number: 1, title: "Select Date" },
    { number: 2, title: "Party Size & Time" },
    { number: 3, title: "Your Details" },
    { number: 4, title: "Confirmation" },
  ];

  const timeSlots = [
    "11:00 AM",
    "11:30 AM",
    "12:00 PM",
    "12:30 PM",
    "1:00 PM",
    "1:30 PM",
    "2:00 PM",
    "2:30 PM",
    "5:00 PM",
    "5:30 PM",
    "6:00 PM",
    "6:30 PM",
    "7:00 PM",
    "7:30 PM",
    "8:00 PM",
    "8:30 PM",
  ];

  const handleNext = () => {
    setStep((prev) => Math.min(prev + 1, 4));
  };

  const handleBack = () => {
    setStep((prev) => Math.max(prev - 1, 1));
  };

  const renderStepContent = () => {
    switch (step) {
      case 1:
        return (
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">Select Date</h3>
            <div className="flex justify-center">
              <Calendar
                mode="single"
                selected={booking.date}
                onSelect={(date) => setBooking({ ...booking, date })}
                className="rounded-md border"
                disabled={(date) => date < new Date()}
              />
            </div>
          </div>
        );
      case 2:
        return (
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">Party Size & Time</h3>
            <div className="grid gap-6">
              <div className="space-y-2">
                <label className="text-sm font-medium">Number of Guests</label>
                <Select
                  value={booking.guests}
                  onValueChange={(value) =>
                    setBooking({ ...booking, guests: value })
                  }
                >
                  <SelectTrigger className="h-12">
                    <SelectValue placeholder="Select number of guests" />
                  </SelectTrigger>
                  <SelectContent>
                    {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
                      <SelectItem key={num} value={num.toString()}>
                        {num} {num === 1 ? "Guest" : "Guests"}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Preferred Time</label>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {timeSlots.map((time) => (
                    <Button
                      key={time}
                      variant={booking.time === time ? "default" : "outline"}
                      className="h-12"
                      onClick={() => setBooking({ ...booking, time })}
                    >
                      {time}
                    </Button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        );
      case 3:
        return (
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">Your Details</h3>
            <div className="grid gap-6">
              <div>
                <label className="text-sm font-medium">Full Name</label>
                <Input
                  className="mt-1 h-12"
                  value={booking.name}
                  onChange={(e) =>
                    setBooking({ ...booking, name: e.target.value })
                  }
                  placeholder="Enter your full name"
                />
              </div>
              <div>
                <label className="text-sm font-medium">Email</label>
                <Input
                  className="mt-1 h-12"
                  type="email"
                  value={booking.email}
                  onChange={(e) =>
                    setBooking({ ...booking, email: e.target.value })
                  }
                  placeholder="Enter your email"
                />
              </div>
              <div>
                <label className="text-sm font-medium">Phone</label>
                <Input
                  className="mt-1 h-12"
                  type="tel"
                  value={booking.phone}
                  onChange={(e) =>
                    setBooking({ ...booking, phone: e.target.value })
                  }
                  placeholder="Enter your phone number"
                />
              </div>
              <div>
                <label className="text-sm font-medium">Special Requests</label>
                <Input
                  className="mt-1 h-12"
                  value={booking.specialRequests}
                  onChange={(e) =>
                    setBooking({ ...booking, specialRequests: e.target.value })
                  }
                  placeholder="Any special requests (optional)"
                />
              </div>
            </div>
          </div>
        );
      case 4:
        return (
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">Booking Confirmation</h3>
            <div className="bg-gray-50 p-6 rounded-lg space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-gray-500">Date</p>
                  <p className="font-medium">
                    {format(booking.date, "MMMM do, yyyy")}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Time</p>
                  <p className="font-medium">{booking.time}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Party Size</p>
                  <p className="font-medium">{booking.guests} Guests</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Name</p>
                  <p className="font-medium">{booking.name}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Email</p>
                  <p className="font-medium">{booking.email}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Phone</p>
                  <p className="font-medium">{booking.phone}</p>
                </div>
              </div>
              {booking.specialRequests && (
                <div>
                  <p className="text-sm text-gray-500">Special Requests</p>
                  <p className="font-medium">{booking.specialRequests}</p>
                </div>
              )}
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen">
      {/* Banner Section */}
      <div
        className="relative h-[300px] bg-cover bg-center"
        style={{
          backgroundImage: 'url("/images/banner.png")',
        }}
      >
        <div className="absolute inset-0 bg-black/50">
          <div className="container mx-auto px-4 h-full flex flex-col items-center justify-center">
            <Breadcrumb className="text-white mb-6">
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink href="/" className="text-lg text-white">
                    HOME
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="text-white" />
                <BreadcrumbItem>
                  <BreadcrumbLink href="/book" className="text-lg text-white">
                    BOOK A TABLE
                  </BreadcrumbLink>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
            <h1 className="text-4xl md:text-5xl font-bold text-white">
              BOOK A TABLE
            </h1>
          </div>
        </div>
      </div>

      {/* Booking Content */}
      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Progress Steps */}
        <div className="mb-12">
          <div className="flex justify-between items-center relative">
            {steps.map((s, i) => (
              <React.Fragment key={s.number}>
                <div className="flex flex-col items-center relative z-10">
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center font-bold ${
                      step >= s.number
                        ? "bg-[#F21905] text-white"
                        : "bg-gray-200 text-gray-500"
                    }`}
                  >
                    {s.number}
                  </div>
                  <p className="text-sm mt-2">{s.title}</p>
                </div>
                {i < steps.length - 1 && (
                  <div
                    className={`flex-1 h-1 ${
                      step > s.number ? "bg-[#F21905]" : "bg-gray-200"
                    }`}
                  />
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* Step Content */}
        <div className="bg-white rounded-lg p-6 md:p-8 shadow-lg">
          <AnimatePresence mode="wait">
            <motion.div
              key={step}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              {renderStepContent()}
            </motion.div>
          </AnimatePresence>

          {/* Navigation Buttons */}
          <div className="flex justify-between mt-8">
            {step > 1 && (
              <Button variant="outline" onClick={handleBack}>
                <ChevronLeft className="w-4 h-4 mr-2" />
                Back
              </Button>
            )}
            <Button
              className="ml-auto bg-[#F21905] hover:bg-[#d41704]"
              onClick={
                step === 4 ? () => alert("Booking Confirmed!") : handleNext
              }
            >
              {step === 4 ? "Confirm Booking" : "Next"}
              {step < 4 && <ChevronRight className="w-4 h-4 ml-2" />}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingPage;
