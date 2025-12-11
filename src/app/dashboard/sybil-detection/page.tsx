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
import { Separator } from '@/components/ui/separator';
import { UploadCloud } from 'lucide-react';
import { Gauge } from '@/components/gauge';

const detectionResults = {
  sybilNodeCount: 7,
  riskScore: 68,
  nodes: [
    { vehicleId: 'V-78B1C', confidence: '98%' },
    { vehicleId: 'V-A90F2', confidence: '95%' },
    { vehicleId: 'V-33DE8', confidence: '91%' },
    { vehicleId: 'V-55A4C', confidence: '85%' },
  ],
};

export default function SybilDetectionPage() {
  return (
    <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
      <Card>
        <CardHeader>
          <CardTitle className="text-xl font-semibold">Upload Vehicle Communication Log</CardTitle>
          <CardDescription>
            Submit a log file (.log, .txt) to scan for Sybil attack patterns.
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
          <Button className="w-full">Run Detection</Button>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle className="text-xl font-semibold">Sybil Detection Results</CardTitle>
          <CardDescription>Analysis of the latest uploaded log file.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex flex-col items-center justify-around gap-6 sm:flex-row">
            <div className="text-center">
              <p className="text-sm font-medium text-muted-foreground">Sybil Nodes Count</p>
              <p className="text-6xl font-bold">{detectionResults.sybilNodeCount}</p>
            </div>
            <div className="flex flex-col items-center">
               <Gauge value={detectionResults.riskScore} label="Risk Score" />
            </div>
          </div>
          <Separator />
          <div className="space-y-2">
            <h3 className="font-medium">Detected Sybil Nodes</h3>
            <div className="rounded-md border">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Vehicle ID</TableHead>
                    <TableHead className="text-right">Confidence Level</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {detectionResults.nodes.map((node) => (
                    <TableRow key={node.vehicleId}>
                      <TableCell className="font-mono text-sm">{node.vehicleId}</TableCell>
                      <TableCell className="text-right font-medium">{node.confidence}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
