import React, { useEffect } from "react";
import Dashboard from "../Dashboard/Dashboard";
import { api } from "../..";
import { useQuery } from "@tanstack/react-query";
import { useUserDatacontext } from "../../contexts/UserDataContent";
import "./panel.css";

const getPatientData = async (userId) => {
  const response = await api.get(`/patient/profile/${userId}`);
  return response.data;
};

const Panel = () => {
  const userId = localStorage.getItem("userId");

  const { setUserData } = useUserDatacontext();

  const { data, error, isLoading } = useQuery({
    queryKey: ["patientId", userId],
    queryFn: () => getPatientData(userId),
  });

  useEffect(() => {
    setUserData(data?.data);
  }, [data]);

  // if (isLoading) return <p>Loading...</p>;

  return (
    <div>
      <Dashboard />
    </div>
  );
};

export default Panel;
