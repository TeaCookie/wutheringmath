"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"

export function ThemeSwitch() {
  const { theme, setTheme } = useTheme()

  const toggleTheme = () => {
    if (theme === "dark") {
      setTheme("light")
    } else {
      setTheme("dark")
    }
  }

  return (
    <Button
      className="h-8 w-8 p-0 relative bg-transparent"
      onClick={toggleTheme}
    >
      <Sun className="h-[24px] w-[24px] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100 dark:text-white text-black" />
      <Moon className="absolute h-[24px] w-[24px] rotate-0 scale-100 transition-all dark:rotate-90 dark:scale-0 dark:text-white text-black" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}
