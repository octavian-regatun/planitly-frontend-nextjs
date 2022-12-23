import {
  Alert,
  AlertTitle,
  Button,
  Checkbox,
  FormControlLabel,
  FormGroup,
  Paper,
  TextField,
} from "@mui/material";
import { DateTimePicker } from "@mui/x-date-pickers";
import { useQuery } from "@tanstack/react-query";
import { useFormik } from "formik";
import dynamic from "next/dynamic";
import { useSnackbar } from "notistack";
import { ChangeEvent, useEffect, useState } from "react";
import { ColorResult, GithubPicker, TwitterPicker } from "react-color";
import {
  MdColorLens,
  MdEvent,
  MdLocationOn,
  MdSubject,
  MdTitle,
  MdToday,
} from "react-icons/md";
import * as yup from "yup";
import { CreateEventDto } from "../dto/CreateEventDto";
import { LatLon } from "../store/currentLocationStore";
import { mapFormikErrorsToStringArr } from "../utilities/errorUtilities";
import { fromFileToBase64 } from "../utilities/imageUtilities";
import { postEvent } from "../utilities/requests/postEvent";
import Map from "./Map";
import Text from "./Text";

const MapNoSsr = dynamic(() => import("../components/Map"), {
  ssr: false,
});

export default function CreateNewEventPopover() {
  const Event = yup.object().shape({
    title: yup
      .string()
      .min(1, "Title is too short.")
      .max(50, "Title is too long.")
      .required("Title is required."),
    description: yup.string().max(1000, "Description is too long."),
    picture: yup.string(),
    color: yup.string().required("Color is required."),
    allDay: yup.boolean().required("All day is required."),
    startAt: yup
      .date()
      .typeError("Start At is required.")
      .required("Start At is required."),
    endAt: yup
      .date()
      .typeError("End At is required.")
      .required("End At is required."),
  });

  function handleSubmit(values: CreateEventDto) {
    alert(JSON.stringify(values, null, 2));
  }

  const formik = useFormik<CreateEventDto>({
    initialValues: {
      title: "",
      description: undefined,
      color: "#FF0000",
      picture: undefined,
      allDay: false,
      startAt: new Date(),
      endAt: new Date(),
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    validationSchema: Event,
    onSubmit: handleSubmit,
  });

  const errors = mapFormikErrorsToStringArr<CreateEventDto>(formik.errors);

  const whiteTextFieldStyles = {
    "& .MuiInputBase-input": {
      color: "white",
    },
    "& label.Mui-focused": {
      color: "white",
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "white",
    },
    "& .MuiInputLabel-root": {
      color: "white",
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "white",
      },
      "&:hover fieldset": {
        borderColor: "white",
      },
      "&.Mui-focused fieldset": {
        borderColor: "white",
      },
    },
    "& .MuiSvgIcon-root": {
      color: "white",
    },
  };

  function handleSubmit(values: Event) {
    refetch();
  }

  async function handlePictureUpload(event: ChangeEvent<HTMLInputElement>) {
    if (!event.currentTarget.files) return;

    var base64Picture = await fromFileToBase64(event.currentTarget.files[0]);

    formik.setFieldValue("picture", base64Picture);
  }

  const errors = mapFormikErrorsToStringArr<Event>(formik.errors);

  return (
    <form
      onSubmit={formik.handleSubmit}
      className="bg-white flex flex-col w-screen max-w-screen-md p-4 h-fit rounded bg-gradient-to-r from-indigo-900 to-slate-900 text-white pointer-events-auto"
    >
      <Text type="h4" className="mb-8 font-medium text-center">
        Create New Event
      </Text>
      <div className="mb-4 flex items-center justify-center">
        <Button variant="contained" component="label">
          Upload Picture
          <input
            type="file"
            accept="image/*"
            name="picture"
            hidden
            onChange={handlePictureUpload}
          />
        </Button>
      </div>
      <div className="mb-4 flex items-center">
        <MdTitle size={32} className="mr-2" />
        <TextField
          label="Title"
          name="title"
          fullWidth
          value={formik.values.title}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          sx={whiteTextFieldStyles}
        />
      </div>
      <div className="mb-4 flex items-center">
        <MdSubject size={32} className="mr-2" />
        <TextField
          label="Description"
          name="description"
          multiline
          fullWidth
          value={formik.values.description}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          sx={whiteTextFieldStyles}
        />
      </div>
      <div className="mb-4 flex items-center ml-9">
        <FormGroup>
          <FormControlLabel
            control={
              <Checkbox
                name="allDay"
                onChange={formik.handleChange}
                value={formik.values.allDay}
                sx={{
                  color: "white",
                }}
              />
            }
            label="All Day"
          />
        </FormGroup>
      </div>
      <div className="mb-4 flex items-center">
        <MdToday size={32} className="mr-2" />
        <DateTimePicker
          label="Start At"
          value={formik.values.startAt}
          onChange={(x) => {
            formik.setFieldValue("startAt", x);
          }}
          renderInput={(params) => (
            <TextField {...params} name="startAt" sx={whiteTextFieldStyles} />
          )}
          className="w-full"
          ampm={false}
        />
      </div>
      <div className="mb-4 flex items-center">
        <MdEvent size={32} className="mr-2" />
        <DateTimePicker
          label="End At"
          value={formik.values.endAt}
          onChange={(x) => {
            formik.setFieldValue("endAt", x);
          }}
          renderInput={(params) => (
            <TextField {...params} name="endAt" sx={whiteTextFieldStyles} />
          )}
          className="w-full"
          ampm={false}
        />
      </div>
      <div className="mb-4 flex items-center">
        <MdColorLens size={32} className="mr-2" />
        <Paper className="flex-1 bg-transparent">
          <Text type="h6" className="py-2 text-center text-white">
            Event Color
          </Text>
          <TwitterPicker
            color={formik.values.color}
            onChange={(value: ColorResult) => {
              formik.setFieldValue("color", value.hex);
            }}
            color={formik.values.color}
            className="w-full"
          />
        </Paper>
      </div>
      <div className="mb-4 flex items-center">
        <MdLocationOn size={32} className="mr-2" />
        <Paper className="flex-1 bg-transparent">
          <Text type="h6" className="py-2 text-center text-white">
            Location
          </Text>
          <MapNoSsr
            pickedPosition={pickedPosition}
            setPickedLocation={setPickedPosition}
          />
        </Paper>
      </div>
      {errors.length > 0 && (
        <Alert severity="error" className="mb-4">
          <AlertTitle>Error</AlertTitle>
          {errors.map((error) => (
            <p key={error}>{error}</p>
          ))}
        </Alert>
      )}
      <div className="flex justify-center">
        <Button variant="contained" type="submit">
          Submit
        </Button>
      </div>
    </form>
  );
}
