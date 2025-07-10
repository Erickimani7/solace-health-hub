
import { useState, useRef, useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { MessageCircle, Send, Bot, User, Heart, Phone, ExternalLink } from "lucide-react";
import { toast } from "sonner";

interface Message {
  id: number;
  text: string;
  sender: "user" | "bot";
  timestamp: Date;
  type?: "response" | "resource" | "emergency";
}

const MentalHealthChatbot = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Hello! I'm here to provide emotional support and mental health resources. How are you feeling today?",
      sender: "bot",
      timestamp: new Date(),
    },
  ]);
  const [inputMessage, setInputMessage] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const mentalHealthResponses = {
    stress: [
      "I understand you're feeling stressed. Try taking 5 deep breaths: inhale for 4 counts, hold for 4, exhale for 6.",
      "Stress is natural, but manageable. Consider breaking down your tasks into smaller, achievable goals.",
      "When stressed, grounding exercises can help. Try naming 5 things you can see, 4 you can touch, 3 you can hear, 2 you can smell, and 1 you can taste."
    ],
    anxiety: [
      "Anxiety can feel overwhelming, but you're not alone. Remember that this feeling is temporary.",
      "Try the 4-7-8 breathing technique: breathe in for 4, hold for 7, breathe out for 8. Repeat 3-4 times.",
      "Anxiety often comes from worry about the future. Focus on what you can control right now, in this moment."
    ],
    sad: [
      "I'm sorry you're feeling sad. It's okay to feel this way - your emotions are valid.",
      "Sometimes sadness is our mind's way of processing. Consider gentle activities like listening to music or taking a short walk.",
      "Remember that sad feelings, like all emotions, are temporary. You've overcome difficult times before."
    ],
    lonely: [
      "Feeling lonely is difficult. Remember that reaching out, even to a helpline, shows strength.",
      "Consider connecting with others - even a brief chat with a neighbor or calling an old friend can help.",
      "You're taking a positive step by talking about how you feel. That takes courage."
    ],
    depressed: [
      "Depression is a serious condition, and I want you to know that professional help is available and effective.",
      "Please consider speaking with a mental health professional. In the meantime, small steps like getting sunlight or gentle movement can help.",
      "You matter, and your life has value. If you're having thoughts of self-harm, please reach out to a crisis hotline immediately."
    ],
    default: [
      "Thank you for sharing that with me. Can you tell me more about how you're feeling?",
      "I'm here to listen. What's been on your mind lately?",
      "It sounds like you're going through something. Would you like to talk about it?"
    ]
  };

  const resources = [
    {
      name: "National Suicide Prevention Lifeline",
      number: "988",
      description: "Free, confidential support 24/7"
    },
    {
      name: "Crisis Text Line",
      number: "Text HOME to 741741",
      description: "Text-based crisis support"
    },
    {
      name: "SAMHSA Helpline",
      number: "1-800-662-4357",
      description: "Mental health and substance abuse"
    }
  ];

  const getResponseType = (userMessage: string): keyof typeof mentalHealthResponses => {
    const message = userMessage.toLowerCase();
    if (message.includes("stress") || message.includes("overwhelmed") || message.includes("pressure")) return "stress";
    if (message.includes("anxious") || message.includes("anxiety") || message.includes("worry") || message.includes("panic")) return "anxiety";
    if (message.includes("sad") || message.includes("down") || message.includes("upset")) return "sad";
    if (message.includes("lonely") || message.includes("alone") || message.includes("isolated")) return "lonely";
    if (message.includes("depressed") || message.includes("depression") || message.includes("hopeless") || message.includes("worthless")) return "depressed";
    return "default";
  };

  const generateBotResponse = (userMessage: string): Message => {
    const responseType = getResponseType(userMessage);
    const responses = mentalHealthResponses[responseType];
    const randomResponse = responses[Math.floor(Math.random() * responses.length)];

    return {
      id: Date.now(),
      text: randomResponse,
      sender: "bot",
      timestamp: new Date(),
      type: responseType === "depressed" ? "emergency" : "response"
    };
  };

  const handleSendMessage = () => {
    if (!inputMessage.trim()) return;

    const userMessage: Message = {
      id: Date.now(),
      text: inputMessage,
      sender: "user",
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage("");
    setIsTyping(true);

    // Simulate bot thinking time
    setTimeout(() => {
      const botResponse = generateBotResponse(inputMessage);
      setMessages(prev => [...prev, botResponse]);
      setIsTyping(false);
    }, 1000 + Math.random() * 1000);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div className="space-y-6 animate-slide-up">
      {/* Emergency Resources */}
      <Card className="wellness-card border-red-200 bg-red-50/50">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2 text-red-700">
            <Phone className="w-5 h-5" />
            <span>Crisis Resources</span>
          </CardTitle>
          <CardDescription className="text-red-600">
            If you're in crisis or having thoughts of self-harm, please reach out immediately
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {resources.map((resource, index) => (
              <div key={index} className="p-3 bg-white rounded-lg border border-red-200">
                <h4 className="font-semibold text-sm text-red-800">{resource.name}</h4>
                <p className="text-red-700 font-mono text-lg">{resource.number}</p>
                <p className="text-xs text-red-600 mt-1">{resource.description}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Chat Interface */}
      <Card className="wellness-card border-wellness-secondary/20">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <MessageCircle className="w-5 h-5 text-wellness-secondary" />
            <span>Mental Health Support Chat</span>
          </CardTitle>
          <CardDescription>
            Talk through your feelings with our supportive chatbot
          </CardDescription>
        </CardHeader>
        <CardContent className="p-0">
          {/* Chat Messages */}
          <div className="h-96 overflow-y-auto p-4 space-y-4 bg-gradient-to-b from-wellness-soft/30 to-white/50">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[80%] p-3 rounded-lg ${
                    message.sender === "user"
                      ? "bg-wellness-secondary text-white"
                      : message.type === "emergency"
                      ? "bg-red-100 border border-red-200 text-red-800"
                      : "bg-white border border-wellness-primary/20"
                  }`}
                >
                  <div className="flex items-start space-x-2">
                    {message.sender === "bot" && (
                      <Bot className="w-4 h-4 mt-1 text-wellness-primary flex-shrink-0" />
                    )}
                    {message.sender === "user" && (
                      <User className="w-4 h-4 mt-1 text-white flex-shrink-0" />
                    )}
                    <div className="flex-1">
                      <p className="text-sm">{message.text}</p>
                      <p className="text-xs opacity-70 mt-1">
                        {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
            
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-white border border-wellness-primary/20 p-3 rounded-lg max-w-[80%]">
                  <div className="flex items-center space-x-2">
                    <Bot className="w-4 h-4 text-wellness-primary" />
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-wellness-primary rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-wellness-primary rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                      <div className="w-2 h-2 bg-wellness-primary rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                    </div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div className="p-4 border-t border-wellness-primary/10 bg-white">
            <div className="flex space-x-2">
              <Input
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Share how you're feeling..."
                className="flex-1 border-wellness-secondary/30"
              />
              <Button
                onClick={handleSendMessage}
                disabled={!inputMessage.trim()}
                className="wellness-gradient"
              >
                <Send className="w-4 h-4" />
              </Button>
            </div>
            <p className="text-xs text-muted-foreground mt-2">
              💚 This is a supportive space. For emergencies, please contact crisis resources above.
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Quick Topic Buttons */}
      <Card className="wellness-card">
        <CardHeader>
          <CardTitle className="text-lg">Quick Topics</CardTitle>
          <CardDescription>
            Select a topic you'd like to discuss
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {[
              { label: "Stress", color: "bg-orange-100 text-orange-800 hover:bg-orange-200" },
              { label: "Anxiety", color: "bg-yellow-100 text-yellow-800 hover:bg-yellow-200" },
              { label: "Sadness", color: "bg-blue-100 text-blue-800 hover:bg-blue-200" },
              { label: "Loneliness", color: "bg-purple-100 text-purple-800 hover:bg-purple-200" },
            ].map((topic) => (
              <Button
                key={topic.label}
                variant="outline"
                className={`${topic.color} border-0`}
                onClick={() => {
                  setInputMessage(`I'm feeling ${topic.label.toLowerCase()}`);
                }}
              >
                {topic.label}
              </Button>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default MentalHealthChatbot;
