import React, { useState } from 'react';
import { Star, Quote, Heart } from 'lucide-react';
import img1 from '../assets/1.png';
import img2 from '../assets/2.png';
import img3 from '../assets/3.png';
import img4 from '../assets/4.png';

const Testimonials = () => {
  const [expanded, setExpanded] = useState(null);

  const toggleExpand = (index) => {
    setExpanded((prev) => (prev === index ? null : index));
  };

  const testimonials = [
    {
      name: 'Priyam Das',
      rating: 5,
      text: `I kept my cat Trixie with Lavie and it was a wonderful experience. She took care of her and sent regular update on the WhatsApp group. I received at least 2 videos and a photo of my cat everyday. Receiving videos really makes you feel at peace knowing that your pet is comfortable and well looked after.
Also, my cat is a single child. She has not stayed with anyone else other than me. To see her staying comfortably with Lavie’s dog was so nice. Her dog Kiara is such a good natured little angel. Also half way through my cat’s time there was another cat that came in. I thought my cat would fight but Lavie handled it with care. Her mom should also be thanked. My cat it seems would only sleep with Lavie’s mom.
Thank you Lavie. I am sure to be a frequent return customer.`,
      hasImage: true,
      image: img1
    },
    {
      name: 'Poornima Sheshagiri',
      rating: 5,
      text: `My pet Billu my cat. Didn’t know what to do & how to manage when am out travelling. But came across Lavie Davie Petocare through Google. Thought to give it a try. It was very convenient because it’s very near to my house.
My experience with this boarding was great. Lavina took good care & her mother Clara aunty is very affectionate towards pets. Was very hesitant in the beginning for the first time when I left my cat but the results turned out to be very positive & was very happy. Lavina would update me regularly send pictures & videos. Hence it made my travel stress free.
I would strongly recommend Lavie Davie Petocare. Thanks a lot Lavina for taking care of my cat & am very happy with the services.
Would like to share some pics of my pet.`,
      hasImage: true,
      image: img2
    },
    {
      name: 'Jaideep Badigar',
      rating: 5,
      text: `I recently hired Lavie Davie Petocare to look after my beloved furry friend, and I couldn't be happier with the service provided. From start to finish, the experience was exceptional.
Communication was seamless. Lavie was prompt and attentive, ensuring they understood my pet's needs and preferences. During the pet-sitting period, they maintained regular updates, including photos and messages, which brought me great peace of mind.
It was clear that my pet was happy and content under their care. They provided not just basic care but also love and companionship, which is invaluable to any pet owner.
I wholeheartedly recommend Lavie Davie Petocare to anyone seeking a reliable, caring, and professional pet caretaker.`,
      hasImage: false
    },
    {
      name: 'Jayesh Dubhashi',
      rating: 5,
      text: `We have onboarded our cat twice with Lavie Davie Petocare and will definitely do so in future as well. It was our first time away from our cat for 4–5 days but we got regular updates — photos/videos — which made us comfortable. I would definitely recommend Lavie Davie Petocare to anyone looking to onboard their pets without any kind of worry.`,
      hasImage: true,
      image: img3
    },
    {
      name: 'Renee Kanojia',
      rating: 5,
      text: `Lavie has taken great care of my pets, while I was on vacation. She kept me updated daily by sharing their photos and videos. Had a stress-free vacation all because of Lavie. Highly recommended.`,
      hasImage: false
    },
    {
      name: 'Nesline Pinto',
      rating: 5,
      text: `I am so glad to come across you. I am so happy that Skipper was in good hands. Thanks to you and your mom for taking such good care of Skipper. This was the first time he was away for so long from us and I was worried if he would have stayed without us as he is quite old. But thanks to you and your mom for taking care of him as if he was your own pet and looking after him with so much care. ♥️`,
      hasImage: true,
      image: img4
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-br from-gray-50 via-white to-pink-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-pink-100 px-4 py-2 rounded-full mb-4">
            <Heart className="h-4 w-4 text-pink-600 mr-2" />
            <span className="text-pink-800 font-medium">Client Stories</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            What Pet Parents Say
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Don't just take our word for it. Here's what our happy clients have to say about
            their experience with Lavie Davie Petocare.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => {
            const isExpanded = expanded === index;
            const shouldShowReadMore = testimonial.text.length > 200;
            const displayedText = isExpanded || !shouldShowReadMore
              ? testimonial.text
              : `${testimonial.text.slice(0, 200)}...`;

            return (
              <div
                key={index}
                className="group relative bg-white p-6 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 transform hover:-translate-y-2"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <div className="relative">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-4">
                      {testimonial.hasImage ? (
                        <img
                          src={testimonial.image}
                          alt={testimonial.name}
                          className="w-14 h-14 rounded-2xl object-cover border-2 border-purple-200"
                        />
                      ) : (
                        <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center">
                          <span className="font-bold text-white text-lg">
                            {testimonial.name.charAt(0)}
                          </span>
                        </div>
                      )}
                      <div>
                        <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                        <div className="flex mt-1">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                          ))}
                        </div>
                      </div>
                    </div>
                    <Quote className="h-8 w-8 text-purple-200 flex-shrink-0" />
                  </div>
                  <p className="text-gray-700 leading-relaxed whitespace-pre-line">{displayedText}</p>
                  {shouldShowReadMore && (
                    <button
                      onClick={() => toggleExpand(index)}
                      className="mt-2 text-sm text-pink-600 font-semibold hover:underline"
                    >
                      {isExpanded ? 'Read Less' : 'Read More'}
                    </button>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-16">
          <div className="inline-flex items-center space-x-4 bg-gradient-to-r from-purple-100 to-pink-100 px-8 py-4 rounded-3xl border border-purple-200">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-6 w-6 text-yellow-400 fill-current" />
              ))}
            </div>
            <div className="text-left">
              <div className="text-2xl font-bold text-gray-900">4.8 out of 5</div>
              <div className="text-gray-600">based on 89 Google reviews</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
