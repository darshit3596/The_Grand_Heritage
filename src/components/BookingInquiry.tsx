import React, { useState } from 'react';
import { Send, Calendar, User, Phone, Users, CheckCircle, AlertCircle, Copy, Check } from 'lucide-react';
import { hotelConfig } from '../data/hotelConfig';

interface BookingInquiryProps {
  selectedRoomPreference?: string;
}

export const BookingInquiry: React.FC<BookingInquiryProps> = ({ selectedRoomPreference = '' }) => {
  // Get today's date formatted as YYYY-MM-DD
  const today = new Date().toISOString().split('T')[0];

  const [formData, setFormData] = useState({
    guestName: '',
    phone: '',
    checkInDate: today,
    checkOutDate: '',
    adults: '2',
    children: '0',
    roomPreference: selectedRoomPreference || 'Heritage Executive Room',
    additionalMessage: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);

  // Sync preference if changed from outside
  React.useEffect(() => {
    if (selectedRoomPreference) {
      setFormData((prev) => ({ ...prev, roomPreference: selectedRoomPreference }));
    }
  }, [selectedRoomPreference]);

  const validate = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.guestName.trim()) {
      newErrors.guestName = 'Please provide your full name.';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Please provide a valid phone or WhatsApp number.';
    } else if (formData.phone.replace(/\D/g, '').length < 8) {
      newErrors.phone = 'Phone number is too short.';
    }

    if (!formData.checkInDate) {
      newErrors.checkInDate = 'Please select a check-in date.';
    } else if (formData.checkInDate < today) {
      newErrors.checkInDate = 'Check-in date cannot be in the past.';
    }

    if (!formData.checkOutDate) {
      newErrors.checkOutDate = 'Please select a check-out date.';
    } else if (formData.checkOutDate <= formData.checkInDate) {
      newErrors.checkOutDate = 'Check-out date must be later than check-in date.';
    }

    const adultsNum = parseInt(formData.adults, 10);
    if (isNaN(adultsNum) || adultsNum < 1) {
      newErrors.adults = 'At least 1 adult required.';
    }

    const childrenNum = parseInt(formData.children || '0', 10);
    if (isNaN(childrenNum) || childrenNum < 0) {
      newErrors.children = 'Children count must be 0 or more.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const generateWhatsAppMessage = () => {
    return `Hello Hotel The Grand Heritage Team,

I would like to enquire about a room booking.

Guest Name: ${formData.guestName}
Phone: ${formData.phone}
Check-in: ${formData.checkInDate}
Check-out: ${formData.checkOutDate}
Adults: ${formData.adults}
Children: ${formData.children || '0'}
Room Preference: ${formData.roomPreference || 'Any Available AC Room'}
Additional Request: ${formData.additionalMessage ? formData.additionalMessage : 'None'}

Please share the room availability and applicable rates.

Thank you.`;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    const message = generateWhatsAppMessage();
    const encoded = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${hotelConfig.phone}?text=${encoded}`;

    // Open WhatsApp
    window.open(whatsappUrl, '_blank');
    setSubmitted(true);
  };

  const handleCopyMessage = () => {
    const message = generateWhatsAppMessage();
    navigator.clipboard.writeText(message);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="inquiry" className="py-20 lg:py-28 bg-[#F8F5EF] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs uppercase tracking-widest font-semibold text-[#B89A62]">
            Direct Reservations
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#173C32] font-normal mt-2">
            Booking & Stay Inquiry
          </h2>
          <div className="w-16 h-0.5 bg-[#B89A62] mx-auto mt-4" />
          <p className="mt-4 text-stone-600 text-sm sm:text-base">
            Submit your inquiry to connect directly with hotel reception on WhatsApp for tariffs and availability.
          </p>
        </div>

        <div className="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Information & Assistance Card (Left) */}
          <div className="lg:col-span-5 bg-[#173C32] text-[#F8F5EF] rounded p-6 sm:p-8 space-y-6 shadow-md">
            <div>
              <span className="text-xs uppercase tracking-widest text-[#B89A62] font-semibold">
                Direct Contact
              </span>
              <h3 className="font-serif text-2xl font-normal text-[#F8F5EF] mt-1">
                Hotel Reception
              </h3>
              <p className="text-stone-300 text-xs sm:text-sm mt-2 leading-relaxed">
                Connect directly with our team in Zanzarda, Junagadh. We reply promptly with available room options, tariffs, and guidance for your stay.
              </p>
            </div>

            <div className="space-y-4 pt-4 border-t border-white/10 text-xs sm:text-sm">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded bg-white/10 flex items-center justify-center shrink-0">
                  <Phone className="w-4 h-4 text-[#B89A62]" />
                </div>
                <div>
                  <span className="text-[11px] uppercase tracking-wider text-stone-400 block">Phone / WhatsApp</span>
                  <span className="font-semibold text-white">{hotelConfig.formattedPhone}</span>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded bg-white/10 flex items-center justify-center shrink-0">
                  <Calendar className="w-4 h-4 text-[#B89A62]" />
                </div>
                <div>
                  <span className="text-[11px] uppercase tracking-wider text-stone-400 block">Standard Hours</span>
                  <span className="text-white">Check-in: {hotelConfig.checkIn} · Check-out: {hotelConfig.checkOut}</span>
                </div>
              </div>
            </div>

            <div className="bg-black/30 rounded p-4 border border-[#B89A62]/20 text-xs text-stone-300 space-y-1">
              <div className="flex items-center gap-1.5 text-[#B89A62] font-semibold">
                <AlertCircle className="w-4 h-4" />
                <span>Enquiry Disclaimer</span>
              </div>
              <p className="text-[11px] leading-relaxed text-stone-300">
                This form generates a structured WhatsApp inquiry message to the hotel. It does not process payments or claim live confirmation.
              </p>
            </div>
          </div>

          {/* Interactive Inquiry Form (Right) */}
          <div className="lg:col-span-7 bg-white rounded p-6 sm:p-8 shadow-sm border border-stone-200">
            {submitted && (
              <div className="mb-6 p-4 bg-emerald-50 border border-emerald-200 rounded text-emerald-800 text-xs sm:text-sm flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <p className="font-semibold">WhatsApp Inquiry Window Opened!</p>
                  <p>
                    Please review and hit 'Send' in WhatsApp to dispatch your inquiry to <strong>{hotelConfig.formattedPhone}</strong>.
                  </p>
                  <button
                    type="button"
                    onClick={handleCopyMessage}
                    className="mt-2 text-xs inline-flex items-center gap-1 text-[#173C32] font-semibold underline"
                  >
                    {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copied ? 'Copied inquiry text!' : 'Copy inquiry text to clipboard'}</span>
                  </button>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Guest Name & Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-stone-700 uppercase tracking-wider mb-1.5">
                    Guest Name <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-stone-400 absolute left-3 top-3" />
                    <input
                      type="text"
                      placeholder="e.g. Rajesh Patel"
                      value={formData.guestName}
                      onChange={(e) => {
                        setFormData({ ...formData, guestName: e.target.value });
                        if (errors.guestName) setErrors({ ...errors, guestName: '' });
                      }}
                      className={`w-full pl-9 pr-3 py-2 text-sm border rounded bg-stone-50/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#173C32]/20 transition-all ${
                        errors.guestName ? 'border-red-500' : 'border-stone-300'
                      }`}
                    />
                  </div>
                  {errors.guestName && (
                    <p className="text-red-500 text-[11px] mt-1">{errors.guestName}</p>
                  )}
                </div>

                <div>
                  <label className="block text-xs font-semibold text-stone-700 uppercase tracking-wider mb-1.5">
                    Phone / WhatsApp <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-stone-400 absolute left-3 top-3" />
                    <input
                      type="tel"
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={(e) => {
                        setFormData({ ...formData, phone: e.target.value });
                        if (errors.phone) setErrors({ ...errors, phone: '' });
                      }}
                      className={`w-full pl-9 pr-3 py-2 text-sm border rounded bg-stone-50/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#173C32]/20 transition-all ${
                        errors.phone ? 'border-red-500' : 'border-stone-300'
                      }`}
                    />
                  </div>
                  {errors.phone && (
                    <p className="text-red-500 text-[11px] mt-1">{errors.phone}</p>
                  )}
                </div>
              </div>

              {/* Check-in & Check-out Dates */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-stone-700 uppercase tracking-wider mb-1.5">
                    Check-in Date <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <Calendar className="w-4 h-4 text-stone-400 absolute left-3 top-3 pointer-events-none" />
                    <input
                      type="date"
                      min={today}
                      value={formData.checkInDate}
                      onChange={(e) => {
                        setFormData({ ...formData, checkInDate: e.target.value });
                        if (errors.checkInDate) setErrors({ ...errors, checkInDate: '' });
                      }}
                      className={`w-full pl-9 pr-3 py-2 text-sm border rounded bg-stone-50/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#173C32]/20 transition-all ${
                        errors.checkInDate ? 'border-red-500' : 'border-stone-300'
                      }`}
                    />
                  </div>
                  {errors.checkInDate && (
                    <p className="text-red-500 text-[11px] mt-1">{errors.checkInDate}</p>
                  )}
                </div>

                <div>
                  <label className="block text-xs font-semibold text-stone-700 uppercase tracking-wider mb-1.5">
                    Check-out Date <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <Calendar className="w-4 h-4 text-stone-400 absolute left-3 top-3 pointer-events-none" />
                    <input
                      type="date"
                      min={formData.checkInDate || today}
                      value={formData.checkOutDate}
                      onChange={(e) => {
                        setFormData({ ...formData, checkOutDate: e.target.value });
                        if (errors.checkOutDate) setErrors({ ...errors, checkOutDate: '' });
                      }}
                      className={`w-full pl-9 pr-3 py-2 text-sm border rounded bg-stone-50/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#173C32]/20 transition-all ${
                        errors.checkOutDate ? 'border-red-500' : 'border-stone-300'
                      }`}
                    />
                  </div>
                  {errors.checkOutDate && (
                    <p className="text-red-500 text-[11px] mt-1">{errors.checkOutDate}</p>
                  )}
                </div>
              </div>

              {/* Adults, Children, Room Preference */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-stone-700 uppercase tracking-wider mb-1.5">
                    Adults <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <Users className="w-4 h-4 text-stone-400 absolute left-3 top-3" />
                    <select
                      value={formData.adults}
                      onChange={(e) => setFormData({ ...formData, adults: e.target.value })}
                      className="w-full pl-9 pr-3 py-2 text-sm border border-stone-300 rounded bg-stone-50/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#173C32]/20"
                    >
                      <option value="1">1 Adult</option>
                      <option value="2">2 Adults</option>
                      <option value="3">3 Adults</option>
                      <option value="4">4 Adults</option>
                      <option value="5">5+ Adults (Group)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-stone-700 uppercase tracking-wider mb-1.5">
                    Children <span className="text-stone-400 font-normal">(Optional)</span>
                  </label>
                  <select
                    value={formData.children}
                    onChange={(e) => setFormData({ ...formData, children: e.target.value })}
                    className="w-full px-3 py-2 text-sm border border-stone-300 rounded bg-stone-50/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#173C32]/20"
                  >
                    <option value="0">0 Children</option>
                    <option value="1">1 Child</option>
                    <option value="2">2 Children</option>
                    <option value="3">3+ Children</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-stone-700 uppercase tracking-wider mb-1.5">
                    Room Preference
                  </label>
                  <select
                    value={formData.roomPreference}
                    onChange={(e) => setFormData({ ...formData, roomPreference: e.target.value })}
                    className="w-full px-3 py-2 text-sm border border-stone-300 rounded bg-stone-50/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#173C32]/20"
                  >
                    <option value="Heritage Executive Room">Heritage Executive Room</option>
                    <option value="Grand Family Suite">Grand Family Suite</option>
                    <option value="Deluxe Comfort AC Room">Deluxe Comfort AC Room</option>
                    <option value="Any Available AC Room">Any Available AC Room</option>
                  </select>
                </div>
              </div>

              {/* Additional Message */}
              <div>
                <label className="block text-xs font-semibold text-stone-700 uppercase tracking-wider mb-1.5">
                  Additional Requests / Message <span className="text-stone-400 font-normal">(Optional)</span>
                </label>
                <textarea
                  rows={3}
                  placeholder="e.g. Estimated arrival time around 3 PM, ground floor preference, Girnar pilgrimage tour advice..."
                  value={formData.additionalMessage}
                  onChange={(e) => setFormData({ ...formData, additionalMessage: e.target.value })}
                  className="w-full p-3 text-sm border border-stone-300 rounded bg-stone-50/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#173C32]/20"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full py-3.5 px-6 text-xs uppercase tracking-wider font-semibold text-[#173C32] bg-[#B89A62] hover:bg-[#c9aa70] active:bg-[#a38753] rounded transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2 cursor-pointer"
              >
                <Send className="w-4 h-4 fill-current" />
                <span>Generate & Send WhatsApp Inquiry</span>
              </button>

              <p className="text-[11px] text-center text-stone-500">
                Inquiry directly routes to Hotel Public Business Number: <strong>+91 97377 71871</strong>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
