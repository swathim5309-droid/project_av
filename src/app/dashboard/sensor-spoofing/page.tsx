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
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { UploadCloud, List, ShieldAlert } from 'lucide-react';

const sensorResults = {
  scores: [
    { sensor: 'LIDAR-Front', score: '0.92', status: 'High Anomaly' },
    { sensor: 'IMU-Gyro-Y', score: '0.81', status: 'High Anomaly' },
    { sensor: 'Camera-Left', score: '0.55', status: 'Moderate' },
    { sensor: 'GPS-Antenna-1', score: '0.12', status: 'Nominal' },
  ],
  affected: ['LIDAR', 'IMU', 'CAN Bus'],
};

export default function SensorSpoofingPage() {
  return (
    <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
      <Card>
        <CardHeader>
          <CardTitle className="text-xl font-semibold">Upload Sensor Data</CardTitle>
          <CardDescription>
            Submit a binary or CSV file of mixed sensor data for analysis.
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
          <Button className="w-full">Run Sensor Detection</Button>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle className="text-xl font-semibold">Sensor Analysis</CardTitle>
          <CardDescription>Results from the uploaded sensor data file.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div>
            <h3 className="mb-2 font-medium flex items-center gap-2"><ShieldAlert className="size-4"/>Sensor Anomaly Scores</h3>
            <div className="rounded-md border">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Sensor</TableHead>
                    <TableHead>Score</TableHead>
                    <TableHead className="text-right">Status</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {sensorResults.scores.map((s) => (
                    <TableRow key={s.sensor}>
                      <TableCell className="font-mono text-sm">{s.sensor}</TableCell>
                      <TableCell>{s.score}</TableCell>
                      <TableCell className="text-right">
                        <Badge
                          variant={s.status === 'High Anomaly' ? 'destructive' : s.status === 'Moderate' ? 'default' : 'secondary'}
                          className={s.status === 'Moderate' ? 'bg-warning text-warning-foreground' : ''}
                        >
                          {s.status}
                        </Badge>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </div>
          <Separator />
          <div>
             <h3 className="mb-2 font-medium flex items-center gap-2"><List className="size-4"/>Affected Sensors</h3>
            <ul className="space-y-2">
              {sensorResults.affected.map((sensor) => (
                <li key={sensor} className="flex items-center rounded-md border bg-card p-3 text-sm font-medium">
                  {sensor}
                </li>
              ))}
            </ul>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
