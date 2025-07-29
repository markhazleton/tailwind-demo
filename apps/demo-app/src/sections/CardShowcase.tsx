import { Button, Card, CardContent, CardFooter, CardHeader } from '@tailwindspark/ui-components';
import { Calendar, MapPin, Star, User } from 'lucide-react';
import React from 'react';

export const CardShowcase: React.FC = () => {
  return (
    <section className="space-y-8">
      <div>
        <h2 className="text-2xl font-bold text-secondary-900 dark:text-secondary-100 mb-4">
          Card Components
        </h2>
        <p className="text-secondary-600 dark:text-secondary-400 mb-6">
          Versatile card layouts with headers, content, and footers.
        </p>
      </div>

      {/* Basic Cards */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-secondary-800 dark:text-secondary-200">
          Card Variants
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card variant="default">
            <CardContent>
              <h4 className="font-semibold mb-2">Default Card</h4>
              <p>A simple card with default styling.</p>
            </CardContent>
          </Card>
          
          <Card variant="bordered">
            <CardContent>
              <h4 className="font-semibold mb-2">Bordered Card</h4>
              <p>A card with visible borders for clear separation.</p>
            </CardContent>
          </Card>
          
          <Card variant="elevated">
            <CardContent>
              <h4 className="font-semibold mb-2">Elevated Card</h4>
              <p>A card with shadow for a floating appearance.</p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Profile Cards */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-secondary-800 dark:text-secondary-200">
          Profile Cards
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card variant="elevated">
            <CardHeader
              title="Sarah Johnson"
              subtitle="Senior Frontend Developer"
            />
            <CardContent>
              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-2">
                  <MapPin size={16} className="text-secondary-500" />
                  <span>San Francisco, CA</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar size={16} className="text-secondary-500" />
                  <span>Joined March 2022</span>
                </div>
                <div className="flex items-center gap-2">
                  <Star size={16} className="text-warning-500" />
                  <span>4.9 rating</span>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button size="sm" fullWidth>
                View Profile
              </Button>
            </CardFooter>
          </Card>

          <Card variant="bordered">
            <div className="p-6">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900 rounded-full flex items-center justify-center">
                  <User className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                </div>
                <div>
                  <h4 className="font-semibold text-secondary-900 dark:text-secondary-100">
                    Alex Chen
                  </h4>
                  <p className="text-sm text-secondary-600 dark:text-secondary-400">
                    UI/UX Designer
                  </p>
                </div>
              </div>
              <p className="text-sm text-secondary-600 dark:text-secondary-400 mb-4">
                Passionate about creating intuitive and beautiful user experiences
                that solve real-world problems.
              </p>
              <div className="flex gap-2">
                <Button size="sm" variant="secondary" fullWidth>
                  Message
                </Button>
                <Button size="sm" fullWidth>
                  Connect
                </Button>
              </div>
            </div>
          </Card>

          <Card variant="default">
            <CardContent>
              <div className="text-center">
                <div className="w-16 h-16 bg-success-100 dark:bg-success-900 rounded-full flex items-center justify-center mx-auto mb-4">
                  <User className="w-8 h-8 text-success-600 dark:text-success-400" />
                </div>
                <h4 className="font-semibold text-secondary-900 dark:text-secondary-100 mb-2">
                  Emma Wilson
                </h4>
                <p className="text-sm text-secondary-600 dark:text-secondary-400 mb-4">
                  Full Stack Developer
                </p>
                <div className="flex justify-center gap-2">
                  <Button size="sm" variant="ghost">
                    Portfolio
                  </Button>
                  <Button size="sm">
                    Hire Me
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Feature Cards */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-secondary-800 dark:text-secondary-200">
          Feature Cards
        </h3>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card variant="elevated" padding="lg">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary-100 dark:bg-primary-900 rounded-lg flex items-center justify-center">
                  <Star className="w-5 h-5 text-primary-600 dark:text-primary-400" />
                </div>
                <div>
                  <h4 className="font-semibold text-secondary-900 dark:text-secondary-100">
                    Premium Features
                  </h4>
                  <p className="text-sm text-secondary-600 dark:text-secondary-400">
                    Unlock advanced capabilities
                  </p>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-primary-500 rounded-full"></div>
                  Advanced analytics and reporting
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-primary-500 rounded-full"></div>
                  Priority customer support
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-primary-500 rounded-full"></div>
                  Custom integrations
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-primary-500 rounded-full"></div>
                  Team collaboration tools
                </li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button variant="primary" fullWidth>
                Upgrade Now
              </Button>
            </CardFooter>
          </Card>

          <Card variant="bordered" padding="lg">
            <CardContent>
              <div className="text-center">
                <h4 className="text-3xl font-bold text-secondary-900 dark:text-secondary-100 mb-2">
                  99.9%
                </h4>
                <p className="text-secondary-600 dark:text-secondary-400 mb-4">
                  Uptime Guarantee
                </p>
                <p className="text-sm text-secondary-600 dark:text-secondary-400 mb-6">
                  Our infrastructure is built for reliability and performance,
                  ensuring your applications are always available when you need them.
                </p>
                <Button variant="secondary" size="sm">
                  Learn More
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
