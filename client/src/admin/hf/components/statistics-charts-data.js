import { chartsConfig } from "./charts-config";

const websiteViewsChart = {
  type: "bar",
  height: 220,
  series: [
    {
      name: "Values",
      data: [],
    },
  ],
  options: {
    ...chartsConfig,
    colors: "#388e3c",
    plotOptions: {
      bar: {
        columnWidth: "16%",
        borderRadius: 5,
      },
    },
    xaxis: {
      ...chartsConfig.xaxis,
      categories: ["avg_glucose_level", "bmi", "age"],
    },
  },
};

export const statisticsChartsData = [
  {
    color: "white",
    title: "Your Data",
    description: "This values display yours",
    footer: "Actual Data",
    chart: {
      type: "bar",
      height: 220,
      series: [
        {
          name: "Values",
          data: [0, 0, 0],
        },
      ],
      options: {
        colors: "#388e3c",
        plotOptions: {
          bar: {
            columnWidth: "30%",
            borderRadius: 5,
          },
        },
        xaxis: {
          categories: ["serum", "creatinine", "ejection"],
        },
      },
    },
  },
  {
    color: "white",
    title: "Healthy Data",
    description: "This values display Suggested data",
    footer: "World Health Organization (WHO)",
    chart: {
      type: "bar",
      height: 220,
      series: [
        {
          name: "Values",
          data: [0.8, 100, 65],
        },
      ],
      options: {
        colors: "#388e3c",
        plotOptions: {
          bar: {
            columnWidth: "30%",
            borderRadius: 5,
          },
        },
        xaxis: {
          categories: ["serum", "creatinine", "ejection"],
        },
      },
    },
  },
  {
    color: "white",
    title: "Summery Graph",
    description: "Overview of your data",
    footer: "Summery",
    chart: {
      type: "line",
    height: 220,
    series: [
      {
        name: "Values",
        data: [0, 0, 0, 0],
      },
    ],
    options: {
      ...chartsConfig,
      colors: ["#0288d1"],
      stroke: {
        lineCap: "round",
      },
      markers: {
        size: 5,
      },
      xaxis: {
        categories: ["serum", "ejection", "serum", "prediction"],
      },           
    },
      },
    },
];

export default statisticsChartsData;
