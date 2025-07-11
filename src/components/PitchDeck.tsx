
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Heart, 
  MessageCircle, 
  MapPin, 
  Users, 
  TrendingUp, 
  Target, 
  Lightbulb,
  Shield,
  ChevronLeft,
  ChevronRight,
  BarChart3,
  DollarSign,
  Calendar,
  Smartphone
} from "lucide-react";

const PitchDeck = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: "title",
      title: "WellnessConnect",
      subtitle: "Your Complete Health Companion",
      content: (
        <div className="text-center space-y-8">
          <div className="w-24 h-24 bg-gradient-to-br from-wellness-primary to-wellness-secondary rounded-full flex items-center justify-center mx-auto animate-pulse-wellness">
            <Heart className="w-12 h-12 text-white" />
          </div>
          <div className="space-y-4">
            <h1 className="text-5xl font-bold bg-gradient-to-r from-wellness-primary to-wellness-secondary bg-clip-text text-transparent">
              WellnessConnect
            </h1>
            <p className="text-xl text-muted-foreground">
              Empowering individuals to take control of their health journey
            </p>
            <Badge className="wellness-gradient text-white px-6 py-2 text-lg">
              Healthcare Technology
            </Badge>
          </div>
        </div>
      )
    },
    {
      id: "problem",
      title: "The Problem",
      subtitle: "Healthcare accessibility and management challenges",
      content: (
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="wellness-card border-red-200">
              <CardContent className="p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center">
                    <TrendingUp className="w-4 h-4 text-red-600" />
                  </div>
                  <h3 className="font-semibold">Rising Healthcare Costs</h3>
                </div>
                <p className="text-sm text-muted-foreground">
                  Healthcare expenses continue to increase, making quality care less accessible to many individuals and families.
                </p>
              </CardContent>
            </Card>
            
            <Card className="wellness-card border-orange-200">
              <CardContent className="p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center">
                    <MapPin className="w-4 h-4 text-orange-600" />
                  </div>
                  <h3 className="font-semibold">Limited Access</h3>
                </div>
                <p className="text-sm text-muted-foreground">
                  Many people struggle to find affordable healthcare options and mental health resources in their area.
                </p>
              </CardContent>
            </Card>
            
            <Card className="wellness-card border-yellow-200">
              <CardContent className="p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center">
                    <Calendar className="w-4 h-4 text-yellow-600" />
                  </div>
                  <h3 className="font-semibold">Health Management</h3>
                </div>
                <p className="text-sm text-muted-foreground">
                  Tracking health metrics, medications, and wellness goals remains fragmented across multiple platforms.
                </p>
              </CardContent>
            </Card>
            
            <Card className="wellness-card border-purple-200">
              <CardContent className="p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                    <MessageCircle className="w-4 h-4 text-purple-600" />
                  </div>
                  <h3 className="font-semibold">Mental Health Stigma</h3>
                </div>
                <p className="text-sm text-muted-foreground">
                  Many individuals avoid seeking mental health support due to stigma and lack of accessible resources.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      )
    },
    {
      id: "solution",
      title: "Our Solution",
      subtitle: "WellnessConnect: A comprehensive health management platform",
      content: (
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="wellness-card border-wellness-primary/30">
              <CardContent className="p-6 text-center">
                <Heart className="w-12 h-12 text-wellness-primary mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Wellness Diary</h3>
                <p className="text-sm text-muted-foreground">
                  Track mood, vitals, medications, and daily health metrics in one integrated platform
                </p>
              </CardContent>
            </Card>
            
            <Card className="wellness-card border-wellness-secondary/30">
              <CardContent className="p-6 text-center">
                <MessageCircle className="w-12 h-12 text-wellness-secondary mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Mental Health Support</h3>
                <p className="text-sm text-muted-foreground">
                  AI-powered chatbot providing 24/7 emotional support and crisis resources
                </p>
              </CardContent>
            </Card>
            
            <Card className="wellness-card border-wellness-accent/30">
              <CardContent className="p-6 text-center">
                <MapPin className="w-12 h-12 text-wellness-accent mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Clinic Finder</h3>
                <p className="text-sm text-muted-foreground">
                  Locate affordable and free healthcare options in your local area
                </p>
              </CardContent>
            </Card>
          </div>
          
          <div className="bg-wellness-soft rounded-lg p-6 text-center">
            <h3 className="text-lg font-semibold mb-2">All-in-One Health Companion</h3>
            <p className="text-muted-foreground">
              WellnessConnect combines health tracking, mental wellness support, and healthcare access 
              into a single, user-friendly platform designed for everyone.
            </p>
          </div>
        </div>
      )
    },
    {
      id: "market",
      title: "Market Opportunity",
      subtitle: "Massive and growing digital health market",
      content: (
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="wellness-card text-center">
              <CardContent className="p-6">
                <BarChart3 className="w-12 h-12 text-wellness-primary mx-auto mb-4" />
                <h3 className="text-3xl font-bold text-wellness-primary">$659B</h3>
                <p className="text-sm text-muted-foreground">Global Digital Health Market by 2030</p>
              </CardContent>
            </Card>
            
            <Card className="wellness-card text-center">
              <CardContent className="p-6">
                <Users className="w-12 h-12 text-wellness-secondary mx-auto mb-4" />
                <h3 className="text-3xl font-bold text-wellness-secondary">87%</h3>
                <p className="text-sm text-muted-foreground">of people want to manage health digitally</p>
              </CardContent>
            </Card>
            
            <Card className="wellness-card text-center">
              <CardContent className="p-6">
                <TrendingUp className="w-12 h-12 text-wellness-accent mx-auto mb-4" />
                <h3 className="text-3xl font-bold text-wellness-accent">23.1%</h3>
                <p className="text-sm text-muted-foreground">Annual market growth rate (CAGR)</p>
              </CardContent>
            </Card>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Key Market Drivers</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-wellness-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
                <div>
                  <p className="font-medium">Aging Population</p>
                  <p className="text-sm text-muted-foreground">Increased healthcare needs and chronic disease management</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-wellness-secondary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
                <div>
                  <p className="font-medium">Mental Health Awareness</p>
                  <p className="text-sm text-muted-foreground">Growing recognition of mental wellness importance</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-wellness-accent rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
                <div>
                  <p className="font-medium">Healthcare Accessibility</p>
                  <p className="text-sm text-muted-foreground">Need for affordable and accessible healthcare solutions</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
                <div>
                  <p className="font-medium">Technology Adoption</p>
                  <p className="text-sm text-muted-foreground">Smartphone penetration and health app usage</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: "business-model",
      title: "Business Model",
      subtitle: "Multiple revenue streams for sustainable growth",
      content: (
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="wellness-card border-green-200">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <DollarSign className="w-5 h-5 text-green-600" />
                  <span>Premium Subscriptions</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li>• Advanced health analytics</li>
                  <li>• Personalized health insights</li>
                  <li>• Priority mental health support</li>
                  <li>• Data export and sharing</li>
                </ul>
                <Badge className="mt-3 bg-green-100 text-green-800">$9.99/month</Badge>
              </CardContent>
            </Card>
            
            <Card className="wellness-card border-blue-200">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Users className="w-5 h-5 text-blue-600" />
                  <span>Healthcare Partnerships</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li>• Clinic referral commissions</li>
                  <li>• Healthcare provider integrations</li>
                  <li>• Insurance company partnerships</li>
                  <li>• Telehealth platform integration</li>
                </ul>
                <Badge className="mt-3 bg-blue-100 text-blue-800">B2B Revenue</Badge>
              </CardContent>
            </Card>
            
            <Card className="wellness-card border-purple-200">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <BarChart3 className="w-5 h-5 text-purple-600" />
                  <span>Data Insights (Anonymous)</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li>• Population health trends</li>
                  <li>• Public health research</li>
                  <li>• Healthcare policy insights</li>
                  <li>• Wellness program effectiveness</li>
                </ul>
                <Badge className="mt-3 bg-purple-100 text-purple-800">Research Revenue</Badge>
              </CardContent>
            </Card>
            
            <Card className="wellness-card border-orange-200">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Smartphone className="w-5 h-5 text-orange-600" />
                  <span>Freemium Model</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li>• Basic wellness diary</li>
                  <li>• Limited mental health support</li>
                  <li>• Basic clinic finder</li>
                  <li>• Community features</li>
                </ul>
                <Badge className="mt-3 bg-orange-100 text-orange-800">Free Tier</Badge>
              </CardContent>
            </Card>
          </div>
        </div>
      )
    },
    {
      id: "competitive-advantage",
      title: "Competitive Advantage",
      subtitle: "What sets WellnessConnect apart",
      content: (
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="wellness-card border-wellness-primary/30">
              <CardContent className="p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <Shield className="w-8 h-8 text-wellness-primary" />
                  <h3 className="font-semibold">Holistic Approach</h3>
                </div>
                <p className="text-sm text-muted-foreground">
                  Unlike competitors who focus on single aspects, we integrate physical health, 
                  mental wellness, and healthcare access in one platform.
                </p>
              </CardContent>
            </Card>
            
            <Card className="wellness-card border-wellness-secondary/30">
              <CardContent className="p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <Heart className="w-8 h-8 text-wellness-secondary" />
                  <h3 className="font-semibold">Accessibility Focus</h3>
                </div>
                <p className="text-sm text-muted-foreground">
                  Designed specifically for underserved communities with emphasis on 
                  free and low-cost healthcare options.
                </p>
              </CardContent>
            </Card>
            
            <Card className="wellness-card border-wellness-accent/30">
              <CardContent className="p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <Lightbulb className="w-8 h-8 text-wellness-accent" />
                  <h3 className="font-semibold">AI-Powered Support</h3>
                </div>
                <p className="text-sm text-muted-foreground">
                  Advanced mental health chatbot providing immediate support and 
                  crisis intervention when needed.
                </p>
              </CardContent>
            </Card>
            
            <Card className="wellness-card border-green-500/30">
              <CardContent className="p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <Users className="w-8 h-8 text-green-500" />
                  <h3 className="font-semibold">Community-Driven</h3>
                </div>
                <p className="text-sm text-muted-foreground">
                  Built with input from healthcare professionals, patients, and 
                  community health organizations.
                </p>
              </CardContent>
            </Card>
          </div>
          
          <div className="bg-gradient-to-r from-wellness-primary/10 to-wellness-secondary/10 rounded-lg p-6">
            <h3 className="text-lg font-semibold mb-3">Key Differentiators</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="text-center">
                <div className="w-12 h-12 wellness-gradient rounded-full flex items-center justify-center mx-auto mb-2">
                  <span className="text-white font-bold">3-in-1</span>
                </div>
                <p className="text-sm font-medium">Integrated Platform</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 wellness-gradient rounded-full flex items-center justify-center mx-auto mb-2">
                  <span className="text-white font-bold">24/7</span>
                </div>
                <p className="text-sm font-medium">Always Available</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 wellness-gradient rounded-full flex items-center justify-center mx-auto mb-2">
                  <span className="text-white font-bold">$0</span>
                </div>
                <p className="text-sm font-medium">Free Core Features</p>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: "roadmap",
      title: "Product Roadmap",
      subtitle: "Strategic development phases",
      content: (
        <div className="space-y-6">
          <div className="space-y-4">
            <Card className="wellness-card border-green-200 bg-green-50/50">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-semibold text-green-800">Phase 1: MVP Launch (Q1 2024)</h3>
                  <Badge className="bg-green-100 text-green-800">Current</Badge>
                </div>
                <ul className="space-y-1 text-sm text-green-700">
                  <li>• Core wellness diary functionality</li>
                  <li>• Basic mental health chatbot</li>
                  <li>• Clinic finder with basic filters</li>
                  <li>• User authentication and profiles</li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="wellness-card border-blue-200 bg-blue-50/50">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-semibold text-blue-800">Phase 2: Enhanced Features (Q2 2024)</h3>
                  <Badge className="bg-blue-100 text-blue-800">Next</Badge>
                </div>
                <ul className="space-y-1 text-sm text-blue-700">
                  <li>• Advanced health analytics and insights</li>
                  <li>• Healthcare provider integrations</li>
                  <li>• Community features and support groups</li>
                  <li>• Premium subscription launch</li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="wellness-card border-purple-200 bg-purple-50/50">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-semibold text-purple-800">Phase 3: AI & Partnerships (Q3 2024)</h3>
                  <Badge className="bg-purple-100 text-purple-800">Planned</Badge>
                </div>
                <ul className="space-y-1 text-sm text-purple-700">
                  <li>• Advanced AI health recommendations</li>
                  <li>• Telehealth platform integration</li>
                  <li>• Insurance company partnerships</li>
                  <li>• Medication reminder system</li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="wellness-card border-orange-200 bg-orange-50/50">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-semibold text-orange-800">Phase 4: Scale & Expansion (Q4 2024)</h3>
                  <Badge className="bg-orange-100 text-orange-800">Future</Badge>
                </div>
                <ul className="space-y-1 text-sm text-orange-700">
                  <li>• Multi-language support</li>
                  <li>• Wearable device integrations</li>
                  <li>• Enterprise wellness programs</li>
                  <li>• International market expansion</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      )
    },
    {
      id: "team",
      title: "Our Team",
      subtitle: "Experienced professionals driving innovation",
      content: (
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="wellness-card text-center">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-wellness-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-semibold mb-1">Sarah Johnson</h3>
                <p className="text-sm text-wellness-primary mb-2">CEO & Co-founder</p>
                <p className="text-xs text-muted-foreground">
                  Former VP of Product at leading healthtech company. 
                  15+ years in healthcare innovation.
                </p>
              </CardContent>
            </Card>
            
            <Card className="wellness-card text-center">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-wellness-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-semibold mb-1">Dr. Michael Chen</h3>
                <p className="text-sm text-wellness-secondary mb-2">CTO & Co-founder</p>
                <p className="text-xs text-muted-foreground">
                  PhD in Computer Science, AI specialist. 
                  Former senior engineer at major tech companies.
                </p>
              </CardContent>
            </Card>
            
            <Card className="wellness-card text-center">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-wellness-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-semibold mb-1">Dr. Emily Rodriguez</h3>
                <p className="text-sm text-wellness-accent mb-2">Chief Medical Officer</p>
                <p className="text-xs text-muted-foreground">
                  Board-certified physician and mental health advocate. 
                  20+ years in clinical practice.
                </p>
              </CardContent>
            </Card>
          </div>
          
          <div className="bg-wellness-soft rounded-lg p-6">
            <h3 className="text-lg font-semibold mb-4">Advisory Board</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                  <Heart className="w-5 h-5 text-green-600" />
                </div>
                <div>
                  <p className="font-medium">Dr. James Wilson</p>
                  <p className="text-sm text-muted-foreground">Former Chief of Cardiology, Mayo Clinic</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                  <MessageCircle className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <p className="font-medium">Lisa Thompson</p>
                  <p className="text-sm text-muted-foreground">Mental Health Advocate & Researcher</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: "financial",
      title: "Financial Projections",
      subtitle: "Revenue growth and funding requirements",
      content: (
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="wellness-card border-green-200 text-center">
              <CardContent className="p-6">
                <DollarSign className="w-12 h-12 text-green-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-green-600">$2.5M</h3>
                <p className="text-sm text-muted-foreground">Projected Year 1 Revenue</p>
              </CardContent>
            </Card>
            
            <Card className="wellness-card border-blue-200 text-center">
              <CardContent className="p-6">
                <TrendingUp className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-blue-600">$15M</h3>
                <p className="text-sm text-muted-foreground">Projected Year 3 Revenue</p>
              </CardContent>
            </Card>
            
            <Card className="wellness-card border-purple-200 text-center">
              <CardContent className="p-6">
                <Users className="w-12 h-12 text-purple-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-purple-600">500K</h3>
                <p className="text-sm text-muted-foreground">Users by End of Year 2</p>
              </CardContent>
            </Card>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Funding Requirements</h3>
            <Card className="wellness-card">
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Seed Round (Current)</span>
                    <Badge className="wellness-gradient text-white">$1.5M</Badge>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                    <div>
                      <p className="font-medium text-muted-foreground mb-1">Product Development</p>
                      <p>$600K (40%)</p>
                    </div>
                    <div>
                      <p className="font-medium text-muted-foreground mb-1">Team Expansion</p>
                      <p>$450K (30%)</p>
                    </div>
                    <div>
                      <p className="font-medium text-muted-foreground mb-1">Marketing & Acquisition</p>
                      <p>$450K (30%)</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="wellness-card">
              <CardContent className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <span className="font-medium">Series A (Planned)</span>
                  <Badge variant="outline">$8M</Badge>
                </div>
                <p className="text-sm text-muted-foreground">
                  Scale operations, expand team, and accelerate user acquisition 
                  across multiple markets and demographics.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      )
    },
    {
      id: "call-to-action",
      title: "Join Our Mission",
      subtitle: "Together, we can transform healthcare accessibility",
      content: (
        <div className="text-center space-y-8">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold">Ready to Make a Difference?</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              WellnessConnect is more than an app – it's a movement to democratize healthcare 
              and make wellness accessible to everyone, everywhere.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <Card className="wellness-card border-wellness-primary/30">
              <CardContent className="p-6 text-center">
                <Target className="w-12 h-12 text-wellness-primary mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Our Vision</h3>
                <p className="text-sm text-muted-foreground">
                  A world where quality healthcare and mental wellness support 
                  are accessible to all, regardless of economic status.
                </p>
              </CardContent>
            </Card>
            
            <Card className="wellness-card border-wellness-secondary/30">
              <CardContent className="p-6 text-center">
                <Heart className="w-12 h-12 text-wellness-secondary mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Our Impact</h3>
                <p className="text-sm text-muted-foreground">
                  Empowering individuals to take control of their health journey 
                  with comprehensive, integrated wellness tools.
                </p>
              </CardContent>
            </Card>
            
            <Card className="wellness-card border-wellness-accent/30">
              <CardContent className="p-6 text-center">
                <Users className="w-12 h-12 text-wellness-accent mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Our Community</h3>
                <p className="text-sm text-muted-foreground">
                  Building a supportive ecosystem where health and wellness 
                  are shared values and collective goals.
                </p>
              </CardContent>
            </Card>
          </div>
          
          <div className="space-y-4">
            <p className="text-lg font-semibold">Contact Us</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <p className="text-muted-foreground">hello@wellnessconnect.com</p>
              <Badge className="wellness-gradient text-white">
                +1 (555) 123-WELLNESS
              </Badge>
            </div>
          </div>
        </div>
      )
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-wellness-calm/20 via-background to-wellness-warm/20">
      {/* Header */}
      <div className="bg-white/80 backdrop-blur-sm border-b border-wellness-primary/10 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-gradient-to-br from-wellness-primary to-wellness-secondary rounded-full flex items-center justify-center">
                <Heart className="w-5 h-5 text-white" />
              </div>
              <h1 className="text-xl font-bold bg-gradient-to-r from-wellness-primary to-wellness-secondary bg-clip-text text-transparent">
                WellnessConnect Pitch Deck
              </h1>
            </div>
            <div className="text-sm">
              <span className="text-muted-foreground">Slide </span>
              <span className="font-semibold">{currentSlide + 1}</span>
              <span className="text-muted-foreground"> of {slides.length}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        <Card className="wellness-card min-h-[600px]">
          <CardHeader className="text-center">
            <CardTitle className="text-3xl font-bold">
              {slides[currentSlide].title}
            </CardTitle>
            <CardDescription className="text-lg">
              {slides[currentSlide].subtitle}
            </CardDescription>
          </CardHeader>
          <CardContent className="p-8">
            {slides[currentSlide].content}
          </CardContent>
        </Card>

        {/* Navigation */}
        <div className="flex items-center justify-between mt-8">
          <Button
            onClick={prevSlide}
            variant="outline"
            disabled={currentSlide === 0}
            className="flex items-center space-x-2"
          >
            <ChevronLeft className="w-4 h-4" />
            <span>Previous</span>
          </Button>

          {/* Slide Indicators */}
          <div className="flex space-x-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentSlide
                    ? "wellness-gradient"
                    : "bg-gray-300 hover:bg-gray-400"
                }`}
              />
            ))}
          </div>

          <Button
            onClick={nextSlide}
            variant="outline"
            disabled={currentSlide === slides.length - 1}
            className="flex items-center space-x-2"
          >
            <span>Next</span>
            <ChevronRight className="w-4 h-4" />
          </Button>
        </div>

        {/* Slide Navigation Menu */}
        <Card className="wellness-card mt-6">
          <CardContent className="p-4">
            <div className="grid grid-cols-2 md:grid-cols-5 gap-2">
              {slides.map((slide, index) => (
                <Button
                  key={slide.id}
                  variant={index === currentSlide ? "default" : "ghost"}
                  size="sm"
                  onClick={() => goToSlide(index)}
                  className={`text-xs ${
                    index === currentSlide ? "wellness-gradient text-white" : ""
                  }`}
                >
                  {slide.title}
                </Button>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default PitchDeck;
