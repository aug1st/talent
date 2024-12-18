"use client"

import { Card, CardContent } from "@/components/ui/card"
import { ChevronDownIcon } from "@radix-ui/react-icons"
import { useState } from "react"

interface JobCardProps {
  title: string
  company: string
  period: string
  details: string[]
}

export function JobCard({ title, company, period, details }: JobCardProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <Card className="hover:shadow-lg transition-shadow duration-300 dark:bg-gray-700">
      <CardContent className="p-6">
        <div className="flex justify-between items-center">
          <h3 className="text-xl font-semibold text-blue-700 dark:text-blue-300">{title}</h3>
          <p className="text-gray-500 dark:text-gray-400 text-sm">{period}</p>
        </div>
        
        <div className="flex justify-between items-center mt-1">
          <div className="text-gray-600 dark:text-gray-300">{company}</div>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors"
            aria-expanded={isOpen}
            aria-label={isOpen ? "Hide details" : "Show details"}
          >
            <ChevronDownIcon
              className={`h-5 w-5 transform transition-transform duration-200 ${
                isOpen ? "rotate-180" : ""
              }`}
            />
          </button>
        </div>

        <div
          className={`mt-4 space-y-2 ${
            isOpen ? "block" : "hidden"
          }`}
        >
          <h4 className="font-medium text-gray-700 dark:text-gray-300 mb-2">Achievements:</h4>
          <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
            {details.map((detail, index) => (
              <li key={index}>{detail}</li>
            ))}
          </ul>
        </div>
      </CardContent>
    </Card>
  )
}

