import { Link } from 'react-router-dom';
import { Building2, Calendar, Users } from 'lucide-react';
import Slideshow from '../components/Slideshow';

export default function Home() {
  return (
    <div>
      {/* Hero Section with Slideshow */}
      <div className="relative">
        <Slideshow />
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-7xl mx-auto px-4 w-full">
            <div className="text-white">
              <h1 className="text-5xl font-bold mb-4">Welcome to Kgalala Palace</h1>
              <p className="text-xl mb-8">Experience luxury and elegance in our world-class venues</p>
              <Link 
                to="/venues"
                className="bg-red-600 text-white px-8 py-3 rounded-md text-lg font-semibold hover:bg-red-700 transition-colors"
              >
                Explore Venues
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Kgalala Palace</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Building2 className="h-8 w-8 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Premium Venues</h3>
              <p className="text-gray-600">State-of-the-art facilities equipped with modern amenities</p>
            </div>

            <div className="text-center">
              <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Calendar className="h-8 w-8 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Easy Booking</h3>
              <p className="text-gray-600">Simple and secure online booking system</p>
            </div>

            <div className="text-center">
              <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Professional Support</h3>
              <p className="text-gray-600">Dedicated team to ensure your event's success</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}