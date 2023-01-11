import { useQuery } from "@tanstack/react-query";
import Head from "next/head";
import { useSnackbar } from "notistack";
import { useEffect, useState } from "react";
import Layout from "../components/Layout";
import ProfilePicture from "../components/ProfilePicture";
import RequireAuth from "../components/RequireAuth";
import Text from "../components/Text";
import { WhiteTextField } from "../components/WhiteTextField";
import { useAuthStore } from "../store/authStore";
import { updateUser } from "../utilities/requests/updateUser";

export default function SettingsPage() {
  const user = useAuthStore(x => x.user);
  const setUser = useAuthStore(x => x.setUser);

  const [firstName, setFirstName] = useState(user?.firstName);
  const [lastName, setLastName] = useState(user?.lastName);
  const [username, setUsername] = useState(user?.username);

  const { enqueueSnackbar } = useSnackbar();

  useEffect(() => {
    setFirstName(user?.firstName);
    setLastName(user?.lastName);
    setUsername(user?.username);
  }, [user]);

  const updateUserQuery = useQuery({
    queryKey: ["updateUser", firstName, lastName, username],
    queryFn: () => updateUser(user!.id, { firstName, lastName, username }),
    onSuccess(data) {
      setUser(data);
      enqueueSnackbar("Settings updated!", { variant: "success" });
    },
    enabled: false,
  });

  return (
    <>
      <Head>
        <title>PlanITLY - Settings</title>
      </Head>
      <RequireAuth>
        <Layout>
          <div className="w-full h-full grid grid-cols-12 bg-gradient-to-r from-indigo-900 to-slate-900 p-8">
            <div className="col-span-12 flex flex-col items-center gap-4">
              <ProfilePicture
                firstName="Octavian"
                lastName="Regatun"
                size={128}
              />
              <Text type="h3" className="text-white">
                {user?.firstName} {user?.lastName}
              </Text>
              <WhiteTextField
                label="First Name"
                value={firstName}
                onChange={e => setFirstName(e.target.value)}
              />
              <WhiteTextField
                label="Last Name"
                value={lastName}
                onChange={e => setLastName(e.target.value)}
              />
              <WhiteTextField
                label="Username"
                value={username}
                onChange={e => setUsername(e.target.value)}
              />
              <button
                className="bg-gradient-to-br from-purple-900 via-purple-800 to-violet-700 px-4 py-2 rounded text-white"
                onClick={() => updateUserQuery.refetch()}
              >
                APPLY
              </button>
            </div>
          </div>
        </Layout>
      </RequireAuth>
    </>
  );
}
