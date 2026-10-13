import React, { useState } from 'react';
import { Eye, Info, X, CheckCircle, Shield } from 'lucide-react';
import { hotelConfig } from '../data/hotelConfig';

interface PresentationDemoBannerProps {
  showAttribution: boolean;
  onToggleAttribution: (val: boolean) => void;
}

export const PresentationDemoBanner: React.FC<PresentationDemoBannerProps> = ({
  showAttribution,
  onToggleAttribution,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  if (dismissed) return null;

  return (
    <>
      {/* Discrete Top Badge */}
      <div className="bg-[#122b24] text-stone-300 text-[11px] px-3 py-1 border-b border-[#B89A62]/20 flex items-center justify-between">
        <div className="max-w-7xl mx-auto w-full flex items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#B89A62]" />
            <span>
              Client Presentation Demo for <strong>{hotelConfig.name}</strong>
            </span>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setIsOpen(true)}
              className="text-[#B89A62] hover:text-white underline underline-offset-2 flex items-center gap-1 cursor-pointer"
            >
              <Info className="w-3 h-3" />
              <span>Demo Notes & Verification</span>
            </button>
            <button
              onClick={() => setDismissed(true)}
              className="text-stone-400 hover:text-white p-0.5"
              title="Dismiss banner"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>

      {/* Information & Verification Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 animate-in fade-in duration-150">
          <div className="bg-white rounded max-w-lg w-full p-6 shadow-2xl border border-stone-200 space-y-4 max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between border-b border-stone-100 pb-3">
              <div className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-[#173C32]" />
                <h3 className="font-serif text-lg font-bold text-[#173C32]">
                  Demo Specs & Business Audit
                </h3>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-stone-400 hover:text-stone-700 p-1 rounded"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-3 text-xs text-stone-600">
              <p>
                This demo website has been engineered specifically for presentation to the management of <strong>Hotel The Grand Heritage Junagadh</strong>.
              </p>

              <div className="bg-stone-50 p-3 rounded border border-stone-200 space-y-2">
                <span className="font-semibold text-stone-800 block text-[11px] uppercase tracking-wider">
                  Verified Supplied Information:
                </span>
                <div className="grid grid-cols-1 gap-1 text-[11px]">
                  <div className="flex items-center gap-1.5 text-stone-700">
                    <CheckCircle className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span><strong>Public Phone:</strong> +91 97377 71871</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-stone-700">
                    <CheckCircle className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span><strong>Address:</strong> 2nd Floor, Axar Plaza-2, Zanzarda, Junagadh</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-stone-700">
                    <CheckCircle className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span><strong>Check-in / Check-out:</strong> 11:00 AM / 10:00 AM</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-stone-700">
                    <CheckCircle className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span><strong>Google Maps Rating:</strong> 4.9 / 5 Star Rating</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-stone-700">
                    <CheckCircle className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span><strong>Instagram:</strong> @hotel_the_grand_heritage</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-stone-700">
                    <CheckCircle className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span><strong>GST Identification:</strong> 24AASFH7375P1ZE</span>
                  </div>
                </div>
              </div>

              {/* Agency Attribution Toggle */}
              <div className="pt-2 border-t border-stone-100 flex items-center justify-between">
                <div>
                  <span className="font-medium text-stone-800 block">Daxira InfoTech Attribution</span>
                  <span className="text-[11px] text-stone-500">Toggle "Website concept by Daxira InfoTech" in footer</span>
                </div>
                <button
                  type="button"
                  onClick={() => onToggleAttribution(!showAttribution)}
                  className={`relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none ${
                    showAttribution ? 'bg-[#173C32]' : 'bg-stone-300'
                  }`}
                  role="switch"
                  aria-checked={showAttribution}
                >
                  <span
                    className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out ${
                      showAttribution ? 'translate-x-5' : 'translate-x-0'
                    }`}
                  />
                </button>
              </div>
            </div>

            <div className="pt-2 flex justify-end">
              <button
                onClick={() => setIsOpen(false)}
                className="px-4 py-2 text-xs font-semibold uppercase tracking-wider text-white bg-[#173C32] rounded hover:bg-[#1f4e42] transition-colors"
              >
                Close & Return to Demo
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
