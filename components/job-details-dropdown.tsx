'use client'

import { useState } from 'react'
import { ChevronDownIcon } from '@radix-ui/react-icons'
import { Button } from './ui/button'

interface JobDetailsDropdownProps {
  details: string[]
}

export function JobDetailsDropdown({ details }: JobDetailsDropdownProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div>
      <Button
        variant="ghost"
        size="sm"
        className="w-full flex justify-end items-center -my-1 h-8"
        onClick={() => setIsOpen(!isOpen)}
        aria-label={isOpen ? 'Hide details' : 'Show details'}
      >
        <ChevronDownIcon
          className={`h-4 w-4 transition-transform ${
            isOpen ? 'transform rotate-180' : ''
          }`}
        />
      </Button>
      {isOpen && (
        <div>
          <p className="font-medium text-sm text-gray-700 dark:text-gray-300 mb-1">Achievements:</p>
          <ul className="space-y-1 pl-4">
            {details.map((detail, index) => (
              <li
                key={index}
                className="text-sm text-gray-700 dark:text-gray-300 list-disc ml-4"
              >
                {detail}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
} 