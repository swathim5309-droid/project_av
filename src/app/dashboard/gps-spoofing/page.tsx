import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import { UploadCloud, Pin, PinOff } from 'lucide-react';

const spoofingResult = {
  probability: '82%',
  jsonOutput: {
    "timestamp": "2024-05-21T14:35:12Z",
    "detected_event": "GPS_SPOOFING",
    "probability": 0.82,
    "evidence": {
      "signal_strength_anomaly": -15.2,
      "time_discrepancy_ns": 4800,
      "position_jump_m": 150.7
    },
    "recommended_action": "VERIFY_WITH_IMU_AND_CELLULAR_POSITIONING"
  }
};

export default function GpsSpoofingPage() {
  return (
    <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
      <Card>
        <CardHeader>
          <CardTitle className="text-xl font-semibold">Upload GPS Data CSV</CardTitle>
          <CardDescription>
            Submit a CSV file with GPS coordinates and timestamps for analysis.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex h-48 w-full flex-col items-center justify-center rounded-lg border-2 border-dashed">
            <UploadCloud className="mb-4 h-12 w-12 text-muted-foreground" />
            <Label htmlFor="file-upload" className="cursor-pointer text-primary hover:underline">
              Choose a file
            </Label>
            <p className="mt-1 text-sm text-muted-foreground">or drag and drop</p>
            <Input id="file-upload" type="file" className="sr-only" />
          </div>
          <Button className="w-full">Run GPS Detection</Button>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle className="text-xl font-semibold">GPS Spoofing Results</CardTitle>
          <CardDescription>Analysis of the submitted GPS data.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="text-center">
            <p className="text-sm font-medium text-muted-foreground">Spoofing Probability</p>
            <p className="text-6xl font-bold text-destructive">{spoofingResult.probability}</p>
          </div>
          <Separator />
          <div className="space-y-2">
            <h3 className="font-medium">True vs. Spoofed GPS Points</h3>
            <div className="flex aspect-video w-full items-center justify-center rounded-lg bg-muted p-4">
                <div className="flex flex-col items-center space-y-4">
                    <div className="flex items-center space-x-2 text-primary">
                        <Pin className="h-6 w-6"/>
                        <span className="font-medium">True Path</span>
                    </div>
                     <div className="flex items-center space-x-2 text-destructive">
                        <PinOff className="h-6 w-6"/>
                        <span className="font-medium">Spoofed Path</span>
                    </div>
                     <p className="text-xs text-muted-foreground pt-4">Graph placeholder</p>
                </div>
            </div>
          </div>
          <Separator />
          <div className="space-y-2">
            <h3 className="font-medium">JSON Output</h3>
            <pre className="font-code text-xs w-full overflow-x-auto rounded-md bg-muted p-4 text-muted-foreground">
              <code>
                {JSON.stringify(spoofingResult.jsonOutput, null, 2)}
              </code>
            </pre>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
