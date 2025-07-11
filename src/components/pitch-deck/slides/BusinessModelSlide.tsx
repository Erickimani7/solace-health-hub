
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { DollarSign, Users, BarChart3, Smartphone } from "lucide-react";

const BusinessModelSlide = () => {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="wellness-card border-green-200">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2 text-black">
              <DollarSign className="w-5 h-5 text-green-600" />
              <span>Premium Subscriptions</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-sm text-black">
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
            <CardTitle className="flex items-center space-x-2 text-black">
              <Users className="w-5 h-5 text-blue-600" />
              <span>Healthcare Partnerships</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-sm text-black">
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
            <CardTitle className="flex items-center space-x-2 text-black">
              <BarChart3 className="w-5 h-5 text-purple-600" />
              <span>Data Insights (Anonymous)</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-sm text-black">
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
            <CardTitle className="flex items-center space-x-2 text-black">
              <Smartphone className="w-5 h-5 text-orange-600" />
              <span>Freemium Model</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-sm text-black">
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
  );
};

export default BusinessModelSlide;
