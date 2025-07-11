
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { DollarSign, TrendingUp, Users } from "lucide-react";

const FinancialSlide = () => {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="wellness-card border-green-200 text-center">
          <CardContent className="p-6">
            <DollarSign className="w-12 h-12 text-green-600 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-green-600">$2.5M</h3>
            <p className="text-sm text-black">Projected Year 1 Revenue</p>
          </CardContent>
        </Card>
        
        <Card className="wellness-card border-blue-200 text-center">
          <CardContent className="p-6">
            <TrendingUp className="w-12 h-12 text-blue-600 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-blue-600">$15M</h3>
            <p className="text-sm text-black">Projected Year 3 Revenue</p>
          </CardContent>
        </Card>
        
        <Card className="wellness-card border-purple-200 text-center">
          <CardContent className="p-6">
            <Users className="w-12 h-12 text-purple-600 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-purple-600">500K</h3>
            <p className="text-sm text-black">Users by End of Year 2</p>
          </CardContent>
        </Card>
      </div>
      
      <div className="space-y-4">
        <h3 className="text-xl font-semibold text-black">Funding Requirements</h3>
        <Card className="wellness-card">
          <CardContent className="p-6">
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="font-medium text-black">Seed Round (Current)</span>
                <Badge className="wellness-gradient text-white">$1.5M</Badge>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                <div>
                  <p className="font-medium text-black mb-1">Product Development</p>
                  <p className="text-black">$600K (40%)</p>
                </div>
                <div>
                  <p className="font-medium text-black mb-1">Team Expansion</p>
                  <p className="text-black">$450K (30%)</p>
                </div>
                <div>
                  <p className="font-medium text-black mb-1">Marketing & Acquisition</p>
                  <p className="text-black">$450K (30%)</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card className="wellness-card">
          <CardContent className="p-6">
            <div className="flex justify-between items-center mb-4">
              <span className="font-medium text-black">Series A (Planned)</span>
              <Badge variant="outline" className="text-black border-black">$8M</Badge>
            </div>
            <p className="text-sm text-black">
              Scale operations, expand team, and accelerate user acquisition 
              across multiple markets and demographics.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default FinancialSlide;
