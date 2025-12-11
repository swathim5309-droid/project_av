'use client';

import { APIProvider, Map } from '@vis.gl/react-google-maps';

export function LiveMap() {
  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;

  if (!apiKey) {
    return (
      <div className="flex h-full w-full items-center justify-center rounded-lg bg-muted">
        <p className="max-w-xs text-center text-sm text-foreground">
          Please add your Google Maps API key to the .env file to display the
          map.
        </p>
      </div>
    );
  }

  return (
    <div className="h-full w-full overflow-hidden rounded-lg">
      <APIProvider apiKey={apiKey}>
        <Map
          defaultCenter={{ lat: 34.0522, lng: -118.2437 }}
          defaultZoom={11}
          mapId="5f8a3c8e547d6e8a"
          disableDefaultUI
        />
      </APIProvider>
    </div>
  );
}
