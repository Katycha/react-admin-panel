import { Box, Typography, TextField } from "@mui/material";
import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

function Conversions() {
  const data = [
    {
      name: "S",
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: "M",
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: "T",
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: "W",
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: "T",
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: "F",
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: "S",
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];
  return (
    <Box
      sx={{
        background: "#FFF",
        padding: "24px",
        display: "flex",
        flexDirection: "column",
        rowGap: "40px",
        borderRadius: "8px",
        width: "400px",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          columnGap: "40px",
        }}
      >
        <Typography sx={{ fontWeight: "500" }}>Conversions</Typography>
        <Box sx={{ display: "flex" }}>
          <Typography sx={{ color: "#8A92A6" }}>This Week</Typography>
          <TextField select />
        </Box>
      </Box>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          width="100%"
          height="100%"
          data={data}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="pv" stackId="a" fill="#3A57E8" />
          <Bar dataKey="uv" stackId="a" fill="#85F4FA" />
        </BarChart>
      </ResponsiveContainer>
    </Box>
  );
}

export default Conversions;
