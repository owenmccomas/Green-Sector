import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

// Define the props for each icon component
interface IconProps {
  className?: string;
}

export default function Component() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-[#355E3B] text-white py-4 px-6 flex items-center justify-between">
        <Link href="#" className="flex items-center gap-2" prefetch={false}>
          <FigmaIcon className="w-8 h-8" />
          <span className="text-lg font-bold">Green Sector</span>
        </Link>
        <nav className="hidden md:flex items-center gap-6">
          <Link href="#" className="hover:underline" prefetch={false}>
            Drivers
          </Link>
          <Link href="#" className="hover:underline" prefetch={false}>
            Constructors
          </Link>
          <Link href="#" className="hover:underline" prefetch={false}>
            Races
          </Link>
        </nav>
        <Button variant="ghost" size="icon" className="md:hidden">
          <MenuIcon className="w-6 h-6" />
          <span className="sr-only">Toggle navigation</span>
        </Button>
      </header>
      <div className="flex flex-1">
        <nav className="bg-gray-100 dark:bg-gray-800 p-6 hidden md:block">
          <div className="grid gap-4">
            <Link
              href="#"
              className="flex items-center gap-2 text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-50"
              prefetch={false}
            >
              <LayoutDashboardIcon className="w-5 h-5" />
              Dashboard
            </Link>
            <Link
              href="#"
              className="flex items-center gap-2 text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-50"
              prefetch={false}
            >
              <TrophyIcon className="w-5 h-5" />
              Standings
            </Link>
            <Link
              href="#"
              className="flex items-center gap-2 text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-50"
              prefetch={false}
            >
              <CalendarIcon className="w-5 h-5" />
              Calendar
            </Link>
            <Link
              href="#"
              className="flex items-center gap-2 text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-50"
              prefetch={false}
            >
              <SettingsIcon className="w-5 h-5" />
              Settings
            </Link>
          </div>
        </nav>
        <main className="flex-1 p-6">
          <div className="grid gap-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card>
                <CardHeader className="flex items-center justify-between">
                  <CardTitle>Driver Standings</CardTitle>
                  <Link href="#" className="text-[#355E3B] dark:text-[#355E3B] hover:underline" prefetch={false}>
                    View All
                  </Link>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <img
                          src="/placeholder.svg"
                          width="32"
                          height="32"
                          className="rounded-full"
                          alt="Max Verstappen"
                        />
                        <div>
                          <div className="font-medium">Max Verstappen</div>
                          <div className="text-gray-500 dark:text-gray-400 text-sm">Red Bull</div>
                        </div>
                      </div>
                      <div className="font-medium">234</div>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <img
                          src="/placeholder.svg"
                          width="32"
                          height="32"
                          className="rounded-full"
                          alt="Lewis Hamilton"
                        />
                        <div>
                          <div className="font-medium">Lewis Hamilton</div>
                          <div className="text-gray-500 dark:text-gray-400 text-sm">Mercedes</div>
                        </div>
                      </div>
                      <div className="font-medium">189</div>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <img
                          src="/placeholder.svg"
                          width="32"
                          height="32"
                          className="rounded-full"
                          alt="Sergio Perez"
                        />
                        <div>
                          <div className="font-medium">Sergio Perez</div>
                          <div className="text-gray-500 dark:text-gray-400 text-sm">Red Bull</div>
                        </div>
                      </div>
                      <div className="font-medium">171</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex items-center justify-between">
                  <CardTitle>Constructor Standings</CardTitle>
                  <Link href="#" className="text-[#355E3B] dark:text-[#355E3B] hover:underline" prefetch={false}>
                    View All
                  </Link>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <img src="/placeholder.svg" width="32" height="32" alt="Red Bull" />
                        <div>
                          <div className="font-medium">Red Bull</div>
                          <div className="text-gray-500 dark:text-gray-400 text-sm">405</div>
                        </div>
                      </div>
                      <div className="font-medium">405</div>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <img src="/placeholder.svg" width="32" height="32" alt="Mercedes" />
                        <div>
                          <div className="font-medium">Mercedes</div>
                          <div className="text-gray-500 dark:text-gray-400 text-sm">310</div>
                        </div>
                      </div>
                      <div className="font-medium">310</div>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <img src="/placeholder.svg" width="32" height="32" alt="Ferrari" />
                        <div>
                          <div className="font-medium">Ferrari</div>
                          <div className="text-gray-500 dark:text-gray-400 text-sm">274</div>
                        </div>
                      </div>
                      <div className="font-medium">274</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex items-center justify-between">
                  <CardTitle>Upcoming Races</CardTitle>
                  <Link href="#" className="text-[#355E3B] dark:text-[#355E3B] hover:underline" prefetch={false}>
                    View Calendar
                  </Link>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="font-medium">Bahrain Grand Prix</div>
                        <div className="text-gray-500 dark:text-gray-400 text-sm">March 5, 2023</div>
                      </div>
                      <Button variant="outline" size="sm">
                        View
                      </Button>
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="font-medium">Saudi Arabian Grand Prix</div>
                        <div className="text-gray-500 dark:text-gray-400 text-sm">March 19, 2023</div>
                      </div>
                      <Button variant="outline" size="sm">
                        View
                      </Button>
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="font-medium">Australian Grand Prix</div>
                        <div className="text-gray-500 dark:text-gray-400 text-sm">April 2, 2023</div>
                      </div>
                      <Button variant="outline" size="sm">
                        View
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex items-center justify-between">
                  <CardTitle>Latest Race Results</CardTitle>
                  <Link href="#" className="text-[#355E3B] dark:text-[#355E3B] hover:underline" prefetch={false}>
                    View All
                  </Link>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <img
                          src="/placeholder.svg"
                          width="32"
                          height="32"
                          className="rounded-full"
                          alt="Max Verstappen"
                        />
                        <div>
                          <div className="font-medium">Max Verstappen</div>
                          <div className="text-gray-500 dark:text-gray-400 text-sm">Red Bull</div>
                        </div>
                      </div>
                      <div className="font-medium">1</div>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <img
                          src="/placeholder.svg"
                          width="32"
                          height="32"
                          className="rounded-full"
                          alt="Sergio Perez"
                        />
                        <div>
                          <div className="font-medium">Sergio Perez</div>
                          <div className="text-gray-500 dark:text-gray-400 text-sm">Red Bull</div>
                        </div>
                      </div>
                      <div className="font-medium">2</div>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <img
                          src="/placeholder.svg"
                          width="32"
                          height="32"
                          className="rounded-full"
                          alt="Fernando Alonso"
                        />
                        <div>
                          <div className="font-medium">Fernando Alonso</div>
                          <div className="text-gray-500 dark:text-gray-400 text-sm">Aston Martin</div>
                        </div>
                      </div>
                      <div className="font-medium">3</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex items-center justify-between">
                  <CardTitle>Next Race: Bahrain Grand Prix</CardTitle>
                  <Link href="#" className="text-[#355E3B] dark:text-[#355E3B] hover:underline" prefetch={false}>
                    View Details
                  </Link>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="font-medium">Track Map</div>
                        <div className="text-gray-500 dark:text-gray-400 text-sm">Bahrain International Circuit</div>
                      </div>
                      <img
                        src="/placeholder.svg"
                        alt="Bahrain Grand Prix Track Map"
                        width={300}
                        height={200}
                        className="rounded-lg"
                      />
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="font-medium">Race Details</div>
                        <div className="text-gray-500 dark:text-gray-400 text-sm">
                          Date: March 5, 2023
                          <br />
                          Laps: 57
                          <br />
                          Circuit Length: 5.412 km
                        </div>
                      </div>
                      <Button variant="outline" size="sm">
                        View
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

// Icon components
const FigmaIcon: React.FC<IconProps> = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2H6C4.89543 2 4 2.89543 4 4V10C4 11.1046 4.89543 12 6 12H12C13.1046 12 14 11.1046 14 10V4C14 2.89543 13.1046 2 12 2Z" fill="#F24E1E"/>
    <path d="M18 2H12V12H18C19.1046 12 20 11.1046 20 10V4C20 2.89543 19.1046 2 18 2Z" fill="#A259FF"/>
    <path d="M20 14H14C12.8954 14 12 14.8954 12 16V18C12 19.1046 12.8954 20 14 20H20C21.1046 20 22 19.1046 22 18V16C22 14.8954 21.1046 14 20 14Z" fill="#F24E1E"/>
    <path d="M8 14H2V20C2 21.1046 2.89543 22 4 22H8V16C8 14.8954 8.89543 14 10 14H8Z" fill="#F24E1E"/>
    <path d="M8 2H10C11.1046 2 12 2.89543 12 4V10C12 11.1046 11.1046 12 10 12H8V2Z" fill="#FF7262"/>
  </svg>
);

const MenuIcon: React.FC<IconProps> = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M3 12H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M3 6H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M3 18H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const LayoutDashboardIcon: React.FC<IconProps> = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M3 3H9V13H3V3Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M15 3H21V8H15V3Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M15 12H21V21H15V12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M3 17H9V21H3V17Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const TrophyIcon: React.FC<IconProps> = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M17 3H7C7 3 7 8 5 10C3 12 3 16 3 16H21C21 16 21 12 19 10C17 8 17 3 17 3Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M7 10H17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M12 3V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M9 21H15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const CalendarIcon: React.FC<IconProps> = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M8 7V3M16 7V3M3 11H21M5 5H19C20.1046 5 21 5.89543 21 7V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V7C3 5.89543 3.89543 5 5 5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const SettingsIcon: React.FC<IconProps> = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 1V3M12 21V23M4.21967 4.21967L5.63604 5.63604M18.364 18.364L19.7803 19.7803M1 12H3M21 12H23M4.21967 19.7803L5.63604 18.364M18.364 5.63604L19.7803 4.21967M8 12C8 9.79086 9.79086 8 12 8C14.2091 8 16 9.79086 16 12C16 14.2091 14.2091 16 12 16C9.79086 16 8 14.2091 8 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);
