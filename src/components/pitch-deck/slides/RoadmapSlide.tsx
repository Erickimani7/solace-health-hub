
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const RoadmapSlide = () => {
  return (
    <div className="space-y-6">
      <div className="space-y-4">
        <Card className="wellness-card border-green-200 bg-green-50/50">
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold text-black">Phase 1: MVP Launch (Q1 2024)</h3>
              <Badge className="bg-green-100 text-green-800">Current</Badge>
            </div>
            <ul className="space-y-1 text-sm text-black">
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
              <h3 className="font-semibold text-black">Phase 2: Enhanced Features (Q2 2024)</h3>
              <Badge className="bg-blue-100 text-blue-800">Next</Badge>
            </div>
            <ul className="space-y-1 text-sm text-black">
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
              <h3 className="font-semibold text-black">Phase 3: AI & Partnerships (Q3 2024)</h3>
              <Badge className="bg-purple-100 text-purple-800">Planned</Badge>
            </div>
            <ul className="space-y-1 text-sm text-black">
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
              <h3 className="font-semibold text-black">Phase 4: Scale & Expansion (Q4 2024)</h3>
              <Badge className="bg-orange-100 text-orange-800">Future</Badge>
            </div>
            <ul className="space-y-1 text-sm text-black">
              <li>• Multi-language support</li>
              <li>• Wearable device integrations</li>
              <li>• Enterprise wellness programs</li>
              <li>• International market expansion</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default RoadmapSlide;
