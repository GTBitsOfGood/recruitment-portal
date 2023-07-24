enum listTypes {
  REGULAR,
  LONGTEXT,
  DROPDOWN,
  RADIO,
  CHECKBOX,
}

const section0: Array<any> = [
  {
    key: 0,
    id: "firstName",
    label: "First Name",
    required: true,
  },
  {
    key: 1,
    id: "lastName",
    label: "Last Name",
    required: true,
  },
  {
    key: 2,
    id: "preferredName",
    label: "Preferred Name",
    required: false,
  },
  {
    key: 3,
    id: "gtEmail",
    label: "GT Email",
    required: true,
  },
  {
    key: 4,
    id: "personalEmail",
    label: "Personal Email",
    required: false,
  },
  {
    key: 5,
    id: "preferredPronouns",
    label: "Preferred Pronouns",
    required: true,
    type: listTypes.RADIO,
    hasOther: true,
    radioOptions: ["he/him/his", "she/her/hers", "they/them/theirs"],
  },
  {
    key: 6,
    id: "gender",
    label: "Gender",
    required: true,
    type: listTypes.RADIO,
    hasOther: true,
    radioOptions: ["Male", "Female", "Prefer not to say"],
  },
  {
    key: 7,
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
    key: 8,
    id: "degree",
    label: "What is your degree program?",
    required: true,
    type: listTypes.RADIO,
    hasOther: false,
    radioOptions: ["Undergraduate", "Masters", "PhD"],
  },
  {
    key: 9,
    id: "year",
    label: "What year are you? (Please enter a number Eg. 3)",
    required: true,
    numeric: true,
  },
  {
    key: 10,
    id: "major",
    label: "What major are you, or what is your research focus?",
    required: true,
  },
  {
    key: 11,
    id: "vip",
    label: "Are you part of the VIP for Bits of Good?",
    required: false,
  },
  {
    key: 12,
    id: "otherCommitments",
    label: "What else are you involved in on- or off-campus?",
    required: true,
  },
  {
    key: 13,
    id: "hpw",
    label: "How many hours/week can you commit to Bits of Good?",
    required: true,
    numeric: true,
  },
  {
    key: 14,
    id: "meetingAvailability",
    label: "Can you attend meetings on Tuesdays from 6:30 - 8:00 PM?",
    required: true,
    type: listTypes.RADIO,
    hasOther: false,
    radioOptions: ["Yes", "No"],
  },
  {
    key: 15,
    id: "otherAvailabilityConcerns",
    label: "Note any other availability concerns here :)",
    required: false,
  },
  {
    key: 16,
    id: "previouslyApplied",
    label:
      "Were you previously a member of Bits of Good prior to " +
      "this semester (Spring 2023 or earlier)? If so, what position " +
      "and which semester(s)?",
    required: false,
  },
];

const section1: Array<any> = [
  {
    key: 17,
    id: "gq1",
    label:
      "What motivates you to join Bits of Good? " +
      "Feel free to share your past experiences related to social good, " +
      "volunteering,  or nonprofits in either high school or college. [150 words]",
    required: true,
    wordLimit: 150,
  },
  {
    key: 18,
    id: "gq2",
    label:
      "While you’re in Bits of Good you’ll be working on a team. " +
      "Talk about a time you had a disagreement while working on a team. " +
      "How did you come up with a resolution? [100 words]",
    required: true,
    wordLimit: 100,
  },
  {
    key: 19,
    id: "gq3",
    label:
      "If you had all the time and all the resources in the world, what would you do? [100 words]",
    required: true,
    wordLimit: 100,
  },
];

const section2: Array<any> = [
  {
    key: 20,
    id: "psq1",
    label: "Are you familiar with web-dev? [25 words]",
    required: true,
    wordLimit: 25
  },
  {
    key: 21,
    id: "psq2",
    label:
      "Would you describe yourself as a Frontend, Backend or Fullstack engineer?",
    required: true,
    type: listTypes.RADIO,
    hasOther: false,
    radioOptions: ["Frontend", "Backend", "Fullstack"],
  },
  {
    key: 21,
    id: "psq3",
    label: "What is your favorite pokemon?",
    required: false,
  },
  {
    key: 23,
    id: "psq4",
    label:
      "We would like to see your practical ability through a simple take-home " +
      "assessment: https://github.com/GTBitsOfGood/fall23-dev-assessment. Please " +
      "include a link to your public repository after you have completed the assessment.",
    required: true,
  },
  {
    key: 24,
    id: "psq5",
    label:
      "You’ve been assigned a ticket as a part of your first sprint at Bits of Good " +
      "and you find yourself blocked. How would you go about unblocking yourself? [75 words]",
    required: true,
    wordLimit: 75,
  },
];

const section3: Array<any> = [
  {
    key: 25,
    id: "oq1",
    label:
      "Link to your resume (we recommend uploading it to google driving and sharing)",
    required: true,
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
