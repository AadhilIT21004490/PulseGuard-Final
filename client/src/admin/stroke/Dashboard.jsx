import React from "react";
import {
  Typography,
  Card,
  CardHeader,
  CardBody,
  IconButton,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Avatar,
  Tooltip,
  Progress,
  Button,
} from "@material-tailwind/react";
import {
  EllipsisVerticalIcon,
  ArrowUpIcon,
} from "@heroicons/react/24/outline";
import { StatisticsCard } from "./components/statistics-card";
import { StatisticsChart } from "./components/statistics-chart";
import { statisticsCardsData } from "./components/statistics-cards-data";
import { statisticsChartsData } from "./components/statistics-charts-data";
import { projectsTableData } from "./components/projects-table-data";
import { ordersOverviewData } from "./components/orders-overview-data";
import { CheckCircleIcon, ClockIcon } from "@heroicons/react/24/solid";

import { useEffect, useState } from "react";
import axios from "axios";

export function Home() {
  const handlePrint = () => {
    window.print();
  };

  // const [data, setData] = useState({ age: 0 }); // Initialize with default value
  const [data, setData] = useState({ avg_glucose_level: 0, bmi: 0, age: 0 });

  useEffect(() => {
    // Fetch the latest stroke data
    axios
      .get("http://127.0.0.1:5000/stroke/latest")
      .then((response) => {
        setData(response.data); // Set the fetched data

        // Update the statisticsCardsData with fetched age
        statisticsCardsData[0].value = response.data.age;
        // Update the Gender card (index 1)
        statisticsCardsData[1].value = response.data.gender === 1 ? "Male" : "Female";
        // Update the Heart Disease card (index 2)
        statisticsCardsData[2].value = response.data.heart_disease === 1 ? "Yes" : "No";
        // Update the Heart Disease card (index 2)
        statisticsCardsData[3].value = response.data.prediction === 1 ? "Positive" : "Negative";

        // Update the chart with fetched values
        statisticsChartsData[0].chart.series[0].data = [
          response.data.avg_glucose_level,
          response.data.bmi,
          response.data.age,
        ];

        projectsTableData[0].values = response.data.gender === 1 ? "Male" : "Female";
        projectsTableData[1].values = response.data.age;
        projectsTableData[2].values = response.data.hypertension === 1 ? "Yes" : "No";
        projectsTableData[3].values = response.data.heart_disease === 1 ? "Yes" : "No";
        projectsTableData[4].values = response.data.ever_married === 1 ? "Married" : "No";
        projectsTableData[5].values = response.data.residence_type === 1 ? "Urban" : "Rural";
        projectsTableData[6].values = response.data.avg_glucose_level;
        projectsTableData[7].values = response.data.bmi;
        projectsTableData[8].values = response.data.prediction === 1 ? "Positive" : "Negative";
      })
      .catch((err) => {
        console.error("Error fetching data: ", err);
      });
  }, []);

  return (
    <div className="mt-12">
      <div className="mb-4 text-right">
        <button className="py-2 px-3 rounded-md bg-gradient-to-r from-orange-500 to-orange-800" color="blue" onClick={handlePrint}>
          Print as PDF
        </button>
      </div>
      
      <div className="mb-12 grid gap-y-10 gap-x-6 md:grid-cols-2 xl:grid-cols-4">
        {statisticsCardsData.map(({ icon, title, footer, ...rest }) => (
          <StatisticsCard
            key={title}
            {...rest}
            title={title}
            icon={React.createElement(icon, {
              className: "w-6 h-6 text-white",
            })}
            footer={
              <Typography className="font-normal text-blue-gray-600">
                <strong className={footer.color}>{footer.value}</strong>
                &nbsp;{footer.label}
              </Typography>
            }
          />
        ))}
      </div>
      <div className="mb-6 grid grid-cols-1 gap-y-12 gap-x-6 md:grid-cols-2 xl:grid-cols-3">
        {statisticsChartsData.map((props) => (
          <StatisticsChart
            key={props.title}
            {...props}
            footer={
              <Typography
                variant="small"
                className="flex items-center font-normal text-blue-gray-600"
              >
                <ClockIcon strokeWidth={2} className="h-4 w-4 text-blue-gray-400" />
                &nbsp;{props.footer}
              </Typography>
            }
          />
        ))}
      </div>
      <div className="mb-4 grid grid-cols-1 gap-6 xl:grid-cols-3">
        <Card className="overflow-hidden xl:col-span-2 border border-blue-gray-100 shadow-sm">
          <CardHeader
            floated={false}
            shadow={false}
            color="transparent"
            className="m-0 flex items-center justify-between p-6"
          >
            <div>
              <Typography variant="h6" color="blue-gray" className="mb-1">
                Report
              </Typography>
              <Typography
                variant="small"
                className="flex items-center gap-1 font-normal text-blue-gray-600"
              >
                <CheckCircleIcon strokeWidth={3} className="h-4 w-4 text-blue-gray-200" />
                <strong>Tested</strong> Report
              </Typography>
            </div>
            <Menu placement="left-start">
              <MenuHandler>
                <IconButton size="sm" variant="text" color="blue-gray">
                  <EllipsisVerticalIcon
                    strokeWidth={3}
                    fill="currenColor"
                    className="h-6 w-6"
                  />
                </IconButton>
              </MenuHandler>
              <MenuList>
                <MenuItem>Action</MenuItem>
                <MenuItem>Another Action</MenuItem>
                <MenuItem>Something else here</MenuItem>
              </MenuList>
            </Menu>
          </CardHeader>
          <CardBody className="overflow-x-scroll px-0 pt-0 pb-2">
            <table className="w-full min-w-[640px] table-auto">
              <thead>
                <tr>
                  {["Checked", "Values"].map(
                    (el) => (
                      <th
                        key={el}
                        className="border-b border-blue-gray-50 py-3 px-6 text-left"
                      >
                        <Typography
                          variant="small"
                          className="text-[11px] font-medium uppercase text-blue-gray-400"
                        >
                          {el}
                        </Typography>
                      </th>
                    )
                  )}
                </tr>
              </thead>
              <tbody>
                {projectsTableData.map(
                  ({ name, values }, key) => {
                    const className = `py-3 px-5 ${
                      key === projectsTableData.length - 1
                        ? ""
                        : "border-b border-blue-gray-50"
                    }`;

                    return (
                      <tr key={name}>
                        <td className={className}>
                          <Typography
                            variant="small"
                            className="text-xs font-medium text-blue-gray-600"
                          >
                            {name}
                          </Typography>
                        </td>
                        <td className={className}>
                          <div className="w-10/12">
                            <Typography
                              variant="small"
                              className="mb-1 block text-xs font-medium text-blue-gray-600"
                            >
                              {values}
                            </Typography>
                          </div>
                        </td>
                      </tr>
                    );
                  }
                )}
              </tbody>
            </table>
          </CardBody>
        </Card>
        <Card className="border border-blue-gray-100 shadow-sm">
          <CardHeader
            floated={false}
            shadow={false}
            color="transparent"
            className="m-0 p-6"
          >
            <Typography variant="h6" color="blue-gray" className="mb-2">
              Reported Suggestions 
            </Typography>
            <Typography
              variant="small"
              className="flex items-center gap-1 font-normal text-blue-gray-600"
            >
              <strong>{statisticsCardsData[3].value}</strong> this time
            </Typography>
          </CardHeader>
          <CardBody className="pt-0">
            {ordersOverviewData.map(
              ({ icon, color, title, description }, key) => (
                <div key={title} className="flex items-start gap-4 py-3">
                  <div
                    className={`relative p-1 after:absolute after:-bottom-6 after:left-2/4 after:w-0.5 after:-translate-x-2/4 after:bg-blue-gray-50 after:content-[''] ${
                      key === ordersOverviewData.length - 1
                        ? "after:h-0"
                        : "after:h-4/6"
                    }`}
                  >
                    {React.createElement(icon, {
                      className: `!w-5 !h-5 ${color}`,
                    })}
                  </div>
                  <div>
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="block font-medium"
                    >
                      {title}
                    </Typography>
                    <Typography
                      as="span"
                      variant="small"
                      className="text-xs font-medium text-blue-gray-500"
                    >
                      {description}
                    </Typography>
                  </div>
                </div>
              )
            )}
          </CardBody>
        </Card>
      </div>
    </div>
  );
}

export default Home;
