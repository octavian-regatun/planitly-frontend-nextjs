import {
  Alert,
  AlertTitle,
  Button,
  Checkbox,
  FormControlLabel,
  FormGroup,
  Paper,
  TextField,
} from "@mui/material"
import { DateTimePicker } from "@mui/x-date-pickers"
import { useQuery, useQueryClient } from "@tanstack/react-query"
import { useFormik } from "formik"
import dynamic from "next/dynamic"
import { useSnackbar } from "notistack"
import { ChangeEvent, useState } from "react"
import { ColorResult, TwitterPicker } from "react-color"
import {
  MdColorLens,
  MdEvent,
  MdLocationOn,
  MdSubject,
  MdTitle,
  MdToday,
} from "react-icons/md"
import * as yup from "yup"
import { CreateEventDto } from "../dto/CreateEventDto"
import { LatLon } from "../store/currentLocationStore"
import { mapFormikErrorsToStringArr } from "../utilities/errorUtilities"
import { fromFileToBase64 } from "../utilities/imageUtilities"
import { postEvent } from "../utilities/requests/postEvent"
import Text from "./Text"
import { WhiteTextField } from "./WhiteTextField"

const MapNoSsr = dynamic(() => import("../components/Map"), {
  ssr: false,
})

const TextEditor = dynamic(() => import("./TextEditor/TextEditor"), {
  ssr: false,
})

export default function CreateNewEventPopover() {
  const [pickedPosition, setPickedPosition] = useState<LatLon | undefined>(
    undefined
  )

  const queryClient = useQueryClient()
  const { enqueueSnackbar } = useSnackbar()

  const { refetch } = useQuery({
    queryKey: ["postEvent"],
    queryFn: () => postEvent(formik.values),
    enabled: false,
    onSuccess: () => {
      enqueueSnackbar("Event created successfully.", { variant: "success" })
      queryClient.invalidateQueries({ queryKey: ["allEvents"] })
    },
  })

  const schema = yup.object().shape({
    title: yup
      .string()
      .min(1, "Title is too short.")
      .max(50, "Title is too long.")
      .required("Title is required."),
    description: yup.string().max(1000, "Description is too long.").nullable(),
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
  })

  const formik = useFormik<CreateEventDto>({
    initialValues: {
      title: "",
      description: null,
      color: "#FF0000",
      picture: "",
      allDay: false,
      startAt: new Date(),
      endAt: new Date(),
    },
    validationSchema: schema,
    onSubmit: handleSubmit,
  })

  const errors = mapFormikErrorsToStringArr<CreateEventDto>(formik.errors)

  function handleSubmit() {
    refetch()
  }

  async function handlePictureUpload(event: ChangeEvent<HTMLInputElement>) {
    if (!event.currentTarget.files) return

    var base64Picture = await fromFileToBase64(event.currentTarget.files[0])

    formik.setFieldValue("picture", base64Picture)
  }

  return (
    <form
      onSubmit={formik.handleSubmit}
      className="pointer-events-auto flex h-fit w-screen max-w-screen-md flex-col rounded bg-white bg-gradient-to-r from-indigo-900 to-slate-900 p-4 text-white"
    >
      <Text type="h4" className="mb-8 text-center font-medium">
        Create New Event
      </Text>
      <div className="mb-4 flex items-center justify-center">
        <Button
          variant="contained"
          component="label"
          className="rounded-full bg-gradient-to-br from-purple-900 via-purple-800 to-violet-700 px-4 py-2 text-white"
        >
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
        <WhiteTextField
          label="Title"
          name="title"
          fullWidth
          value={formik.values.title}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
      </div>
      <div className="mb-4 flex items-center">
        <MdSubject size={32} className="mr-2" />
        {/*<WhiteTextField*/}
        {/*  label="Description"*/}
        {/*  name="description"*/}
        {/*  multiline*/}
        {/*  fullWidth*/}
        {/*  value={formik.values.description}*/}
        {/*  onChange={formik.handleChange}*/}
        {/*  onBlur={formik.handleBlur}*/}
        {/*/>*/}
        <TextEditor
          value={formik.values.description}
          setValue={(value: string) =>
            formik.setFieldValue("description", value)
          }
        />
      </div>
      <div className="mb-4 ml-9 flex items-center">
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
            formik.setFieldValue("startAt", x)
          }}
          renderInput={(params) => (
            <WhiteTextField {...params} name="startAt" />
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
            formik.setFieldValue("endAt", x)
          }}
          renderInput={(params) => <WhiteTextField {...params} name="endAt" />}
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
              formik.setFieldValue("color", value.hex)
            }}
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
        <button
          type="submit"
          className="rounded-full bg-gradient-to-br from-purple-900 via-purple-800 to-violet-700 px-4 py-2 text-white"
        >
          SUBMIT
        </button>
      </div>
    </form>
  )
}
