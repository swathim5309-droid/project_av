import Image from 'next/image';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const missions = [
  { id: 1, title: 'Alpha-7 Urban Route', status: 'In Progress', statusVariant: 'default' },
  { id: 2, title: 'Bravo-3 Highway Test', status: 'Completed', statusVariant: 'secondary' },
  { id: 3, title: 'Charlie-9 Night Run', status: 'Alert', statusVariant: 'destructive' },
  { id: 4, title: 'Delta-1 Logistics', status: 'Completed', statusVariant: 'secondary' },
  { id: 5, title: 'Echo-5 Suburban Path', status: 'Planned', statusVariant: 'outline' },
  { id: 6, title: 'Foxtrot-2 Rain Test', status: 'In Progress', statusVariant: 'default' },
];

export default function MissionsPage() {
  const mapThumbnail = PlaceHolderImages.find(p => p.id === 'mission-map-thumbnail');

  return (
    <div>
      <div className="mb-6">
        <h1 className="text-3xl font-semibold font-headline">Missions</h1>
        <p className="text-muted-foreground">
          Overview of all autonomous vehicle missions.
        </p>
      </div>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {missions.map((mission) => (
          <Card key={mission.id}>
            <CardHeader>
              <CardTitle className="text-lg font-semibold">{mission.title}</CardTitle>
            </CardHeader>
            <CardContent>
              {mapThumbnail && (
                <div className="aspect-video overflow-hidden rounded-md">
                   <Image
                    src={`${mapThumbnail.imageUrl}?seed=${mission.id}`}
                    alt="Map thumbnail"
                    width={400}
                    height={200}
                    className="h-full w-full object-cover"
                    data-ai-hint={mapThumbnail.imageHint}
                  />
                </div>
              )}
            </CardContent>
            <CardFooter>
              <Badge variant={mission.statusVariant as any}>{mission.status}</Badge>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
