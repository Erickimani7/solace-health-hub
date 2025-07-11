
import { Card, CardContent } from "@/components/ui/card";
import { TrendingUp, MapPin, Calendar, MessageCircle } from "lucide-react";

const ProblemSlide = () => {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="wellness-card border-red-200">
          <CardContent className="p-6">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center">
                <TrendingUp className="w-4 h-4 text-red-600" />
              </div>
              <h3 className="font-semibold text-black">Rising Healthcare Costs</h3>
            </div>
            <p className="text-sm text-black">
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
              <h3 className="font-semibold text-black">Limited Access</h3>
            </div>
            <p className="text-sm text-black">
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
              <h3 className="font-semibold text-black">Health Management</h3>
            </div>
            <p className="text-sm text-black">
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
              <h3 className="font-semibold text-black">Mental Health Stigma</h3>
            </div>
            <p className="text-sm text-black">
              Many individuals avoid seeking mental health support due to stigma and lack of accessible resources.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ProblemSlide;
