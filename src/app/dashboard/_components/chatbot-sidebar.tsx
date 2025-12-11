'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { PanelLeftClose, PanelLeftOpen } from 'lucide-react';
import { ThreatAdvisorChatbot } from './threat-advisor-chatbot';
import { cn } from '@/lib/utils';

interface ChatbotSidebarProps {
  threatContext: {
    sybilAlerts: number;
    gpsSpoofingEvents: number;
    sensorAnomalies: number;
  };
}

export function ChatbotSidebar({ threatContext }: ChatbotSidebarProps) {
  const [isExpanded, setIsExpanded] = useState(true);

  return (
    <div
      className={cn(
        'flex flex-col border-r bg-card transition-[width] duration-300',
        isExpanded ? 'w-full md:w-[350px]' : 'w-[56px]'
      )}
    >
      <div className="flex items-center justify-between border-b p-2">
        {isExpanded && <h2 className="font-semibold px-2">Threat Advisor</h2>}
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          {isExpanded ? <PanelLeftClose /> : <PanelLeftOpen />}
        </Button>
      </div>
      <div className={cn("flex-1 overflow-hidden", !isExpanded && "hidden")}>
        <ThreatAdvisorChatbot threatContext={threatContext} />
      </div>
    </div>
  );
}
