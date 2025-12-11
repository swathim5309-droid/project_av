'use client';

import {
  APIProvider,
  Map,
  AdvancedMarker,
  Pin,
  InfoWindow,
} from '@vis.gl/react-google-maps';
import { useState } from 'react';

const position = { lat: 37.7749, lng: -122.4194 }; // San Francisco

export function LiveMap() {
  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;
  const [infoWindowOpen, setInfoWindowOpen] = useState(true);

  if (!apiKey) {
    return (
      <div className="flex aspect-video w-full items-center justify-center rounded-lg bg-muted text-center">
        <p className="p-4 text-sm text-white">
          Google Maps API key is not configured. Please add{' '}
          <code className="font-mono bg-muted-foreground/20 px-1 py-0.5 rounded">
            NEXT_PUBLIC_GOOGLE_MAPS_API_KEY
          </code>{' '}
          to your environment variables.
        </p>
      </div>
    );
  }

  return (
    <APIProvider apiKey={apiKey}>
      <div className="aspect-video w-full rounded-lg overflow-hidden">
        <Map
          defaultCenter={position}
          defaultZoom={12}
          gestureHandling={'greedy'}
          disableDefaultUI={true}
          mapId="threatwatch-map"
        >
          <AdvancedMarker
            position={position}
            onClick={() => setInfoWindowOpen(true)}
          >
            <Pin
              background={'hsl(var(--primary))'}
              borderColor={'hsl(var(--primary-foreground))'}
              glyphColor={'hsl(var(--primary-foreground))'}
            />
          </AdvancedMarker>
          {infoWindowOpen && (
            <InfoWindow
              position={position}
              onCloseClick={() => setInfoWindowOpen(false)}
            >
              <p>Vehicle A-123</p>
              <p>Status: All Systems Nominal</p>
            </InfoWindow>
          )}
        </Map>
      </div>
    </APIProvider>
  );
}
