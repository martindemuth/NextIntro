"use client"
import Navbar from "@/components/Nav";
import SurveyQuestionList from "@/components/SurveyQuestions";

export default function Home() {
    return (
      <main>
        <Navbar />
        <SurveyQuestionList />
      </main>
    )
}