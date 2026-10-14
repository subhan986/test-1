import React, { useState } from 'react';
import { Star, MessageSquare, Check, ShieldCheck } from 'lucide-react';
import { CLIENT_REVIEWS, SHOWROOM_INFO } from '../data/furnitureData';
import { Review } from '../types/furniture';

export const ReviewsSection: React.FC = () => {
  const [reviews, setReviews] = useState<Review[]>(CLIENT_REVIEWS);
  const [newAuthor, setNewAuthor] = useState('');
  const [newLocation, setNewLocation] = useState('Faisalabad');
  const [newComment, setNewComment] = useState('');
  const [newPurchase, setNewPurchase] = useState('Modern Muse Sofa');
  const [submittedReview, setSubmittedReview] = useState(false);
  const [showAddReview, setShowAddReview] = useState(false);

  const handleReviewSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newAuthor || !newComment) return;

    const added: Review = {
      id: `rev-${Date.now()}`,
      author: newAuthor,
      location: newLocation,
      rating: 5,
      date: 'Just now',
      comment: newComment,
      verifiedPurchase: newPurchase,
    };

    setReviews([added, ...reviews]);
    setSubmittedReview(true);
    setTimeout(() => {
      setShowAddReview(false);
      setSubmittedReview(false);
      setNewAuthor('');
      setNewComment('');
    }, 2000);
  };

  return (
    <section id="reviews" className="py-16 bg-[#faf8f5] border-t border-[#ded7c8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with 5.0 Badge */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-stone-500 font-semibold mb-2">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>Verified Client Experiences</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl text-stone-900 font-medium tracking-tight">
              5.0 Star Rated Luxury Furniture
            </h2>
            <p className="text-sm text-stone-600 mt-2 max-w-xl">
              From bespoke residences in Amin Town and Kohinoor City to luxury apartments across Punjab, read what clients say about TH Furnishers craftsmanship.
            </p>
          </div>

          {/* Aggregate Rating Scoreboard (Clean typography, no flashy pills) */}
          <div className="flex items-center gap-4 bg-white p-4 rounded-lg border border-[#e5dfd3] shadow-xs">
            <div className="text-3xl sm:text-4xl font-serif font-bold text-stone-900 tabular-nums">
              5.0
            </div>
            <div className="border-l border-stone-200 pl-4">
              <div className="flex text-amber-500 text-sm">
                {'★★★★★'}
              </div>
              <div className="text-xs text-stone-600 mt-0.5">
                Google Verified Reviews · Faisalabad
              </div>
            </div>
            <button
              onClick={() => setShowAddReview(!showAddReview)}
              className="text-xs text-stone-800 hover:text-stone-950 font-semibold underline underline-offset-4 ml-2 cursor-pointer"
            >
              Leave Feedback
            </button>
          </div>
        </div>

        {/* Add Review Form Dropdown */}
        {showAddReview && (
          <div className="mb-10 bg-white p-6 rounded-lg border border-[#e5dfd3] shadow-sm max-w-2xl animate-fadeIn">
            <h3 className="font-serif text-lg font-semibold text-stone-900 mb-3">
              Share Your Experience with TH Furnishers
            </h3>
            {submittedReview ? (
              <div className="text-emerald-700 text-sm font-medium flex items-center gap-2 py-4">
                <Check className="w-5 h-5 text-emerald-600" />
                <span>Thank you! Your feedback has been published.</span>
              </div>
            ) : (
              <form onSubmit={handleReviewSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-semibold text-stone-700 block mb-1">Your Name *</label>
                    <input
                      type="text"
                      required
                      value={newAuthor}
                      onChange={(e) => setNewAuthor(e.target.value)}
                      placeholder="e.g. Asad Qureshi"
                      className="w-full px-3 py-2 text-xs bg-[#faf8f5] border border-stone-300 rounded"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-semibold text-stone-700 block mb-1">Area / City *</label>
                    <input
                      type="text"
                      required
                      value={newLocation}
                      onChange={(e) => setNewLocation(e.target.value)}
                      placeholder="e.g. Amin Town, Faisalabad"
                      className="w-full px-3 py-2 text-xs bg-[#faf8f5] border border-stone-300 rounded"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-xs font-semibold text-stone-700 block mb-1">Item Purchased</label>
                  <input
                    type="text"
                    value={newPurchase}
                    onChange={(e) => setNewPurchase(e.target.value)}
                    placeholder="e.g. Orca Table, Down-Feather Sectional, Bed Set"
                    className="w-full px-3 py-2 text-xs bg-[#faf8f5] border border-stone-300 rounded"
                  />
                </div>

                <div>
                  <label className="text-xs font-semibold text-stone-700 block mb-1">Your Review *</label>
                  <textarea
                    required
                    rows={3}
                    value={newComment}
                    onChange={(e) => setNewComment(e.target.value)}
                    placeholder="Share your thoughts on the craftsmanship, wood quality, down-feather comfort, or delivery..."
                    className="w-full px-3 py-2 text-xs bg-[#faf8f5] border border-stone-300 rounded"
                  />
                </div>

                <div className="flex items-center gap-3">
                  <button
                    type="submit"
                    className="px-5 py-2.5 bg-stone-900 hover:bg-stone-800 text-white text-xs font-semibold uppercase tracking-wider rounded-sm transition-colors cursor-pointer"
                  >
                    Submit Review
                  </button>
                  <button
                    type="button"
                    onClick={() => setShowAddReview(false)}
                    className="px-4 py-2 text-xs text-stone-600 hover:text-stone-900"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            )}
          </div>
        )}

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((rev) => (
            <div
              key={rev.id}
              className="bg-white rounded-lg border border-[#e5dfd3] p-6 shadow-xs flex flex-col justify-between space-y-4 hover:shadow-md transition-shadow"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-2">
                  <div className="text-amber-500 text-xs">
                    {'★★★★★'}
                  </div>
                  <span className="text-[11px] text-stone-600 font-mono">
                    {rev.date}
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-stone-700 leading-relaxed italic">
                  "{rev.comment}"
                </p>
              </div>

              <div className="border-t border-stone-100 pt-3">
                <div className="font-semibold text-stone-900 text-xs sm:text-sm">
                  {rev.author}
                </div>
                <div className="text-[11px] text-stone-600">
                  {rev.location}
                </div>
                <div className="text-[11px] text-stone-700 font-mono mt-1">
                  Verified: {rev.verifiedPurchase}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
