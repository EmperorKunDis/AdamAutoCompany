"use client"

import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const days = ["Pondělí 15.1.", "Úterý 16.1.", "Středa 17.1.", "Čtvrtek 18.1.", "Pátek 19.1.", "Sobota 20.1.", "Neděle 21.1."]
const hours = Array.from({ length: 10 }, (_, i) => i + 8) // 8:00 - 17:00

const events = [
  { day: 0, start: 9, duration: 4, title: "BMW X5 - Keramika", color: "bg-blue-500/20 border-blue-500 text-blue-100" },
  { day: 1, start: 8, duration: 2, title: "Audi A6 - Interiér", color: "bg-green-500/20 border-green-500 text-green-100" },
  { day: 1, start: 13, duration: 3, title: "Škoda Superb - Leštění", color: "bg-purple-500/20 border-purple-500 text-purple-100" },
  { day: 2, start: 10, duration: 5, title: "Porsche 911 - PPF", color: "bg-red-500/20 border-red-500 text-red-100" },
  { day: 3, start: 9, duration: 2, title: "Mercedes V - Mytí", color: "bg-yellow-500/20 border-yellow-500 text-yellow-100" },
  { day: 4, start: 8, duration: 8, title: "Ferrari 488 - Full Detailing", color: "bg-primary/20 border-primary text-primary-100" },
]

export default function AdminCalendarPage() {
  return (
    <div className="space-y-6 h-[calc(100vh-8rem)] flex flex-col">
      <div className="flex justify-between items-center">
        <h2 className="text-3xl font-bold font-space-grotesk">Kalendář Rezervací</h2>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="icon"><ChevronLeft className="h-4 w-4" /></Button>
          <span className="font-medium text-lg min-w-[150px] text-center">Leden 2026</span>
          <Button variant="outline" size="icon"><ChevronRight className="h-4 w-4" /></Button>
        </div>
      </div>

      <Card className="flex-1 bg-card/50 border-white/5 overflow-hidden flex flex-col">
        <div className="grid grid-cols-8 border-b border-white/5 bg-secondary/30">
          <div className="p-4 border-r border-white/5"></div>
          {days.map((day, i) => (
            <div key={i} className="p-4 text-center font-medium text-sm border-r border-white/5 last:border-0">
              {day}
            </div>
          ))}
        </div>
        
        <div className="flex-1 overflow-y-auto relative bg-background/20">
          {hours.map((hour) => (
            <div key={hour} className="grid grid-cols-8 h-20 border-b border-white/5">
              <div className="p-2 text-xs text-muted-foreground text-right border-r border-white/5 -mt-2.5">
                {hour}:00
              </div>
              {Array.from({ length: 7 }).map((_, i) => (
                <div key={i} className="border-r border-white/5 last:border-0 relative hover:bg-white/5 transition-colors group">
                   {/* Add Button on Hover */}
                   <button className="absolute inset-0 w-full h-full opacity-0 group-hover:opacity-100 flex items-center justify-center text-xs text-muted-foreground bg-primary/5">
                     + Přidat
                   </button>
                </div>
              ))}
            </div>
          ))}

          {/* Events Overlay */}
          <div className="absolute inset-0 pointer-events-none grid grid-cols-8 top-0">
            <div className="col-span-1"></div> {/* Time col */}
            <div className="col-span-7 grid grid-cols-7 relative">
              {events.map((event, i) => (
                <div
                  key={i}
                  className={`absolute m-1 p-2 rounded border text-xs font-medium pointer-events-auto cursor-pointer hover:brightness-110 transition-all shadow-lg overflow-hidden ${event.color}`}
                  style={{
                    left: `${(event.day * 100) / 7}%`,
                    width: `${100 / 7}%`,
                    top: `${(event.start - 8) * 80}px`, // 80px per hour
                    height: `${event.duration * 80}px`,
                  }}
                >
                  <div className="font-bold">{event.title}</div>
                  <div className="opacity-80 mt-1">{event.start}:00 - {event.start + event.duration}:00</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Card>
    </div>
  )
}
