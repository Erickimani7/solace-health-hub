
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { MapPin, Search, Star, Phone, Clock, Navigation, Filter, Heart, Brain, Stethoscope } from "lucide-react";
import { toast } from "sonner";

interface Clinic {
  id: number;
  name: string;
  specialty: string;
  address: string;
  distance: string;
  rating: number;
  reviews: number;
  phone: string;
  hours: string;
  cost: "Free" | "Low-cost" | "Affordable";
  services: string[];
}

const ClinicFinder = () => {
  const [searchLocation, setSearchLocation] = useState("");
  const [selectedSpecialty, setSelectedSpecialty] = useState("all");
  const [selectedCost, setSelectedCost] = useState("all");
  const [clinics] = useState<Clinic[]>([
    {
      id: 1,
      name: "Community Health Center",
      specialty: "General Medicine",
      address: "123 Main Street, Downtown",
      distance: "0.5 miles",
      rating: 4.5,
      reviews: 124,
      phone: "(555) 123-4567",
      hours: "Mon-Fri 8AM-6PM",
      cost: "Free",
      services: ["Primary Care", "Vaccinations", "Health Screenings"]
    },
    {
      id: 2,
      name: "Mental Wellness Clinic",
      specialty: "Mental Health",
      address: "456 Oak Avenue, Midtown",
      distance: "1.2 miles",
      rating: 4.8,
      reviews: 89,
      phone: "(555) 234-5678",
      hours: "Mon-Sat 9AM-7PM",
      cost: "Low-cost",
      services: ["Counseling", "Therapy", "Crisis Support"]
    },
    {
      id: 3,
      name: "Affordable Care Clinic",
      specialty: "Family Medicine",
      address: "789 Pine Road, Eastside",
      distance: "2.1 miles",
      rating: 4.3,
      reviews: 67,
      phone: "(555) 345-6789",
      hours: "Daily 7AM-9PM",
      cost: "Affordable",
      services: ["Family Care", "Pediatrics", "Women's Health"]
    },
    {
      id: 4,
      name: "Free Heart Health Clinic",
      specialty: "Cardiology",
      address: "321 Elm Street, Westside",
      distance: "3.0 miles",
      rating: 4.6,
      reviews: 156,
      phone: "(555) 456-7890",
      hours: "Tue-Thu 10AM-4PM",
      cost: "Free",
      services: ["Heart Screening", "Blood Pressure", "EKG"]
    }
  ]);

  const specialties = [
    { value: "all", label: "All Specialties", icon: Stethoscope },
    { value: "general", label: "General Medicine", icon: Stethoscope },
    { value: "mental", label: "Mental Health", icon: Brain },
    { value: "cardiology", label: "Cardiology", icon: Heart },
    { value: "family", label: "Family Medicine", icon: Stethoscope },
  ];

  const handleSearch = () => {
    if (!searchLocation.trim()) {
      toast.error("Please enter a location to search");
      return;
    }
    toast.success("Searching for nearby clinics...");
  };

  const getDirections = (clinic: Clinic) => {
    toast.success(`Opening directions to ${clinic.name}`);
    // In a real app, this would open maps
  };

  const callClinic = (clinic: Clinic) => {
    toast.success(`Calling ${clinic.name}`);
    // In a real app, this would initiate a phone call
  };

  const getCostBadgeColor = (cost: string) => {
    switch (cost) {
      case "Free": return "bg-green-100 text-green-800";
      case "Low-cost": return "bg-blue-100 text-blue-800";
      case "Affordable": return "bg-yellow-100 text-yellow-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  const filteredClinics = clinics.filter(clinic => {
    const specialtyMatch = selectedSpecialty === "all" || 
      (selectedSpecialty === "general" && clinic.specialty.includes("General")) ||
      (selectedSpecialty === "mental" && clinic.specialty.includes("Mental")) ||
      (selectedSpecialty === "cardiology" && clinic.specialty.includes("Cardiology")) ||
      (selectedSpecialty === "family" && clinic.specialty.includes("Family"));
    
    const costMatch = selectedCost === "all" || clinic.cost.toLowerCase() === selectedCost;
    
    return specialtyMatch && costMatch;
  });

  return (
    <div className="space-y-6 animate-slide-up">
      {/* Search Header */}
      <Card className="wellness-card border-wellness-accent/20">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <MapPin className="w-5 h-5 text-wellness-accent" />
            <span>Find Nearby Clinics</span>
          </CardTitle>
          <CardDescription>
            Discover affordable and free healthcare options in your area
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {/* Location Search */}
          <div className="flex space-x-2">
            <Input
              placeholder="Enter your location or ZIP code"
              value={searchLocation}
              onChange={(e) => setSearchLocation(e.target.value)}
              className="flex-1 border-wellness-accent/30"
            />
            <Button onClick={handleSearch} className="wellness-gradient">
              <Search className="w-4 h-4 mr-2" />
              Search
            </Button>
          </div>

          {/* Filters */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="space-y-2">
              <label className="text-sm font-medium">Specialty</label>
              <Select value={selectedSpecialty} onValueChange={setSelectedSpecialty}>
                <SelectTrigger className="border-wellness-accent/30">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {specialties.map((specialty) => (
                    <SelectItem key={specialty.value} value={specialty.value}>
                      <div className="flex items-center space-x-2">
                        <specialty.icon className="w-4 h-4" />
                        <span>{specialty.label}</span>
                      </div>
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">Cost</label>
              <Select value={selectedCost} onValueChange={setSelectedCost}>
                <SelectTrigger className="border-wellness-accent/30">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Costs</SelectItem>
                  <SelectItem value="free">Free</SelectItem>
                  <SelectItem value="low-cost">Low-cost</SelectItem>
                  <SelectItem value="affordable">Affordable</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">Results</label>
              <div className="flex items-center h-10 px-3 py-2 bg-wellness-soft rounded-md border border-wellness-accent/30">
                <span className="text-sm text-muted-foreground">
                  {filteredClinics.length} clinics found
                </span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Clinic Results */}
      <div className="space-y-4">
        {filteredClinics.map((clinic, index) => (
          <Card key={clinic.id} className="wellness-card animate-slide-up" style={{animationDelay: `${index * 0.1}s`}}>
            <CardContent className="p-6">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Clinic Info */}
                <div className="lg:col-span-2 space-y-3">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="text-lg font-semibold text-foreground">{clinic.name}</h3>
                      <p className="text-sm text-muted-foreground">{clinic.specialty}</p>
                    </div>
                    <Badge className={getCostBadgeColor(clinic.cost)}>
                      {clinic.cost}
                    </Badge>
                  </div>

                  <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                    <div className="flex items-center space-x-1">
                      <MapPin className="w-4 h-4" />
                      <span>{clinic.address}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Navigation className="w-4 h-4" />
                      <span>{clinic.distance}</span>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4 text-sm">
                    <div className="flex items-center space-x-1">
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-4 h-4 ${
                              i < Math.floor(clinic.rating)
                                ? "text-yellow-400 fill-current"
                                : "text-gray-300"
                            }`}
                          />
                        ))}
                      </div>
                      <span className="font-medium">{clinic.rating}</span>
                      <span className="text-muted-foreground">({clinic.reviews} reviews)</span>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                    <div className="flex items-center space-x-1">
                      <Clock className="w-4 h-4" />
                      <span>{clinic.hours}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Phone className="w-4 h-4" />
                      <span>{clinic.phone}</span>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <p className="text-sm font-medium">Services:</p>
                    <div className="flex flex-wrap gap-2">
                      {clinic.services.map((service, idx) => (
                        <Badge key={idx} variant="outline" className="text-xs">
                          {service}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col space-y-3">
                  <Button
                    onClick={() => getDirections(clinic)}
                    className="wellness-gradient w-full"
                  >
                    <Navigation className="w-4 h-4 mr-2" />
                    Get Directions
                  </Button>
                  
                  <Button
                    variant="outline"
                    onClick={() => callClinic(clinic)}
                    className="w-full border-wellness-secondary text-wellness-secondary hover:bg-wellness-secondary hover:text-white"
                  >
                    <Phone className="w-4 h-4 mr-2" />
                    Call Clinic
                  </Button>
                  
                  <Button
                    variant="outline"
                    className="w-full border-wellness-accent text-wellness-accent hover:bg-wellness-accent hover:text-white"
                  >
                    View Details
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Emergency Notice */}
      <Card className="border-red-200 bg-red-50/50">
        <CardContent className="p-4">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center">
              <Phone className="w-4 h-4 text-red-600" />
            </div>
            <div>
              <p className="font-medium text-red-800">In case of emergency</p>
              <p className="text-sm text-red-600">Call 911 or go to your nearest emergency room</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ClinicFinder;
