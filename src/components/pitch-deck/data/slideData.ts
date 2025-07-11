
import TitleSlide from "../slides/TitleSlide";
import ProblemSlide from "../slides/ProblemSlide";
import SolutionSlide from "../slides/SolutionSlide";
import MarketSlide from "../slides/MarketSlide";
import BusinessModelSlide from "../slides/BusinessModelSlide";
import CompetitiveAdvantageSlide from "../slides/CompetitiveAdvantageSlide";
import RoadmapSlide from "../slides/RoadmapSlide";
import TeamSlide from "../slides/TeamSlide";
import FinancialSlide from "../slides/FinancialSlide";
import CallToActionSlide from "../slides/CallToActionSlide";

export interface Slide {
  id: string;
  title: string;
  subtitle: string;
  component: React.ComponentType;
}

export const slides: Slide[] = [
  {
    id: "title",
    title: "WellnessConnect",
    subtitle: "Your Complete Health Companion",
    component: TitleSlide,
  },
  {
    id: "problem",
    title: "The Problem",
    subtitle: "Healthcare accessibility and management challenges",
    component: ProblemSlide,
  },
  {
    id: "solution",
    title: "Our Solution",
    subtitle: "WellnessConnect: A comprehensive health management platform",
    component: SolutionSlide,
  },
  {
    id: "market",
    title: "Market Opportunity",
    subtitle: "Massive and growing digital health market",
    component: MarketSlide,
  },
  {
    id: "business-model",
    title: "Business Model",
    subtitle: "Multiple revenue streams for sustainable growth",
    component: BusinessModelSlide,
  },
  {
    id: "competitive-advantage",
    title: "Competitive Advantage",
    subtitle: "What sets WellnessConnect apart",
    component: CompetitiveAdvantageSlide,
  },
  {
    id: "roadmap",
    title: "Product Roadmap",
    subtitle: "Strategic development phases",
    component: RoadmapSlide,
  },
  {
    id: "team",
    title: "Our Team",
    subtitle: "Experienced professionals driving innovation",
    component: TeamSlide,
  },
  {
    id: "financial",
    title: "Financial Projections",
    subtitle: "Revenue growth and funding requirements",
    component: FinancialSlide,
  },
  {
    id: "call-to-action",
    title: "Join Our Mission",
    subtitle: "Together, we can transform healthcare accessibility",
    component: CallToActionSlide,
  },
];
