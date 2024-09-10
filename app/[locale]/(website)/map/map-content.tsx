'use client';
import React, { useEffect, useRef } from 'react';
import mapboxgl from 'mapbox-gl';

mapboxgl.accessToken = 'pk.eyJ1IjoiY29tbXVuaXR5amFtZWVsIiwiYSI6ImNsejVlNnVudTQ0bjcyaXFsb3lkM290ZnYifQ.TZqULeKUIpCisFDY36exQA';

const MapContent: React.FC = () => {
  const mapContainerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!mapContainerRef.current) return;

    const map = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: {
        "version": 8,
        "name": "Test-copy",
        "center": [-50.74917821009399, 19.81533067897695],
        "zoom": 2.1851050312609352,
        "bearing": 0,
        "pitch": 0,
        "lights": [],
        "terrain": null,
        "fog": { "color": "hsl(223, 0%, 0%)" },
        "imports": [],
        "sources": {
          "composite": {
            "url": "mapbox://mapbox.country-boundaries-v1",
            "type": "vector"
          }
        },
        "glyphs": "mapbox://fonts/mapbox/{fontstack}/{range}.pbf",
        "projection": { "name": "globe" },
        "layers": [
          {
            "id": "background",
            "type": "background",
            "layout": {},
            "paint": { "background-color": "#0a8ae6" }
          },
          {
            "id": "country-boundaries copy",
            "type": "fill",
            "source": "composite",
            "source-layer": "country_boundaries",
            "layout": {},
            "paint": { "fill-translate": [4, 2] }
          },
          {
            "id": "country-boundaries",
            "type": "fill",
            "source": "composite",
            "source-layer": "country_boundaries",
            "layout": {},
            "paint": { "fill-color": "#1b36bf" }
          }
        ],
      },
      center: { lng: -30.31584518491627, lat: -7.9887482354906325 },
      zoom: 2,
      projection: 'mercator',
      scrollZoom: false,
      dragRotate: false,
      dragPan: false,
    });

    const lines: GeoJSON.FeatureCollection<GeoJSON.Geometry> = {
      type: "FeatureCollection",
      features: [
        // Your lines data here
      ]
    };

    const markerData = [
      {
        align: "bottom-right",
        name: `<div class="city">MIT, Cambridge, Massachusetts:</div>
                <a href="" target="_blank">- J-PAL Global</a>
                 <a href="" target="_blank">- MIT J-WAFS</a>
                 <a href="" target="_blank">- MIT J-WEL</a>
                 <a href="" target="_blank">- MIT Jameel Clinic</a>
                 <a href="" target="_blank">- Jameel Observatory CREWSnet</a>
        `, coordinates: [-71.09240951238363, 42.35896932867615]
      },
      {
        align: "top-right",
        name: `<div class="city">New York City, New York:</div>
                <a href="" target="_blank">- Jameel Arts & Health Lab</a>`,
        coordinates: [-74.00000563856793, 40.724678411585764]
      },
      {
        align: "bottom-right",
        name: `<div class="city">London, United Kingdom:</div>
                <a href="" target="_blank">Jameel Institute</a>
                <a href="" target="_blank">CLIMAVORE x Jameel at RCA</a>
            `, coordinates: [-0.06799825376552351, 51.50881496054432]
      },
      {
        align: "top-left",
        name: `<div class="city">Paris, France:</div>
                <a href="" target="_blank">- J-PAL Europe</a>`,
        coordinates: [2.33887024861499, 48.871736664429854]
      },
      {
        align: "top-right", name: `<div class="city">Cairo, Egypt:</div>
                 <a href="" target="_blank">- J-PAL MENA</a>
                 <a href="" target="_blank">- Egypt Impact Lab</a>
                 <a href="" target="_blank">- Jameel House</a>
            `, coordinates: [31.251933921018196, 30.066274663503993]
      },
      {
        align: "top-left", name: `<div class="city">Amman, Jordan:</div>
                 <a href="" target="_blank">- Jameel C40</a>
            `, coordinates: [35.948483653410904, 31.87326059074893]
      },
      {
        align: "top-right", name: `<div class="city">Nairobi, Kenya:</div>
                 <a href="" target="_blank">- Jameel Observatory for Food Security Early Action</a>
            `, coordinates: [36.858294042232124, -1.3429733852535548]
      },
      {
        align: "top-left", name: `<div class="city">New Delhi, India:</div>
                 <a href="" target="_blank">J-PAL South Asia</a>
            `, coordinates: [77.19326317414409, 28.546483963642814]
      },
      {
        align: "top-left", name: `<div class="city">Jakarta, Indonesia:</div>
               <a href="" target="_blank">J-PAL Southeast Asia</a>
            `, coordinates: [106.82780564173726, -6.154590023554769]
      },
    ];

    map.on('load', () => {
      map.addSource('route', {
        type: 'geojson',
        data: lines
      });

      map.addLayer({
        id: 'route',
        type: 'line',
        source: 'route',
        layout: {
          'line-join': 'round',
          'line-cap': 'round'
        },
        paint: {
          'line-color': '#2b3fff',
          'line-width': 2
        }
      }, "country-boundaries copy");

      // Add markers to the map
      markerData.forEach((marker) => {
        const el = createCustomMarker({ text: marker.name, align: marker.align });
        new mapboxgl.Marker(el, {
          anchor: marker.align as mapboxgl.Anchor
        })
          .setLngLat(marker.coordinates as [number, number])
          .addTo(map);
      });
    });

    function createCustomMarker({ text, align }: { text: string, align: string }) {
      const markerEl = document.createElement('div');
      markerEl.className = 'marker-container';
      markerEl.innerHTML = `<div class="text-container">${text}</div>`;

      // Create SVG for line and circle
      const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
      svg.setAttribute('width', '40');
      svg.setAttribute('height', '50');
      svg.style.overflow = 'visible';
      svg.style.position = 'absolute';

      const vline = document.createElementNS('http://www.w3.org/2000/svg', 'line');
      vline.setAttribute('stroke', '#c876fc');
      vline.setAttribute('stroke-width', '3');

      const hline = document.createElementNS('http://www.w3.org/2000/svg', 'line');
      hline.setAttribute('stroke', '#c876fc');
      hline.setAttribute('stroke-width', '3');

      switch (align) {
        case 'top-left':
          vline.setAttribute('x1', '0');
          vline.setAttribute('y1', '40');
          vline.setAttribute('x2', '0');
          vline.setAttribute('y2', '0');

          hline.setAttribute('x1', '0');
          hline.setAttribute('y1', '40');
          hline.setAttribute('x2', '20');
          hline.setAttribute('y2', '40');
          svg.style.top = '0px';
          break;

        case 'bottom-left':
          svg.style.left = '0px';
          vline.setAttribute('x1', '0');
          vline.setAttribute('y1', '-40');
          vline.setAttribute('x2', '0');
          vline.setAttribute('y2', '0');

          hline.setAttribute('x1', '0');
          hline.setAttribute('y1', '-40');
          hline.setAttribute('x2', '20');
          hline.setAttribute('y2', '-40');
          break;

        case 'bottom-right':
          svg.style.right = '-40px';
          vline.setAttribute('x1', '0');
          vline.setAttribute('y1', '-40');
          vline.setAttribute('x2', '0');
          vline.setAttribute('y2', '0');

          hline.setAttribute('x1', '0');
          hline.setAttribute('y1', '-40');
          hline.setAttribute('x2', '-20');
          hline.setAttribute('y2', '-40');
          break;

        case 'top-right':
          svg.style.top = '0px';
          svg.style.right = '-40px';
          vline.setAttribute('x1', '0');
          vline.setAttribute('y1', '40');
          vline.setAttribute('x2', '0');
          vline.setAttribute('y2', '0');

          hline.setAttribute('x1', '0');
          hline.setAttribute('y1', '40');
          hline.setAttribute('x2', '-20');
          hline.setAttribute('y2', '40');
          break;
      }

      const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
      circle.setAttribute('cx', '0');
      circle.setAttribute('cy', '0');
      circle.setAttribute('r', '8');
      circle.setAttribute('fill', '#c876fc');

      svg.appendChild(vline);
      svg.appendChild(hline);
      svg.appendChild(circle);
      markerEl.appendChild(svg);
      return markerEl;
    }

    return () => {
      map.remove();
    };
  }, []);

  return <div className="w-full h-full relative" ref={mapContainerRef} id="map"></div>;
};

export default MapContent;
