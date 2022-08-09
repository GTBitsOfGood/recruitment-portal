enum listTypes {
  REGULAR,
  LONGTEXT,
  DROPDOWN,
  RADIO,
  CHECKBOX,
}

const section0: Array<any> = [
  { id: "firstName", label: "First Name", required: true },
  { id: "lastName", label: "Last Name", required: true },
  { id: "preferredName", label: "Preferred Name", required: false },
  { id: "gtEmail", label: "GT Email", required: true },
  { id: "personalEmail", label: "Personal Email", required: false },
  {
    id: "preferredPronouns",
    label: "Preferred Pronouns",
    required: true,
    type: listTypes.RADIO,
    hasOther: true,
    radioOptions: ["he/him/his", "she/her/hers", "they/them/theirs"],
  },
  {
    id: "gender",
    label: "Gender",
    required: true,
    type: listTypes.RADIO,
    hasOther: true,
    radioOptions: ["Male", "Female", "Prefer not to say"],
  },
  {
    id: "ethnicity",
    label: "Please indicate the race/ethnicity you identify yourself with",
    required: true,
    type: listTypes.RADIO,
    hasOther: true,
    radioOptions: [
      "American Indian or Alaskan Native",
      "Asian",
      "Black or African American",
      "Hispanic or Latino",
      "Native American or other Pacific Islander",
      "White",
      "Prefer not to say",
    ],
  },
  {
    id: "degree",
    label: "What is your degree program?",
    required: true,
    type: listTypes.RADIO,
    hasOther: false,
    radioOptions: ["Undergraduate", "Masters", "PhD"],
  },
  { id: "year", label: "What year are you?", required: true, numeric: true },
  {
    id: "major",
    label: "What major are you, or what is your research focus?",
    required: true,
  },
  {
    id: "vip",
    label: "Are you part of the VIP for Bits of Good?",
    required: false,
  },
  {
    id: "otherCommitments",
    label: "What else are you involved in on- or off-campus?",
    required: true,
  },
  {
    id: "hpw",
    label: "How many hours/week can you commit to Bits of Good?",
    required: true,
    numeric: true,
  },
  {
    id: "meetingAvailability",
    label: "Can you attend meetings on Tuesdays from 6:30 - 8:00 PM?",
    required: true,
    type: listTypes.RADIO,
    hasOther: false,
    radioOptions: ["Yes", "No"],
  },
  {
    id: "otherAvailabilityConcerns",
    label: "Note any other availability concerns here :)",
    required: false,
  },
  {
    id: "previouslyApplied",
    label:
      "Were you previously a member of Bits of Good prior to " +
      "this semester (Fall 2021 or earlier)? If so, what position " +
      "and which semester(s)?",
    required: false,
  },
];

const sections: Array<Array<any>> = [section0];
export { sections, listTypes };
