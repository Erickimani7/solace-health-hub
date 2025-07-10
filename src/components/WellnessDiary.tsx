
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Calendar, Heart, Activity, Pill, Clock, Plus } from "lucide-react";
import { toast } from "sonner";

const WellnessDiary = () => {
  const [selectedMood, setSelectedMood] = useState("");
  const [vitals, setVitals] = useState({
    heartRate: "",
    sleepHours: "",
    bloodPressure: "",
  });
  const [notes, setNotes] = useState("");
  const [medications, setMedications] = useState([
    { name: "Vitamin D", time: "09:00", taken: true },
    { name: "Omega-3", time: "12:00", taken: true },
    { name: "Multivitamin", time: "18:00", taken: false },
  ]);

  const moods = [
    { emoji: "😊", label: "Happy", color: "bg-green-100 text-green-800" },
    { emoji: "😌", label: "Calm", color: "bg-blue-100 text-blue-800" },
    { emoji: "😐", label: "Neutral", color: "bg-gray-100 text-gray-800" },
    { emoji: "😔", label: "Sad", color: "bg-yellow-100 text-yellow-800" },
    { emoji: "😟", label: "Anxious", color: "bg-orange-100 text-orange-800" },
    { emoji: "😤", label: "Stressed", color: "bg-red-100 text-red-800" },
  ];

  const handleSaveEntry = () => {
    if (!selectedMood) {
      toast.error("Please select your mood for today");
      return;
    }
    toast.success("Diary entry saved successfully!");
    // Reset form
    setSelectedMood("");
    setVitals({ heartRate: "", sleepHours: "", bloodPressure: "" });
    setNotes("");
  };

  const toggleMedication = (index: number) => {
    const newMeds = [...medications];
    newMeds[index].taken = !newMeds[index].taken;
    setMedications(newMeds);
    
    if (newMeds[index].taken) {
      toast.success(`${newMeds[index].name} marked as taken`);
    }
  };

  return (
    <div className="space-y-6 animate-slide-up">
      {/* Mood Tracking */}
      <Card className="wellness-card border-wellness-primary/20">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Heart className="w-5 h-5 text-wellness-primary" />
            <span>How are you feeling today?</span>
          </CardTitle>
          <CardDescription>Track your daily mood and emotional state</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {moods.map((mood) => (
              <Button
                key={mood.label}
                variant={selectedMood === mood.label ? "default" : "outline"}
                className={`h-16 flex-col space-y-2 ${
                  selectedMood === mood.label
                    ? "wellness-gradient text-white"
                    : "hover:bg-wellness-soft"
                }`}
                onClick={() => setSelectedMood(mood.label)}
              >
                <span className="text-2xl">{mood.emoji}</span>
                <span className="text-xs">{mood.label}</span>
              </Button>
            ))}
          </div>
          {selectedMood && (
            <Badge className={`mt-4 ${moods.find(m => m.label === selectedMood)?.color}`}>
              Current mood: {selectedMood}
            </Badge>
          )}
        </CardContent>
      </Card>

      {/* Health Vitals */}
      <Card className="wellness-card border-wellness-secondary/20">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Activity className="w-5 h-5 text-wellness-secondary" />
            <span>Health Vitals</span>
          </CardTitle>
          <CardDescription>Log your basic health measurements</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="space-y-2">
              <Label htmlFor="heartRate">Heart Rate (bpm)</Label>
              <Input
                id="heartRate"
                type="number"
                placeholder="72"
                value={vitals.heartRate}
                onChange={(e) => setVitals({ ...vitals, heartRate: e.target.value })}
                className="border-wellness-secondary/30"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="sleepHours">Sleep Hours</Label>
              <Input
                id="sleepHours"
                type="number"
                step="0.5"
                placeholder="8"
                value={vitals.sleepHours}
                onChange={(e) => setVitals({ ...vitals, sleepHours: e.target.value })}
                className="border-wellness-secondary/30"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="bloodPressure">Blood Pressure</Label>
              <Input
                id="bloodPressure"
                placeholder="120/80"
                value={vitals.bloodPressure}
                onChange={(e) => setVitals({ ...vitals, bloodPressure: e.target.value })}
                className="border-wellness-secondary/30"
              />
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Medication Reminders */}
      <Card className="wellness-card border-wellness-accent/20">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Pill className="w-5 h-5 text-wellness-accent" />
            <span>Medication Tracker</span>
          </CardTitle>
          <CardDescription>Keep track of your daily medications</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {medications.map((med, index) => (
              <div
                key={index}
                className={`flex items-center justify-between p-3 rounded-lg border transition-all ${
                  med.taken
                    ? "bg-green-50 border-green-200"
                    : "bg-orange-50 border-orange-200"
                }`}
              >
                <div className="flex items-center space-x-3">
                  <div className="flex items-center space-x-2">
                    <Clock className="w-4 h-4 text-muted-foreground" />
                    <span className="text-sm font-medium">{med.time}</span>
                  </div>
                  <span className={med.taken ? "line-through text-muted-foreground" : ""}>
                    {med.name}
                  </span>
                </div>
                <Button
                  size="sm"
                  variant={med.taken ? "outline" : "default"}
                  onClick={() => toggleMedication(index)}
                  className={med.taken ? "" : "wellness-gradient"}
                >
                  {med.taken ? "Taken" : "Take"}
                </Button>
              </div>
            ))}
          </div>
          <Button variant="outline" className="w-full mt-4 border-dashed">
            <Plus className="w-4 h-4 mr-2" />
            Add Medication
          </Button>
        </CardContent>
      </Card>

      {/* Notes */}
      <Card className="wellness-card">
        <CardHeader>
          <CardTitle>Daily Notes</CardTitle>
          <CardDescription>Add any additional thoughts or observations</CardDescription>
        </CardHeader>
        <CardContent>
          <Textarea
            placeholder="How did your day go? Any symptoms, feelings, or observations to note?"
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            className="min-h-24"
          />
        </CardContent>
      </Card>

      {/* Save Button */}
      <Button
        onClick={handleSaveEntry}
        className="w-full wellness-gradient text-white font-semibold py-3"
      >
        <Calendar className="w-5 h-5 mr-2" />
        Save Today's Entry
      </Button>
    </div>
  );
};

export default WellnessDiary;
