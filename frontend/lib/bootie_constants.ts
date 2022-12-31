enum listTypes {
  REGULAR,
  LONGTEXT,
  DROPDOWN,
  RADIO,
  CHECKBOX,
}

const section0: Array<any> = [
  { key: 1, id: "firstName", label: "First Name", required: true },
  { key: 2, id: "lastName", label: "Last Name", required: true },
  { key: 3, id: "preferredName", label: "Preferred Name", required: false },
  { key: 4, id: "gtEmail", label: "GT Email", required: true },
  { key: 5, id: "personalEmail", label: "Personal Email", required: false },
  {
    key: 6,
    id: "preferredPronouns",
    label: "Preferred Pronouns",
    required: true,
    type: listTypes.RADIO,
    hasOther: true,
    radioOptions: ["he/him/his", "she/her/hers", "they/them/theirs"],
  },
  {
    key: 7,
    id: "gender",
    label: "Gender",
    required: true,
    type: listTypes.RADIO,
    hasOther: true,
    radioOptions: ["Male", "Female", "Prefer not to say"],
  },
  {
    key: 8,
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
    key: 9,
    id: "degree",
    label: "What is your degree program?",
    required: true,
    type: listTypes.RADIO,
    hasOther: false,
    radioOptions: ["Undergraduate", "Masters", "PhD"],
  },
  {
    key: 10,
    id: "year",
    label: "What year are you? (Please enter a number Eg. 3)",
    required: true,
    numeric: true,
  },
  {
    key: 11,
    id: "major",
    label: "What major are you, or what is your research focus?",
    required: true,
  },
  {
    key: 12,
    id: "vip",
    label: "Are you part of the VIP for Bits of Good?",
    required: false,
  },
  {
    key: 13,
    id: "otherCommitments",
    label: "What else are you involved in on- or off-campus?",
    required: true,
  },
  {
    key: 14,
    id: "credits",
    label: "How many credit Hours are you expecting to take this Fall?",
    required: true,
  },
  {
    key: 15,
    id: "hpw",
    label: "How many hours/week can you commit to Bits of Good?",
    required: true,
    numeric: true,
  },
  {
    key: 16,
    id: "meetingAvailability",
    label:
      "Can you attend meetings on Tuesdays & Thursdays from 6:30 - 8:00 PM?",
    required: true,
    type: listTypes.RADIO,
    hasOther: false,
    radioOptions: ["Yes", "No"],
  },
  {
    key: 17,
    id: "otherAvailabilityConcerns",
    label: "Note any other availability concerns here :)",
    required: false,
  },
  {
    key: 18,
    id: "previouslyApplied",
    label:
      "Were you previously a member of Bits of Good prior to " +
      "this semester (Spring 2022 or earlier)? If so, what position " +
      "and which semester(s)?",
    required: false,
  },
  {
    key: 19,
    id: "discovery",
    label: "How did you find out about Bits of Good?",
    required: true,
    type: listTypes.RADIO,
    hasOther: false,
    radioOptions: [
      "Current BoG Member",
      "BoG website",
      "Flyers",
      "Org Fair",
      "Instagram",
      "Other",
    ],
  },
];

const section1: Array<any> = [
  {
    key: 20,
    id: "gq1",
    label:
      "Describe your experience in web development/programming?" +
      "(programming languages, CS courses, projects, etc)",
    required: true,
  },
  {
    key: 21,
    id: "gq2",
    label: "Tell us about an involvement you are passionate about.",
    required: true,
  },
  {
    key: 22,
    id: "gq3",
    label:
      "Talk about a time you had a disagreement while working on " +
      "a team. How did you come up with a resolution?",
    required: true,
  },
  {
    key: 23,
    id: "gq4",
    label:
      "What motivates you to join Bits of Good? Feel free to share " +
      "your past experiences related to social good, volunteering, or " +
      "nonprofits in either high school or college.",
    required: true,
  },
];

const section2: Array<any> = [
  {
    key: 24,
    id: "takehome",
    label:
      "We would like to see your html/css experience through " +
      " a simple take-home assessment: " +
      "https://github.com/GTBitsOfGood/spring23-dev-bootcamp-assessment. " +
      "Please include a link to your public repository after " +
      "you have completed the assessment.",
    required: true,
  },
];

const section3: Array<any> = [
  {
    key: 25,
    id: "oq1",
    label:
      "Link to your resume (we recommend uploading it to google driving and sharing)",
    required: false,
  },
  {
    key: 26,
    id: "oq2",
    label: "Link to your GitHub",
    required: false,
  },
  {
    key: 27,
    id: "oq3",
    label: "Link to your LinkedIn",
    required: false,
  },
  {
    key: 28,
    id: "oq4",
    label: "Link to your Personal site/Portfolio",
    required: false,
  },
  {
    key: 29,
    id: "oq5",
    label: "Any other links?",
    required: false,
  },
  {
    key: 30,
    id: "oq6",
    label:
      "Anything you'd like to add or note that wasn't conveyed in the application?",
    required: false,
  },
];

const sections: Array<Array<any>> = [section0, section1, section2, section3];
export { sections, listTypes };
