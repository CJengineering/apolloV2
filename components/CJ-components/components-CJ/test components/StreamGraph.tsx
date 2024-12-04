"use client";

import React, { useEffect } from "react";
import Highcharts from "highcharts/highstock";
import HighchartsReact from "highcharts-react-official";
import StreamgraphModule from "highcharts/modules/streamgraph";

// Initialize the streamgraph module
if (typeof StreamgraphModule === "function") {
  StreamgraphModule(Highcharts);
} else {
  console.error("");
}

interface StreamGraphProps {
  data: {
    name: string;
    data: number[];
  }[];
  categories: string[];
}

const StreamGraph: React.FC<StreamGraphProps> = ({ data, categories }) => {
  const colors = Highcharts.getOptions().colors!;

  const options = {
    chart: {
      type: "streamgraph",
      marginBottom: 50,
      marginRight: 230,
      zooming: {
        type: "x",
      },
    },
    colors: [
      colors[0],
      colors[1],
      colors[2],
      colors[3],
      colors[4],
      Highcharts.color(colors[5]).brighten(0.2).get(),
      Highcharts.color(colors[5]).brighten(0.1).get(),
      colors[5],
      colors[6],
      colors[7],
      colors[8],
      colors[9],
      colors[0],
      colors[1],
      colors[3],
      Highcharts.color(colors[2]).brighten(-0.1).get(),
      Highcharts.color(colors[2]).brighten(-0.2).get(),
      Highcharts.color(colors[2]).brighten(-0.3).get(),
      Highcharts.color(colors[2]).brighten(-0.4).get(),
    ],
    title: {
      floating: true,
      align: "left",
      text: "J-PAL's Randomised Control Trials (by region)",
      style: {
        fontFamily:   "var(--font-ibm-plex-mono)" // Replace with your font
      },

    },
    subtitle: {
      floating: true,
      align: "left",
      y: 30,
      style: {
        fontFamily:   "var(--font-ibm-plex-mono)" // Replace with your font
      }
     
    },
    xAxis: {
      maxPadding: 0,
      type: "category",
      crosshair: true,
      categories,
      labels: {
        align: "left",
        reserveSpace: false,
        rotation: 270,
        style: {
          fontFamily: "var(--font-ibm-plex-mono)", // Custom font applied
          fontSize: "12px",
          fontWeight: "400",
        },
      },
      lineWidth: 0,
      margin: 20,
      tickWidth: 0,
     
    },
    yAxis: {
      visible: false,
      startOnTick: false,
      endOnTick: false,
      minPadding: 0.1,
      maxPadding: 0.15,
      labels: {
        style: {
          fontFamily: "var(--font-ibm-plex-mono)", // Custom font applied
          fontSize: "12px",
          fontWeight: "400",
        },
      },
    },
    legend: {
        enabled: true,
        layout: "vertical", // Vertical layout for legends
        align:'right',// Align legends to the right of the chart
        verticalAlign: "middle", // Center legends vertically outside the graph
        x: 10, // Adjust position horizontally (space between chart and legend)
        itemStyle: {
          fontFamily: "var(--font-ibm-plex-mono)", // Custom font applied
          fontSize: "12px",
          fontWeight: "400",
          color: "#000",
        },
      },
    annotations: [
      {
        labels: [
          {
            point: {
              x: 5.5,
              xAxis: 0,
              y: 30,
              yAxis: 0,
            },
           
          },
          {
            point: {
              x: 18,
              xAxis: 0,
              y: 90,
              yAxis: 0,
            },
      
          },
          {
            point: {
              x: 24.25,
              xAxis: 0,
              y: 140,
              yAxis: 0,
            },
           
          },
        ],
        labelOptions: {
          backgroundColor: "rgba(255,255,255,0.5)",
          borderColor: "silver",
        },
      },
    ],
    plotOptions: {
      series: {
        label: {
          minFontSize: 5,
          maxFontSize: 15,
          style: {
            color: "rgba(255,255,255,0.75)",
          },
        },
        accessibility: {
          exposeAsGroupOnly: true,
        },
      },
    },
    series: data,
    exporting: {
      sourceWidth: 800,
      sourceHeight: 600,
    },
  };

  return <HighchartsReact highcharts={Highcharts} options={options} />;
};

export default StreamGraph;
