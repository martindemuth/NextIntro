"use client"
import Navbar from "@/components/Navbar";
import SurveyQuestionList from "@/components/SurveyQuestionList";

export default function Home() {
    return (
      <main>
        <Navbar />
        <SurveyQuestionList />
      </main>
    )
}