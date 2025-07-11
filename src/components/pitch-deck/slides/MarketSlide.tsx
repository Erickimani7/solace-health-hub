
import { Card, CardContent } from "@/components/ui/card";
import { BarChart3, Users, TrendingUp } from "lucide-react";

const MarketSlide = () => {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="wellness-card text-center">
          <CardContent className="p-6">
            <BarChart3 className="w-12 h-12 text-wellness-primary mx-auto mb-4" />
            <h3 className="text-3xl font-bold text-wellness-primary">$659B</h3>
            <p className="text-sm text-black">Global Digital Health Market by 2030</p>
          </CardContent>
        </Card>
        
        <Card className="wellness-card text-center">
          <CardContent className="p-6">
            <Users className="w-12 h-12 text-wellness-secondary mx-auto mb-4" />
            <h3 className="text-3xl font-bold text-wellness-secondary">87%</h3>
            <p className="text-sm text-black">of people want to manage health digitally</p>
          </CardContent>
        </Card>
        
        <Card className="wellness-card text-center">
          <CardContent className="p-6">
            <TrendingUp className="w-12 h-12 text-wellness-accent mx-auto mb-4" />
            <h3 className="text-3xl font-bold text-wellness-accent">23.1%</h3>
            <p className="text-sm text-black">Annual market growth rate (CAGR)</p>
          </CardContent>
        </Card>
      </div>
      
      <div className="space-y-4">
        <h3 className="text-xl font-semibold text-black">Key Market Drivers</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex items-start space-x-3">
            <div className="w-6 h-6 bg-wellness-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
              <div className="w-2 h-2 bg-white rounded-full"></div>
            </div>
            <div>
              <p className="font-medium text-black">Aging Population</p>
              <p className="text-sm text-black">Increased healthcare needs and chronic disease management</p>
            </div>
          </div>
          
          <div className="flex items-start space-x-3">
            <div className="w-6 h-6 bg-wellness-secondary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
              <div className="w-2 h-2 bg-white rounded-full"></div>
            </div>
            <div>
              <p className="font-medium text-black">Mental Health Awareness</p>
              <p className="text-sm text-black">Growing recognition of mental wellness importance</p>
            </div>
          </div>
          
          <div className="flex items-start space-x-3">
            <div className="w-6 h-6 bg-wellness-accent rounded-full flex items-center justify-center flex-shrink-0 mt-1">
              <div className="w-2 h-2 bg-white rounded-full"></div>
            </div>
            <div>
              <p className="font-medium text-black">Healthcare Accessibility</p>
              <p className="text-sm text-black">Need for affordable and accessible healthcare solutions</p>
            </div>
          </div>
          
          <div className="flex items-start space-x-3">
            <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
              <div className="w-2 h-2 bg-white rounded-full"></div>
            </div>
            <div>
              <p className="font-medium text-black">Technology Adoption</p>
              <p className="text-sm text-black">Smartphone penetration and health app usage</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MarketSlide;
