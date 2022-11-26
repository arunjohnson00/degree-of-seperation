import { Card, CardContent, Stack, Typography, Button } from "@mui/material";
import { useState } from "react";
import Dropdown from "../dropdown/Dropdown";
import InputTextStyled from "../Input/InputTextStyled";

//Style
import "./style.css";

const AddRelationShipCard = () => {
  const [relationShip, setRelationShip] = useState<string>("Friends");
  const [personOne, setPersonOne] = useState<string>();
  const [personTwo, setPersonTwo] = useState<string>();
  const [valueExist, setValueExist] = useState<any>();

  const peoplesList = JSON.parse(localStorage.getItem("people_name") as any);
  const nameKey = localStorage.getItem("people_name");

  const relationShipHandler = () => {
    const relationShipsList = JSON.parse(
      localStorage.getItem("relationships") as any
    );
    if (relationShipsList === null) {
      localStorage.setItem(
        "relationships",
        JSON.stringify([
          {
            name: personOne,
            friends: [personTwo],
            // relation: relationShip
          },
        ])
      );
    } else {
      if (
        relationShipsList.hasOwnProperty(personOne) &&
        relationShipsList.hasOwnProperty(personTwo)
      ) {
        setValueExist(true);
      } else {
        const existingItem = relationShipsList.find(
          ({ name }: any) => name === personOne
        );
        if (existingItem) {
          Object.assign(existingItem, {
            name: personOne,
            friends: [...existingItem?.friends, personTwo],
            // relation: relationShip,
          });
        } else {
          relationShipsList.push({
            name: personOne,
            friends: [personTwo],
            //  relation: relationShip,
          });
        }

        const removeDuplicateObjects = (relationShipsList: any) => {
          var uniqueArr: any = [];
          var objStrings: any = [];
          relationShipsList.forEach((element: any) => {
            if (typeof element === "object" && element !== null) {
              var eleString: any = JSON.stringify(element);
              if (!objStrings.includes(eleString)) {
                uniqueArr.push(element);
                objStrings.push(eleString);
              }
            }
          });
          return uniqueArr;
        };

        console.log(relationShipsList);
        localStorage.setItem(
          "relationships",
          JSON.stringify(removeDuplicateObjects(relationShipsList))
        );
        setValueExist(false);
      }
    }
  };

  console.log(personOne);
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
              ADD RELATIONSHIPS
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{ fontSize: ".85rem", fontWeight: 500 }}
            >
              Connect people together
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
          <InputTextStyled
            value={relationShip}
            label="Relationship"
            readOnly={true}
          />

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
              onClick={relationShipHandler}
            >
              ADD
            </Button>
          }
        </Stack>
      </CardContent>
    </Card>
  );
};

export default AddRelationShipCard;
