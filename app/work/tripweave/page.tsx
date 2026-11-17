import type { Metadata } from "next";
import { EngineeringCaseStudy } from "../../engineering-case-study";
export const metadata: Metadata = { title: "TripWeave | Guru Prasad", description: "Agentic travel planning with LangGraph, Gemini, FastAPI and resumable conversations." };
export default function Page() { return <EngineeringCaseStudy project="tripweave" />; }
