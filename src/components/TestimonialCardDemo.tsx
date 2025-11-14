import { TestimonialCard } from "../ui/primitives";
import { Avatar } from "../ui/primitives/Avatar/Avatar";

/**
 * TestimonialCardDemo Component
 *
 * Demonstrates various usage scenarios of the TestimonialCard component:
 * 1. With image avatar - showing realistic testimonial with photo
 * 2. With initial avatar - showing name-based avatar fallback
 * 3. Different avatar sizes - sm, md, lg variations
 * 4. Long quote - testing card expansion with longer text
 * 5. Short quote - testing minimum height consistency
 * 6. Grid layout - multiple cards in responsive grid
 */
export default function TestimonialCardDemo() {
  return (
    <div className="p-8 space-y-12 bg-gray-50 min-h-screen">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold mb-2">TestimonialCard Component</h1>
        <p className="text-gray-600">
          A section component for displaying customer testimonials with quote
          text and author information.
        </p>
      </div>

      {/* Example 1: With Image Avatar */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">
          Example 1: With Image Avatar
        </h2>
        <p className="text-gray-600 mb-4">
          Standard testimonial card with an image-based avatar. Shows complete
          customer information.
        </p>
        <TestimonialCard
          quote="This product has transformed our workflow completely. The team's productivity increased by 40% within the first month. Highly recommended!"
          avatar={
            <Avatar
              type="image"
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop"
              alt="Sarah Johnson"
              size="md"
            />
          }
          name="Sarah Johnson"
          role="CEO at TechCorp"
        />
      </section>

      {/* Example 2: With Initial Avatar */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">
          Example 2: With Initial Avatar
        </h2>
        <p className="text-gray-600 mb-4">
          Testimonial card using initial-based avatar. Useful when user photos
          aren't available.
        </p>
        <TestimonialCard
          quote="Outstanding service and support. The team went above and beyond to ensure our success. Best investment we've made this year."
          avatar={<Avatar type="initial" name="Michael Chen" size="md" />}
          name="Michael Chen"
          role="Product Manager at InnovateLabs"
        />
      </section>

      {/* Example 3: Different Avatar Sizes */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">
          Example 3: Different Avatar Sizes
        </h2>
        <p className="text-gray-600 mb-4">
          Showcasing the same testimonial with small, medium, and large avatar
          sizes.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <TestimonialCard
            quote="Exceptional quality and reliability."
            avatar={<Avatar type="initial" name="Emma Wilson" size="sm" />}
            name="Emma Wilson"
            role="Designer"
          />
          <TestimonialCard
            quote="Exceptional quality and reliability."
            avatar={<Avatar type="initial" name="Emma Wilson" size="md" />}
            name="Emma Wilson"
            role="Designer"
          />
          <TestimonialCard
            quote="Exceptional quality and reliability."
            avatar={<Avatar type="initial" name="Emma Wilson" size="lg" />}
            name="Emma Wilson"
            role="Designer"
          />
        </div>
      </section>

      {/* Example 4: Long Quote */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Example 4: Long Quote</h2>
        <p className="text-gray-600 mb-4">
          Testing card expansion with a longer testimonial text. The card
          automatically adjusts height.
        </p>
        <TestimonialCard
          quote="We've been using this solution for over two years now, and it continues to exceed our expectations. The platform's reliability, combined with exceptional customer support, has made it an integral part of our daily operations. The ROI has been phenomenal, and our team couldn't be happier with the decision to adopt this technology. It's rare to find a product that delivers on all its promises."
          avatar={
            <Avatar
              type="image"
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop"
              alt="David Martinez"
              size="md"
            />
          }
          name="David Martinez"
          role="CTO at DataStream Solutions"
        />
      </section>

      {/* Example 5: Short Quote */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Example 5: Short Quote</h2>
        <p className="text-gray-600 mb-4">
          Testing with minimal text to ensure consistent card appearance.
        </p>
        <TestimonialCard
          quote="Simply amazing!"
          avatar={<Avatar type="initial" name="Lisa Park" size="md" />}
          name="Lisa Park"
          role="Founder"
        />
      </section>

      {/* Example 6: Grid Layout */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">
          Example 6: Multiple Cards in Grid
        </h2>
        <p className="text-gray-600 mb-4">
          Responsive grid layout showing how multiple testimonial cards work
          together. Grid adapts from 1 column (mobile) to 2 columns (tablet) to
          3 columns (desktop).
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <TestimonialCard
            quote="Game-changer for our business. Couldn't recommend it more highly."
            avatar={
              <Avatar
                type="image"
                src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop"
                alt="Rachel Green"
                size="md"
              />
            }
            name="Rachel Green"
            role="Marketing Director"
          />
          <TestimonialCard
            quote="The best tool we've implemented in years. Five stars!"
            avatar={<Avatar type="initial" name="James Wilson" size="md" />}
            name="James Wilson"
            role="Operations Lead"
          />
          <TestimonialCard
            quote="Intuitive, powerful, and exactly what we needed."
            avatar={
              <Avatar
                type="image"
                src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop"
                alt="Alex Thompson"
                size="md"
              />
            }
            name="Alex Thompson"
            role="Software Engineer"
          />
          <TestimonialCard
            quote="Exceeded all expectations. Worth every penny."
            avatar={<Avatar type="initial" name="Nina Patel" size="md" />}
            name="Nina Patel"
            role="Startup Founder"
          />
          <TestimonialCard
            quote="Fast, reliable, and user-friendly. Highly recommended!"
            avatar={
              <Avatar
                type="image"
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop"
                alt="Tom Anderson"
                size="md"
              />
            }
            name="Tom Anderson"
            role="Consultant"
          />
          <TestimonialCard
            quote="Transformed how we work. Couldn't be happier!"
            avatar={<Avatar type="initial" name="Sophia Lee" size="md" />}
            name="Sophia Lee"
            role="Product Owner"
          />
        </div>
      </section>

      {/* Example 7: With Custom Styling */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">
          Example 7: With Custom Styling
        </h2>
        <p className="text-gray-600 mb-4">
          Testimonial card with additional custom classes for enhanced visual
          effects.
        </p>
        <TestimonialCard
          quote="A truly transformative experience. This platform has revolutionized how we approach our work."
          avatar={
            <Avatar
              type="image"
              src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=200&h=200&fit=crop"
              alt="Jessica Adams"
              size="lg"
            />
          }
          name="Jessica Adams"
          role="VP of Engineering at CloudScale"
          className="shadow-lg hover:shadow-xl transition-shadow duration-300 border-2"
        />
      </section>

      {/* Props Reference */}
      <section className="mt-12 p-6 bg-white rounded-lg border border-gray-200">
        <h2 className="text-2xl font-semibold mb-4">Props Reference</h2>
        <div className="space-y-4 text-sm">
          <div>
            <code className="bg-gray-100 px-2 py-1 rounded">
              quote?: string
            </code>
            <p className="text-gray-600 mt-1">
              The testimonial quote text to display. Default: "Quote"
            </p>
          </div>
          <div>
            <code className="bg-gray-100 px-2 py-1 rounded">
              avatar: ReactNode
            </code>
            <p className="text-gray-600 mt-1">
              Avatar component (image or initial type). Pass configured Avatar
              component.
            </p>
          </div>
          <div>
            <code className="bg-gray-100 px-2 py-1 rounded">name: string</code>
            <p className="text-gray-600 mt-1">
              Name of the person giving the testimonial (required).
            </p>
          </div>
          <div>
            <code className="bg-gray-100 px-2 py-1 rounded">role: string</code>
            <p className="text-gray-600 mt-1">
              Role, company, or description of the person (required).
            </p>
          </div>
          <div>
            <code className="bg-gray-100 px-2 py-1 rounded">
              className?: string
            </code>
            <p className="text-gray-600 mt-1">
              Additional CSS classes for custom styling (optional).
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
