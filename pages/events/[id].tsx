import RequireAuth from "../../components/RequireAuth"
import Layout from "../../components/Layout"
import CalendarTodayIcon from "@mui/icons-material/CalendarToday"
import LocationOnIcon from "@mui/icons-material/LocationOn"
import { Avatar, AvatarGroup } from "@mui/material"
import ProfilePicture from "../../components/ProfilePicture"
import { useRouter } from "next/router"
import { useQuery } from "@tanstack/react-query"
import { getEventById } from "../../utilities/requests/eventsRequests"
import { format } from "date-fns"

export default function Event() {
  const router = useRouter()

  const { id } = router.query

  const getEventByIdQuery = useQuery({
    queryKey: ["getEventById", id],
    queryFn: () => getEventById(parseInt(id as string)),
  })

  if (getEventByIdQuery.isLoading) return <div>Loading...</div>
  console.log(getEventByIdQuery.data)

  return (
    <RequireAuth>
      <Layout>
        <div className="flex h-full w-full justify-center bg-gradient-to-r from-indigo-900 to-slate-900 p-8 text-center text-black">
          <div className="max-w-sm">
            <img
              className="rounded-t-2xl"
              src="https://img.freepik.com/premium-vector/2023-happy-new-year-glassmorphism-concept-template-vector-design_560113-82.jpg?w=2000"
              alt="event"
            />
            <div className="relative -top-4 flex flex-col gap-4 rounded-2xl bg-white p-4 text-start">
              <h1 className="text-2xl font-bold">
                {getEventByIdQuery?.data?.title}
              </h1>
              <div className="flex items-center gap-2">
                <CalendarTodayIcon />
                <div className="flex items-center gap-2">
                  <div>
                    <p>
                      {format(
                        new Date(getEventByIdQuery?.data?.startAt as string),
                        "iii, MMM d, yyyy"
                      )}
                    </p>
                    {!getEventByIdQuery?.data?.allDay && (
                      <p>
                        {format(
                          new Date(getEventByIdQuery?.data?.endAt as string),
                          "hh:mm b"
                        )}
                      </p>
                    )}
                  </div>
                  <div>-</div>
                  <div>
                    <p>
                      {format(
                        new Date(getEventByIdQuery?.data?.endAt as string),
                        "iii, MMM d, yyyy"
                      )}
                    </p>
                    {!getEventByIdQuery?.data?.allDay && (
                      <p>
                        {format(
                          new Date(getEventByIdQuery?.data?.endAt as string),
                          "hh:mm b"
                        )}
                      </p>
                    )}
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <LocationOnIcon />
                <div>
                  <p>Location</p>
                </div>
              </div>
              <p className="text-xl font-bold">Going:</p>
              <AvatarGroup max={4} spacing="small" className="w-fit">
                <ProfilePicture
                  firstName="Octavian"
                  lastName="Regatun"
                  size={24}
                />
                <ProfilePicture
                  firstName="Octavian"
                  lastName="Regatun"
                  size={24}
                />
                <ProfilePicture
                  firstName="Octavian"
                  lastName="Regatun"
                  size={24}
                />
                <ProfilePicture
                  firstName="Octavian"
                  lastName="Regatun"
                  size={24}
                />
                <ProfilePicture
                  firstName="Octavian"
                  lastName="Regatun"
                  size={24}
                />
              </AvatarGroup>

              <h2 className="text-xl font-bold">About</h2>
              {/* TODO: replace dangerouslySetInnerHTML with a library maybe */}
              <h3
                className="text-gray-800"
                dangerouslySetInnerHTML={{
                  __html: getEventByIdQuery?.data?.description || "",
                }}
              ></h3>
            </div>
          </div>
        </div>
      </Layout>
    </RequireAuth>
  )
}
