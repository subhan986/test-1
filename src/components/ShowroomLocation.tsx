import React, { useState } from 'react';
import { 
  MapPin, 
  Phone, 
  MessageSquare, 
  Clock, 
  ExternalLink, 
  Compass, 
  Calendar, 
  CheckCircle,
  Car,
  Coffee,
  ShieldCheck
} from 'lucide-react';
import { SHOWROOM_INFO } from '../data/furnitureData';

export const ShowroomLocation: React.FC = () => {
  const [bookingDate, setBookingDate] = useState('');
  const [bookingTime, setBookingTime] = useState('14:00');
  const [visitorName, setVisitorName] = useState('');
  const [visitorPhone, setVisitorPhone] = useState('');
  const [bookingInterest, setBookingInterest] = useState('Living Room & Sofas');
  const [bookingConfirmed, setBookingConfirmed] = useState(false);

  const handleBooking = (e: React.FormEvent) => {
    e.preventDefault();
    if (!visitorPhone) return;

    const message = `Salam TH Furnishers! I would like to schedule a private showroom consultation at your Canal Road gallery:
• Date: ${bookingDate || 'Upcoming visit'}
• Time: ${bookingTime}
• Interested in: ${bookingInterest}
• Name: ${visitorName || 'Guest'}
• Contact: ${visitorPhone}`;

    window.open(`https://wa.me/${SHOWROOM_INFO.whatsapp}?text=${encodeURIComponent(message)}`, '_blank');
    setBookingConfirmed(true);
  };

  return (
    <section id="showroom" className="py-16 bg-[#faf8f5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <p className="text-xs uppercase tracking-[0.25em] text-stone-500 font-semibold mb-2">
            Faisalabad Flagship Showroom
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl text-stone-900 font-medium tracking-tight">
            Visit Us on Canal Road, Amin Town
          </h2>
          <p className="text-sm sm:text-base text-stone-600 mt-3 leading-relaxed">
            Experience our furniture craftsmanship in person. Sit in our down-feather sectionals, touch hand-rubbed American walnut grain, and consult with our interior design architects.
          </p>
        </div>

        {/* Location & Appointment Split Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Location Details & Interactive Map Card */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Address & Direct Affordances Card */}
            <div className="bg-white rounded-lg border border-[#ded7c8] p-6 sm:p-7 shadow-sm space-y-5">
              <div className="flex items-start justify-between gap-4">
                <div className="space-y-1">
                  <div className="text-xs font-mono uppercase tracking-wider text-amber-800">
                    Showroom & Manufacturing
                  </div>
                  <h3 className="font-serif text-xl sm:text-2xl font-semibold text-stone-900">
                    TH Furnishers Pakistan
                  </h3>
                  <p className="text-sm text-stone-700 font-medium pt-1">
                    P-3, Near UBL Bank, Kashmir Bridge, Canal Road, Amin Town, Faisalabad
                  </p>
                </div>

                <a
                  href={SHOWROOM_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="shrink-0 inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold uppercase tracking-wider text-white bg-stone-900 hover:bg-stone-800 rounded-sm transition-colors cursor-pointer"
                >
                  <Compass className="w-3.5 h-3.5 text-amber-400" />
                  <span>Google Maps</span>
                </a>
              </div>

              {/* Landmark Bulletins */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-stone-100 text-xs text-stone-700">
                <div className="flex items-center gap-2.5">
                  <Clock className="w-4 h-4 text-stone-500 shrink-0" />
                  <div>
                    <span className="font-semibold block text-stone-900">Showroom Hours:</span>
                    <span>11:00 AM – 10:00 PM (Daily)</span>
                  </div>
                </div>

                <div className="flex items-center gap-2.5">
                  <Phone className="w-4 h-4 text-stone-500 shrink-0" />
                  <div>
                    <span className="font-semibold block text-stone-900">Direct Telephone:</span>
                    <a href={`tel:${SHOWROOM_INFO.phone}`} className="hover:underline text-stone-900">
                      +92 300 9666700
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-2.5">
                  <Car className="w-4 h-4 text-stone-500 shrink-0" />
                  <div>
                    <span className="font-semibold block text-stone-900">Accessibility:</span>
                    <span>Convenient Canal Road parking</span>
                  </div>
                </div>

                <div className="flex items-center gap-2.5">
                  <Coffee className="w-4 h-4 text-stone-500 shrink-0" />
                  <div>
                    <span className="font-semibold block text-stone-900">Private Experience:</span>
                    <span>Fabric swatch lounge & espresso</span>
                  </div>
                </div>
              </div>

              {/* Visual Map Mockup / Landmarks Guide */}
              <div className="relative rounded-md overflow-hidden border border-stone-200 bg-stone-100 h-64 flex flex-col justify-between p-5">
                {/* Background architectural grid */}
                <div 
                  className="absolute inset-0 opacity-15 pointer-events-none" 
                  style={{ backgroundImage: 'radial-gradient(#78716c 1px, transparent 1px)', backgroundSize: '20px 20px' }} 
                />

                <div className="relative z-10 flex items-center justify-between">
                  <span className="text-[11px] font-mono uppercase tracking-widest text-stone-600 bg-white/90 px-2.5 py-1 rounded shadow-xs">
                    Canal Road Transit Corridor
                  </span>
                  <a
                    href={SHOWROOM_INFO.googleMapsUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="text-xs text-stone-900 hover:text-stone-700 underline font-medium flex items-center gap-1"
                  >
                    <span>Open in Map App</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>

                {/* Central pin layout */}
                <div className="relative z-10 text-center my-auto">
                  <div className="inline-flex p-3 bg-stone-900 text-white rounded-full shadow-lg animate-bounce">
                    <MapPin className="w-6 h-6 text-amber-400" />
                  </div>
                  <div className="mt-2 bg-white/95 backdrop-blur-md px-4 py-2 rounded shadow-sm inline-block max-w-sm">
                    <div className="font-serif text-sm font-semibold text-stone-900">TH Furnishers Pakistan</div>
                    <div className="text-[11px] text-stone-600">P-3, Near UBL Bank, Kashmir Bridge, Amin Town</div>
                  </div>
                </div>

                <div className="relative z-10 flex items-center justify-between text-[11px] text-stone-500 bg-white/80 p-2 rounded">
                  <span>Landmark: Near UBL Bank Kashmir Bridge</span>
                  <span>Canal Road, Faisalabad</span>
                </div>
              </div>

            </div>

          </div>

          {/* Right Column: Book a Private Showroom Walkthrough / Consultation */}
          <div className="lg:col-span-5 bg-white rounded-lg border border-[#ded7c8] p-6 sm:p-7 shadow-sm">
            <div className="space-y-1 mb-5">
              <span className="text-xs uppercase font-mono tracking-widest text-stone-500">
                Personalized Service
              </span>
              <h3 className="font-serif text-2xl font-medium text-stone-900">
                Book a Showroom Walkthrough
              </h3>
              <p className="text-xs text-stone-600">
                Reserve time with our interior architect to review your floor plans, select wood stains, and test down-feather cushions.
              </p>
            </div>

            {bookingConfirmed ? (
              <div className="bg-emerald-50 border border-emerald-200 rounded-md p-5 text-center space-y-3">
                <CheckCircle className="w-8 h-8 text-emerald-600 mx-auto" />
                <h4 className="font-serif text-lg font-semibold text-emerald-950">
                  Appointment Request Sent
                </h4>
                <p className="text-xs text-emerald-800">
                  Our Canal Road showroom team has received your appointment details. We look forward to welcoming you to TH Furnishers!
                </p>
                <button
                  onClick={() => setBookingConfirmed(false)}
                  className="text-xs font-semibold text-emerald-900 underline"
                >
                  Schedule Another Appointment
                </button>
              </div>
            ) : (
              <form onSubmit={handleBooking} className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-stone-700 mb-1">
                    Your Full Name
                  </label>
                  <input
                    type="text"
                    value={visitorName}
                    onChange={(e) => setVisitorName(e.target.value)}
                    placeholder="e.g. Subhan Younas"
                    className="w-full px-3 py-2 text-xs bg-[#faf8f5] border border-stone-300 rounded-md text-stone-900"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-stone-700 mb-1">
                    WhatsApp or Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    value={visitorPhone}
                    onChange={(e) => setVisitorPhone(e.target.value)}
                    placeholder="+92 300 0000000"
                    className="w-full px-3 py-2 text-xs bg-[#faf8f5] border border-stone-300 rounded-md text-stone-900"
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-semibold text-stone-700 mb-1">
                      Preferred Date
                    </label>
                    <input
                      type="date"
                      value={bookingDate}
                      onChange={(e) => setBookingDate(e.target.value)}
                      className="w-full px-3 py-2 text-xs bg-[#faf8f5] border border-stone-300 rounded-md text-stone-900"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-stone-700 mb-1">
                      Time Slot
                    </label>
                    <select
                      value={bookingTime}
                      onChange={(e) => setBookingTime(e.target.value)}
                      className="w-full px-3 py-2 text-xs bg-[#faf8f5] border border-stone-300 rounded-md text-stone-900"
                    >
                      <option value="12:00 PM">12:00 PM (Noon)</option>
                      <option value="02:00 PM">02:00 PM</option>
                      <option value="04:00 PM">04:00 PM</option>
                      <option value="06:00 PM">06:00 PM (Evening)</option>
                      <option value="08:00 PM">08:00 PM (Night)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-stone-700 mb-1">
                    What would you like to explore?
                  </label>
                  <select
                    value={bookingInterest}
                    onChange={(e) => setBookingInterest(e.target.value)}
                    className="w-full px-3 py-2 text-xs bg-[#faf8f5] border border-stone-300 rounded-md text-stone-900"
                  >
                    <option value="Living Room & Down-Feather Sofas">Living Room & Down-Feather Sofas (Modern Muse)</option>
                    <option value="The Orca Table & Sculptural Pieces">The Orca Table & Sculptural Pieces</option>
                    <option value="Custom Bedroom Sets">Custom Bedroom Sets & Sovereign Suites</option>
                    <option value="Architectural Dining Tables">Architectural Dining Tables & Chairs</option>
                    <option value="Complete Residence Interior Consultation">Complete Residence Interior Consultation</option>
                  </select>
                </div>

                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 text-xs font-semibold uppercase tracking-wider text-white bg-stone-900 hover:bg-stone-800 rounded-sm transition-colors cursor-pointer mt-2"
                >
                  <Calendar className="w-3.5 h-3.5" />
                  <span>Confirm Showroom Appointment</span>
                </button>

                <p className="text-[11px] text-stone-500 text-center">
                  Walk-ins are always welcome daily from 11:00 AM to 10:00 PM.
                </p>
              </form>
            )}

          </div>

        </div>

      </div>
    </section>
  );
};
