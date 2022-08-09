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

const section1: Array<any> = [
  {
    id: "gq1",
    label:
      "What motivates you to join Bits of Good? " +
      "Feel free to share your past experiences related to social good, " +
      "volunteering,  or nonprofits in either high school or college. [150 words]",
    required: true,
  },
  {
    id: "gq2",
    label:
      "While you’re in Bits of Good you’ll be working on a team. " +
      "Talk about a time you had a disagreement while working on a team. " +
      "How did you come up with a resolution? [100 words]",
    required: true,
  },
  {
    id: "gq3",
    label:
      "If you had all the time and all the resources in the world, what would you do? [100 words]",
    required: true,
  },
];

const section2: Array<any> = [
  {
    id: "psq1",
    label: "Are you familiar with web-dev? [25 words]",
    required: true,
  },
  {
    id: "psq2",
    label:
      "Would you describe yourself as a Frontend, Backend or Fullstack engineer?",
    required: true,
    type: listTypes.RADIO,
    hasOther: false,
    radioOptions: ["Frontend", "Backend", "Fullstack"],
  },
  {
    id: "psq3",
    label:
      "What is the most technically challenging project that you have worked on? " +
      "Be sure to dive deep into the technical aspects of the project. [250 words]",
    required: true,
  },
  {
    id: "psq4",
    label:
      "If you don’t have a project to talk about, or fear that your particular project in the previous question doesn’t demonstrate your web development capabilities to the best of your ability, please take this simple take-home assessment: https://github.com/GTBitsOfGood/fall2021-dev-takehome. After you have finished, please discuss your home assessment below (max 1200 characters) and include a link to your public repository.",
    required: true,
  },
  {
    id: "psq5",
    label:
      "You’ve been assigned a ticket as a part of your first sprint at Bits of Good " +
      "and you find yourself blocked. How would you go about unblocking yourself? [75 words]",
    required: true,
  },
];

const section3: Array<any> = [
  {
    id: "oq1",
    label:
      "Link to your resume (we recommend uploading it to google driving and sharing)",
    required: true,
  },
  {
    id: "oq2",
    label: "Link to your GitHub",
    required: false,
  },
  {
    id: "oq3",
    label: "Link to your LinkedIn",
    required: false,
  },
  {
    id: "oq4",
    label: "Link to your Personal site/Portfolio",
    required: false,
  },
  {
    id: "oq5",
    label: "Any other links?",
    required: false,
  },
  {
    id: "oq6",
    label:
      "Anything you'd like to add or note that wasn't conveyed in the application?",
    required: false,
  },
];

const sections: Array<Array<any>> = [section0, section1, section2, section3];
export { sections, listTypes };
