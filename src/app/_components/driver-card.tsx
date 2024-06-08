"use client";

import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import React, { useEffect, useState } from "react";
import { getDriverData } from "../../utils/drivers"; // Adjust the import path as necessary

interface Driver {
  broadcast_name: string;
  country_code: string;
  driver_number: number;
  first_name: string;
  full_name: string;
  headshot_url: string;
  last_name: string;
  meeting_key: string;
  name_acronym: string;
  session_key: string;
  team_colour: string;
  team_name: string;
}

const DriverStandingsCard: React.FC = () => {
  const [drivers, setDrivers] = useState<Driver[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    fetchDriverData();
  }, []); // Empty dependency array to run the effect only once

  const fetchDriverData = async () => {
    setIsLoading(true); // Set the loading state to true
    try {
      const data = await getDriverData();
      const currentDrivers = filterCurrentDrivers(data); // Filter the current drivers
      setDrivers(currentDrivers); // Set the state with the filtered drivers
    } catch (error) {
      console.error('Error fetching driver data:', error);
    } finally {
      setIsLoading(false); // Set the loading state to false
    }
  };

  // Function to filter the current drivers
// Define a list of current driver numbers
const currentDriverNumbers = [1, 2, 3, 4, 10, 11, 14, 16, 18, 20, 22, 23, 24, 27, 31, 44, 55, 63, 77, 81];

const filterCurrentDrivers = (drivers: Driver[]): Driver[] => {
    const currentDrivers = currentDriverNumbers.map((driverNumber) => {
      const driver = drivers.find((d) => d.driver_number === driverNumber);
      return driver || null; // Return null if no driver is found for the given number
    }).filter((driver) => driver !== null) as Driver[]; // Filter out null values and assert the type as Driver[]
  
    return currentDrivers;
  };
  

  return (
    <Card>
      <CardHeader className="flex items-center justify-between">
        <CardTitle>Driver Standings</CardTitle>
        <Link
          href="#"
          className="text-[#355E3B] hover:underline dark:text-[#355E3B]"
          prefetch={false}
        >
          View All
        </Link>
      </CardHeader>
      <CardContent>
        {isLoading ? (
          <div>Loading...</div> // Render a loading indicator while fetching data
        ) : (
          <div className="grid gap-2">
            {drivers.map((driver) => (
              <div
                key={driver.driver_number}
                className="flex items-center justify-between"
              >
                <div className="flex items-center gap-2">
                  <img
                    src={driver.headshot_url || "/placeholder.svg"}
                    width="32"
                    height="32"
                    className="rounded-full"
                    alt={driver.full_name}
                  />
                  <div>
                    <div className="font-medium">{driver.full_name}</div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">
                      {driver.team_name}
                    </div>
                  </div>
                </div>
                {/* Assuming you have a points attribute in the driver data */}
                {/* <div className="font-medium">{driver.points || 'N/A'}</div> */}
              </div>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default DriverStandingsCard;
