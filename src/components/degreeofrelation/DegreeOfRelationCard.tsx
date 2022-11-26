import { useEffect } from "react";
import { Card, CardContent, Stack, Typography, Button } from "@mui/material";
import { useState } from "react";
import Dropdown from "../dropdown/Dropdown";

//Style
import "./style.css";

const DegreeOfRelationCard = () => {
  const [personOne, setPersonOne] = useState<string>();
  const [personTwo, setPersonTwo] = useState<string>();

  const peoplesList = JSON.parse(localStorage.getItem("people_name") as any);
  const nameKey = localStorage.getItem("people_name");
  const connections = JSON.parse(localStorage.getItem("relationships") as any);

  const findAllDegree = (u: any, v: any, adj: any): any => {
    const degrees: any = [];

    function findAllPath(u: any, v: any, adj: any[][]): void {
      let visited: boolean[] = new Array(adj.length).fill(false);
      let path: any = [];
      path.push(u);
      searchDFS(u, v, adj, visited, path);
    }

    function searchDFS(
      u: any,
      v: any,
      adj: any,
      visited: boolean[],
      path: any
    ): void {
      visited[u] = true;
      if (u === v) {
        degrees.push([...path]);
      } else {
        for (let i = 0; i < adj.length - 1; i++) {
          const y = adj.filter((val: any) => val.name === u);
          if (!visited[y]) {
            visited[y] = true;
            path.push(y);
            searchDFS(y, v, adj, visited, path);
            path.pop();
          }
        }
      }
      visited[u] = false;
    }

    findAllPath(u, v, adj);

    return degrees;
  };

  const searchRelationShipHandler = () => {
    console.log(personOne, personTwo, connections);

    console.log(findAllDegree(personOne, personTwo, connections));
  };

  return (
    <Card sx={{ maxWidth: "100%" }}>
      <CardContent>
        <Stack direction="column" spacing={2}>
          <Stack direction="column" spacing={0}>
            <Typography
              variant="h4"
              component="div"
              sx={{
                fontSize: "1.2rem",
                fontWeight: 700,
                textTransform: "uppercase",
              }}
            >
              Find Degree of Separation
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{ fontSize: ".85rem", fontWeight: 500 }}
            >
              Find Peoples Connection
            </Typography>
          </Stack>
          <Stack direction="row" spacing={2}>
            <Dropdown
              data={nameKey ? peoplesList : ["No Data Found"]}
              label="Person 1"
              value={personOne}
              setValue={setPersonOne}
            />
            <Dropdown
              data={nameKey ? peoplesList : ["No Data Found"]}
              label="Person 2"
              value={personTwo}
              setValue={setPersonTwo}
            />
          </Stack>

          {personOne === personTwo && (
            <Typography
              variant="body2"
              color="red"
              sx={{ fontSize: ".85rem", fontWeight: 600 }}
            >
              Selected same person
            </Typography>
          )}

          {
            <Button
              variant="contained"
              disabled={
                personOne !== undefined &&
                personTwo !== undefined &&
                personOne !== null &&
                personTwo !== null
                  ? false
                  : true
              }
              sx={{
                borderRadius: 1,
                textTransform: "capitalize",
                fontWeight: 500,
              }}
              onClick={searchRelationShipHandler}
            >
              ADD
            </Button>
          }
        </Stack>
      </CardContent>
    </Card>
  );
};

export default DegreeOfRelationCard;
