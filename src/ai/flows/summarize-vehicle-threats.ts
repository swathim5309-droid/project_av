'use server';

/**
 * @fileOverview A threat intelligence summarization AI agent.
 *
 * - summarizeVehicleThreats - A function that summarizes vehicle threats.
 * - SummarizeVehicleThreatsInput - The input type for the summarizeVehicleThreats function.
 * - SummarizeVehicleThreatsOutput - The return type for the summarizeVehicleThreats function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SummarizeVehicleThreatsInputSchema = z.object({
  sybilAlertsToday: z.number().describe('The number of sybil alerts today.'),
  gpsSpoofingEvents: z.number().describe('The number of GPS spoofing events detected.'),
  sensorSpoofingFlags: z.number().describe('The number of sensor spoofing flags raised.'),
  additionalContext: z.string().optional().describe('Additional context or information to consider in the summary.'),
});
export type SummarizeVehicleThreatsInput = z.infer<typeof SummarizeVehicleThreatsInputSchema>;

const SummarizeVehicleThreatsOutputSchema = z.object({
  summary: z.string().describe('A prioritized summary of the most critical threats to vehicle safety.'),
});
export type SummarizeVehicleThreatsOutput = z.infer<typeof SummarizeVehicleThreatsOutputSchema>;

export async function summarizeVehicleThreats(input: SummarizeVehicleThreatsInput): Promise<SummarizeVehicleThreatsOutput> {
  return summarizeVehicleThreatsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'summarizeVehicleThreatsPrompt',
  input: {schema: SummarizeVehicleThreatsInputSchema},
  output: {schema: SummarizeVehicleThreatsOutputSchema},
  prompt: `You are a security analyst specializing in autonomous vehicle threat detection.

  Based on the following threat intelligence signals, provide a prioritized summary of the most critical threats to vehicle safety. Highlight the most pressing issues that require immediate attention.

  Sybil Alerts Today: {{sybilAlertsToday}}
  GPS Spoofing Events: {{gpsSpoofingEvents}}
  Sensor Spoofing Flags: {{sensorSpoofingFlags}}

  {{#if additionalContext}}
  Additional Context: {{additionalContext}}
  {{/if}}
  `,
});

const summarizeVehicleThreatsFlow = ai.defineFlow(
  {
    name: 'summarizeVehicleThreatsFlow',
    inputSchema: SummarizeVehicleThreatsInputSchema,
    outputSchema: SummarizeVehicleThreatsOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
