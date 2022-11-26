import { Card, CardContent, Stack, Typography, Button } from "@mui/material";
import { useState } from "react";
import InputTextStyled from "../Input/InputTextStyled";

//Style
import "./style.css";

const AddPeopleCard = () => {
  const [name, setName] = useState<any>();
  const [valueExist, setValueExist] = useState<any>();

  const nameHandler = (e: any) => {
    setName(e.target.value);
  };

  const submitHandler = () => {
    const peoplesList = JSON.parse(localStorage.getItem("people_name") as any);

    if (peoplesList === null) {
      localStorage.setItem(
        "people_name",
        JSON.stringify(
          [name].filter(function (val: any) {
            return val !== null && val !== "";
          })
        )
      );
    } else {
      if (peoplesList.indexOf(name) !== -1) {
        setValueExist(true);
      } else {
        peoplesList.push(name);
        localStorage.setItem(
          "people_name",
          JSON.stringify(
            peoplesList.filter(function (val: any) {
              return val !== null && val !== "";
            })
          )
        );
        setValueExist(false);
      }
    }
  };
  return (
    <Card sx={{ maxWidth: "100%" }}>
      <CardContent>
        <Stack direction="column" spacing={2}>
          <Stack direction="column" spacing={0}>
            <Typography
              variant="h4"
              component="div"
              sx={{ fontSize: "1.2rem", fontWeight: 700 }}
            >
              ADD PEOPLE
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{ fontSize: ".85rem", fontWeight: 500 }}
            >
              Expand your community
            </Typography>
          </Stack>

          <InputTextStyled value={name} handler={nameHandler} label="Name" />
          {valueExist === true ? (
            <Typography
              variant="body2"
              color="red"
              sx={{ fontSize: ".85rem", fontWeight: 600 }}
            >
              Person already exist
            </Typography>
          ) : (
            valueExist === false && (
              <Typography
                variant="body2"
                color="green"
                sx={{ fontSize: ".85rem", fontWeight: 600 }}
              >
                Person Added Successfully
              </Typography>
            )
          )}
          <Button
            variant="contained"
            sx={{
              borderRadius: 1,
              textTransform: "capitalize",
              fontWeight: 500,
            }}
            onClick={submitHandler}
          >
            ADD
          </Button>
        </Stack>
      </CardContent>
    </Card>
  );
};

export default AddPeopleCard;
