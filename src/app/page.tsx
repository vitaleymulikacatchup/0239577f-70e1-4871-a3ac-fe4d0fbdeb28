"use client"

import { ThemeProvider } from "@/providers/ThemeProvider";
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import HeroSplit from '@/components/sections/hero/HeroSplit';
import TextSplitAbout from '@/components/sections/about/TextSplitAbout';
import ProductCardTwo from '@/components/sections/product/ProductCardTwo';
import TestimonialCardTwo from '@/components/sections/testimonial/TestimonialCardTwo';
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FooterLogoEmphasis from '@/components/sections/footer/FooterLogoEmphasis';
import { Award, Calendar, ChefHat, Star } from 'lucide-react';

export default function Page() {
  return (
    <ThemeProvider
      defaultButtonVariant="hover-magnetic"
      defaultTextAnimation="entrance-slide"
      borderRadius="soft"
    >
      <div id="nav" data-section="nav">
        <NavbarStyleApple
          navItems={[
            { name: "Menu", id: "menu" },
            { name: "About", id: "about" },
            { name: "Reviews", id: "reviews" },
            { name: "Contact", id: "contact" }
          ]}
          brandName="Bella Vista"
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroSplit
          title="Authentic Italian Dining Experience"
          description="Discover our passion for traditional recipes, fresh ingredients, and exceptional service in the heart of the city"
          tag="Est. 2010"
          tagIcon={Award}
          imageSrc="https://images.pexels.com/photos/3201920/pexels-photo-3201920.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          imageAlt="Elegant restaurant interior"
          imagePosition="right"
          buttons={[
            { text: "View Menu", href: "menu" },
            { text: "Make Reservation", href: "contact" }
          ]}
        />
      </div>

      <div id="about" data-section="about">
        <TextSplitAbout
          title="Our Story"
          description={[
            "At Bella Vista, we bring the authentic flavors of Italy to your table with recipes passed down through generations.",
            "Our commitment to fresh, locally-sourced ingredients and traditional cooking methods ensures every dish tells a story of passion and heritage."
          ]}
          buttons={[
            { text: "Our Menu", href: "menu" }
          ]}
        />
      </div>

      <div id="menu" data-section="menu">
        <ProductCardTwo
          title="Featured Dishes"
          description="Discover our signature creations crafted with love and the finest ingredients"
          tag="Chef's Special"
          tagIcon={ChefHat}
          products={[
            {
              id: "1",
              brand: "Signature",
              name: "Osso Buco alla Milanese",
              price: "$32.00",
              rating: 5,
              reviewCount: "127",
              imageSrc: "https://images.pexels.com/photos/750071/pexels-photo-750071.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Osso Buco alla Milanese"
            },
            {
              id: "2",
              brand: "Fresh Catch",
              name: "Mediterranean Sea Bass",
              price: "$28.00",
              rating: 5,
              reviewCount: "89",
              imageSrc: "https://images.pexels.com/photos/858508/pexels-photo-858508.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Mediterranean Sea Bass"
            },
            {
              id: "3",
              brand: "Dolce",
              name: "Tiramisu della Casa",
              price: "$12.00",
              rating: 5,
              reviewCount: "156",
              imageSrc: "https://images.pexels.com/photos/28052914/pexels-photo-28052914.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Tiramisu della Casa"
            }
          ]}
        />
      </div>

      <div id="reviews" data-section="reviews">
        <TestimonialCardTwo
          title="What Our Guests Say"
          description="Authentic reviews from our valued customers"
          tag="Reviews"
          tagIcon={Star}
          testimonials={[
            {
              id: "1",
              name: "Sarah Johnson",
              role: "Food Enthusiast",
              testimonial: "The most authentic Italian experience outside of Italy! The osso buco was absolutely divine, and the service was impeccable.",
              imageSrc: "https://images.pexels.com/photos/8558897/pexels-photo-8558897.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Sarah Johnson portrait"
            },
            {
              id: "2",
              name: "Michael Chen",
              role: "Local Food Critic",
              testimonial: "Bella Vista sets the gold standard for Italian dining. Every dish showcases the chef's mastery and passion for authentic flavors.",
              imageSrc: "https://images.pexels.com/photos/450214/pexels-photo-450214.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Michael Chen portrait"
            },
            {
              id: "3",
              name: "Lisa Rodriguez",
              role: "Regular Guest",
              testimonial: "This place feels like home. The warm atmosphere, incredible food, and attentive staff make every visit special.",
              imageSrc: "https://images.pexels.com/photos/789822/pexels-photo-789822.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Lisa Rodriguez portrait"
            },
            {
              id: "4",
              name: "David Kim",
              role: "Wine Connoisseur",
              testimonial: "Outstanding wine selection perfectly paired with exceptional cuisine. The sommelier's recommendations were spot on.",
              imageSrc: "https://images.pexels.com/photos/3777565/pexels-photo-3777565.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "David Kim portrait"
            }
          ]}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactSplit
          tag="Reservations"
          tagIcon={Calendar}
          title="Book Your Table"
          description="Reserve your dining experience at Bella Vista. We look forward to welcoming you for an unforgettable meal."
          imageSrc="https://images.pexels.com/photos/2287523/pexels-photo-2287523.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          imageAlt="Restaurant dining room ambiance"
          mediaPosition="right"
          inputPlaceholder="Enter your email"
          buttonText="Request Reservation"
          termsText="By submitting, you agree to our reservation policy and will receive confirmation within 24 hours."
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterLogoEmphasis
          logoText="Bella Vista"
          columns={[
            {
              items: [
                { label: "Menu", href: "menu" },
                { label: "Wine List", href: "menu" },
                { label: "Private Dining", href: "contact" }
              ]
            },
            {
              items: [
                { label: "About Us", href: "about" },
                { label: "Our Chef", href: "about" },
                { label: "Reviews", href: "reviews" }
              ]
            },
            {
              items: [
                { label: "Reservations", href: "contact" },
                { label: "Contact", href: "contact" },
                { label: "Location", href: "contact" }
              ]
            }
          ]}
        />
      </div>
    </ThemeProvider>
  );
}