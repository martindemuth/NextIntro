import { SurveyQuestion } from "@/types"
import type { NextRequest } from "next/server"
import { NextResponse } from "next/server"

const data: SurveyQuestion[] = [
    {
      id: "1",
      question: "Hvor mye frukt spiser du om dagen",
      isRequired: true,
      options: ["Mer enn 5", "3-5", "Mindre enn 3", "Jeg spiser ikke frukt"],
    },
    {
        id: "2",
        question: "Hva kan være grunne til at du evt spiser for lite frukt?",
        isRequired: false,
        options: ["Liker ikke", "For dyrt", "Har ikke tid", "Glemmer det"],
    },
    {
        id: "3",
        question: "Hva er din favoritt frukt?",
        isRequired: false,
        options: ["Banan", "Eple", "Kiwi", "Annet"],
    }
]

export function GET() {
    return NextResponse.json(data, { status: 200 })
  }

export async function POST(request: NextRequest) {
    const data = await request.json()
    return NextResponse.json(data, { status: 200} )
}
